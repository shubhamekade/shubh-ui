var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/Button/Button.tsx
import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button/component.variants.ts
import { cva } from "class-variance-authority";
var buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40",
    "ring-offset-background select-none"
  ],
  {
    variants: {
      variant: {
        primary: [
          "border border-primary bg-primary text-primary-foreground shadow-sm",
          "hover:bg-primary/90 hover:border-primary/90 hover:-translate-y-px hover:shadow-md",
          "active:scale-[0.97] active:translate-y-0"
        ],
        secondary: [
          "border border-border bg-background text-foreground shadow-sm",
          "hover:bg-muted hover:border-border/80 hover:-translate-y-px hover:shadow-sm",
          "active:scale-[0.97] active:translate-y-0"
        ],
        outline: [
          "border border-primary bg-transparent text-primary",
          "hover:bg-primary hover:border-primary hover:-translate-y-px hover:text-primary-foreground",
          "active:scale-[0.97] active:translate-y-0"
        ],
        ghost: [
          "border border-transparent bg-transparent text-foreground",
          "hover:bg-accent hover:text-accent-foreground",
          "active:scale-[0.97]"
        ],
        danger: [
          "border border-destructive bg-destructive text-destructive-foreground shadow-sm",
          "hover:bg-destructive/90 hover:-translate-y-px hover:shadow-md",
          "active:scale-[0.97] active:translate-y-0"
        ],
        destructive: [
          "border border-destructive bg-destructive text-destructive-foreground shadow-sm",
          "hover:bg-destructive/90 hover:-translate-y-px hover:shadow-md",
          "active:scale-[0.97] active:translate-y-0"
        ],
        navy: "border border-sidebar-border bg-sidebar text-sidebar-foreground hover:bg-sidebar-accent active:scale-[0.97]",
        success: [
          "border border-success bg-success text-success-foreground shadow-sm",
          "hover:bg-success/90 hover:-translate-y-px hover:shadow-md",
          "active:scale-[0.97] active:translate-y-0"
        ],
        warning: [
          "border border-warning bg-warning text-warning-foreground shadow-sm",
          "hover:bg-warning/90 hover:-translate-y-px hover:shadow-md",
          "active:scale-[0.97] active:translate-y-0"
        ],
        link: "bg-transparent border-transparent p-0 text-primary underline-offset-4 hover:underline h-auto"
      },
      size: {
        xs: "h-7 rounded-lg px-3 text-xs",
        sm: "h-8 rounded-lg px-3.5 text-sm",
        md: "h-9 rounded-xl px-4 text-sm",
        lg: "h-10 rounded-xl px-5 text-base",
        xl: "h-12 rounded-xl px-6 text-base",
        icon: "h-9 w-9 rounded-xl p-0",
        "icon-sm": "h-7 w-7 rounded-lg p-0",
        "icon-lg": "h-11 w-11 rounded-xl p-0"
      },
      fullWidth: {
        true: "w-full"
      },
      loading: {
        true: "cursor-wait"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

// src/components/Button/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "fullWidth",
      "loading",
      "disabled",
      "leftIcon",
      "rightIcon",
      "children"
    ]);
    const isDisabled = disabled || loading;
    return /* @__PURE__ */ jsxs(
      "button",
      __spreadProps(__spreadValues({
        ref,
        className: cn(buttonVariants({ variant, size, fullWidth, loading }), className),
        disabled: isDisabled,
        "aria-busy": loading,
        "aria-disabled": isDisabled
      }, props), {
        children: [
          loading ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 shrink-0 animate-spin", "aria-hidden": "true" }) : leftIcon && /* @__PURE__ */ jsx("span", { className: "shrink-0", "aria-hidden": "true", children: leftIcon }),
          children ? /* @__PURE__ */ jsx("span", { children }) : null,
          !loading && rightIcon ? /* @__PURE__ */ jsx("span", { className: "shrink-0", "aria-hidden": "true", children: rightIcon }) : null
        ]
      })
    );
  }
);
Button.displayName = "Button";
var Button_default = Button;

// src/components/Input/Input.tsx
import { forwardRef as forwardRef2, useId, useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

// src/components/Input/component.variants.ts
import { cva as cva2 } from "class-variance-authority";
var inputVariants = cva2(
  [
    "flex w-full rounded-xl border bg-surface text-foreground transition-all duration-150 ease-out",
    "placeholder:text-muted-foreground/60",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50",
    "read-only:cursor-default read-only:bg-muted/40"
  ],
  {
    variants: {
      variant: {
        default: "border-input hover:border-muted-foreground/30",
        error: "border-destructive/40 bg-destructive-soft focus-visible:ring-destructive/20 focus-visible:border-destructive/60",
        success: "border-success/40 bg-success-soft focus-visible:ring-success/20 focus-visible:border-success/60"
      },
      size: {
        sm: "h-8 rounded-lg px-3 text-sm",
        md: "h-9 px-3.5 text-sm",
        lg: "h-10 px-4 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

// src/components/Input/Input.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Input = forwardRef2(
  (_a, ref) => {
    var _b = _a, {
      className,
      variant,
      size,
      type = "text",
      leftElement,
      rightElement,
      clearable,
      onClear,
      error,
      success,
      hint,
      label,
      required,
      id,
      value
    } = _b, props = __objRest(_b, [
      "className",
      "variant",
      "size",
      "type",
      "leftElement",
      "rightElement",
      "clearable",
      "onClear",
      "error",
      "success",
      "hint",
      "label",
      "required",
      "id",
      "value"
    ]);
    const [showPassword, setShowPassword] = useState(false);
    const generatedId = useId();
    const inputId = id || `input-${generatedId}`;
    const effectiveVariant = error ? "error" : success ? "success" : variant;
    const effectiveType = type === "password" && showPassword ? "text" : type;
    const hasLeftElement = Boolean(leftElement);
    const hasRightElement = Boolean(rightElement) || type === "password" || Boolean(clearable && value);
    return /* @__PURE__ */ jsxs2("div", { className: "w-full", children: [
      label ? /* @__PURE__ */ jsxs2("label", { htmlFor: inputId, className: "mb-1.5 block text-sm font-medium text-foreground", children: [
        label,
        required ? /* @__PURE__ */ jsx2("span", { className: "ml-1 text-destructive", "aria-label": "required", children: "*" }) : null
      ] }) : null,
      /* @__PURE__ */ jsxs2("div", { className: "relative flex items-center", children: [
        hasLeftElement ? /* @__PURE__ */ jsx2("div", { className: "pointer-events-none absolute left-3.5 flex items-center text-muted-foreground", children: leftElement }) : null,
        /* @__PURE__ */ jsx2(
          "input",
          __spreadValues({
            ref,
            id: inputId,
            type: effectiveType,
            value,
            className: cn(
              inputVariants({ variant: effectiveVariant, size }),
              hasLeftElement && "pl-10",
              hasRightElement && "pr-11",
              className
            ),
            "aria-invalid": Boolean(error),
            "aria-describedby": error ? `${inputId}-error` : success ? `${inputId}-success` : hint ? `${inputId}-hint` : void 0
          }, props)
        ),
        hasRightElement ? /* @__PURE__ */ jsxs2("div", { className: "absolute right-3.5 flex items-center gap-1.5", children: [
          clearable && value ? /* @__PURE__ */ jsx2(
            "button",
            {
              type: "button",
              onClick: onClear,
              className: "rounded-md p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              "aria-label": "Clear input",
              children: /* @__PURE__ */ jsx2(X, { className: "h-3.5 w-3.5" })
            }
          ) : null,
          type === "password" ? /* @__PURE__ */ jsx2(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword((current) => !current),
              className: "rounded-md p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              "aria-label": showPassword ? "Hide password" : "Show password",
              children: showPassword ? /* @__PURE__ */ jsx2(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx2(Eye, { className: "h-4 w-4" })
            }
          ) : null,
          rightElement ? /* @__PURE__ */ jsx2("span", { className: "text-muted-foreground", children: rightElement }) : null
        ] }) : null
      ] }),
      error ? /* @__PURE__ */ jsx2("p", { id: `${inputId}-error`, className: "mt-1 text-xs text-destructive", role: "alert", children: typeof error === "string" ? error : "This field is invalid." }) : null,
      success && !error ? /* @__PURE__ */ jsx2("p", { id: `${inputId}-success`, className: "mt-1 text-xs text-success", children: success }) : null,
      hint && !error && !success ? /* @__PURE__ */ jsx2("p", { id: `${inputId}-hint`, className: "mt-1 text-xs text-muted-foreground", children: hint }) : null
    ] });
  }
);
Input.displayName = "Input";
var Input_default = Input;

// src/components/Card/Card.tsx
import { forwardRef as forwardRef3 } from "react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var cardVariants = cva3(
  "rounded-xl border border-border bg-surface text-foreground shadow-card transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default: "border-border bg-surface",
        elevated: "border-border/60 bg-surface shadow-card-md",
        outline: "border-2 border-border bg-surface shadow-none",
        outlined: "border-2 border-border bg-surface shadow-none",
        filled: "border border-border bg-surface-muted shadow-none",
        accent: "border-primary/15 bg-accent text-accent-foreground shadow-none",
        navy: "border-sidebar-border bg-sidebar text-sidebar-foreground",
        primary: "border-primary/80 bg-primary text-primary-foreground",
        ghost: "border-transparent bg-transparent shadow-none"
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-5",
        lg: "p-6",
        xl: "p-8"
      },
      hoverable: {
        true: "cursor-pointer hover:-translate-y-0.5 hover:shadow-card-md hover:border-border/80"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md"
    }
  }
);
var Card = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className, variant, padding, hoverable, children } = _b, props = __objRest(_b, ["className", "variant", "padding", "hoverable", "children"]);
    return /* @__PURE__ */ jsx3(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(cardVariants({ variant, padding, hoverable }), className)
      }, props), {
        children
      })
    );
  }
);
var CardHeader = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx3("div", __spreadValues({ ref, className: cn("flex flex-col space-y-1", className) }, props));
  }
);
var CardTitle = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx3(
      "p",
      __spreadValues({
        ref,
        className: cn(
          "text-base font-semibold leading-snug tracking-tight text-foreground",
          className
        )
      }, props)
    );
  }
);
var CardDescription = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx3(
      "p",
      __spreadValues({
        ref,
        className: cn("text-sm leading-relaxed text-muted-foreground", className)
      }, props)
    );
  }
);
var CardContent = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx3("div", __spreadValues({ ref, className: cn("", className) }, props));
  }
);
var CardFooter = forwardRef3(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ jsx3(
      "div",
      __spreadValues({
        ref,
        className: cn("flex items-center border-t border-border/60 pt-4", className)
      }, props)
    );
  }
);
Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";
var Card_default = Card;

// src/components/Modal/Modal.tsx
import { useEffect, useRef } from "react";
import { X as X2 } from "lucide-react";

// src/motion/index.ts
import { AnimatePresence, motion as motion3 } from "framer-motion";

// src/motion/FadeIn.tsx
import { motion } from "framer-motion";

// src/motion/tokens.ts
var motionTokens = {
  duration: {
    fast: 0.18,
    base: 0.26,
    slow: 0.42
  },
  easing: {
    standard: [0.16, 1, 0.3, 1],
    productive: [0.2, 0.8, 0.2, 1],
    exit: [0.4, 0, 1, 1]
  }
};

// src/motion/FadeIn.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function FadeIn(_a) {
  var _b = _a, { delay = 0 } = _b, props = __objRest(_b, ["delay"]);
  return /* @__PURE__ */ jsx4(
    motion.div,
    __spreadValues({
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 8 },
      transition: {
        duration: motionTokens.duration.base,
        ease: motionTokens.easing.standard,
        delay
      }
    }, props)
  );
}

// src/motion/ScaleIn.tsx
import { motion as motion2 } from "framer-motion";
import { jsx as jsx5 } from "react/jsx-runtime";
function ScaleIn(props) {
  return /* @__PURE__ */ jsx5(
    motion2.div,
    __spreadValues({
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.98 },
      transition: {
        duration: motionTokens.duration.fast,
        ease: motionTokens.easing.standard
      }
    }, props)
  );
}

// src/components/Modal/Modal.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
  full: "max-w-full mx-4"
};
var Modal = ({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  closeOnOverlay = true,
  closeOnEsc = true,
  showCloseButton = true,
  className
}) => {
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(null);
  useEffect(() => {
    if (!open || !closeOnEsc) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose, closeOnEsc]);
  useEffect(() => {
    var _a, _b;
    if (open) {
      previouslyFocusedRef.current = document.activeElement;
      document.body.style.overflow = "hidden";
      (_a = dialogRef.current) == null ? void 0 : _a.focus();
    } else {
      document.body.style.overflow = "";
      (_b = previouslyFocusedRef.current) == null ? void 0 : _b.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const handler = (event) => {
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);
  return /* @__PURE__ */ jsx6(AnimatePresence, { children: open ? /* @__PURE__ */ jsxs3(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": title ? "modal-title" : void 0,
      "aria-describedby": description ? "modal-description" : void 0,
      children: [
        /* @__PURE__ */ jsx6(
          motion3.div,
          {
            className: "absolute inset-0 bg-overlay/50 backdrop-blur-md",
            onClick: closeOnOverlay ? onClose : void 0,
            "aria-hidden": "true",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.18 }
          }
        ),
        /* @__PURE__ */ jsxs3(
          motion3.div,
          {
            ref: dialogRef,
            tabIndex: -1,
            className: cn(
              "relative w-full rounded-2xl border border-border/50 bg-surface/95 shadow-modal backdrop-blur-xl",
              "focus:outline-none",
              sizeMap[size],
              className
            ),
            initial: { opacity: 0, y: 16, scale: 0.97 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: 8, scale: 0.98 },
            transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
            children: [
              (title || showCloseButton) && /* @__PURE__ */ jsxs3("div", { className: "flex items-start justify-between border-b border-border/50 px-6 py-4", children: [
                /* @__PURE__ */ jsxs3("div", { children: [
                  title && /* @__PURE__ */ jsx6(
                    "h2",
                    {
                      id: "modal-title",
                      className: "text-lg font-semibold tracking-tight text-foreground",
                      children: title
                    }
                  ),
                  description && /* @__PURE__ */ jsx6(
                    "p",
                    {
                      id: "modal-description",
                      className: "mt-1 text-sm leading-relaxed text-muted-foreground",
                      children: description
                    }
                  )
                ] }),
                showCloseButton && /* @__PURE__ */ jsx6(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    "aria-label": "Close modal",
                    className: "ml-4 shrink-0 flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-all duration-150 hover:bg-muted hover:text-foreground",
                    children: /* @__PURE__ */ jsx6(X2, { className: "h-4 w-4" })
                  }
                )
              ] }),
              children && /* @__PURE__ */ jsx6("div", { className: "p-6", children }),
              footer && /* @__PURE__ */ jsx6("div", { className: "flex items-center justify-end gap-2 px-6 pb-6 pt-2", children: footer })
            ]
          }
        )
      ]
    }
  ) : null });
};
Modal.displayName = "Modal";
var Modal_default = Modal;

// src/components/Table/Table.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
function Table({
  columns,
  data,
  keyExtractor,
  sortKey,
  sortDir,
  onSort,
  onRowClick,
  striped = false,
  hoverable = true,
  bordered = false,
  compact = false,
  className,
  emptyMessage = "No data to display",
  loading = false
}) {
  const cellPad = compact ? "px-3 py-2" : "px-4 py-3";
  return /* @__PURE__ */ jsx7(
    "div",
    {
      className: cn(
        "w-full overflow-x-auto rounded-xl border border-border bg-surface shadow-card",
        className
      ),
      children: /* @__PURE__ */ jsxs4("table", { className: "w-full text-sm border-collapse", children: [
        /* @__PURE__ */ jsx7("thead", { children: /* @__PURE__ */ jsx7("tr", { className: "border-b border-border bg-muted/40", children: columns.map((col) => /* @__PURE__ */ jsx7(
          "th",
          {
            style: { width: col.width },
            className: cn(
              cellPad,
              "whitespace-nowrap text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground",
              col.align === "center" && "text-center",
              col.align === "right" && "text-right",
              col.sortable && "cursor-pointer select-none transition-colors hover:bg-background hover:text-foreground",
              bordered && "border-r border-border last:border-r-0"
            ),
            onClick: () => col.sortable && (onSort == null ? void 0 : onSort(col.key)),
            "aria-sort": sortKey === col.key ? sortDir === "asc" ? "ascending" : "descending" : void 0,
            children: /* @__PURE__ */ jsxs4("span", { className: "inline-flex items-center gap-1", children: [
              col.header,
              col.sortable && sortKey === col.key && /* @__PURE__ */ jsx7("span", { "aria-hidden": "true", className: "text-primary", children: sortDir === "asc" ? "\u2191" : "\u2193" })
            ] })
          },
          col.key
        )) }) }),
        /* @__PURE__ */ jsx7("tbody", { children: loading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx7("tr", { className: "border-b border-border", children: columns.map((col) => /* @__PURE__ */ jsx7("td", { className: cellPad, children: /* @__PURE__ */ jsx7("div", { className: "h-4 rounded bg-muted animate-pulse" }) }, col.key)) }, i)) : data.length === 0 ? /* @__PURE__ */ jsx7("tr", { children: /* @__PURE__ */ jsx7("td", { colSpan: columns.length, className: "py-12 text-center text-muted-foreground", children: emptyMessage }) }) : data.map((row, i) => /* @__PURE__ */ jsx7(
          "tr",
          {
            onClick: () => onRowClick == null ? void 0 : onRowClick(row),
            className: cn(
              "border-b border-border last:border-b-0 transition-colors duration-100",
              striped && i % 2 === 1 && "bg-muted/30",
              hoverable && "hover:bg-muted/50",
              onRowClick && "cursor-pointer"
            ),
            children: columns.map((col) => {
              var _a;
              return /* @__PURE__ */ jsx7(
                "td",
                {
                  className: cn(
                    cellPad,
                    "text-foreground",
                    col.align === "center" && "text-center",
                    col.align === "right" && "text-right",
                    bordered && "border-r border-border last:border-r-0"
                  ),
                  children: col.cell ? col.cell(row, i) : String((_a = row[col.key]) != null ? _a : "\u2014")
                },
                col.key
              );
            })
          },
          keyExtractor(row, i)
        )) })
      ] })
    }
  );
}
Table.displayName = "Table";
var Table_default = Table;

// src/components/Table/index.ts
var Table_default2 = Table_default;

