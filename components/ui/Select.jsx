"use client";

import { forwardRef, useEffect, useId, useRef, useState } from "react";
import { RiArrowDownSLine, RiCheckLine } from "react-icons/ri";

const buttonBaseClasses =
  "w-full px-4 py-3 rounded-xl border border-slate-300 bg-transparent text-left text-sm font-medium transition-all outline-none flex items-center justify-between gap-3";

const disabledClasses =
  "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed pointer-events-none";

const listBoxClasses =
  "absolute left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg shadow-orange-500/10 max-h-56 overflow-auto z-20 scroll_bar";

const optionClasses =
  "flex items-center justify-between px-4 py-3 text-sm text-slate-700 hover:bg-orange-50 cursor-pointer transition-colors";

const Select = forwardRef(function Select(
  {
    label,
    name,
    id,
    options = [],
    placeholder = "Select an option",
    helperText,
    className = "",
    required = false,
    disabled = false,
    defaultValue = "",
    value,
    onChange,
    ...rest
  },
  ref
) {
  const generatedId = useId();
  const fieldId = id || name || generatedId;
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const isControlled = value !== undefined;
  const initialValue = isControlled ? value : defaultValue;
  const [internalValue, setInternalValue] = useState(initialValue);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value);
    }
  }, [value, isControlled]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    function handleScroll(event) {
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
        return;
      }
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", handleScroll, true);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll, true);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, [open]);

  const selectedOption = options.find(
    (option) => option.value === internalValue
  );

  const handleSelect = (option) => {
    if (disabled) return;
    if (!isControlled) {
      setInternalValue(option.value);
    }
    onChange?.(option.value, option);
    setOpen(false);
  };

  const toggleOpen = () => {
    if (disabled) return;
    setOpen((prev) => !prev);
  };

  const displayLabel = selectedOption?.label ?? placeholder;

  return (
    <div className="space-y-2">
      {label ? (
        <label
          htmlFor={fieldId}
          className="block text-sm font-semibold text-slate-700"
        >
          {label}
        </label>
      ) : null}
      <div
        ref={containerRef}
        className={`relative ${disabled ? "pointer-events-none" : ""}`}
      >
        <input
          type="hidden"
          name={name}
          id={fieldId}
          value={internalValue ?? ""}
          required={required}
          disabled={disabled}
          ref={ref}
        />
        <button
          type="button"
          className={[
            buttonBaseClasses,
            disabled ? disabledClasses : "hover:border-orange-400",
            !selectedOption ? "text-neutral-400" : "text-neutral-800",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={toggleOpen}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-disabled={disabled}
          ref={buttonRef}
          {...rest}
        >
          <span className="flex-1 truncate">{displayLabel}</span>
          <RiArrowDownSLine
            className={`text-lg transition-transform ${
              open ? "rotate-180 text-orange-500" : "text-slate-400"
            }`}
          />
        </button>
        {open ? (
          <div
            ref={dropdownRef}
            className={listBoxClasses}
            role="listbox"
            tabIndex={-1}
            aria-activedescendant={
              selectedOption ? `${fieldId}-${selectedOption.value}` : undefined
            }
          >
            {options.map((option) => {
              const isSelected = option.value === internalValue;
              return (
                <div
                  key={option.value}
                  id={`${fieldId}-${option.value}`}
                  role="option"
                  aria-selected={isSelected}
                  className={`${optionClasses} ${
                    isSelected ? "bg-orange-50 text-orange-600" : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected ? (
                    <RiCheckLine className="text-orange-500 text-lg" />
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      {helperText ? (
        <p className="text-xs text-slate-500 mt-1">{helperText}</p>
      ) : null}
    </div>
  );
});

export default Select;
