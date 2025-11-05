"use client";

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

const MIN_VISIBLE_MS = 250;
const TRANSITION_MS = 400;

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
    "transition-transform duration-400 ease-in-out",
    phase === "visible" ? "translate-y-0" : "translate-y-full",
    phase === "visible" || phase === "preparing"
      ? "pointer-events-auto"
      : "pointer-events-none"
  );

  return (
    <NavigationLoaderContext.Provider value={contextValue}>
      {overlayVisible && (
        <div className={overlayClasses} aria-hidden={!contextValue.isActive}>
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center gap-4"
          >
            <div className="h-14 w-14 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
          </div>
        </div>
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

  const handleClick = useCallback(
    (event) => {
      if (onClick) {
        onClick(event);
      }

      if (shouldTriggerLoader(event, href, target)) {
        showLoader();
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