// src/components/Pagination/Pagination.tsx
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
function generatePages(current, total, siblings = 1) {
  const pages = [];
  const leftSibling = Math.max(current - siblings, 1);
  const rightSibling = Math.min(current + siblings, total);
  if (leftSibling > 2) {
    pages.push(1);
    pages.push("...");
  } else for (let i = 1; i < leftSibling; i++) pages.push(i);
  for (let i = leftSibling; i <= rightSibling; i++) pages.push(i);
  if (rightSibling < total - 1) {
    pages.push("...");
    pages.push(total);
  } else for (let i = rightSibling + 1; i <= total; i++) pages.push(i);
  return pages;
}
var sizeMap2 = {
  sm: "h-7 w-7 text-xs",
  md: "h-8 w-8 text-sm",
  lg: "h-9 w-9 text-base"
};
var Pagination = ({
  total = 0,
  page,
  pageSize = 10,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20, 50, 100],
  showPageSize = false,
  showTotal = true,
  showFirstLast = false,
  siblingCount = 1,
  className,
  size = "md"
}) => {
  const totalPages = Math.ceil(total / pageSize);
  const pages = generatePages(page, totalPages, siblingCount);
  const btnClass = cn(
    "inline-flex items-center justify-center rounded-lg border border-border bg-background font-medium transition-all duration-150 ease-out",
    "hover:bg-muted hover:border-muted-foreground/20",
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-border",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-1",
    sizeMap2[size]
  );
  return /* @__PURE__ */ jsxs5("div", { className: cn("flex items-center flex-wrap gap-3", className), children: [
    showTotal && /* @__PURE__ */ jsxs5("span", { className: "text-sm text-muted-foreground tabular-nums", children: [
      (page - 1) * pageSize + 1,
      "\u2013",
      Math.min(page * pageSize, total),
      " of",
      " ",
      total.toLocaleString("en-US")
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "flex items-center gap-1 ml-auto", children: [
      showFirstLast && /* @__PURE__ */ jsx8(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(1),
          disabled: page === 1,
          className: btnClass,
          "aria-label": "First page",
          children: /* @__PURE__ */ jsx8(ChevronsLeft, { className: "h-3.5 w-3.5" })
        }
      ),
      /* @__PURE__ */ jsx8(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(page - 1),
          disabled: page === 1,
          className: btnClass,
          "aria-label": "Previous page",
          children: /* @__PURE__ */ jsx8(ChevronLeft, { className: "h-3.5 w-3.5" })
        }
      ),
      pages.map(
        (p, i) => p === "..." ? /* @__PURE__ */ jsx8(
          "span",
          {
            className: cn(
              "inline-flex items-center justify-center text-muted-foreground",
              sizeMap2[size]
            ),
            children: "\u2026"
          },
          `ellipsis-${i}`
        ) : /* @__PURE__ */ jsx8(
          "button",
          {
            type: "button",
            onClick: () => onPageChange(p),
            "aria-current": page === p ? "page" : void 0,
            className: cn(
              btnClass,
              page === p && "border-primary bg-primary text-primary-foreground hover:bg-primary/92 hover:text-primary-foreground hover:border-primary/92"
            ),
            children: p
          },
          p
        )
      ),
      /* @__PURE__ */ jsx8(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(page + 1),
          disabled: page === totalPages,
          className: btnClass,
          "aria-label": "Next page",
          children: /* @__PURE__ */ jsx8(ChevronRight, { className: "h-3.5 w-3.5" })
        }
      ),
      showFirstLast && /* @__PURE__ */ jsx8(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(totalPages),
          disabled: page === totalPages,
          className: btnClass,
          "aria-label": "Last page",
          children: /* @__PURE__ */ jsx8(ChevronsRight, { className: "h-3.5 w-3.5" })
        }
      )
    ] }),
    showPageSize && onPageSizeChange && /* @__PURE__ */ jsx8(
      "select",
      {
        value: pageSize,
        onChange: (e) => onPageSizeChange(Number(e.target.value)),
        className: "h-8 rounded-xl border border-border bg-background pl-3 pr-8 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "aria-label": "Rows per page",
        children: pageSizeOptions.map((s) => /* @__PURE__ */ jsxs5("option", { value: s, children: [
          s,
          " / page"
        ] }, s))
      }
    )
  ] });
};
Pagination.displayName = "Pagination";
var Pagination_default = Pagination;

// src/components/Pagination/index.ts
var Pagination_default2 = Pagination_default;

// src/components/Select/Select.tsx
import { forwardRef as forwardRef4, useEffect as useEffect3, useState as useState2, useRef as useRef2, useId as useId2, useMemo, useCallback } from "react";
import { ChevronDown, Check, X as X3 } from "lucide-react";

// src/hooks/useClickOutside.ts
import { useEffect as useEffect2 } from "react";
function useClickOutside(ref, callback) {
  useEffect2(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [ref, callback]);
}

