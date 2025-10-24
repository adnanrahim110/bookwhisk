import { forwardRef } from "react";

const baseClasses =
  "w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm resize-none";

const disabledClasses =
  "bg-slate-100 border-slate-200 text-slate-400 placeholder:text-slate-400 cursor-not-allowed";

const Textarea = forwardRef(function Textarea(
  {
    label,
    id,
    name,
    helperText,
    className = "",
    required = false,
    disabled = false,
    rows = 4,
    ...rest
  },
  ref
) {
  const fieldId = id || name;
  const classes = [baseClasses, disabled ? disabledClasses : "", className]
    .filter(Boolean)
    .join(" ");

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
      <textarea
        id={fieldId}
        name={name}
        rows={rows}
        required={required}
        disabled={disabled}
        ref={ref}
        className={classes}
        {...rest}
      />
      {helperText ? (
        <p className="text-xs text-slate-500 mt-1">{helperText}</p>
      ) : null}
    </div>
  );
});

export default Textarea;

