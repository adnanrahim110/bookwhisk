"use client";

import { ChevronRight } from "lucide-react";

import { LoaderLink } from "@/components/ui/NavigationLoader";

const baseClasses =
  "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-base xl:text-xl transition-all whitespace-nowrap group/btn";

const variantClasses = {
  primary:
    "bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/40",
  secondary:
    "bg-white text-slate-800 border-2 border-slate-200 hover:border-orange-500 hover:text-orange-600",
  tertiary: "bg-white text-orange-600 shadow-lg hover:bg-orange-50",
};

const disabledClasses = "opacity-60 cursor-not-allowed pointer-events-none";

const Button = ({
  href,
  target,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  icon = ChevronRight,
  iconPosition = "right",
  className = "",
  children,
  ...rest
}) => {
  const isLink = typeof href === "string" && href.length > 0;
  const variantClass = variantClasses[variant] ?? variantClasses.primary;

  const Icon = icon;

  const classes = [
    baseClasses,
    variantClass,
    disabled ? disabledClasses : "cursor-pointer",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconMarkup = (position) =>
    Icon && iconPosition === position ? (
      <span className="inline-flex items-center justify-center text-current">
        <Icon className="group-hover/btn:translate-x-1 transition-all duration-300 ease-linear" />
      </span>
    ) : null;

  const content = (
    <>
      {iconMarkup("left")}
      <span>{children}</span>
      {iconMarkup("right")}
    </>
  );

  if (isLink) {
    const linkProps = disabled
      ? { "aria-disabled": true, tabIndex: -1, role: "link" }
      : undefined;

    return (
      <LoaderLink
        href={href}
        target={target}
        className={classes}
        {...linkProps}
        {...rest}
      >
        {content}
      </LoaderLink>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
