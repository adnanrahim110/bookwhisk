"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { cn } from "@/utils/cn";

const NavigationLoaderContext = createContext(null);

const MIN_VISIBLE_MS = 500;
const TRANSITION_MS = 500;

const overlayVariants = {
  preparing: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: "0%" },
  leaving: { opacity: 0, y: "-100%" },
};

const overlayTransition = {
  duration: TRANSITION_MS / 1000,
  ease: [0.24, 0.84, 0.25, 1],
};

const FALLBACK_DELAY = MIN_VISIBLE_MS + TRANSITION_MS + 150;

const toHrefString = (href) => {
  if (typeof href === "string") return href;
  if (!href || typeof href !== "object") return null;

  const { pathname = "/", query, hash } = href;
  let search = "";

  if (query && typeof query === "object") {
    const params = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, String(item)));
      } else {
        params.append(key, String(value));
      }
    });

    const serialized = params.toString();
    if (serialized) search = `?${serialized}`;
  }

  const hashFragment =
    typeof hash === "string" && hash.length ? `#${hash.replace(/^#/, "")}` : "";

  return `${pathname}${search}${hashFragment}`;
};

const shouldTriggerLoader = (event, href, target) => {
  if (event.defaultPrevented) return false;
  if (event.button !== 0) return false;
  if (target && target !== "_self") return false;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
    return false;
  if (typeof href !== "string") return false;
  return href.startsWith("/");
};

export const NavigationLoaderProvider = ({ children }) => {
  const [phase, setPhase] = useState("hidden");
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const startTimeRef = useRef(0);
  const hideTimerRef = useRef(null);
  const cleanupTimerRef = useRef(null);
  const previousPathRef = useRef(pathname);

  const clearTimers = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    if (cleanupTimerRef.current) {
      clearTimeout(cleanupTimerRef.current);
      cleanupTimerRef.current = null;
    }
  }, []);

  const showLoader = useCallback(() => {
    if (phase === "preparing" || phase === "visible") return;

    clearTimers();
    startTimeRef.current = Date.now();
    setIsMounted(true);
    setPhase("preparing");

    requestAnimationFrame(() => {
      setPhase("visible");
    });
  }, [clearTimers, phase]);

  const hideLoader = useCallback(() => {
    if (phase === "hidden") return;

    const elapsed = Date.now() - startTimeRef.current;
    const delay = elapsed >= MIN_VISIBLE_MS ? 0 : MIN_VISIBLE_MS - elapsed;

    clearTimers();
    hideTimerRef.current = setTimeout(() => {
      setPhase("leaving");
      cleanupTimerRef.current = setTimeout(() => {
        setPhase("hidden");
        setIsMounted(false);
      }, TRANSITION_MS);
    }, delay);
  }, [clearTimers, phase]);

  useEffect(() => {
    if (previousPathRef.current === pathname) return;
    previousPathRef.current = pathname;
    hideLoader();
  }, [hideLoader, pathname]);

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  const contextValue = useMemo(
    () => ({
      showLoader,
      hideLoader,
      isActive: phase === "visible" || phase === "preparing",
    }),
    [hideLoader, phase, showLoader]
  );

  const overlayVisible = isMounted && phase !== "hidden";
  const overlayClasses = cn(
    "fixed inset-0 z-[9999] flex items-center justify-center bg-white",
    "pointer-events-auto"
  );
  const motionState =
    phase === "visible"
      ? "visible"
      : phase === "preparing"
      ? "preparing"
      : "leaving";

  return (
    <NavigationLoaderContext.Provider value={contextValue}>
      {overlayVisible && (
        <motion.div
          className={overlayClasses}
          aria-hidden={!contextValue.isActive}
          initial="preparing"
          animate={motionState}
          variants={overlayVariants}
          transition={overlayTransition}
        >
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center gap-4"
          >
            <div className="h-14 w-14 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
          </div>
        </motion.div>
      )}
      {children}
    </NavigationLoaderContext.Provider>
  );
};

export const useNavigationLoader = () => {
  const context = useContext(NavigationLoaderContext);
  if (!context) {
    throw new Error(
      "useNavigationLoader must be used within a NavigationLoaderProvider"
    );
  }
  return context;
};

export const LoaderLink = forwardRef(function LoaderLink(
  { href, onClick, target, prefetch, replace, scroll, ...rest },
  ref
) {
  const { showLoader } = useNavigationLoader();
  const fallbackNavRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    return () => {
      if (fallbackNavRef.current) {
        clearTimeout(fallbackNavRef.current);
        fallbackNavRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (fallbackNavRef.current) {
      clearTimeout(fallbackNavRef.current);
      fallbackNavRef.current = null;
    }
  }, [pathname]);

  const handleClick = useCallback(
    (event) => {
      if (onClick) {
        onClick(event);
      }

      if (shouldTriggerLoader(event, href, target)) {
        showLoader();

        if (typeof window !== "undefined") {
          const hrefString = toHrefString(href);
          if (!hrefString) return;

          const targetUrl = new URL(hrefString, window.location.href);
          const sameOrigin = targetUrl.origin === window.location.origin;

          if (fallbackNavRef.current) {
            clearTimeout(fallbackNavRef.current);
          }

          if (sameOrigin) {
            const startHref = `${window.location.pathname}${window.location.search}${window.location.hash}`;

            fallbackNavRef.current = window.setTimeout(() => {
              const currentHref = `${window.location.pathname}${window.location.search}${window.location.hash}`;

              if (currentHref === startHref) {
                window.location.href =
                  targetUrl.pathname + targetUrl.search + targetUrl.hash;
              }
            }, FALLBACK_DELAY);
          }
        }
      }
    },
    [href, onClick, showLoader, target]
  );

  return (
    <Link
      ref={ref}
      href={href}
      target={target}
      onClick={handleClick}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      {...rest}
    />
  );
});

LoaderLink.displayName = "LoaderLink";

export default NavigationLoaderProvider;