// src/components/Select/Select.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var sizeMap3 = {
  sm: "h-8 px-3 text-sm",
  md: "h-9 px-3 text-sm",
  lg: "h-10 px-4 text-base"
};
var Select = forwardRef4(
  ({
    options,
    value,
    onChange,
    placeholder = "Select an option",
    label,
    hint,
    error,
    disabled,
    multiple = false,
    clearable = false,
    size = "md",
    className,
    id,
    required
  }, ref) => {
    const [open, setOpen] = useState2(false);
    const [activeIndex, setActiveIndex] = useState2(-1);
    const containerRef = useRef2(null);
    const generatedId = useId2();
    const selectId = id || `select-${generatedId}`;
    useClickOutside(containerRef, () => setOpen(false));
    const selectedValues = useMemo(
      () => multiple ? value || [] : value ? [value] : [],
      [multiple, value]
    );
    const selectedLabels = selectedValues.map((v) => {
      var _a;
      return (_a = options.find((o) => o.value === v)) == null ? void 0 : _a.label;
    }).filter(Boolean);
    const isSelected = useCallback(
      (optValue) => selectedValues.includes(optValue),
      [selectedValues]
    );
    const enabledIndices = useMemo(
      () => options.map((option, index) => ({ option, index })).filter((entry) => !entry.option.disabled).map((entry) => entry.index),
      [options]
    );
    const handleSelect = (optValue) => {
      if (multiple) {
        const newValues = isSelected(optValue) ? selectedValues.filter((v) => v !== optValue) : [...selectedValues, optValue];
        onChange == null ? void 0 : onChange(newValues);
      } else {
        onChange == null ? void 0 : onChange(optValue);
        setOpen(false);
      }
    };
    const handleClear = (e) => {
      e.stopPropagation();
      onChange == null ? void 0 : onChange(multiple ? [] : "");
    };
    useEffect3(() => {
      var _a;
      if (!open) {
        setActiveIndex(-1);
        return;
      }
      const selectedIndex = options.findIndex(
        (option) => isSelected(option.value) && !option.disabled
      );
      if (selectedIndex >= 0) {
        setActiveIndex(selectedIndex);
        return;
      }
      setActiveIndex((_a = enabledIndices[0]) != null ? _a : -1);
    }, [open, options, enabledIndices, isSelected]);
    const handleTriggerKeyDown = (event) => {
      if (disabled) return;
      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setOpen(true);
        return;
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    const handleListboxKeyDown = (event) => {
      if (enabledIndices.length === 0) return;
      const currentEnabledPos = enabledIndices.indexOf(activeIndex);
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const step = event.key === "ArrowDown" ? 1 : -1;
        const nextPos = currentEnabledPos < 0 ? 0 : (currentEnabledPos + step + enabledIndices.length) % enabledIndices.length;
        setActiveIndex(enabledIndices[nextPos]);
        return;
      }
      if (event.key === "Home") {
        event.preventDefault();
        setActiveIndex(enabledIndices[0]);
        return;
      }
      if (event.key === "End") {
        event.preventDefault();
        setActiveIndex(enabledIndices[enabledIndices.length - 1]);
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const activeOption = options[activeIndex];
        if (activeOption && !activeOption.disabled) {
          handleSelect(activeOption.value);
        }
      }
    };
    return /* @__PURE__ */ jsxs6("div", { ref: containerRef, className: cn("w-full", className), children: [
      label && /* @__PURE__ */ jsxs6("label", { htmlFor: selectId, className: "mb-1.5 block text-sm font-medium text-foreground", children: [
        label,
        required && /* @__PURE__ */ jsx9("span", { className: "ml-1 text-destructive", children: "*" })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "relative", ref, children: [
        /* @__PURE__ */ jsxs6(
          "button",
          {
            id: selectId,
            type: "button",
            onClick: () => !disabled && setOpen((v) => !v),
            onKeyDown: handleTriggerKeyDown,
            disabled,
            "aria-haspopup": "listbox",
            "aria-expanded": open,
            "aria-controls": `${selectId}-listbox`,
            "aria-activedescendant": open && activeIndex >= 0 ? `${selectId}-option-${activeIndex}` : void 0,
            "aria-label": label || placeholder,
            className: cn(
              "flex w-full items-center justify-between gap-2 rounded-xl border bg-surface transition-all duration-150 ease-out",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50",
              sizeMap3[size],
              error ? "border-destructive/40 bg-destructive-soft" : open ? "border-primary/50 ring-2 ring-primary/20" : "border-input hover:border-muted-foreground/30",
              disabled && "cursor-not-allowed bg-muted/50 opacity-50"
            ),
            children: [
              /* @__PURE__ */ jsx9(
                "span",
                {
                  className: cn(
                    "flex-1 text-left truncate",
                    !selectedLabels.length && "text-muted-foreground"
                  ),
                  children: selectedLabels.length ? multiple ? `${selectedLabels.length} selected` : selectedLabels[0] : placeholder
                }
              ),
              /* @__PURE__ */ jsxs6("span", { className: "flex items-center gap-1 shrink-0", children: [
                clearable && selectedValues.length > 0 && /* @__PURE__ */ jsx9(
                  "button",
                  {
                    type: "button",
                    onClick: handleClear,
                    className: "cursor-pointer rounded-md p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    "aria-label": "Clear selection",
                    children: /* @__PURE__ */ jsx9(X3, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ jsx9(
                  ChevronDown,
                  {
                    className: cn(
                      "h-4 w-4 text-muted-foreground transition-transform duration-200 ease-in-out",
                      open && "rotate-180"
                    ),
                    "aria-hidden": "true"
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxs6(
          "ul",
          {
            id: `${selectId}-listbox`,
            role: "listbox",
            "aria-multiselectable": multiple,
            onKeyDown: handleListboxKeyDown,
            className: "absolute z-50 mt-1.5 max-h-60 w-full overflow-auto rounded-xl border border-border/80 bg-popover p-1 shadow-dropdown animate-fade-in scrollbar-thin",
            children: [
              options.map((opt, index) => /* @__PURE__ */ jsxs6(
                "li",
                {
                  id: `${selectId}-option-${index}`,
                  role: "option",
                  "aria-selected": isSelected(opt.value),
                  "aria-disabled": opt.disabled,
                  onMouseEnter: () => !opt.disabled && setActiveIndex(index),
                  onClick: () => !opt.disabled && handleSelect(opt.value),
                  className: cn(
                    "flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors duration-100",
                    activeIndex === index && !opt.disabled && !isSelected(opt.value) && "bg-muted",
                    isSelected(opt.value) ? "bg-accent text-accent-foreground font-medium" : "text-foreground hover:bg-muted",
                    opt.disabled && "opacity-40 cursor-not-allowed"
                  ),
                  children: [
                    opt.icon && /* @__PURE__ */ jsx9("span", { className: "shrink-0", children: opt.icon }),
                    /* @__PURE__ */ jsxs6("span", { className: "flex-1", children: [
                      opt.label,
                      opt.description && /* @__PURE__ */ jsx9("span", { className: "block text-xs text-muted-foreground", children: opt.description })
                    ] }),
                    isSelected(opt.value) && /* @__PURE__ */ jsx9(Check, { className: "h-3.5 w-3.5 shrink-0", "aria-hidden": "true" })
                  ]
                },
                opt.value
              )),
              options.length === 0 && /* @__PURE__ */ jsx9("li", { className: "px-3 py-4 text-sm text-muted-foreground text-center", children: "No options available" })
            ]
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx9("p", { className: "mt-1 text-xs text-destructive", role: "alert", children: error }),
      hint && !error && /* @__PURE__ */ jsx9("p", { className: "mt-1 text-xs text-muted-foreground", children: hint })
    ] });
  }
);
Select.displayName = "Select";
var Select_default = Select;

// src/components/Select/index.ts
var Select_default2 = Select_default;

// src/components/Textarea/Textarea.tsx
import { forwardRef as forwardRef5, useId as useId3 } from "react";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
var Textarea = forwardRef5(
  (_a, ref) => {
    var _b = _a, {
      className,
      label,
      hint,
      error,
      success,
      required,
      resize = "vertical",
      showCount = false,
      maxLength,
      id,
      value
    } = _b, props = __objRest(_b, [
      "className",
      "label",
      "hint",
      "error",
      "success",
      "required",
      "resize",
      "showCount",
      "maxLength",
      "id",
      "value"
    ]);
    const generatedId = useId3();
    const textareaId = id || `textarea-${generatedId}`;
    const charCount = typeof value === "string" ? value.length : 0;
    const resizeMap = {
      none: "resize-none",
      both: "resize",
      horizontal: "resize-x",
      vertical: "resize-y"
    };
    return /* @__PURE__ */ jsxs7("div", { className: "w-full", children: [
      label && /* @__PURE__ */ jsxs7("label", { htmlFor: textareaId, className: "mb-1.5 block text-sm font-medium text-foreground", children: [
        label,
        required && /* @__PURE__ */ jsx10("span", { className: "ml-1 text-destructive", children: "*" })
      ] }),
      /* @__PURE__ */ jsx10(
        "textarea",
        __spreadValues({
          ref,
          id: textareaId,
          value,
          maxLength,
          className: cn(
            "w-full min-h-[96px] rounded-xl border bg-surface px-3.5 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground",
            "transition-all duration-150 ease-out",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/50",
            error ? "border-destructive/40 bg-destructive-soft focus-visible:ring-destructive/20" : "border-input hover:border-muted-foreground/30",
            success && !error && "border-success/40 bg-success-soft focus-visible:ring-success/20",
            resizeMap[resize],
            className
          ),
          "aria-invalid": !!error
        }, props)
      ),
      /* @__PURE__ */ jsxs7("div", { className: "flex items-start justify-between mt-1", children: [
        /* @__PURE__ */ jsxs7("div", { children: [
          error && /* @__PURE__ */ jsx10("p", { className: "text-xs text-destructive", role: "alert", children: error }),
          success && !error && /* @__PURE__ */ jsx10("p", { className: "text-xs text-success", children: success }),
          hint && !error && !success && /* @__PURE__ */ jsx10("p", { className: "text-xs text-muted-foreground", children: hint })
        ] }),
        showCount && /* @__PURE__ */ jsxs7("span", { className: "ml-2 shrink-0 text-xs tabular-nums text-muted-foreground", children: [
          charCount,
          maxLength ? `/${maxLength}` : ""
        ] })
      ] })
    ] });
  }
);
Textarea.displayName = "Textarea";
var Textarea_default = Textarea;

// src/components/Badge/Badge.tsx
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
var badgeVariants = cva4(
  "inline-flex items-center gap-1 rounded-full border font-medium transition-colors duration-150",
  {
    variants: {
      variant: {
        default: "border-transparent bg-muted text-foreground",
        primary: "border-primary/20 bg-accent text-accent-foreground",
        navy: "border-sidebar-border bg-sidebar text-sidebar-foreground",
        secondary: "border-border/60 bg-muted text-muted-foreground",
        success: "border-success/20 bg-success-soft text-success",
        warning: "border-warning/20 bg-warning-soft text-warning-foreground",
        destructive: "border-destructive/20 bg-destructive-soft text-destructive",
        info: "border-info/20 bg-info-soft text-info",
        outline: "border-border bg-transparent text-foreground",
        ghost: "border-transparent bg-transparent text-muted-foreground"
      },
      size: {
        sm: "px-2 py-0.5 text-[10px] tracking-wide uppercase",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm"
      },
      dot: {
        true: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Badge = (_a) => {
  var _b = _a, {
    className,
    variant,
    size,
    dot,
    dotColor,
    removable,
    onRemove,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "dot",
    "dotColor",
    "removable",
    "onRemove",
    "children"
  ]);
  return /* @__PURE__ */ jsxs8("span", __spreadProps(__spreadValues({ className: cn(badgeVariants({ variant, size, dot }), className) }, props), { children: [
    dot && /* @__PURE__ */ jsx11(
      "span",
      {
        className: cn("inline-block h-1.5 w-1.5 rounded-full", dotColor || "bg-current"),
        "aria-hidden": "true"
      }
    ),
    children,
    removable && /* @__PURE__ */ jsx11(
      "button",
      {
        type: "button",
        onClick: onRemove,
        className: "ml-0.5 -mr-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full opacity-60 transition-all hover:bg-foreground/10 hover:opacity-100",
        "aria-label": "Remove badge",
        children: /* @__PURE__ */ jsx11("svg", { viewBox: "0 0 8 8", className: "h-2 w-2", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx11("path", { d: "M1.41 0L0 1.41 2.59 4 0 6.59 1.41 8 4 5.41 6.59 8 8 6.59 5.41 4 8 1.41 6.59 0 4 2.59 1.41 0z" }) })
      }
    )
  ] }));
};
Badge.displayName = "Badge";
var Badge_default = Badge;

// src/components/Tabs/Tabs.tsx
import { useId as useId4, useRef as useRef3, useState as useState3 } from "react";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
var tabListVariants = {
  line: "border-b border-border gap-0",
  pill: "rounded-xl border border-border bg-muted/80 p-1 gap-0.5",
  enclosed: "overflow-hidden rounded-xl border border-border bg-card gap-0",
  soft: "gap-0.5"
};
var tabItemVariants = {
  line: {
    base: "px-4 py-2 border-b-2 border-transparent -mb-px font-medium text-sm text-muted-foreground hover:text-foreground transition-all duration-150 ease-out",
    active: "border-foreground text-foreground",
    disabled: "opacity-40 cursor-not-allowed"
  },
  pill: {
    base: "rounded-lg px-3 py-1.5 font-medium text-sm text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all duration-150 ease-out",
    active: "bg-background text-foreground shadow-sm",
    disabled: "opacity-40 cursor-not-allowed"
  },
  enclosed: {
    base: "border-r border-border px-4 py-2.5 font-medium text-sm text-muted-foreground last:border-r-0 hover:bg-muted/50 hover:text-foreground transition-all duration-150 ease-out",
    active: "bg-background text-foreground",
    disabled: "opacity-40 cursor-not-allowed"
  },
  soft: {
    base: "rounded-lg px-3 py-1.5 font-medium text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-150 ease-out",
    active: "bg-accent text-accent-foreground",
    disabled: "opacity-40 cursor-not-allowed"
  }
};
var sizeMap4 = { sm: "text-xs", md: "text-sm", lg: "text-base" };
var Tabs = ({
  items,
  defaultTab,
  activeTab: controlledTab,
  onChange,
  variant = "line",
  size = "md",
  fullWidth = false,
  className,
  contentClassName
}) => {
  var _a, _b;
  const [internalTab, setInternalTab] = useState3(defaultTab || ((_a = items[0]) == null ? void 0 : _a.id));
  const current = controlledTab != null ? controlledTab : internalTab;
  const baseId = useId4();
  const tabRefs = useRef3([]);
  const handleChange = (id) => {
    setInternalTab(id);
    onChange == null ? void 0 : onChange(id);
  };
  const activeItem = items.find((i) => i.id === current);
  const enabledIndices = items.map((item, index) => ({ item, index })).filter((entry) => !entry.item.disabled).map((entry) => entry.index);
  const handleTabKeyDown = (event, index) => {
    var _a2, _b2, _c;
    if (enabledIndices.length === 0) return;
    const currentEnabledPos = enabledIndices.indexOf(index);
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const step = event.key === "ArrowRight" ? 1 : -1;
      const nextPos = currentEnabledPos < 0 ? 0 : (currentEnabledPos + step + enabledIndices.length) % enabledIndices.length;
      const nextIndex = enabledIndices[nextPos];
      const nextTab = items[nextIndex];
      if (!nextTab) return;
      handleChange(nextTab.id);
      (_a2 = tabRefs.current[nextIndex]) == null ? void 0 : _a2.focus();
      return;
    }
    if (event.key === "Home") {
      event.preventDefault();
      const firstIndex = enabledIndices[0];
      const firstTab = items[firstIndex];
      if (!firstTab) return;
      handleChange(firstTab.id);
      (_b2 = tabRefs.current[firstIndex]) == null ? void 0 : _b2.focus();
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      const lastIndex = enabledIndices[enabledIndices.length - 1];
      const lastTab = items[lastIndex];
      if (!lastTab) return;
      handleChange(lastTab.id);
      (_c = tabRefs.current[lastIndex]) == null ? void 0 : _c.focus();
    }
  };
  return /* @__PURE__ */ jsxs9("div", { className: cn("w-full", className), children: [
    /* @__PURE__ */ jsx12(
      "div",
      {
        role: "tablist",
        className: cn("flex items-center", tabListVariants[variant], fullWidth && "w-full"),
        children: items.map((item, index) => /* @__PURE__ */ jsx12(
          "button",
          {
            ref: (element) => {
              tabRefs.current[index] = element;
            },
            role: "tab",
            type: "button",
            id: `${baseId}-tab-${item.id}`,
            "aria-controls": `${baseId}-panel-${item.id}`,
            "aria-selected": current === item.id,
            "aria-disabled": item.disabled,
            tabIndex: current === item.id ? 0 : -1,
            disabled: item.disabled,
            onClick: () => !item.disabled && handleChange(item.id),
            onKeyDown: (event) => handleTabKeyDown(event, index),
            className: cn(
              tabItemVariants[variant].base,
              sizeMap4[size],
              current === item.id && tabItemVariants[variant].active,
              item.disabled && tabItemVariants[variant].disabled,
              fullWidth && "flex-1 text-center"
            ),
            children: /* @__PURE__ */ jsxs9("span", { className: "flex items-center gap-1.5 justify-center", children: [
              item.icon && /* @__PURE__ */ jsx12("span", { className: "shrink-0", children: item.icon }),
              item.label,
              item.badge !== void 0 && /* @__PURE__ */ jsx12("span", { className: "inline-flex items-center justify-center h-4 min-w-[1rem] px-1 rounded-full bg-primary text-primary-foreground text-xs font-medium leading-none", children: item.badge })
            ] })
          },
          item.id
        ))
      }
    ),
    /* @__PURE__ */ jsx12(
      "div",
      {
        role: "tabpanel",
        id: `${baseId}-panel-${(_b = activeItem == null ? void 0 : activeItem.id) != null ? _b : "panel"}`,
        "aria-labelledby": activeItem ? `${baseId}-tab-${activeItem.id}` : void 0,
        "aria-label": typeof (activeItem == null ? void 0 : activeItem.label) === "string" ? activeItem.label : "Tab content",
        className: cn("mt-4 animate-fade-in", contentClassName),
        children: activeItem == null ? void 0 : activeItem.content
      }
    )
  ] });
};
Tabs.displayName = "Tabs";
var Tabs_default = Tabs;

// src/components/Accordion/Accordion.tsx
import { useState as useState4 } from "react";
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
var ChevronDownIcon = ({ className }) => /* @__PURE__ */ jsx13(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx13("polyline", { points: "6 9 12 15 18 9" })
  }
);
var Accordion = ({
  items,
  defaultOpen = [],
  multiple = false,
  variant = "default",
  className
}) => {
  const [openIds, setOpenIds] = useState4(defaultOpen);
  const toggle = (id) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      return multiple ? [...prev, id] : [id];
    });
  };
  const isOpen = (id) => openIds.includes(id);
  return /* @__PURE__ */ jsx13(
    "div",
    {
      className: cn(
        "w-full",
        variant === "bordered" && "overflow-hidden rounded-xl border border-border divide-y divide-border bg-surface",
        variant === "default" && "divide-y divide-border",
        variant === "flush" && "divide-y divide-border",
        className
      ),
      children: items.map((item) => /* @__PURE__ */ jsxs10(
        "div",
        {
          className: cn(
            variant === "filled" && "mb-1.5 overflow-hidden rounded-xl border border-border bg-surface"
          ),
          children: [
            /* @__PURE__ */ jsxs10(
              "button",
              {
                type: "button",
                onClick: () => !item.disabled && toggle(item.id),
                disabled: item.disabled,
                "aria-expanded": isOpen(item.id),
                className: cn(
                  "flex w-full items-center justify-between gap-3 px-0 py-3.5 text-left text-sm font-medium transition-all duration-150 ease-out",
                  variant === "filled" && "bg-muted/40 px-4 hover:bg-muted/70",
                  variant === "bordered" && "px-4",
                  variant === "flush" && "px-0",
                  item.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:text-foreground",
                  isOpen(item.id) ? "text-foreground" : "text-muted-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsxs10("span", { className: "flex items-center gap-2 font-medium text-sm", children: [
                    item.icon && /* @__PURE__ */ jsx13("span", { className: "shrink-0", children: item.icon }),
                    item.title,
                    item.badge && /* @__PURE__ */ jsx13("span", { className: "shrink-0", children: item.badge })
                  ] }),
                  /* @__PURE__ */ jsx13(
                    ChevronDownIcon,
                    {
                      className: cn(
                        "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                        isOpen(item.id) && "rotate-180 text-primary"
                      )
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx13(
              "div",
              {
                className: cn(
                  "overflow-hidden transition-all duration-200 ease-in-out",
                  isOpen(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                ),
                children: /* @__PURE__ */ jsx13(
                  "div",
                  {
                    className: cn(
                      "pb-4 text-sm leading-6 text-muted-foreground",
                      variant === "filled" && "px-4",
                      variant === "bordered" && "px-4"
                    ),
                    children: item.content
                  }
                )
              }
            )
          ]
        },
        item.id
      ))
    }
  );
};
Accordion.displayName = "Accordion";
var Accordion_default = Accordion;

// src/components/Alert/Alert.tsx
import { cva as cva5 } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X as X4 } from "lucide-react";
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
var alertVariants = cva5(
  "relative flex gap-3 rounded-xl border-l-2 border border-transparent p-4 text-sm transition-all duration-150",
  {
    variants: {
      variant: {
        info: "border-l-primary/70 border-primary/10 bg-accent text-accent-foreground",
        success: "border-l-success/70 border-success/15 bg-success-soft text-success",
        warning: "border-l-warning/70 border-warning/15 bg-warning-soft text-warning-foreground",
        destructive: "border-l-destructive/70 border-destructive/15 bg-destructive-soft text-destructive",
        navy: "border-l-sidebar-border border-sidebar-border/50 bg-sidebar text-sidebar-foreground",
        neutral: "border-l-border/80 border-border/60 bg-muted/60 text-foreground"
      }
    },
    defaultVariants: { variant: "info" }
  }
);
var iconMap = {
  info: /* @__PURE__ */ jsx14(Info, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  success: /* @__PURE__ */ jsx14(CheckCircle2, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  warning: /* @__PURE__ */ jsx14(AlertTriangle, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  destructive: /* @__PURE__ */ jsx14(AlertCircle, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  navy: /* @__PURE__ */ jsx14(Info, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  neutral: /* @__PURE__ */ jsx14(Info, { className: "h-4 w-4 shrink-0 mt-0.5" })
};
var Alert = (_a) => {
  var _b = _a, {
    className,
    variant = "info",
    title,
    dismissible,
    onDismiss,
    icon,
    action,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "title",
    "dismissible",
    "onDismiss",
    "icon",
    "action",
    "children"
  ]);
  return /* @__PURE__ */ jsxs11("div", __spreadProps(__spreadValues({ role: "alert", className: cn(alertVariants({ variant }), className) }, props), { children: [
    /* @__PURE__ */ jsx14("span", { children: icon != null ? icon : iconMap[variant] }),
    /* @__PURE__ */ jsxs11("div", { className: "flex-1", children: [
      title && /* @__PURE__ */ jsx14("p", { className: "font-semibold mb-0.5", children: title }),
      children && /* @__PURE__ */ jsx14("div", { className: "leading-relaxed", children }),
      action && /* @__PURE__ */ jsx14("div", { className: "mt-2", children: action })
    ] }),
    dismissible && /* @__PURE__ */ jsx14(
      "button",
      {
        type: "button",
        onClick: onDismiss,
        "aria-label": "Dismiss alert",
        className: "shrink-0 rounded-lg p-1 text-current opacity-60 transition-opacity hover:bg-foreground/5 hover:opacity-100",
        children: /* @__PURE__ */ jsx14(X4, { className: "h-3.5 w-3.5" })
      }
    )
  ] }));
};
Alert.displayName = "Alert";
var Alert_default = Alert;

// src/components/Avatar/Avatar.tsx
import { cva as cva6 } from "class-variance-authority";
import { User } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
var avatarVariants = cva6(
  "inline-flex items-center justify-center shrink-0 overflow-hidden font-semibold select-none ring-2 ring-border/50",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[10px]",
        sm: "h-8 w-8 text-xs",
        md: "h-9 w-9 text-sm",
        lg: "h-11 w-11 text-base",
        xl: "h-14 w-14 text-lg",
        "2xl": "h-18 w-18 text-xl"
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-xl"
      },
      variant: {
        image: "ring-0",
        initials: "bg-accent text-accent-foreground ring-0",
        icon: "bg-muted text-muted-foreground ring-0",
        navy: "bg-sidebar text-sidebar-foreground ring-0",
        primary: "bg-primary text-primary-foreground ring-0"
      }
    },
    defaultVariants: {
      size: "md",
      shape: "circle",
      variant: "initials"
    }
  }
);
var statusColors = {
  online: "bg-success",
  offline: "bg-muted-foreground",
  busy: "bg-destructive",
  away: "bg-warning"
};
var Avatar = (_a) => {
  var _b = _a, {
    className,
    size,
    shape,
    variant: _variant,
    src,
    alt = "Avatar",
    initials,
    status
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "shape",
    "variant",
    "src",
    "alt",
    "initials",
    "status"
  ]);
  const effectiveVariant = src ? "image" : initials ? "initials" : "icon";
  return /* @__PURE__ */ jsxs12("div", { className: "relative inline-flex", children: [
    /* @__PURE__ */ jsx15(
      "div",
      __spreadProps(__spreadValues({
        className: cn(avatarVariants({ size, shape, variant: effectiveVariant }), className),
        role: "img",
        "aria-label": alt
      }, props), {
        children: src ? (
          // eslint-disable-next-line @next/next/no-img-element
          /* @__PURE__ */ jsx15("img", { src, alt, className: "h-full w-full object-cover" })
        ) : initials ? /* @__PURE__ */ jsx15("span", { "aria-hidden": "true", children: initials }) : /* @__PURE__ */ jsx15(User, { className: "h-1/2 w-1/2", "aria-hidden": "true" })
      })
    ),
    status && /* @__PURE__ */ jsx15(
      "span",
      {
        className: cn(
          "absolute bottom-0 right-0 block rounded-full ring-2 ring-card",
          statusColors[status],
          size === "xs" || size === "sm" ? "h-2 w-2" : "h-3 w-3"
        ),
        "aria-label": `Status: ${status}`
      }
    )
  ] });
};
Avatar.displayName = "Avatar";
var Avatar_default = Avatar;

// src/components/Breadcrumb/Breadcrumb.tsx
import { ChevronRight as ChevronRight2, Home } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs13 } from "react/jsx-runtime";
var sizeMap5 = { sm: "text-xs", md: "text-sm", lg: "text-base" };
var Breadcrumb = ({
  items,
  separator = /* @__PURE__ */ jsx16(ChevronRight2, { className: "h-3.5 w-3.5 text-muted-foreground", "aria-hidden": "true" }),
  showHome = false,
  maxItems,
  className,
  size = "md"
}) => {
  const allItems = showHome ? [{ label: "Home", href: "/", icon: /* @__PURE__ */ jsx16(Home, { className: "h-3.5 w-3.5" }) }, ...items] : items;
  const displayed = maxItems && allItems.length > maxItems ? [allItems[0], { label: "\u2026", href: void 0 }, ...allItems.slice(-2)] : allItems;
  return /* @__PURE__ */ jsx16("nav", { "aria-label": "Breadcrumb", className: cn("flex items-center", className), children: /* @__PURE__ */ jsx16("ol", { className: cn("flex items-center gap-1.5 flex-wrap", sizeMap5[size]), children: displayed.map((item, i) => {
    const isLast = i === displayed.length - 1;
    return /* @__PURE__ */ jsxs13("li", { className: "flex items-center gap-1.5", children: [
      i > 0 && separator,
      isLast ? /* @__PURE__ */ jsxs13(
        "span",
        {
          "aria-current": "page",
          className: "font-medium text-foreground flex items-center gap-1",
          children: [
            item.icon,
            item.label
          ]
        }
      ) : item.href ? /* @__PURE__ */ jsxs13(
        "a",
        {
          href: item.href,
          className: "flex items-center gap-1 rounded-md px-1 py-0.5 text-muted-foreground transition-colors duration-150 hover:text-foreground",
          children: [
            item.icon,
            item.label
          ]
        }
      ) : /* @__PURE__ */ jsxs13("span", { className: "text-muted-foreground flex items-center gap-1", children: [
        item.icon,
        item.label
      ] })
    ] }, i);
  }) }) });
};
Breadcrumb.displayName = "Breadcrumb";
var Breadcrumb_default = Breadcrumb;

// src/components/Calendar/Calendar.tsx
import { useState as useState5, useCallback as useCallback2, useEffect as useEffect4 } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// src/components/Calendar/component.variants.ts
import { cva as cva7 } from "class-variance-authority";
var calendarVariants = cva7(["inline-block select-none font-sans"], {
  variants: {
    size: {
      sm: "text-xs w-56",
      md: "text-sm w-64",
      lg: "text-base w-72"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var calendarCellVariants = cva7(
  [
    "flex cursor-pointer items-center justify-center rounded-lg border transition-colors duration-100",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-1"
  ],
  {
    variants: {
      size: {
        sm: "h-7 w-7 text-xs",
        md: "h-8 w-8 text-sm",
        lg: "h-9 w-9 text-base"
      },
      selected: {
        true: "border-primary bg-primary text-primary-foreground font-semibold",
        false: ""
      },
      outside: {
        true: "text-muted-foreground/40",
        false: ""
      },
      disabled: {
        true: "pointer-events-none cursor-not-allowed opacity-30",
        false: ""
      }
    },
    compoundVariants: [
      {
        selected: false,
        outside: false,
        disabled: false,
        className: "border-transparent text-foreground hover:bg-muted"
      }
    ],
    defaultVariants: {
      size: "md",
      selected: false,
      outside: false,
      disabled: false
    }
  }
);

// src/components/Calendar/Calendar.tsx
import { jsx as jsx17, jsxs as jsxs14 } from "react/jsx-runtime";
var DAY_HEADERS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var MONTH_FULL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var YEAR_RANGE_SIZE = 12;
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function getYearRangeStart(year) {
  return Math.floor(year / YEAR_RANGE_SIZE) * YEAR_RANGE_SIZE;
}
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}
function NavHeader({
  label,
  onPrev,
  onNext,
  onLabelClick,
  isNavy,
  size,
  prevAriaLabel,
  nextAriaLabel
}) {
  const textSize = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";
  const btnSize = size === "sm" ? "h-6 w-6" : size === "lg" ? "h-8 w-8" : "h-7 w-7";
  const iconSize = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-4 w-4" : "h-3.5 w-3.5";
  return /* @__PURE__ */ jsxs14("div", { className: "mb-3 flex items-center justify-between", children: [
    /* @__PURE__ */ jsx17(
      "button",
      {
        type: "button",
        onClick: onPrev,
        "aria-label": prevAriaLabel,
        className: cn(
          btnSize,
          "flex items-center justify-center rounded-xl transition-colors duration-100",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-1",
          isNavy ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"
        ),
        children: /* @__PURE__ */ jsx17(ChevronLeftIcon, { className: iconSize })
      }
    ),
    /* @__PURE__ */ jsx17(
      "button",
      {
        type: "button",
        onClick: onLabelClick,
        className: cn(
          textSize,
          "rounded-xl px-2.5 py-1 font-medium transition-colors duration-100",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-1",
          isNavy ? "text-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"
        ),
        "aria-label": `Switch to broader view, currently showing ${label}`,
        children: label
      }
    ),
    /* @__PURE__ */ jsx17(
      "button",
      {
        type: "button",
        onClick: onNext,
        "aria-label": nextAriaLabel,
        className: cn(
          btnSize,
          "flex items-center justify-center rounded-xl transition-colors duration-100",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-1",
          isNavy ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"
        ),
        children: /* @__PURE__ */ jsx17(ChevronRightIcon, { className: iconSize })
      }
    )
  ] });
}
function DayView({
  viewDate,
  selected,
  today,
  size,
  isNavy,
  onSelectDay,
  onPrevMonth,
  onNextMonth,
  onHeaderClick,
  minDate,
  maxDate
}) {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month - 1);
  const headerText = `${MONTH_FULL[month]} ${year}`;
  const cellSize = size === "sm" ? "h-7 w-7 text-xs" : size === "lg" ? "h-9 w-9 text-base" : "h-8 w-8 text-sm";
  const dayHeaderSize = size === "sm" ? "text-xs" : size === "lg" ? "text-sm" : "text-xs";
  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ date: new Date(year, month - 1, daysInPrevMonth - i), outside: true });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), outside: false });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ date: new Date(year, month + 1, d), outside: true });
  }
  const isDisabled = (date) => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };
  return /* @__PURE__ */ jsxs14("div", { role: "grid", "aria-label": headerText, children: [
    /* @__PURE__ */ jsx17(
      NavHeader,
      {
        label: headerText,
        onPrev: onPrevMonth,
        onNext: onNextMonth,
        onLabelClick: onHeaderClick,
        isNavy,
        size,
        prevAriaLabel: "Previous month",
        nextAriaLabel: "Next month"
      }
    ),
    /* @__PURE__ */ jsx17("div", { className: "grid grid-cols-7 mb-1", role: "row", children: DAY_HEADERS.map((d) => /* @__PURE__ */ jsx17(
      "div",
      {
        role: "columnheader",
        "aria-label": d,
        className: cn(
          "flex items-center justify-center font-medium",
          cellSize,
          dayHeaderSize,
          "text-muted-foreground"
        ),
        children: d
      },
      d
    )) }),
    /* @__PURE__ */ jsx17("div", { className: "grid grid-cols-7 gap-0", children: cells.map(({ date, outside }, idx) => {
      const isSelected = selected ? isSameDay(date, selected) : false;
      const isToday = today ? isSameDay(date, today) : false;
      const disabled = isDisabled(date);
      return /* @__PURE__ */ jsx17(
        "button",
        {
          type: "button",
          role: "gridcell",
          "aria-label": date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }),
          "aria-selected": isSelected,
          "aria-disabled": disabled,
          tabIndex: isSelected ? 0 : -1,
          disabled,
          onClick: () => !disabled && onSelectDay(date),
          className: cn(
            cellSize,
            "flex items-center justify-center rounded transition-colors duration-100",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-1",
            "border",
            isSelected ? "border-primary bg-primary text-white font-semibold hover:bg-primary/92" : outside ? "border-transparent text-muted-foreground/60 hover:bg-muted/60" : isToday && !isSelected ? "border-primary/30 bg-accent/70 font-semibold text-primary hover:bg-accent" : "border-border text-foreground hover:bg-accent",
            disabled && "opacity-40 cursor-not-allowed pointer-events-none"
          ),
          children: date.getDate()
        },
        idx
      );
    }) })
  ] });
}
function MonthView({
  viewDate,
  selected,
  size,
  isNavy,
  onSelectMonth,
  onPrevYear,
  onNextYear,
  onHeaderClick
}) {
  const year = viewDate.getFullYear();
  const cellSize = size === "sm" ? "h-8 text-xs" : size === "lg" ? "h-11 text-base" : "h-9 text-sm";
  return /* @__PURE__ */ jsxs14("div", { role: "grid", "aria-label": `Month picker for ${year}`, children: [
    /* @__PURE__ */ jsx17(
      NavHeader,
      {
        label: String(year),
        onPrev: onPrevYear,
        onNext: onNextYear,
        onLabelClick: onHeaderClick,
        isNavy,
        size,
        prevAriaLabel: "Previous year",
        nextAriaLabel: "Next year"
      }
    ),
    /* @__PURE__ */ jsx17("div", { className: "mt-2 grid grid-cols-4 gap-1", children: MONTH_NAMES.map((name, idx) => {
      const isSelected = selected ? selected.getFullYear() === year && selected.getMonth() === idx : false;
      return /* @__PURE__ */ jsx17(
        "button",
        {
          type: "button",
          role: "gridcell",
          "aria-label": `${MONTH_FULL[idx]} ${year}`,
          "aria-selected": isSelected,
          tabIndex: isSelected ? 0 : -1,
          onClick: () => onSelectMonth(idx),
          className: cn(
            cellSize,
            "flex items-center justify-center rounded-xl font-medium transition-colors duration-100",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-1",
            isSelected ? "bg-primary text-white hover:bg-primary/92" : "text-foreground hover:bg-accent"
          ),
          children: name
        },
        name
      );
    }) })
  ] });
}
function YearView({
  viewDate,
  selected,
  size,
  isNavy,
  onSelectYear,
  onPrevRange,
  onNextRange
}) {
  const rangeStart = getYearRangeStart(viewDate.getFullYear());
  const rangeEnd = rangeStart + YEAR_RANGE_SIZE - 1;
  const years = Array.from({ length: YEAR_RANGE_SIZE }, (_, i) => rangeStart + i);
  const cellSize = size === "sm" ? "h-8 text-xs" : size === "lg" ? "h-11 text-base" : "h-9 text-sm";
  return /* @__PURE__ */ jsxs14("div", { role: "grid", "aria-label": `Year picker ${rangeStart}\u2013${rangeEnd}`, children: [
    /* @__PURE__ */ jsx17(
      NavHeader,
      {
        label: `${rangeStart} \u2013 ${rangeEnd}`,
        onPrev: onPrevRange,
        onNext: onNextRange,
        onLabelClick: () => {
        },
        isNavy,
        size,
        prevAriaLabel: `Previous ${YEAR_RANGE_SIZE} years`,
        nextAriaLabel: `Next ${YEAR_RANGE_SIZE} years`
      }
    ),
    /* @__PURE__ */ jsx17("div", { className: "mt-2 grid grid-cols-4 gap-1", children: years.map((yr) => {
      const isSelected = selected ? selected.getFullYear() === yr : false;
      return /* @__PURE__ */ jsx17(
        "button",
        {
          type: "button",
          role: "gridcell",
          "aria-label": String(yr),
          "aria-selected": isSelected,
          tabIndex: isSelected ? 0 : -1,
          onClick: () => onSelectYear(yr),
          className: cn(
            cellSize,
            "flex items-center justify-center rounded-xl font-medium transition-colors duration-100",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:ring-offset-1",
            isSelected ? "bg-primary text-white hover:bg-primary/92" : "text-foreground hover:bg-accent"
          ),
          children: yr
        },
        yr
      );
    }) })
  ] });
}
function Calendar({
  value,
  defaultValue,
  onChange,
  size = "md",
  theme = "light",
  initialView = "day",
  minDate,
  maxDate,
  className,
  "aria-label": ariaLabel = "Calendar"
}) {
  const [today, setToday] = useState5(null);
  useEffect4(() => {
    const current = /* @__PURE__ */ new Date();
    current.setHours(0, 0, 0, 0);
    setToday(current);
  }, []);
  const [internalSelected, setInternalSelected] = useState5(defaultValue != null ? defaultValue : null);
  const selected = value !== void 0 ? value : internalSelected;
  const [viewDate, setViewDate] = useState5(() => {
    var _a;
    const base = (_a = selected != null ? selected : defaultValue) != null ? _a : new Date(2e3, 0, 1);
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });
  const [view, setView] = useState5(initialView);
  const isNavy = theme === "navy";
  useEffect4(() => {
    if (value) {
      setViewDate(new Date(value.getFullYear(), value.getMonth(), 1));
    }
  }, [value]);
  useEffect4(() => {
    if (value || selected) return;
    const current = /* @__PURE__ */ new Date();
    setViewDate(new Date(current.getFullYear(), current.getMonth(), 1));
  }, [selected, value]);
  const handleSelectDay = useCallback2(
    (date) => {
      if (value === void 0) setInternalSelected(date);
      onChange == null ? void 0 : onChange(date);
    },
    [value, onChange]
  );
  const handlePrevMonth = useCallback2(() => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }, []);
  const handleNextMonth = useCallback2(() => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }, []);
  const handleSelectMonth = useCallback2((month) => {
    setViewDate((d) => new Date(d.getFullYear(), month, 1));
    setView("day");
  }, []);
  const handlePrevYear = useCallback2(() => {
    setViewDate((d) => new Date(d.getFullYear() - 1, d.getMonth(), 1));
  }, []);
  const handleNextYear = useCallback2(() => {
    setViewDate((d) => new Date(d.getFullYear() + 1, d.getMonth(), 1));
  }, []);
  const handleSelectYear = useCallback2((year) => {
    setViewDate((d) => new Date(year, d.getMonth(), 1));
    setView("month");
  }, []);
  const handlePrevRange = useCallback2(() => {
    setViewDate((d) => new Date(d.getFullYear() - YEAR_RANGE_SIZE, d.getMonth(), 1));
  }, []);
  const handleNextRange = useCallback2(() => {
    setViewDate((d) => new Date(d.getFullYear() + YEAR_RANGE_SIZE, d.getMonth(), 1));
  }, []);
  const containerPadding = size === "sm" ? "p-3" : size === "lg" ? "p-5" : "p-4";
  return /* @__PURE__ */ jsxs14(
    "div",
    {
      role: "application",
      "aria-label": ariaLabel,
      "data-theme": theme,
      className: cn(
        calendarVariants({ size }),
        containerPadding,
        "rounded-2xl border border-border shadow-card",
        isNavy ? "bg-sidebar text-sidebar-foreground" : "bg-card text-foreground",
        className
      ),
      children: [
        view === "day" && /* @__PURE__ */ jsx17(
          DayView,
          {
            viewDate,
            selected: selected != null ? selected : null,
            today,
            size,
            isNavy,
            onSelectDay: handleSelectDay,
            onPrevMonth: handlePrevMonth,
            onNextMonth: handleNextMonth,
            onHeaderClick: () => setView("month"),
            minDate,
            maxDate
          }
        ),
        view === "month" && /* @__PURE__ */ jsx17(
          MonthView,
          {
            viewDate,
            selected: selected != null ? selected : null,
            size,
            isNavy,
            onSelectMonth: handleSelectMonth,
            onPrevYear: handlePrevYear,
            onNextYear: handleNextYear,
            onHeaderClick: () => setView("year")
          }
        ),
        view === "year" && /* @__PURE__ */ jsx17(
          YearView,
          {
            viewDate,
            selected: selected != null ? selected : null,
            size,
            isNavy,
            onSelectYear: handleSelectYear,
            onPrevRange: handlePrevRange,
            onNextRange: handleNextRange
          }
        )
      ]
    }
  );
}

// src/components/DatePicker/DatePicker.tsx
import { useState as useState6, useRef as useRef4, useCallback as useCallback3, useId as useId5 } from "react";
import { CalendarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { jsx as jsx18, jsxs as jsxs15 } from "react/jsx-runtime";
var DEFAULT_FORMAT = (date) => date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
var sizeConfig = {
  sm: {
    height: "h-8",
    text: "text-sm",
    icon: "h-3.5 w-3.5",
    zone: "w-9",
    // 36 px left icon zone
    pl: "pl-10",
    // 40 px — text starts after zone + gap
    pr: "pr-9",
    radius: "rounded-lg",
    hint: "text-xs"
  },
  md: {
    height: "h-10",
    text: "text-sm",
    icon: "h-4 w-4",
    zone: "w-10",
    // 40 px
    pl: "pl-11",
    // 44 px
    pr: "pr-10",
    radius: "rounded-xl",
    hint: "text-xs"
  },
  lg: {
    height: "h-11",
    text: "text-sm",
    icon: "h-[18px] w-[18px]",
    zone: "w-12",
    // 48 px
    pl: "pl-[52px]",
    // 52 px
    pr: "pr-11",
    radius: "rounded-xl",
    hint: "text-xs"
  }
};
function DatePicker({
  value,
  defaultValue,
  onChange,
  placeholder = "Select a date",
  size = "md",
  theme = "light",
  label,
  required,
  error,
  hint,
  disabled = false,
  minDate,
  maxDate,
  formatDate = DEFAULT_FORMAT,
  className,
  id,
  "aria-label": ariaLabel
}) {
  var _a;
  const generatedId = useId5();
  const inputId = id != null ? id : `datepicker-${generatedId}`;
  const [internalValue, setInternalValue] = useState6(defaultValue != null ? defaultValue : null);
  const selected = value !== void 0 ? value : internalValue;
  const [open, setOpen] = useState6(false);
  const wrapperRef = useRef4(null);
  useClickOutside(
    wrapperRef,
    useCallback3(() => setOpen(false), [])
  );
  const handleKeyDown = (e) => {
    if (e.key === "Escape") setOpen(false);
  };
  const handleSelect = (date) => {
    if (value === void 0) setInternalValue(date);
    onChange == null ? void 0 : onChange(date);
    setOpen(false);
  };
  const handleClear = (e) => {
    e.stopPropagation();
    if (value === void 0) setInternalValue(null);
    onChange == null ? void 0 : onChange(null);
  };
  const displayValue = selected ? formatDate(selected) : "";
  const hasError = Boolean(error);
  const cfg = sizeConfig[size];
  return /* @__PURE__ */ jsxs15("div", { ref: wrapperRef, className: cn("relative w-full", className), onKeyDown: handleKeyDown, children: [
    label && /* @__PURE__ */ jsxs15("label", { htmlFor: inputId, className: "mb-1.5 block text-sm font-medium text-foreground", children: [
      label,
      required && /* @__PURE__ */ jsx18("span", { className: "ml-1 text-destructive", "aria-label": "required", children: "*" })
    ] }),
    /* @__PURE__ */ jsxs15("div", { className: "relative flex items-center", children: [
      /* @__PURE__ */ jsx18(
        "div",
        {
          "aria-hidden": "true",
          className: cn(
            "pointer-events-none absolute left-0 top-0 flex h-full items-center justify-center border-r",
            cfg.zone,
            hasError ? "border-destructive/40 text-destructive/80" : open ? "border-primary/30 text-primary" : "border-input text-muted-foreground/70 group-hover:text-muted-foreground",
            disabled && "opacity-40"
          ),
          children: /* @__PURE__ */ jsx18(CalendarIcon, { className: cfg.icon })
        }
      ),
      /* @__PURE__ */ jsx18(
        "button",
        {
          id: inputId,
          type: "button",
          role: "combobox",
          "aria-haspopup": "dialog",
          "aria-expanded": open,
          "aria-controls": open ? `${inputId}-popover` : void 0,
          "aria-label": (_a = ariaLabel != null ? ariaLabel : label) != null ? _a : placeholder,
          "aria-invalid": hasError,
          disabled,
          onClick: () => !disabled && setOpen((v) => !v),
          className: cn(
            "relative flex w-full items-center border bg-surface transition-all duration-150",
            cfg.height,
            cfg.text,
            cfg.pl,
            cfg.pr,
            cfg.radius,
            // State: open
            open && !hasError && "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.12)]",
            // State: error
            hasError && "border-destructive/60 shadow-[0_0_0_3px_hsl(var(--destructive)/0.10)]",
            // State: default / hover
            !open && !hasError && "border-input hover:border-muted-foreground/40",
            // Text colour
            displayValue ? "text-foreground font-medium" : "text-muted-foreground/60",
            // Disabled
            disabled ? "cursor-not-allowed opacity-50 bg-muted/40 hover:border-input" : "cursor-pointer"
          ),
          children: displayValue || placeholder
        }
      ),
      /* @__PURE__ */ jsx18("div", { className: "pointer-events-none absolute right-0 top-0 flex h-full items-center pr-3", children: selected && !disabled ? /* @__PURE__ */ jsx18(
        "button",
        {
          type: "button",
          onClick: handleClear,
          "aria-label": "Clear date",
          className: cn(
            "pointer-events-auto flex items-center justify-center rounded-md p-0.5",
            "text-muted-foreground/60 transition-colors",
            "hover:bg-muted hover:text-foreground"
          ),
          children: /* @__PURE__ */ jsx18(XMarkIcon, { className: cfg.icon })
        }
      ) : /* @__PURE__ */ jsx18(
        CalendarIcon,
        {
          "aria-hidden": "true",
          className: cn(
            cfg.icon,
            "text-muted-foreground/50 transition-colors duration-150",
            open && "text-primary"
          )
        }
      ) })
    ] }),
    hasError && typeof error === "string" && /* @__PURE__ */ jsx18("p", { className: cn("mt-1.5 text-destructive", cfg.hint), role: "alert", children: error }),
    !hasError && hint && /* @__PURE__ */ jsx18("p", { className: cn("mt-1.5 text-muted-foreground", cfg.hint), children: hint }),
    open && /* @__PURE__ */ jsx18(
      "div",
      {
        id: `${inputId}-popover`,
        role: "dialog",
        "aria-label": "Date picker calendar",
        "aria-modal": "false",
        className: cn(
          "absolute left-0 top-full z-50 mt-2",
          "rounded-2xl border border-border bg-popover shadow-dropdown",
          "p-2",
          "animate-[fade-in_0.18s_ease-out]",
          "origin-top"
        ),
        children: /* @__PURE__ */ jsx18(
          Calendar,
          {
            value: selected != null ? selected : null,
            onChange: handleSelect,
            theme,
            minDate,
            maxDate,
            "aria-label": "Pick a date"
          }
        )
      }
    )
  ] });
}

// src/components/Checkbox/Checkbox.tsx
import { forwardRef as forwardRef6, useId as useId6 } from "react";
import { Check as Check2, Minus } from "lucide-react";
import { jsx as jsx19, jsxs as jsxs16 } from "react/jsx-runtime";
var sizeMap6 = {
  sm: { box: "h-3.5 w-3.5", icon: "h-2.5 w-2.5", label: "text-xs" },
  md: { box: "h-4 w-4", icon: "h-3 w-3", label: "text-sm" },
  lg: { box: "h-5 w-5", icon: "h-3.5 w-3.5", label: "text-base" }
};
var Checkbox = forwardRef6(
  (_a, ref) => {
    var _b = _a, {
      className,
      label,
      description,
      size = "md",
      indeterminate = false,
      checked,
      disabled,
      error,
      id
    } = _b, props = __objRest(_b, [
      "className",
      "label",
      "description",
      "size",
      "indeterminate",
      "checked",
      "disabled",
      "error",
      "id"
    ]);
    const generatedId = useId6();
    const checkboxId = id || `checkbox-${generatedId}`;
    const s = sizeMap6[size];
    return /* @__PURE__ */ jsxs16("div", { className: cn("flex items-start gap-3", className), children: [
      /* @__PURE__ */ jsxs16("div", { className: "relative flex items-center justify-center shrink-0 mt-0.5", children: [
        /* @__PURE__ */ jsx19(
          "input",
          __spreadValues({
            ref,
            id: checkboxId,
            type: "checkbox",
            checked,
            disabled,
            className: "sr-only peer",
            "aria-checked": indeterminate ? "mixed" : checked
          }, props)
        ),
        /* @__PURE__ */ jsx19(
          "div",
          {
            className: cn(
              "flex cursor-pointer items-center justify-center rounded-md border transition-all duration-150 ease-out",
              s.box,
              checked || indeterminate ? "border-primary bg-primary text-primary-foreground shadow-sm" : "bg-background border-input hover:border-primary/50",
              disabled && "opacity-50 cursor-not-allowed",
              error && !checked && "border-destructive/40 bg-destructive-soft"
            ),
            "aria-hidden": "true",
            children: indeterminate ? /* @__PURE__ */ jsx19(Minus, { className: cn(s.icon, "text-current"), strokeWidth: 3 }) : checked ? /* @__PURE__ */ jsx19(Check2, { className: cn(s.icon, "text-current"), strokeWidth: 3 }) : null
          }
        )
      ] }),
      (label || description) && /* @__PURE__ */ jsxs16(
        "label",
        {
          htmlFor: checkboxId,
          className: cn("cursor-pointer", disabled && "cursor-not-allowed"),
          children: [
            label && /* @__PURE__ */ jsx19("span", { className: cn("font-medium text-foreground block", s.label), children: label }),
            description && /* @__PURE__ */ jsx19("span", { className: "mt-0.5 block text-xs text-muted-foreground", children: description })
          ]
        }
      ),
      error && /* @__PURE__ */ jsx19("p", { className: "mt-1 text-xs text-destructive", role: "alert", children: error })
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var Checkbox_default = Checkbox;

// src/components/Divider/Divider.tsx
import { jsx as jsx20, jsxs as jsxs17 } from "react/jsx-runtime";
var variantMap = { solid: "border-solid", dashed: "border-dashed", dotted: "border-dotted" };
var thicknessMap = { thin: "border-t", medium: "border-t-2", thick: "border-t-4" };
var Divider = (_a) => {
  var _b = _a, {
    className,
    orientation = "horizontal",
    label,
    labelAlign = "center",
    variant = "solid",
    thickness = "thin"
  } = _b, props = __objRest(_b, [
    "className",
    "orientation",
    "label",
    "labelAlign",
    "variant",
    "thickness"
  ]);
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsx20(
      "div",
      __spreadValues({
        role: "separator",
        "aria-orientation": "vertical",
        className: cn("mx-2 inline-block w-px self-stretch bg-border", className)
      }, props)
    );
  }
  if (label) {
    return /* @__PURE__ */ jsxs17("div", __spreadProps(__spreadValues({ role: "separator", className: cn("flex items-center gap-3 w-full", className) }, props), { children: [
      labelAlign !== "left" && /* @__PURE__ */ jsx20(
        "div",
        {
          className: cn("flex-1 border-border", variantMap[variant], thicknessMap[thickness])
        }
      ),
      /* @__PURE__ */ jsx20("span", { className: "shrink-0 whitespace-nowrap text-xs font-medium text-muted-foreground", children: label }),
      labelAlign !== "right" && /* @__PURE__ */ jsx20(
        "div",
        {
          className: cn("flex-1 border-border", variantMap[variant], thicknessMap[thickness])
        }
      )
    ] }));
  }
  return /* @__PURE__ */ jsx20(
    "hr",
    __spreadValues({
      role: "separator",
      className: cn(
        "my-0 w-full border-border",
        variantMap[variant],
        thicknessMap[thickness],
        className
      )
    }, props)
  );
};
Divider.displayName = "Divider";
var Divider_default = Divider;

// src/components/Drawer/Drawer.tsx
import { useEffect as useEffect5 } from "react";
import { X as X5 } from "lucide-react";
import { jsx as jsx21, jsxs as jsxs18 } from "react/jsx-runtime";
var placementStyles = {
  right: "right-0 top-0 h-full animate-slide-in-right",
  left: "left-0 top-0 h-full animate-slide-in-left",
  top: "top-0 left-0 w-full animate-slide-in-bottom",
  bottom: "bottom-0 left-0 w-full"
};
var sizeStyles = {
  right: { sm: "w-72", md: "w-96", lg: "w-[480px]", full: "w-full" },
  left: { sm: "w-72", md: "w-96", lg: "w-[480px]", full: "w-full" },
  top: { sm: "h-48", md: "h-64", lg: "h-80", full: "h-full" },
  bottom: { sm: "h-48", md: "h-64", lg: "h-80", full: "h-full" }
};
var Drawer = ({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  placement = "right",
  size = "md",
  closeOnOverlay = true,
  closeOnEsc = true,
  showCloseButton = true,
  className
}) => {
  useEffect5(() => {
    if (!closeOnEsc) return;
    const handler = (e) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose, closeOnEsc]);
  useEffect5(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsx21(AnimatePresence, { children: open ? /* @__PURE__ */ jsxs18("div", { className: "fixed inset-0 z-50", role: "dialog", "aria-modal": "true", children: [
    /* @__PURE__ */ jsx21(
      motion3.div,
      {
        className: "absolute inset-0 bg-overlay/50 backdrop-blur-md",
        onClick: closeOnOverlay ? onClose : void 0,
        "aria-hidden": "true",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.18 }
      }
    ),
    /* @__PURE__ */ jsxs18(
      motion3.div,
      {
        className: cn(
          "absolute flex flex-col border border-border/60 bg-surface/95 backdrop-blur-xl shadow-modal",
          placementStyles[placement],
          sizeStyles[placement][size],
          className
        ),
        initial: placement === "right" ? { opacity: 0, x: 48 } : placement === "left" ? { opacity: 0, x: -48 } : placement === "top" ? { opacity: 0, y: -36 } : { opacity: 0, y: 36 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: placement === "right" ? { opacity: 0, x: 48 } : placement === "left" ? { opacity: 0, x: -48 } : placement === "top" ? { opacity: 0, y: -36 } : { opacity: 0, y: 36 },
        transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
        children: [
          (title || showCloseButton) && /* @__PURE__ */ jsxs18("div", { className: "flex shrink-0 items-center justify-between border-b border-border/80 p-6", children: [
            /* @__PURE__ */ jsxs18("div", { children: [
              title && /* @__PURE__ */ jsx21("h2", { className: "text-base font-semibold text-foreground", children: title }),
              description && /* @__PURE__ */ jsx21("p", { className: "mt-0.5 text-sm text-muted-foreground", children: description })
            ] }),
            showCloseButton && /* @__PURE__ */ jsx21(
              "button",
              {
                type: "button",
                onClick: onClose,
                "aria-label": "Close drawer",
                className: "rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                children: /* @__PURE__ */ jsx21(X5, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx21("div", { className: "flex-1 overflow-y-auto p-6 scrollbar-thin", children }),
          footer && /* @__PURE__ */ jsx21("div", { className: "flex shrink-0 items-center justify-end gap-2 border-t border-border/80 p-6", children: footer })
        ]
      }
    )
  ] }) : null });
};
Drawer.displayName = "Drawer";
var Drawer_default = Drawer;

// src/components/Dropdown/Dropdown.tsx
import React11, { useEffect as useEffect6, useId as useId7, useRef as useRef5, useState as useState7 } from "react";
import { Check as Check3, ChevronRight as ChevronRight3 } from "lucide-react";
import { jsx as jsx22, jsxs as jsxs19 } from "react/jsx-runtime";
var Dropdown = ({
  trigger,
  items,
  align = "left",
  className,
  menuClassName
}) => {
  const [open, setOpen] = useState7(false);
  const ref = useRef5(null);
  const menuRef = useRef5(null);
  const menuId = useId7();
  useClickOutside(ref, () => setOpen(false));
  useEffect6(() => {
    var _a;
    if (!open) return;
    const firstItem = (_a = menuRef.current) == null ? void 0 : _a.querySelector(
      'button[role="menuitem"]:not(:disabled)'
    );
    firstItem == null ? void 0 : firstItem.focus();
  }, [open]);
  const handleTriggerKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      return;
    }
    if (event.key === "Escape") {
      setOpen(false);
    }
  };
  const handleMenuKeyDown = (event) => {
    var _a, _b, _c, _d;
    const menuItems = Array.from(
      (_b = (_a = menuRef.current) == null ? void 0 : _a.querySelectorAll(
        'button[role="menuitem"]:not(:disabled)'
      )) != null ? _b : []
    );
    if (menuItems.length === 0) return;
    const currentIndex = menuItems.indexOf(document.activeElement);
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % menuItems.length;
      (_c = menuItems[nextIndex]) == null ? void 0 : _c.focus();
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const prevIndex = currentIndex <= 0 ? menuItems.length - 1 : currentIndex - 1;
      (_d = menuItems[prevIndex]) == null ? void 0 : _d.focus();
    }
  };
  const triggerEl = React11.isValidElement(trigger) ? React11.cloneElement(trigger, {
    "aria-haspopup": "menu",
    "aria-expanded": open,
    "aria-controls": menuId,
    onClick: (e) => {
      var _a, _b;
      (_b = (_a = trigger.props).onClick) == null ? void 0 : _b.call(_a, e);
      setOpen((v) => !v);
    },
    onKeyDown: handleTriggerKeyDown
  }) : trigger;
  return /* @__PURE__ */ jsxs19("div", { ref, className: cn("relative inline-flex", className), children: [
    triggerEl,
    open && /* @__PURE__ */ jsx22(
      "div",
      {
        ref: menuRef,
        id: menuId,
        role: "menu",
        onKeyDown: handleMenuKeyDown,
        className: cn(
          "absolute z-50 mt-1.5 min-w-[200px] rounded-xl border border-border/80 bg-popover p-1 shadow-dropdown animate-fade-in",
          align === "right" ? "right-0" : "left-0",
          "top-full",
          menuClassName
        ),
        children: items.map((item) => {
          if ("separator" in item && item.separator) {
            return /* @__PURE__ */ jsxs19("div", { children: [
              item.label && /* @__PURE__ */ jsx22("span", { className: "block px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground", children: item.label }),
              /* @__PURE__ */ jsx22("hr", { className: "my-1 border-border" })
            ] }, item.id);
          }
          const d = item;
          return /* @__PURE__ */ jsxs19(
            "button",
            {
              role: "menuitem",
              type: "button",
              disabled: d.disabled,
              onClick: () => {
                var _a;
                (_a = d.onClick) == null ? void 0 : _a.call(d);
                setOpen(false);
              },
              className: cn(
                "flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition-colors duration-100",
                d.danger ? "text-destructive hover:bg-destructive-soft" : "text-foreground hover:bg-muted",
                d.disabled && "opacity-40 cursor-not-allowed"
              ),
              children: [
                d.checked !== void 0 && /* @__PURE__ */ jsx22("span", { className: "w-4 shrink-0", children: d.checked && /* @__PURE__ */ jsx22(Check3, { className: "h-3.5 w-3.5" }) }),
                d.icon && /* @__PURE__ */ jsx22("span", { className: "shrink-0 text-muted-foreground", children: d.icon }),
                /* @__PURE__ */ jsx22("span", { className: "flex-1", children: d.label }),
                d.shortcut && /* @__PURE__ */ jsx22("kbd", { className: "text-xs text-muted-foreground font-mono", children: d.shortcut }),
                d.children && /* @__PURE__ */ jsx22(ChevronRight3, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" })
              ]
            },
            d.id
          );
        })
      }
    )
  ] });
};
Dropdown.displayName = "Dropdown";
var Dropdown_default = Dropdown;

// src/components/Label/Label.tsx
import { forwardRef as forwardRef7 } from "react";
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx23 } from "react/jsx-runtime";
var labelVariants = cva8(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        error: "text-destructive"
      },
      required: {
        true: "after:content-['*'] after:ml-0.5 after:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default",
      required: false
    }
  }
);
var Label = forwardRef7(
  (_a, ref) => {
    var _b = _a, { className, variant, required } = _b, props = __objRest(_b, ["className", "variant", "required"]);
    return /* @__PURE__ */ jsx23("label", __spreadValues({ ref, className: cn(labelVariants({ variant, required }), className) }, props));
  }
);
Label.displayName = "Label";
var Label_default = Label;

// src/components/Progress/Progress.tsx
import { cva as cva9 } from "class-variance-authority";
import { jsx as jsx24, jsxs as jsxs20 } from "react/jsx-runtime";
var progressTrackVariants = cva9("w-full overflow-hidden rounded-full bg-muted/80", {
  variants: {
    size: {
      xs: "h-1",
      sm: "h-1.5",
      md: "h-2",
      lg: "h-3",
      xl: "h-5"
    }
  },
  defaultVariants: { size: "md" }
});
var colorMap = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  destructive: "bg-destructive",
  navy: "bg-navy"
};
var Progress = (_a) => {
  var _b = _a, {
    className,
    size,
    value,
    max = 100,
    color = "primary",
    showLabel = false,
    label,
    animated = false,
    striped: _striped = false
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "value",
    "max",
    "color",
    "showLabel",
    "label",
    "animated",
    "striped"
  ]);
  const pct = Math.min(Math.max(value / max * 100, 0), 100);
  return /* @__PURE__ */ jsxs20("div", __spreadProps(__spreadValues({ className: cn("w-full", className) }, props), { children: [
    (showLabel || label) && /* @__PURE__ */ jsxs20("div", { className: "mb-1.5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx24("span", { className: "text-xs font-medium text-foreground", children: label }),
      showLabel && /* @__PURE__ */ jsxs20("span", { className: "text-xs tabular-nums text-muted-foreground", children: [
        Math.round(pct),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ jsx24(
      "div",
      {
        className: progressTrackVariants({ size }),
        role: "progressbar",
        "aria-valuenow": value,
        "aria-valuemin": 0,
        "aria-valuemax": max,
        "aria-label": label || `Progress: ${Math.round(pct)}%`,
        children: /* @__PURE__ */ jsx24(
          "div",
          {
            className: cn(
              "h-full rounded-full transition-all duration-500 ease-out",
              colorMap[color],
              animated && "animate-pulse"
            ),
            style: { width: `${pct}%` }
          }
        )
      }
    )
  ] }));
};
Progress.displayName = "Progress";
var Progress_default = Progress;

// src/components/Radio/Radio.tsx
import { forwardRef as forwardRef8, useId as useId8 } from "react";
import { jsx as jsx25, jsxs as jsxs21 } from "react/jsx-runtime";
var sizeMap7 = {
  sm: { outer: "h-3.5 w-3.5", inner: "h-1.5 w-1.5", label: "text-xs" },
  md: { outer: "h-4 w-4", inner: "h-2 w-2", label: "text-sm" },
  lg: { outer: "h-5 w-5", inner: "h-2.5 w-2.5", label: "text-base" }
};
var Radio = forwardRef8(
  (_a, ref) => {
    var _b = _a, { className, label, description, size = "md", checked, disabled, error, id } = _b, props = __objRest(_b, ["className", "label", "description", "size", "checked", "disabled", "error", "id"]);
    const generatedId = useId8();
    const radioId = id || `radio-${generatedId}`;
    const s = sizeMap7[size];
    return /* @__PURE__ */ jsxs21("div", { className: cn("flex items-start gap-3", className), children: [
      /* @__PURE__ */ jsxs21("div", { className: "relative flex items-center justify-center shrink-0 mt-0.5", children: [
        /* @__PURE__ */ jsx25(
          "input",
          __spreadValues({
            ref,
            id: radioId,
            type: "radio",
            checked,
            disabled,
            className: "sr-only"
          }, props)
        ),
        /* @__PURE__ */ jsx25(
          "div",
          {
            className: cn(
              "flex items-center justify-center rounded-full border transition-all duration-150 ease-out",
              s.outer,
              checked ? "border-primary bg-background shadow-sm" : "border-input hover:border-primary/50",
              disabled && "opacity-50 cursor-not-allowed",
              error && !checked && "border-destructive/40 bg-destructive-soft"
            ),
            "aria-hidden": "true",
            children: checked && /* @__PURE__ */ jsx25("div", { className: cn("rounded-full bg-primary", s.inner) })
          }
        )
      ] }),
      (label || description) && /* @__PURE__ */ jsxs21(
        "label",
        {
          htmlFor: radioId,
          className: cn("cursor-pointer", disabled && "cursor-not-allowed opacity-50"),
          children: [
            label && /* @__PURE__ */ jsx25("span", { className: cn("font-medium text-foreground block", s.label), children: label }),
            description && /* @__PURE__ */ jsx25("span", { className: "text-xs text-muted-foreground block mt-0.5", children: description })
          ]
        }
      )
    ] });
  }
);
Radio.displayName = "Radio";
var Radio_default = Radio;

// src/components/ServerDataTable/ServerDataTable.tsx
import { useState as useState8, useEffect as useEffect7, useCallback as useCallback4, useRef as useRef6 } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon as ChevronDownIcon2,
  MagnifyingGlassIcon,
  ChevronLeftIcon as ChevronLeftIcon2,
  ChevronRightIcon as ChevronRightIcon2
} from "@heroicons/react/24/outline";
import { jsx as jsx26, jsxs as jsxs22 } from "react/jsx-runtime";
function getThemeTokens(theme) {
  if (theme === "navy") {
    return {
      toggleBorder: "border-border",
      toggleActiveBg: "bg-primary text-primary-foreground",
      toggleInactiveBg: "bg-navy-dark text-sky-light",
      searchBorder: "border-border",
      searchBg: "bg-navy-dark text-white placeholder:text-muted-foreground",
      searchFocus: "focus:ring-ring/30 focus:border-ring",
      searchIcon: "text-muted-foreground",
      headerBg: "hsl(var(--secondary))",
      headerText: "text-foreground",
      headerHover: "hover:text-white",
      rowBg: "bg-navy-dark",
      rowBorder: "border-border",
      rowExpandedBorder: "border-primary/35",
      rowText: "text-sky-light",
      expandBtnBorder: "border-border hover:border-primary hover:bg-primary/10",
      expandBtnIcon: "text-sky-light",
      expandBtnFocus: "focus:ring-ring/30",
      expandedBg: "bg-navy",
      expandedBorder: "border-primary/30",
      noteInputBorder: "border-border",
      noteInputBg: "bg-navy-dark text-sky-light placeholder:text-muted-foreground",
      noteInputFocus: "focus:ring-ring/30 focus:border-ring",
      noteLabel: "text-sky-light",
      appliedText: "text-sky-light",
      paginationText: "text-muted-foreground",
      paginationBtn: "border-border text-sky-light hover:bg-navy-medium",
      paginationActivePage: "bg-primary text-primary-foreground",
      paginationInactivePage: "border-border text-sky-light hover:bg-navy-medium",
      paginationEllipsis: "text-muted-foreground",
      emptyBg: "bg-navy-dark",
      emptyBorder: "border-border",
      emptyText: "text-muted-foreground",
      skeletonBg: "bg-navy-dark",
      skeletonBorder: "border-border",
      skeletonPulse: "bg-navy-medium",
      sortIconActive: "text-primary"
    };
  }
  return {
    toggleBorder: "border-border",
    toggleActiveBg: "bg-primary text-primary-foreground",
    toggleInactiveBg: "bg-background text-primary",
    searchBorder: "border-border",
    searchBg: "bg-background text-foreground placeholder:text-muted-foreground",
    searchFocus: "focus:ring-ring/20 focus:border-ring",
    searchIcon: "text-muted-foreground",
    headerBg: "hsl(var(--secondary))",
    headerText: "text-foreground",
    headerHover: "hover:text-primary",
    rowBg: "bg-card",
    rowBorder: "border-border",
    rowExpandedBorder: "border-primary/20",
    rowText: "text-foreground",
    expandBtnBorder: "border-border hover:border-primary hover:bg-primary/6",
    expandBtnIcon: "text-muted-foreground",
    expandBtnFocus: "focus:ring-ring/20",
    expandedBg: "bg-background",
    expandedBorder: "border-primary/18",
    noteInputBorder: "border-border",
    noteInputBg: "bg-background text-foreground placeholder:text-muted-foreground",
    noteInputFocus: "focus:ring-ring/20 focus:border-ring",
    noteLabel: "text-foreground",
    appliedText: "text-foreground",
    paginationText: "text-muted-foreground",
    paginationBtn: "border-border text-foreground hover:bg-muted",
    paginationActivePage: "bg-primary text-primary-foreground",
    paginationInactivePage: "border-border text-foreground hover:bg-muted",
    paginationEllipsis: "text-muted-foreground",
    emptyBg: "bg-card",
    emptyBorder: "border-border",
    emptyText: "text-muted-foreground",
    skeletonBg: "bg-card",
    skeletonBorder: "border-border",
    skeletonPulse: "bg-muted",
    sortIconActive: "text-primary"
  };
}
function SkeletonRow({ cols, tk }) {
  return /* @__PURE__ */ jsxs22(
    "div",
    {
      className: `${tk.skeletonBg} mb-2 flex items-center gap-4 rounded-2xl border ${tk.skeletonBorder} px-4 py-3 shadow-card animate-pulse`,
      children: [
        Array.from({ length: cols }).map((_, i) => /* @__PURE__ */ jsx26("div", { className: `flex-1 h-4 ${tk.skeletonPulse} rounded` }, i)),
        /* @__PURE__ */ jsx26("div", { className: `w-8 h-8 ${tk.skeletonPulse} rounded-full flex-shrink-0` })
      ]
    }
  );
}
function SortIcon({ direction, activeClass }) {
  if (direction === "asc") return /* @__PURE__ */ jsx26(ChevronUpIcon, { className: `h-3.5 w-3.5 ${activeClass}` });
  if (direction === "desc") return /* @__PURE__ */ jsx26(ChevronDownIcon2, { className: `h-3.5 w-3.5 ${activeClass}` });
  return /* @__PURE__ */ jsx26(ChevronDownIcon2, { className: "h-3.5 w-3.5 text-muted-foreground" });
}
function ServerDataTable({
  fetchData,
  columns,
  keyExtractor,
  pageSize = 10,
  renderExpandedRow,
  onApprove,
  onReject,
  appliedDateField,
  className = "",
  theme = "light"
}) {
  const tk = getThemeTokens(theme);
  const [status, setStatus] = useState8("active");
  const [search, setSearch] = useState8("");
  const [debouncedSearch, setDebouncedSearch] = useState8("");
  const [sortField, setSortField] = useState8(null);
  const [sortDirection, setSortDirection] = useState8(null);
  const [page, setPage] = useState8(1);
  const [data, setData] = useState8([]);
  const [total, setTotal] = useState8(0);
  const [loading, setLoading] = useState8(false);
  const [expandedRow, setExpandedRow] = useState8(null);
  const [notes, setNotes] = useState8({});
  const debounceRef = useRef6(null);
  useEffect7(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [search]);
  const load = useCallback4(async () => {
    setLoading(true);
    try {
      const result = await fetchData({
        page,
        pageSize,
        search: debouncedSearch,
        sortField,
        sortDirection,
        status
      });
      setData(result.data);
      setTotal(result.total);
    } catch (e) {
      setData([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [fetchData, page, pageSize, debouncedSearch, sortField, sortDirection, status]);
  useEffect7(() => {
    load();
  }, [load]);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const handleSort = (key) => {
    if (sortField === key) {
      if (sortDirection === "asc") setSortDirection("desc");
      else if (sortDirection === "desc") {
        setSortField(null);
        setSortDirection(null);
      } else setSortDirection("asc");
    } else {
      setSortField(key);
      setSortDirection("asc");
    }
    setPage(1);
  };
  const handleStatusToggle = (s) => {
    setStatus(s);
    setPage(1);
    setExpandedRow(null);
  };
  const toggleExpand = (key) => {
    setExpandedRow((prev) => prev === key ? null : key);
  };
  const getNote = (key) => {
    var _a;
    return (_a = notes[key]) != null ? _a : "";
  };
  const setNote = (key, val) => setNotes((prev) => __spreadProps(__spreadValues({}, prev), { [key]: val }));
  const colCount = columns.length;
  const colStyle = { flex: 1, minWidth: 0 };
  return /* @__PURE__ */ jsxs22("div", { className: `w-full ${className}`, children: [
    /* @__PURE__ */ jsx26("div", { className: "mb-5 flex justify-center", children: /* @__PURE__ */ jsxs22(
      "div",
      {
        className: `inline-flex overflow-hidden rounded-full border ${tk.toggleBorder} bg-background/70 p-1`,
        children: [
          /* @__PURE__ */ jsx26(
            "button",
            {
              onClick: () => handleStatusToggle("active"),
              className: `rounded-full px-7 py-2 text-sm font-semibold transition-colors focus:outline-none ${status === "active" ? tk.toggleActiveBg : tk.toggleInactiveBg}`,
              children: "Active"
            }
          ),
          /* @__PURE__ */ jsx26(
            "button",
            {
              onClick: () => handleStatusToggle("closed"),
              className: `rounded-full px-7 py-2 text-sm font-semibold transition-colors focus:outline-none ${status === "closed" ? tk.toggleActiveBg : tk.toggleInactiveBg}`,
              children: "Closed"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs22("div", { className: "relative mb-4 max-w-xs", children: [
      /* @__PURE__ */ jsx26(
        MagnifyingGlassIcon,
        {
          className: `pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${tk.searchIcon}`
        }
      ),
      /* @__PURE__ */ jsx26(
        "input",
        {
          type: "text",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search...",
          className: `w-full rounded-xl border ${tk.searchBorder} ${tk.searchBg} py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 ${tk.searchFocus}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs22(
      "div",
      {
        className: "mb-2 flex items-center gap-2 rounded-2xl px-4 py-3",
        style: { background: tk.headerBg },
        children: [
          columns.map((col) => /* @__PURE__ */ jsxs22(
            "div",
            {
              style: colStyle,
              className: `flex items-center gap-1 text-xs font-semibold ${tk.headerText} select-none ${col.sortable ? `cursor-pointer ${tk.headerHover}` : ""}`,
              onClick: () => col.sortable && handleSort(col.key),
              children: [
                /* @__PURE__ */ jsx26("span", { children: col.header }),
                col.sortable && /* @__PURE__ */ jsx26(
                  SortIcon,
                  {
                    direction: sortField === col.key ? sortDirection : null,
                    activeClass: tk.sortIconActive
                  }
                )
              ]
            },
            col.key
          )),
          /* @__PURE__ */ jsx26("div", { className: "w-9 flex-shrink-0" })
        ]
      }
    ),
    /* @__PURE__ */ jsx26("div", { children: loading ? Array.from({ length: pageSize > 5 ? 5 : pageSize }).map((_, i) => /* @__PURE__ */ jsx26(SkeletonRow, { cols: colCount, tk }, i)) : data.length === 0 ? /* @__PURE__ */ jsx26(
      "div",
      {
        className: `${tk.emptyBg} rounded-2xl border ${tk.emptyBorder} px-4 py-10 text-center text-sm shadow-card ${tk.emptyText}`,
        children: "No records found."
      }
    ) : data.map((row) => {
      var _a;
      const key = keyExtractor(row);
      const isExpanded = expandedRow === key;
      const appliedDate = appliedDateField ? String((_a = row[appliedDateField]) != null ? _a : "") : "";
      return /* @__PURE__ */ jsxs22("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsxs22(
          "div",
          {
            className: `${tk.rowBg} flex items-center gap-2 rounded-2xl border px-4 py-3 shadow-card transition-all ${isExpanded ? `${tk.rowExpandedBorder} rounded-b-none mb-0` : tk.rowBorder}`,
            children: [
              columns.map((col) => {
                var _a2;
                return /* @__PURE__ */ jsx26(
                  "div",
                  {
                    style: colStyle,
                    className: `text-sm ${tk.rowText} truncate`,
                    children: col.cell ? col.cell(row) : String((_a2 = row[col.key]) != null ? _a2 : "")
                  },
                  col.key
                );
              }),
              /* @__PURE__ */ jsx26(
                "button",
                {
                  onClick: () => toggleExpand(key),
                  "aria-label": isExpanded ? "Collapse row" : "Expand row",
                  className: `flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border ${tk.expandBtnBorder} transition-colors focus:outline-none focus:ring-2 ${tk.expandBtnFocus}`,
                  children: isExpanded ? /* @__PURE__ */ jsx26(ChevronUpIcon, { className: `h-4 w-4 ${tk.expandBtnIcon}` }) : /* @__PURE__ */ jsx26(ChevronDownIcon2, { className: `h-4 w-4 ${tk.expandBtnIcon}` })
                }
              )
            ]
          }
        ),
        isExpanded && /* @__PURE__ */ jsx26(
          "div",
          {
            className: `${tk.expandedBg} rounded-b-2xl border border-t-0 ${tk.expandedBorder} px-4 py-4`,
            children: renderExpandedRow ? renderExpandedRow(
              row,
              getNote(key),
              (v) => setNote(key, v),
              () => {
                onApprove == null ? void 0 : onApprove(row, getNote(key));
              },
              () => {
                onReject == null ? void 0 : onReject(row, getNote(key));
              }
            ) : /* @__PURE__ */ jsx26(
              DefaultExpandedContent,
              {
                note: getNote(key),
                onNoteChange: (v) => setNote(key, v),
                appliedDate,
                onApprove: () => onApprove == null ? void 0 : onApprove(row, getNote(key)),
                onReject: () => onReject == null ? void 0 : onReject(row, getNote(key)),
                tk
              }
            )
          }
        )
      ] }, key);
    }) }),
    !loading && total > 0 && /* @__PURE__ */ jsxs22("div", { className: "flex items-center justify-between mt-4 px-1", children: [
      /* @__PURE__ */ jsxs22("span", { className: `text-xs ${tk.paginationText}`, children: [
        "Showing ",
        Math.min((page - 1) * pageSize + 1, total),
        "\u2013",
        Math.min(page * pageSize, total),
        " ",
        "of ",
        total
      ] }),
      /* @__PURE__ */ jsxs22("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxs22(
          "button",
          {
            onClick: () => setPage((p) => Math.max(1, p - 1)),
            disabled: page === 1,
            className: `flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-medium ${tk.paginationBtn} disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 ease-in-out`,
            children: [
              /* @__PURE__ */ jsx26(ChevronLeftIcon2, { className: "h-3.5 w-3.5" }),
              "Previous"
            ]
          }
        ),
        Array.from({ length: totalPages }, (_, i) => i + 1).filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1).reduce((acc, p, idx, arr) => {
          if (idx > 0 && typeof arr[idx - 1] === "number" && p - arr[idx - 1] > 1) {
            acc.push("...");
          }
          acc.push(p);
          return acc;
        }, []).map(
          (p, idx) => p === "..." ? /* @__PURE__ */ jsx26("span", { className: `px-2 text-xs ${tk.paginationEllipsis}`, children: "\u2026" }, `ellipsis-${idx}`) : /* @__PURE__ */ jsx26(
            "button",
            {
              onClick: () => setPage(p),
              className: `h-8 w-8 rounded-lg text-xs font-medium transition-all duration-200 ease-in-out ${page === p ? tk.paginationActivePage : `border ${tk.paginationInactivePage}`}`,
              children: p
            },
            p
          )
        ),
        /* @__PURE__ */ jsxs22(
          "button",
          {
            onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
            disabled: page === totalPages,
            className: `flex items-center gap-1 rounded-lg border px-3 py-1.5 text-xs font-medium ${tk.paginationBtn} disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 ease-in-out`,
            children: [
              "Next",
              /* @__PURE__ */ jsx26(ChevronRightIcon2, { className: "h-3.5 w-3.5" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function DefaultExpandedContent({
  note,
  onNoteChange,
  appliedDate,
  onApprove,
  onReject,
  tk
}) {
  return /* @__PURE__ */ jsxs22("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs22("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx26("span", { className: `text-sm font-medium ${tk.noteLabel} w-12 flex-shrink-0`, children: "Note" }),
      /* @__PURE__ */ jsx26(
        "input",
        {
          type: "text",
          value: note,
          onChange: (e) => onNoteChange(e.target.value),
          placeholder: "Reason",
          className: `max-w-sm flex-1 rounded-xl border ${tk.noteInputBorder} ${tk.noteInputBg} px-3 py-2 text-sm focus:outline-none focus:ring-2 ${tk.noteInputFocus}`
        }
      )
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs22("span", { className: `text-sm ${tk.appliedText}`, children: [
        "Applied on: ",
        /* @__PURE__ */ jsx26("strong", { children: appliedDate || "dd mm, yyyy" })
      ] }),
      /* @__PURE__ */ jsxs22("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx26(
          "button",
          {
            onClick: onReject,
            className: "rounded-xl border border-destructive bg-destructive px-5 py-2 text-sm font-semibold text-destructive-foreground transition-all duration-200 ease-in-out hover:bg-destructive/92 focus:outline-none focus:ring-2 focus:ring-ring/30",
            children: "Reject"
          }
        ),
        /* @__PURE__ */ jsx26(
          "button",
          {
            onClick: onApprove,
            className: "rounded-xl border border-success bg-success px-5 py-2 text-white text-sm font-semibold transition-all duration-200 ease-in-out hover:bg-success/90 focus:outline-none focus:ring-2 focus:ring-ring/30",
            children: "Approve"
          }
        )
      ] })
    ] })
  ] });
}

// src/components/Skeleton/Skeleton.tsx
import { jsx as jsx27, jsxs as jsxs23 } from "react/jsx-runtime";
var Skeleton = (_a) => {
  var _b = _a, {
    className,
    variant = "rect",
    width,
    height,
    lines = 1,
    animated = true,
    style
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "width",
    "height",
    "lines",
    "animated",
    "style"
  ]);
  const base = cn("rounded-lg bg-muted/80", animated && "animate-pulse", className);
  if (variant === "text" && lines > 1) {
    return /* @__PURE__ */ jsx27("div", __spreadProps(__spreadValues({ className: "flex flex-col gap-2" }, props), { children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx27(
      "div",
      {
        className: cn(base, "h-4"),
        style: { width: i === lines - 1 ? "75%" : "100%" }
      },
      i
    )) }));
  }
  return /* @__PURE__ */ jsx27(
    "div",
    __spreadValues({
      className: cn(base, variant === "circle" && "rounded-full", variant === "text" && "h-4"),
      style: __spreadValues({
        width: width ? typeof width === "number" ? `${width}px` : width : void 0,
        height: height ? typeof height === "number" ? `${height}px` : height : void 0
      }, style),
      "aria-hidden": "true"
    }, props)
  );
};
var SkeletonCard = ({ className }) => /* @__PURE__ */ jsxs23(
  "div",
  {
    className: cn("space-y-3 rounded-2xl border border-border bg-card p-5 shadow-card", className),
    children: [
      /* @__PURE__ */ jsxs23("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx27(Skeleton, { variant: "circle", width: 40, height: 40 }),
        /* @__PURE__ */ jsxs23("div", { className: "flex-1 space-y-2", children: [
          /* @__PURE__ */ jsx27(Skeleton, { variant: "text", width: "60%", height: 16 }),
          /* @__PURE__ */ jsx27(Skeleton, { variant: "text", width: "40%", height: 12 })
        ] })
      ] }),
      /* @__PURE__ */ jsx27(Skeleton, { variant: "text", lines: 3 }),
      /* @__PURE__ */ jsxs23("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsx27(Skeleton, { width: 80, height: 32 }),
        /* @__PURE__ */ jsx27(Skeleton, { width: 80, height: 32 })
      ] })
    ]
  }
);
SkeletonCard.displayName = "SkeletonCard";
Skeleton.displayName = "Skeleton";
var Skeleton_default = Skeleton;

// src/components/Spinner/Spinner.tsx
import { cva as cva10 } from "class-variance-authority";
import { jsx as jsx28, jsxs as jsxs24 } from "react/jsx-runtime";
var spinnerVariants = cva10(
  "animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        xs: "h-3 w-3 border",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8 border-[3px]",
        xl: "h-12 w-12 border-4"
      },
      color: {
        primary: "text-primary",
        white: "text-white",
        muted: "text-muted-foreground",
        success: "text-success",
        warning: "text-warning",
        danger: "text-destructive"
      }
    },
    defaultVariants: { size: "md", color: "primary" }
  }
);
var Spinner = (_a) => {
  var _b = _a, {
    className,
    size,
    color,
    label = "Loading\u2026"
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "color",
    "label"
  ]);
  return /* @__PURE__ */ jsxs24(
    "div",
    __spreadProps(__spreadValues({
      role: "status",
      "aria-label": label,
      className: cn("inline-flex items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsx28("div", { className: cn(spinnerVariants({ size, color })) }),
        /* @__PURE__ */ jsx28("span", { className: "sr-only", children: label })
      ]
    })
  );
};
Spinner.displayName = "Spinner";
var Spinner_default = Spinner;

// src/components/Switch/Switch.tsx
import { forwardRef as forwardRef9, useId as useId9 } from "react";
import { jsx as jsx29, jsxs as jsxs25 } from "react/jsx-runtime";
var sizeMap8 = {
  sm: { track: "h-5 w-8", thumb: "h-3.5 w-3.5", translate: "1rem", label: "text-xs" },
  md: { track: "h-6 w-10", thumb: "h-4.5 w-4.5", translate: "1.125rem", label: "text-sm" },
  lg: { track: "h-7 w-12", thumb: "h-5.5 w-5.5", translate: "1.25rem", label: "text-base" }
};
var Switch = forwardRef9(
  (_a, ref) => {
    var _b = _a, {
      className,
      label,
      description,
      size = "md",
      labelPlacement = "right",
      checked,
      disabled,
      id
    } = _b, props = __objRest(_b, [
      "className",
      "label",
      "description",
      "size",
      "labelPlacement",
      "checked",
      "disabled",
      "id"
    ]);
    const generatedId = useId9();
    const switchId = id || `switch-${generatedId}`;
    const s = sizeMap8[size];
    const track = /* @__PURE__ */ jsx29(
      "div",
      {
        className: cn(
          "relative inline-flex items-center rounded-full border-2 transition-all duration-200 ease-out cursor-pointer",
          s.track,
          checked ? "border-primary bg-primary" : "border-input bg-muted/80",
          disabled && "opacity-50 cursor-not-allowed"
        ),
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsx29(
          "span",
          {
            style: { "--switch-translate": s.translate },
            className: cn(
              "inline-block rounded-full bg-background shadow-sm transition-transform duration-200 ease-out",
              s.thumb,
              checked ? "translate-x-[var(--switch-translate)]" : "translate-x-0.5"
            )
          }
        )
      }
    );
    const labelEl = label && /* @__PURE__ */ jsxs25("span", { className: cn("font-medium text-foreground", s.label), children: [
      label,
      description && /* @__PURE__ */ jsx29("span", { className: "block text-xs text-muted-foreground font-normal mt-0.5", children: description })
    ] });
    return /* @__PURE__ */ jsxs25(
      "label",
      {
        htmlFor: switchId,
        className: cn(
          "inline-flex items-start gap-2.5 cursor-pointer",
          disabled && "cursor-not-allowed opacity-50",
          className
        ),
        children: [
          /* @__PURE__ */ jsx29(
            "input",
            __spreadValues({
              ref,
              id: switchId,
              type: "checkbox",
              role: "switch",
              checked,
              disabled,
              className: "sr-only",
              "aria-checked": checked
            }, props)
          ),
          labelPlacement === "left" && labelEl,
          track,
          labelPlacement === "right" && labelEl
        ]
      }
    );
  }
);
Switch.displayName = "Switch";
var Switch_default = Switch;

// src/components/Tag/Tag.tsx
import { X as X6 } from "lucide-react";
import { jsx as jsx30, jsxs as jsxs26 } from "react/jsx-runtime";
var colorMap2 = {
  default: "border-border/80 bg-muted/60 text-foreground",
  blue: "border-info/20 bg-info-soft text-info",
  green: "border-success/20 bg-success-soft text-success",
  red: "border-destructive/20 bg-destructive-soft text-destructive",
  amber: "border-warning/20 bg-warning-soft text-warning-foreground",
  purple: "border-primary/20 bg-accent text-accent-foreground",
  pink: "border-border/60 bg-secondary text-secondary-foreground"
};
var sizeMap9 = {
  sm: "h-5 px-1.5 text-[10px] gap-1 tracking-wide",
  md: "h-6 px-2 text-xs gap-1",
  lg: "h-7 px-2.5 text-xs gap-1.5"
};
var Tag = (_a) => {
  var _b = _a, {
    className,
    size = "md",
    variant: _variant = "default",
    color = "default",
    removable,
    onRemove,
    icon,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "variant",
    "color",
    "removable",
    "onRemove",
    "icon",
    "children"
  ]);
  return /* @__PURE__ */ jsxs26(
    "span",
    __spreadProps(__spreadValues({
      className: cn(
        "inline-flex items-center rounded-xl border font-medium transition-colors",
        sizeMap9[size],
        colorMap2[color],
        className
      )
    }, props), {
      children: [
        icon && /* @__PURE__ */ jsx30("span", { className: "shrink-0", children: icon }),
        /* @__PURE__ */ jsx30("span", { children }),
        removable && /* @__PURE__ */ jsx30(
          "button",
          {
            type: "button",
            onClick: onRemove,
            className: "ml-0.5 shrink-0 rounded-md p-0.5 transition-opacity hover:bg-foreground/5 hover:opacity-70",
            "aria-label": `Remove ${children} tag`,
            children: /* @__PURE__ */ jsx30(X6, { className: "h-3 w-3" })
          }
        )
      ]
    })
  );
};
Tag.displayName = "Tag";
var Tag_default = Tag;

// src/components/Tooltip/Tooltip.tsx
import { useState as useState9, useRef as useRef7, useCallback as useCallback5 } from "react";
import { jsx as jsx31, jsxs as jsxs27 } from "react/jsx-runtime";
var placementStyles2 = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
var arrowStyles = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-foreground border-x-transparent border-b-transparent border-4",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-foreground border-x-transparent border-t-transparent border-4",
  left: "left-full top-1/2 -translate-y-1/2 border-l-foreground border-y-transparent border-r-transparent border-4",
  right: "right-full top-1/2 -translate-y-1/2 border-r-foreground border-y-transparent border-l-transparent border-4"
};
var Tooltip = ({
  content,
  children,
  placement = "top",
  delay = 200,
  className,
  maxWidth = "200px",
  disabled = false
}) => {
  const [visible, setVisible] = useState9(false);
  const timerRef = useRef7(null);
  const show = useCallback5(() => {
    if (disabled) return;
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay, disabled]);
  const hide = useCallback5(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }, []);
  return /* @__PURE__ */ jsxs27(
    "div",
    {
      className: "relative inline-flex",
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      children: [
        children,
        visible && /* @__PURE__ */ jsxs27(
          "div",
          {
            role: "tooltip",
            className: cn(
              "pointer-events-none absolute z-50 whitespace-nowrap rounded-lg border-0 bg-foreground px-2.5 py-1.5 text-xs font-medium text-background shadow-lg animate-fade-in",
              placementStyles2[placement],
              className
            ),
            style: { maxWidth },
            children: [
              content,
              /* @__PURE__ */ jsx31("span", { className: cn("absolute border", arrowStyles[placement]), "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
};
Tooltip.displayName = "Tooltip";
var Tooltip_default = Tooltip;

// src/components/admin/Topbar/Topbar.tsx
import { forwardRef as forwardRef10 } from "react";
import { Bell, Search, User as User2, Menu, X as X7 } from "lucide-react";
import { jsx as jsx32, jsxs as jsxs28 } from "react/jsx-runtime";
var Topbar = forwardRef10(
  (_a, ref) => {
    var _b = _a, {
      className,
      title = "Dashboard",
      onSearchChange,
      onMenuToggle,
      menuOpen = false,
      notifications = 0,
      onNotifications,
      onProfile,
      profileImage,
      userName
    } = _b, props = __objRest(_b, [
      "className",
      "title",
      "onSearchChange",
      "onMenuToggle",
      "menuOpen",
      "notifications",
      "onNotifications",
      "onProfile",
      "profileImage",
      "userName"
    ]);
    return /* @__PURE__ */ jsx32(
      "header",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "w-full border-b border-white/20 bg-white/70 px-4 py-3 backdrop-blur-xl dark:border-border/70 dark:bg-card/70 sm:px-6",
          className
        )
      }, props), {
        children: /* @__PURE__ */ jsxs28("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs28("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx32(
              "button",
              {
                onClick: onMenuToggle,
                className: "rounded-xl p-2 transition-colors hover:bg-muted lg:hidden",
                "aria-label": menuOpen ? "Close menu" : "Open menu",
                children: menuOpen ? /* @__PURE__ */ jsx32(X7, { className: "h-5 w-5 text-muted-foreground" }) : /* @__PURE__ */ jsx32(Menu, { className: "h-5 w-5 text-muted-foreground" })
              }
            ),
            /* @__PURE__ */ jsx32("h1", { className: "text-lg font-semibold text-foreground", children: title })
          ] }),
          onSearchChange && /* @__PURE__ */ jsx32("div", { className: "hidden md:flex flex-1 max-w-sm", children: /* @__PURE__ */ jsxs28("div", { className: "relative w-full", children: [
            /* @__PURE__ */ jsx32(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx32(
              "input",
              {
                type: "text",
                placeholder: "Search...",
                onChange: (e) => onSearchChange(e.target.value),
                className: "w-full rounded-xl border border-border bg-background pl-10 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/25"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs28("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs28(
              "button",
              {
                onClick: onNotifications,
                className: "relative rounded-xl p-2 transition-colors hover:bg-muted",
                "aria-label": "Notifications",
                children: [
                  /* @__PURE__ */ jsx32(Bell, { className: "h-5 w-5 text-muted-foreground" }),
                  notifications > 0 && /* @__PURE__ */ jsx32("span", { className: "absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs28(
              "button",
              {
                onClick: onProfile,
                className: "flex items-center gap-2 rounded-xl p-1.5 transition-colors hover:bg-muted",
                "aria-label": "Profile menu",
                children: [
                  profileImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    /* @__PURE__ */ jsx32(
                      "img",
                      {
                        src: profileImage,
                        alt: userName || "User",
                        className: "h-6 w-6 rounded-full object-cover"
                      }
                    )
                  ) : /* @__PURE__ */ jsx32(User2, { className: "h-5 w-5 text-muted-foreground" }),
                  userName && /* @__PURE__ */ jsx32("span", { className: "hidden text-sm font-medium text-foreground sm:inline", children: userName })
                ]
              }
            )
          ] })
        ] })
      })
    );
  }
);
Topbar.displayName = "Topbar";
var Topbar_default = Topbar;

// src/components/admin/AdminSidebar/AdminSidebar.tsx
import { forwardRef as forwardRef11 } from "react";
import { Menu as Menu2, X as X8 } from "lucide-react";
import { jsx as jsx33, jsxs as jsxs29 } from "react/jsx-runtime";
var AdminSidebar = forwardRef11(
  (_a, ref) => {
    var _b = _a, {
      className,
      collapsed = false,
      onToggle,
      navigation = [],
      activeItem,
      onNavigate,
      children
    } = _b, props = __objRest(_b, [
      "className",
      "collapsed",
      "onToggle",
      "navigation",
      "activeItem",
      "onNavigate",
      "children"
    ]);
    return /* @__PURE__ */ jsxs29(
      "aside",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "flex flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-200",
          collapsed ? "w-20" : "w-64",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsxs29("div", { className: "flex items-center justify-between border-b border-sidebar-border p-4", children: [
            /* @__PURE__ */ jsx33("h1", { className: cn("font-bold transition-all", collapsed ? "text-xs" : "text-lg"), children: collapsed ? "UI" : "@shubh/ui" }),
            /* @__PURE__ */ jsx33(
              "button",
              {
                onClick: onToggle,
                className: "rounded-xl p-2 transition-colors hover:bg-sidebar-accent",
                "aria-label": collapsed ? "Expand" : "Collapse",
                children: collapsed ? /* @__PURE__ */ jsx33(Menu2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx33(X8, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx33("nav", { className: "flex-1 space-y-1 overflow-y-auto px-3 py-4", children: navigation.map((item) => /* @__PURE__ */ jsxs29("div", { children: [
            /* @__PURE__ */ jsxs29(
              "button",
              {
                onClick: () => onNavigate == null ? void 0 : onNavigate(item.id),
                className: cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                  activeItem === item.id ? "bg-primary text-primary-foreground" : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                ),
                children: [
                  item.icon && /* @__PURE__ */ jsx33("span", { className: "flex-shrink-0", children: item.icon }),
                  !collapsed && /* @__PURE__ */ jsx33("span", { className: "text-sm font-medium", children: item.label })
                ]
              }
            ),
            item.children && !collapsed && /* @__PURE__ */ jsx33("div", { className: "ml-3 mt-1 space-y-1", children: item.children.map((child) => /* @__PURE__ */ jsx33(
              "button",
              {
                onClick: () => onNavigate == null ? void 0 : onNavigate(child.id),
                className: cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-xs transition-colors",
                  activeItem === child.id ? "bg-primary/80 text-primary-foreground" : "text-sidebar-foreground/65 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                ),
                children: child.label
              },
              child.id
            )) })
          ] }, item.id)) }),
          children && /* @__PURE__ */ jsx33("div", { className: "border-t border-sidebar-border p-4", children })
        ]
      })
    );
  }
);
AdminSidebar.displayName = "AdminSidebar";
var AdminSidebar_default = AdminSidebar;

// src/components/admin/StatsCard/StatsCard.tsx
import { forwardRef as forwardRef12 } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { jsx as jsx34, jsxs as jsxs30 } from "react/jsx-runtime";
var variantStyles = {
  default: "bg-card border-border text-card-foreground",
  primary: "bg-accent border-primary/20 text-accent-foreground",
  success: "bg-success-soft border-success-border text-success",
  warning: "bg-warning-soft border-warning-border text-warning-foreground",
  danger: "bg-destructive-soft border-destructive-border text-destructive"
};
var iconBgVariants = {
  default: "bg-muted",
  primary: "bg-accent",
  success: "bg-success-soft",
  warning: "bg-warning-soft",
  danger: "bg-destructive-soft"
};
var trendColorVariants = {
  up: "text-success",
  down: "text-destructive"
};
var StatsCard = forwardRef12(
  (_a, ref) => {
    var _b = _a, {
      className,
      title,
      value,
      subtitle,
      icon,
      trend,
      trendPercent,
      trendLabel,
      variant = "default"
    } = _b, props = __objRest(_b, [
      "className",
      "title",
      "value",
      "subtitle",
      "icon",
      "trend",
      "trendPercent",
      "trendLabel",
      "variant"
    ]);
    return /* @__PURE__ */ jsx34(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "rounded-2xl border p-6 shadow-card transition-colors hover:border-foreground/10",
          variantStyles[variant],
          className
        )
      }, props), {
        children: /* @__PURE__ */ jsxs30("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxs30("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx34("p", { className: "text-sm font-medium text-muted-foreground", children: title }),
            /* @__PURE__ */ jsxs30("div", { className: "mt-2 flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsx34("p", { className: "text-2xl font-bold", children: value }),
              subtitle && /* @__PURE__ */ jsx34("p", { className: "text-xs text-muted-foreground", children: subtitle })
            ] }),
            trend && trendPercent && /* @__PURE__ */ jsxs30(
              "div",
              {
                className: cn(
                  "mt-2 flex items-center gap-1 text-sm font-medium",
                  trendColorVariants[trend]
                ),
                children: [
                  trend === "up" ? /* @__PURE__ */ jsx34(TrendingUp, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx34(TrendingDown, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxs30("span", { children: [
                    trendPercent,
                    "%"
                  ] }),
                  trendLabel && /* @__PURE__ */ jsx34("span", { className: "text-muted-foreground", children: trendLabel })
                ]
              }
            )
          ] }),
          icon && /* @__PURE__ */ jsx34("div", { className: cn("rounded-lg p-3", iconBgVariants[variant]), children: icon })
        ] })
      })
    );
  }
);
StatsCard.displayName = "StatsCard";
var StatsCard_default = StatsCard;

// src/layout/Navbar/Navbar.tsx
import { forwardRef as forwardRef13 } from "react";
import { jsx as jsx35 } from "react/jsx-runtime";
var Navbar = forwardRef13(
  (_a, ref) => {
    var _b = _a, { className, sticky = false, children } = _b, props = __objRest(_b, ["className", "sticky", "children"]);
    return /* @__PURE__ */ jsx35(
      "header",
      __spreadProps(__spreadValues({
        ref,
        role: "banner",
        className: cn(
          "w-full border-b border-border/60 bg-surface/80 px-4 py-0 backdrop-blur-xl sm:px-6",
          sticky && "sticky top-0 z-40",
          className
        )
      }, props), {
        children: /* @__PURE__ */ jsx35("div", { className: "mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4", children })
      })
    );
  }
);
Navbar.displayName = "Navbar";
var Navbar_default = Navbar;

// src/layout/Sidebar/Sidebar.tsx
import { forwardRef as forwardRef14 } from "react";
import { jsx as jsx36 } from "react/jsx-runtime";
var Sidebar = forwardRef14(
  (_a, ref) => {
    var _b = _a, { className, collapsed = false, children } = _b, props = __objRest(_b, ["className", "collapsed", "children"]);
    return /* @__PURE__ */ jsx36(
      "aside",
      __spreadProps(__spreadValues({
        ref,
        role: "complementary",
        className: cn(
          "h-full border-r border-sidebar-border bg-sidebar px-2 py-3 text-sidebar-foreground transition-all duration-200",
          collapsed ? "w-[60px]" : "w-60",
          className
        )
      }, props), {
        children: /* @__PURE__ */ jsx36("nav", { "aria-label": "Sidebar navigation", className: "flex h-full flex-col gap-0.5", children })
      })
    );
  }
);
Sidebar.displayName = "Sidebar";
var Sidebar_default = Sidebar;

// src/layout/DashboardShell.tsx
import { forwardRef as forwardRef15 } from "react";
import { jsx as jsx37, jsxs as jsxs31 } from "react/jsx-runtime";
var DashboardShell = forwardRef15(
  (_a, ref) => {
    var _b = _a, { className, sidebar, header, aside, children, contentClassName } = _b, props = __objRest(_b, ["className", "sidebar", "header", "aside", "children", "contentClassName"]);
    return /* @__PURE__ */ jsxs31(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "grid min-h-screen grid-cols-1 bg-background text-foreground lg:grid-cols-[18rem_minmax(0,1fr)]",
          className
        )
      }, props), {
        children: [
          sidebar ? /* @__PURE__ */ jsx37("aside", { className: "hidden border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex lg:flex-col", children: sidebar }) : null,
          /* @__PURE__ */ jsxs31("div", { className: "flex min-w-0 flex-col", children: [
            header ? /* @__PURE__ */ jsx37("header", { className: "sticky top-0 z-30 border-b border-border bg-background/88 backdrop-blur-xl", children: header }) : null,
            /* @__PURE__ */ jsxs31(
              "div",
              {
                className: cn(
                  "grid flex-1 grid-cols-1 gap-2xl px-4 py-2xl sm:px-6 xl:grid-cols-[minmax(0,1fr)_20rem]",
                  contentClassName
                ),
                children: [
                  /* @__PURE__ */ jsx37("main", { className: "min-w-0", children }),
                  aside ? /* @__PURE__ */ jsx37("aside", { className: "hidden xl:block", children: aside }) : null
                ]
              }
            )
          ] })
        ]
      })
    );
  }
);
DashboardShell.displayName = "DashboardShell";
var DashboardShell_default = DashboardShell;

// src/primitives/Box.tsx
import { forwardRef as forwardRef16 } from "react";
import { jsx as jsx38 } from "react/jsx-runtime";
var Box = forwardRef16((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx38("div", __spreadValues({ ref, className: cn(className) }, props));
});
Box.displayName = "Box";
var Box_default = Box;

// src/primitives/Heading.tsx
import { forwardRef as forwardRef17 } from "react";
import { cva as cva11 } from "class-variance-authority";
import { jsx as jsx39 } from "react/jsx-runtime";
var headingVariants = cva11("font-display font-semibold tracking-tight text-foreground", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
      xl: "text-3xl"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var Heading = forwardRef17(
  (_a, ref) => {
    var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
    return /* @__PURE__ */ jsx39("h2", __spreadValues({ ref, className: cn(headingVariants({ size }), className) }, props));
  }
);
Heading.displayName = "Heading";
var Heading_default = Heading;

// src/primitives/Inline.tsx
import { forwardRef as forwardRef18 } from "react";
import { cva as cva12 } from "class-variance-authority";
import { jsx as jsx40 } from "react/jsx-runtime";
var inlineVariants = cva12("flex flex-wrap items-center", {
  variants: {
    gap: {
      xs: "gap-xs",
      sm: "gap-sm",
      md: "gap-md",
      lg: "gap-lg",
      xl: "gap-xl"
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      between: "justify-between",
      end: "justify-end"
    }
  },
  defaultVariants: {
    gap: "md",
    justify: "start"
  }
});
var Inline = forwardRef18(
  (_a, ref) => {
    var _b = _a, { className, gap, justify } = _b, props = __objRest(_b, ["className", "gap", "justify"]);
    return /* @__PURE__ */ jsx40("div", __spreadValues({ ref, className: cn(inlineVariants({ gap, justify }), className) }, props));
  }
);
Inline.displayName = "Inline";
var Inline_default = Inline;

// src/primitives/Stack.tsx
import { forwardRef as forwardRef19 } from "react";
import { cva as cva13 } from "class-variance-authority";
import { jsx as jsx41 } from "react/jsx-runtime";
var stackVariants = cva13("flex flex-col", {
  variants: {
    gap: {
      xs: "gap-xs",
      sm: "gap-sm",
      md: "gap-md",
      lg: "gap-lg",
      xl: "gap-xl",
      "2xl": "gap-2xl"
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch"
    }
  },
  defaultVariants: {
    gap: "md",
    align: "stretch"
  }
});
var Stack = forwardRef19((_a, ref) => {
  var _b = _a, { className, gap, align } = _b, props = __objRest(_b, ["className", "gap", "align"]);
  return /* @__PURE__ */ jsx41("div", __spreadValues({ ref, className: cn(stackVariants({ gap, align }), className) }, props));
});
Stack.displayName = "Stack";
var Stack_default = Stack;

// src/primitives/Surface.tsx
import { forwardRef as forwardRef20 } from "react";
import { cva as cva14 } from "class-variance-authority";
import { jsx as jsx42 } from "react/jsx-runtime";
var surfaceVariants = cva14("border text-foreground shadow-card", {
  variants: {
    variant: {
      default: "border-border bg-surface",
      elevated: "border-border bg-surface-elevated shadow-card-md",
      muted: "border-border bg-surface-muted",
      sidebar: "border-sidebar-border bg-sidebar text-sidebar-foreground",
      ghost: "border-transparent bg-transparent shadow-none"
    },
    radius: {
      md: "rounded-md",
      lg: "rounded-xl",
      xl: "rounded-2xl"
    },
    padding: {
      none: "p-0",
      sm: "p-lg",
      md: "p-xl",
      lg: "p-2xl"
    }
  },
  defaultVariants: {
    variant: "default",
    radius: "lg",
    padding: "md"
  }
});
var Surface = forwardRef20(
  (_a, ref) => {
    var _b = _a, { className, variant, radius, padding } = _b, props = __objRest(_b, ["className", "variant", "radius", "padding"]);
    return /* @__PURE__ */ jsx42(
      "div",
      __spreadValues({
        ref,
        className: cn(surfaceVariants({ variant, radius, padding }), className)
      }, props)
    );
  }
);
Surface.displayName = "Surface";
var Surface_default = Surface;

// src/primitives/Text.tsx
import { forwardRef as forwardRef21 } from "react";
import { cva as cva15 } from "class-variance-authority";
import { jsx as jsx43 } from "react/jsx-runtime";
var textVariants = cva15("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg"
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      subtle: "text-foreground/72",
      accent: "text-accent-foreground"
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    }
  },
  defaultVariants: {
    size: "base",
    tone: "default",
    weight: "regular"
  }
});
var Text = forwardRef21(
  (_a, ref) => {
    var _b = _a, { className, size, tone, weight } = _b, props = __objRest(_b, ["className", "size", "tone", "weight"]);
    return /* @__PURE__ */ jsx43("p", __spreadValues({ ref, className: cn(textVariants({ size, tone, weight }), className) }, props));
  }
);
Text.displayName = "Text";
var Text_default = Text;

// src/theme/theme-provider.tsx
import { createContext, useContext, useEffect as useEffect8, useMemo as useMemo2, useState as useState10 } from "react";

// src/theme/tokens.ts
var baseSpacingTokens = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  "4xl": "2.5rem",
  "5xl": "3rem"
};
var baseRadiusTokens = {
  sm: "0.625rem",
  md: "0.875rem",
  lg: "1.125rem",
  xl: "1.5rem",
  pill: "999px"
};
var baseTypographyTokens = {
  fontSans: "'Plus Jakarta Sans', 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontDisplay: "'Plus Jakarta Sans', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontMono: "'IBM Plex Mono', monospace",
  textXs: "0.75rem",
  leadingXs: "1rem",
  textSm: "0.875rem",
  leadingSm: "1.25rem",
  textBase: "1rem",
  leadingBase: "1.5rem",
  textLg: "1.125rem",
  leadingLg: "1.75rem",
  textXl: "1.375rem",
  leadingXl: "1.875rem",
  text2xl: "1.75rem",
  leading2xl: "2.125rem",
  text3xl: "2.25rem",
  leading3xl: "2.75rem"
};
function createTokens(colors) {
  return {
    colors,
    spacing: __spreadValues({}, baseSpacingTokens),
    radius: __spreadValues({}, baseRadiusTokens),
    typography: __spreadValues({}, baseTypographyTokens)
  };
}

// src/theme/themes.ts
var designThemes = [
  {
    id: "light",
    name: "Cloud",
    description: "Neutral enterprise surface with crisp blue brand accents.",
    tokens: createTokens({
      background: "#f5f7fb",
      foreground: "#0f172a",
      surface: "#ffffff",
      surfaceElevated: "#ffffff",
      surfaceMuted: "#eef2f7",
      border: "#d8e0ea",
      input: "#cbd5e1",
      ring: "#2563eb",
      primary: "#2563eb",
      primaryForeground: "#ffffff",
      secondary: "#dbe7ff",
      secondaryForeground: "#16315f",
      accent: "#eaf2ff",
      accentForeground: "#17315d",
      muted: "#e8edf5",
      mutedForeground: "#5b6b82",
      destructive: "#dc2626",
      destructiveForeground: "#ffffff",
      destructiveSoft: "#fef2f2",
      destructiveBorder: "#fecaca",
      success: "#10b981",
      successForeground: "#ffffff",
      successSoft: "#ecfdf5",
      successBorder: "#a7f3d0",
      warning: "#f59e0b",
      warningForeground: "#422006",
      warningSoft: "#fffbeb",
      warningBorder: "#fde68a",
      info: "#0ea5e9",
      infoForeground: "#ffffff",
      infoSoft: "#f0f9ff",
      infoBorder: "#bae6fd",
      overlay: "#020617",
      shadow: "#020617",
      sidebar: "#ffffff",
      sidebarForeground: "#0f172a",
      sidebarAccent: "#eff6ff",
      sidebarBorder: "#d8e0ea"
    })
  },
  {
    id: "navy",
    name: "Navy",
    description: "Deep product shell inspired by finance and analytics dashboards.",
    tokens: createTokens({
      background: "#061024",
      foreground: "#eef4ff",
      surface: "#0d1831",
      surfaceElevated: "#132244",
      surfaceMuted: "#172344",
      border: "#25365c",
      input: "#25365c",
      ring: "#7ab0ff",
      primary: "#7ab0ff",
      primaryForeground: "#081124",
      secondary: "#16213e",
      secondaryForeground: "#eef4ff",
      accent: "#172344",
      accentForeground: "#eef4ff",
      muted: "#14213a",
      mutedForeground: "#9fb1d1",
      destructive: "#ff7a7a",
      destructiveForeground: "#081124",
      destructiveSoft: "#35131a",
      destructiveBorder: "#6b2530",
      success: "#34d399",
      successForeground: "#042f1f",
      successSoft: "#0d3026",
      successBorder: "#185240",
      warning: "#fbbf24",
      warningForeground: "#3b2502",
      warningSoft: "#33240a",
      warningBorder: "#6b4e17",
      info: "#38bdf8",
      infoForeground: "#082f49",
      infoSoft: "#0d2e40",
      infoBorder: "#1f5572",
      overlay: "#010511",
      shadow: "#000000",
      sidebar: "#040a19",
      sidebarForeground: "#eef4ff",
      sidebarAccent: "#172344",
      sidebarBorder: "#25365c"
    })
  },
  {
    id: "graphite",
    name: "Graphite",
    description: "Subtle dark theme tuned for product teams and editorial tooling.",
    tokens: createTokens({
      background: "#0e1116",
      foreground: "#f3f4f6",
      surface: "#161b22",
      surfaceElevated: "#1d2430",
      surfaceMuted: "#202938",
      border: "#313b4d",
      input: "#313b4d",
      ring: "#60a5fa",
      primary: "#60a5fa",
      primaryForeground: "#08111f",
      secondary: "#1d2430",
      secondaryForeground: "#f3f4f6",
      accent: "#263041",
      accentForeground: "#f3f4f6",
      muted: "#202938",
      mutedForeground: "#9ba4b4",
      destructive: "#f87171",
      destructiveForeground: "#1f1111",
      destructiveSoft: "#321616",
      destructiveBorder: "#5c2525",
      success: "#22c55e",
      successForeground: "#06260f",
      successSoft: "#122b1a",
      successBorder: "#245433",
      warning: "#fbbf24",
      warningForeground: "#3b2502",
      warningSoft: "#32270d",
      warningBorder: "#604c1e",
      info: "#38bdf8",
      infoForeground: "#082f49",
      infoSoft: "#102939",
      infoBorder: "#24556f",
      overlay: "#020617",
      shadow: "#000000",
      sidebar: "#11161d",
      sidebarForeground: "#f3f4f6",
      sidebarAccent: "#202938",
      sidebarBorder: "#313b4d"
    })
  }
];
var designThemeMap = Object.fromEntries(designThemes.map((theme) => [theme.id, theme]));

// src/theme/theme-provider.tsx
import { jsx as jsx44 } from "react/jsx-runtime";
var ThemeContext = createContext(null);
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function normalizeHex(value) {
  const input = value.trim();
  const hex = input.startsWith("#") ? input.slice(1) : input;
  if (hex.length === 3) {
    return `#${hex.split("").map((char) => `${char}${char}`).join("")}`;
  }
  return `#${hex.slice(0, 6)}`;
}
function hexToHsl(hexValue) {
  const hex = normalizeHex(hexValue).replace("#", "");
  const red = parseInt(hex.slice(0, 2), 16) / 255;
  const green = parseInt(hex.slice(2, 4), 16) / 255;
  const blue = parseInt(hex.slice(4, 6), 16) / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;
  if (max === min) {
    return `0 0% ${Math.round(lightness * 100)}%`;
  }
  const delta = max - min;
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  let hue = 0;
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  hue /= 6;
  return `${Math.round(hue * 360)} ${Math.round(saturation * 100)}% ${Math.round(lightness * 100)}%`;
}
function mergeTheme(theme, overrides) {
  return __spreadProps(__spreadValues({}, theme), {
    tokens: __spreadProps(__spreadValues({}, theme.tokens), {
      colors: __spreadValues(__spreadValues({}, theme.tokens.colors), overrides.colors),
      radius: __spreadValues(__spreadValues({}, theme.tokens.radius), overrides.radius)
    })
  });
}
function applyThemeToRoot(root, theme) {
  const { colors, spacing, radius, typography } = theme.tokens;
  const variableMap = {
    "--background": hexToHsl(colors.background),
    "--foreground": hexToHsl(colors.foreground),
    "--surface": hexToHsl(colors.surface),
    "--surface-elevated": hexToHsl(colors.surfaceElevated),
    "--surface-muted": hexToHsl(colors.surfaceMuted),
    "--card": hexToHsl(colors.surface),
    "--card-foreground": hexToHsl(colors.foreground),
    "--popover": hexToHsl(colors.surfaceElevated),
    "--popover-foreground": hexToHsl(colors.foreground),
    "--border": hexToHsl(colors.border),
    "--input": hexToHsl(colors.input),
    "--ring": hexToHsl(colors.ring),
    "--primary": hexToHsl(colors.primary),
    "--primary-foreground": hexToHsl(colors.primaryForeground),
    "--secondary": hexToHsl(colors.secondary),
    "--secondary-foreground": hexToHsl(colors.secondaryForeground),
    "--accent": hexToHsl(colors.accent),
    "--accent-foreground": hexToHsl(colors.accentForeground),
    "--muted": hexToHsl(colors.muted),
    "--muted-foreground": hexToHsl(colors.mutedForeground),
    "--destructive": hexToHsl(colors.destructive),
    "--destructive-foreground": hexToHsl(colors.destructiveForeground),
    "--destructive-soft": hexToHsl(colors.destructiveSoft),
    "--destructive-border": hexToHsl(colors.destructiveBorder),
    "--success": hexToHsl(colors.success),
    "--success-foreground": hexToHsl(colors.successForeground),
    "--success-soft": hexToHsl(colors.successSoft),
    "--success-border": hexToHsl(colors.successBorder),
    "--warning": hexToHsl(colors.warning),
    "--warning-foreground": hexToHsl(colors.warningForeground),
    "--warning-soft": hexToHsl(colors.warningSoft),
    "--warning-border": hexToHsl(colors.warningBorder),
    "--info": hexToHsl(colors.info),
    "--info-foreground": hexToHsl(colors.infoForeground),
    "--info-soft": hexToHsl(colors.infoSoft),
    "--info-border": hexToHsl(colors.infoBorder),
    "--overlay": hexToHsl(colors.overlay),
    "--shadow-color": hexToHsl(colors.shadow),
    "--sidebar": hexToHsl(colors.sidebar),
    "--sidebar-foreground": hexToHsl(colors.sidebarForeground),
    "--sidebar-accent": hexToHsl(colors.sidebarAccent),
    "--sidebar-border": hexToHsl(colors.sidebarBorder),
    "--radius": radius.md,
    "--ds-radius-sm": radius.sm,
    "--ds-radius-md": radius.md,
    "--ds-radius-lg": radius.lg,
    "--ds-radius-xl": radius.xl,
    "--ds-radius-pill": radius.pill,
    "--ds-space-xs": spacing.xs,
    "--ds-space-sm": spacing.sm,
    "--ds-space-md": spacing.md,
    "--ds-space-lg": spacing.lg,
    "--ds-space-xl": spacing.xl,
    "--ds-space-2xl": spacing["2xl"],
    "--ds-space-3xl": spacing["3xl"],
    "--ds-space-4xl": spacing["4xl"],
    "--ds-space-5xl": spacing["5xl"],
    "--ds-font-sans": typography.fontSans,
    "--ds-font-display": typography.fontDisplay,
    "--ds-font-mono": typography.fontMono,
    "--ds-text-xs": typography.textXs,
    "--ds-leading-xs": typography.leadingXs,
    "--ds-text-sm": typography.textSm,
    "--ds-leading-sm": typography.leadingSm,
    "--ds-text-base": typography.textBase,
    "--ds-leading-base": typography.leadingBase,
    "--ds-text-lg": typography.textLg,
    "--ds-leading-lg": typography.leadingLg,
    "--ds-text-xl": typography.textXl,
    "--ds-leading-xl": typography.leadingXl,
    "--ds-text-2xl": typography.text2xl,
    "--ds-leading-2xl": typography.leading2xl,
    "--ds-text-3xl": typography.text3xl,
    "--ds-leading-3xl": typography.leading3xl
  };
  root.dataset.theme = theme.id;
  root.classList.toggle("dark", theme.id !== "light");
  Object.entries(variableMap).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
function ThemeProvider({
  children,
  defaultTheme = "light",
  themes = designThemes,
  storageKey = "shubh-ui-theme"
}) {
  const [themeId, setThemeId] = useState10(defaultTheme);
  const [overrides, setOverrides] = useState10({});
  const [mounted, setMounted] = useState10(false);
  useEffect8(() => {
    const storedThemeId = window.localStorage.getItem(storageKey);
    const storedOverrides = window.localStorage.getItem(`${storageKey}:overrides`);
    if (storedThemeId && themes.some((theme2) => theme2.id === storedThemeId)) {
      setThemeId(storedThemeId);
    }
    if (storedOverrides) {
      try {
        setOverrides(JSON.parse(storedOverrides));
      } catch (e) {
        window.localStorage.removeItem(`${storageKey}:overrides`);
      }
    }
    setMounted(true);
  }, [storageKey, themes]);
  const theme = useMemo2(() => {
    var _a, _b;
    const sourceTheme = (_b = (_a = themes.find((item) => item.id === themeId)) != null ? _a : designThemeMap[defaultTheme]) != null ? _b : themes[0];
    return mergeTheme(sourceTheme, overrides);
  }, [defaultTheme, overrides, themeId, themes]);
  useEffect8(() => {
    if (!mounted) return;
    applyThemeToRoot(document.documentElement, theme);
    window.localStorage.setItem(storageKey, themeId);
    window.localStorage.setItem(`${storageKey}:overrides`, JSON.stringify(overrides));
  }, [mounted, overrides, storageKey, theme, themeId]);
  const value = useMemo2(
    () => ({
      themeId,
      theme,
      themes,
      overrides,
      setTheme: (nextThemeId) => setThemeId(nextThemeId),
      updateColor: (token, value2) => {
        setOverrides((current) => __spreadProps(__spreadValues({}, current), {
          colors: __spreadProps(__spreadValues({}, current.colors), {
            [token]: normalizeHex(value2)
          })
        }));
      },
      updateRadius: (token, value2) => {
        const numeric = parseFloat(value2);
        const normalized = Number.isNaN(numeric) ? value2 : `${clamp(numeric, 2, 40)}px`;
        setOverrides((current) => __spreadProps(__spreadValues({}, current), {
          radius: __spreadProps(__spreadValues({}, current.radius), {
            [token]: normalized
          })
        }));
      },
      resetOverrides: () => setOverrides({})
    }),
    [overrides, theme, themeId, themes]
  );
  if (!mounted) {
    return null;
  }
  return /* @__PURE__ */ jsx44(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

// src/components/ThemeEditor/ThemeEditor.tsx
import { RotateCcw } from "lucide-react";
import { jsx as jsx45, jsxs as jsxs32 } from "react/jsx-runtime";
var editableColorTokens = [
  { key: "primary", label: "Primary" },
  { key: "accent", label: "Accent" },
  { key: "surface", label: "Surface" },
  { key: "surfaceElevated", label: "Elevated Surface" },
  { key: "sidebar", label: "Sidebar" }
];
function ThemeEditor() {
  const { theme, themeId, themes, setTheme, updateColor, updateRadius, resetOverrides } = useTheme();
  return /* @__PURE__ */ jsxs32(
    Card_default,
    {
      variant: "elevated",
      className: "overflow-hidden border-border/80 bg-surface-elevated/90 shadow-card-md",
      children: [
        /* @__PURE__ */ jsx45(CardHeader, { className: "border-b border-border/70 pb-lg", children: /* @__PURE__ */ jsxs32("div", { className: "flex items-start justify-between gap-lg", children: [
          /* @__PURE__ */ jsxs32("div", { children: [
            /* @__PURE__ */ jsx45(CardTitle, { className: "text-xl", children: "Theme Editor" }),
            /* @__PURE__ */ jsx45(CardDescription, { children: "Switch themes, tune tokens, and inspect the live system preview in real time." })
          ] }),
          /* @__PURE__ */ jsx45(
            Button_default,
            {
              variant: "secondary",
              size: "sm",
              onClick: resetOverrides,
              leftIcon: /* @__PURE__ */ jsx45(RotateCcw, { className: "h-4 w-4" }),
              children: "Reset"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs32(CardContent, { className: "grid gap-xl pt-xl xl:grid-cols-[minmax(0,1fr)_20rem]", children: [
          /* @__PURE__ */ jsxs32("div", { className: "grid gap-xl md:grid-cols-2", children: [
            /* @__PURE__ */ jsxs32("div", { className: "space-y-lg", children: [
              /* @__PURE__ */ jsxs32("div", { children: [
                /* @__PURE__ */ jsx45("p", { className: "mb-sm text-sm font-semibold text-foreground", children: "Theme Presets" }),
                /* @__PURE__ */ jsx45("div", { className: "grid gap-sm sm:grid-cols-3", children: themes.map((item) => /* @__PURE__ */ jsxs32(
                  "button",
                  {
                    type: "button",
                    onClick: () => setTheme(item.id),
                    className: [
                      "rounded-xl border px-lg py-md text-left transition-colors",
                      item.id === themeId ? "border-primary bg-accent text-accent-foreground" : "border-border bg-surface hover:bg-surface-muted"
                    ].join(" "),
                    children: [
                      /* @__PURE__ */ jsx45("p", { className: "text-sm font-semibold", children: item.name }),
                      /* @__PURE__ */ jsx45("p", { className: "mt-1 text-xs text-muted-foreground", children: item.description })
                    ]
                  },
                  item.id
                )) })
              ] }),
              /* @__PURE__ */ jsxs32("div", { children: [
                /* @__PURE__ */ jsx45("p", { className: "mb-sm text-sm font-semibold text-foreground", children: "Color Tokens" }),
                /* @__PURE__ */ jsx45("div", { className: "grid gap-md sm:grid-cols-2", children: editableColorTokens.map((token) => /* @__PURE__ */ jsxs32(
                  "label",
                  {
                    className: "flex items-center gap-md rounded-xl border border-border bg-surface p-md",
                    children: [
                      /* @__PURE__ */ jsx45(
                        "input",
                        {
                          type: "color",
                          value: theme.tokens.colors[token.key],
                          onChange: (event) => updateColor(token.key, event.target.value),
                          className: "h-11 w-11 rounded-lg border border-border bg-transparent p-1"
                        }
                      ),
                      /* @__PURE__ */ jsxs32("span", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsx45("span", { className: "block text-sm font-medium text-foreground", children: token.label }),
                        /* @__PURE__ */ jsx45("span", { className: "block truncate text-xs text-muted-foreground", children: theme.tokens.colors[token.key] })
                      ] })
                    ]
                  },
                  token.key
                )) })
              ] }),
              /* @__PURE__ */ jsxs32("div", { children: [
                /* @__PURE__ */ jsxs32("div", { className: "mb-sm flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx45("p", { className: "text-sm font-semibold text-foreground", children: "Radius Scale" }),
                  /* @__PURE__ */ jsx45(Badge_default, { variant: "outline", children: theme.tokens.radius.md })
                ] }),
                /* @__PURE__ */ jsx45(
                  "input",
                  {
                    type: "range",
                    min: 6,
                    max: 32,
                    step: 1,
                    value: parseInt(theme.tokens.radius.md, 10),
                    onChange: (event) => updateRadius("md", `${event.target.value}px`),
                    className: "w-full accent-primary"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs32("div", { className: "space-y-md rounded-2xl border border-border bg-background p-lg", children: [
              /* @__PURE__ */ jsx45("p", { className: "text-sm font-semibold text-foreground", children: "Token Inspector" }),
              /* @__PURE__ */ jsx45(Input_default, { label: "Font Stack", value: theme.tokens.typography.fontSans, readOnly: true }),
              /* @__PURE__ */ jsx45(
                Input_default,
                {
                  label: "Spacing Scale",
                  value: `${theme.tokens.spacing.sm} / ${theme.tokens.spacing.lg} / ${theme.tokens.spacing["2xl"]}`,
                  readOnly: true
                }
              ),
              /* @__PURE__ */ jsx45(
                Input_default,
                {
                  label: "Border Radius",
                  value: `${theme.tokens.radius.sm} / ${theme.tokens.radius.md} / ${theme.tokens.radius.lg}`,
                  readOnly: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs32("div", { className: "rounded-2xl border border-border bg-background p-lg shadow-card", children: [
            /* @__PURE__ */ jsx45("p", { className: "mb-md text-sm font-semibold text-foreground", children: "Live Preview" }),
            /* @__PURE__ */ jsxs32("div", { className: "space-y-md rounded-2xl border border-border bg-surface p-lg shadow-card", children: [
              /* @__PURE__ */ jsxs32("div", { className: "flex items-center justify-between gap-sm", children: [
                /* @__PURE__ */ jsxs32("div", { children: [
                  /* @__PURE__ */ jsx45("p", { className: "text-sm font-semibold text-foreground", children: "Quarterly Revenue" }),
                  /* @__PURE__ */ jsx45("p", { className: "text-xs text-muted-foreground", children: "Token-driven card, badge, button, and input states." })
                ] }),
                /* @__PURE__ */ jsx45(Badge_default, { variant: "primary", children: "Live" })
              ] }),
              /* @__PURE__ */ jsxs32("div", { className: "grid grid-cols-2 gap-sm", children: [
                /* @__PURE__ */ jsxs32("div", { className: "rounded-xl border border-border bg-surface-muted p-md", children: [
                  /* @__PURE__ */ jsx45("p", { className: "text-xs text-muted-foreground", children: "Primary" }),
                  /* @__PURE__ */ jsx45("p", { className: "mt-1 text-lg font-semibold text-foreground", children: "$1.24M" })
                ] }),
                /* @__PURE__ */ jsxs32("div", { className: "rounded-xl border border-success-border bg-success-soft p-md text-success", children: [
                  /* @__PURE__ */ jsx45("p", { className: "text-xs text-current/75", children: "Growth" }),
                  /* @__PURE__ */ jsx45("p", { className: "mt-1 text-lg font-semibold text-current", children: "+18.4%" })
                ] })
              ] }),
              /* @__PURE__ */ jsx45(Input_default, { label: "Search", placeholder: "Tokens update this instantly" }),
              /* @__PURE__ */ jsxs32("div", { className: "flex gap-sm", children: [
                /* @__PURE__ */ jsx45(Button_default, { children: "Primary Action" }),
                /* @__PURE__ */ jsx45(Button_default, { variant: "secondary", children: "Secondary" })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}

// src/hooks/useDebounce.ts
import { useState as useState11, useEffect as useEffect9 } from "react";
function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState11(value);
  useEffect9(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

// src/hooks/useToggle.ts
import { useState as useState12, useCallback as useCallback6 } from "react";
function useToggle(initialValue = false) {
  const [value, setValue] = useState12(initialValue);
  const toggle = useCallback6(() => setValue((v) => !v), []);
  const setOn = useCallback6(() => setValue(true), []);
  const setOff = useCallback6(() => setValue(false), []);
  return [value, toggle, setOn, setOff, setValue];
}
export {
  Accordion_default as Accordion,
  Button_default as AdminButton,
  Card_default as AdminCard,
  CardContent as AdminCardContent,
  CardDescription as AdminCardDescription,
  CardFooter as AdminCardFooter,
  CardHeader as AdminCardHeader,
  CardTitle as AdminCardTitle,
  Input_default as AdminInput,
  Pagination_default2 as AdminPagination,
  Select_default2 as AdminSelect,
  AdminSidebar_default as AdminSidebar,
  Table_default2 as AdminTable,
  Alert_default as Alert,
  AnimatePresence,
  Avatar_default as Avatar,
  Badge_default as Badge,
  Box_default as Box,
  Breadcrumb_default as Breadcrumb,
  Button_default as Button,
  Calendar,
  Card_default as Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox_default as Checkbox,
  DashboardShell_default as DashboardShell,
  DatePicker,
  Divider_default as Divider,
  Drawer_default as Drawer,
  Dropdown_default as Dropdown,
  FadeIn,
  Heading_default as Heading,
  Inline_default as Inline,
  Input_default as Input,
  Label_default as Label,
  Modal_default as Modal,
  Navbar_default as Navbar,
  Pagination_default as Pagination,
  Progress_default as Progress,
  Radio_default as Radio,
  ScaleIn,
  Select_default as Select,
  ServerDataTable,
  Sidebar_default as Sidebar,
  Skeleton_default as Skeleton,
  SkeletonCard,
  Spinner_default as Spinner,
  Stack_default as Stack,
  StatsCard_default as StatsCard,
  Surface_default as Surface,
  Switch_default as Switch,
  Table_default as Table,
  Tabs_default as Tabs,
  Tag_default as Tag,
  Text_default as Text,
  Textarea_default as Textarea,
  ThemeEditor,
  ThemeProvider,
  Tooltip_default as Tooltip,
  Topbar_default as Topbar,
  alertVariants,
  badgeVariants,
  buttonVariants,
  calendarCellVariants,
  calendarVariants,
  cardVariants,
  cn,
  designThemeMap,
  designThemes,
  inputVariants,
  motion3 as motion,
  motionTokens,
  useClickOutside,
  useDebounce,
  useTheme,
  useToggle
};
//# sourceMappingURL=index.mjs.map