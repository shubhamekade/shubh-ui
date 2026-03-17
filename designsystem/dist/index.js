"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion_default,
  AdminButton: () => Button_default,
  AdminCard: () => Card_default,
  AdminCardContent: () => CardContent,
  AdminCardDescription: () => CardDescription,
  AdminCardFooter: () => CardFooter,
  AdminCardHeader: () => CardHeader,
  AdminCardTitle: () => CardTitle,
  AdminInput: () => Input_default,
  AdminPagination: () => Pagination_default2,
  AdminSelect: () => Select_default2,
  AdminSidebar: () => AdminSidebar_default,
  AdminTable: () => Table_default2,
  Alert: () => Alert_default,
  Avatar: () => Avatar_default,
  Badge: () => Badge_default,
  Breadcrumb: () => Breadcrumb_default,
  Button: () => Button_default,
  Calendar: () => Calendar,
  Card: () => Card_default,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox_default,
  Divider: () => Divider_default,
  Drawer: () => Drawer_default,
  Dropdown: () => Dropdown_default,
  Input: () => Input_default,
  Modal: () => Modal_default,
  Navbar: () => Navbar_default,
  Pagination: () => Pagination_default,
  Progress: () => Progress_default,
  Radio: () => Radio_default,
  Select: () => Select_default,
  ServerDataTable: () => ServerDataTable,
  Sidebar: () => Sidebar_default,
  Skeleton: () => Skeleton_default,
  SkeletonCard: () => SkeletonCard,
  Spinner: () => Spinner_default,
  StatsCard: () => StatsCard_default,
  Switch: () => Switch_default,
  Table: () => Table_default,
  Tabs: () => Tabs_default,
  Tag: () => Tag_default,
  Textarea: () => Textarea_default,
  Tooltip: () => Tooltip_default,
  Topbar: () => Topbar_default,
  alertVariants: () => alertVariants,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  calendarCellVariants: () => calendarCellVariants,
  calendarVariants: () => calendarVariants,
  cardVariants: () => cardVariants,
  cn: () => cn,
  inputVariants: () => inputVariants,
  useClickOutside: () => useClickOutside,
  useDebounce: () => useDebounce,
  useToggle: () => useToggle
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.tsx
var import_react = require("react");
var import_lucide_react = require("lucide-react");

// src/utils/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/Button/component.variants.ts
var import_class_variance_authority = require("class-variance-authority");
var buttonVariants = (0, import_class_variance_authority.cva)(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
    "transition-colors duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "ring-offset-background"
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        secondary: "bg-muted text-foreground hover:bg-muted/80",
        outline: "border border-border bg-background text-foreground hover:bg-muted",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        danger: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        navy: "bg-navy text-white shadow-sm hover:bg-navy-medium",
        success: "bg-success text-white shadow-sm hover:bg-success/90",
        warning: "bg-warning text-foreground shadow-sm hover:bg-warning/90",
        link: "bg-transparent p-0 text-primary underline-offset-4 hover:underline"
      },
      size: {
        xs: "h-8 px-2 text-xs",
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-6 text-base",
        xl: "h-12 px-7 text-base",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-12 w-12 p-0"
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
var import_jsx_runtime = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      __spreadProps(__spreadValues({
        ref,
        className: cn(buttonVariants({ variant, size, fullWidth, loading }), className),
        disabled: isDisabled,
        "aria-busy": loading,
        "aria-disabled": isDisabled
      }, props), {
        children: [
          loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2, { className: "h-4 w-4 shrink-0 animate-spin", "aria-hidden": "true" }) : leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "shrink-0", "aria-hidden": "true", children: leftIcon }),
          children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }) : null,
          !loading && rightIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "shrink-0", "aria-hidden": "true", children: rightIcon }) : null
        ]
      })
    );
  }
);
Button.displayName = "Button";
var Button_default = Button;

// src/components/Input/Input.tsx
var import_react2 = require("react");
var import_lucide_react2 = require("lucide-react");

// src/components/Input/component.variants.ts
var import_class_variance_authority2 = require("class-variance-authority");
var inputVariants = (0, import_class_variance_authority2.cva)(
  [
    "flex w-full rounded-md border bg-background text-foreground transition-colors",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "read-only:cursor-default read-only:bg-muted"
  ],
  {
    variants: {
      variant: {
        default: "border-input hover:border-border",
        error: "border-red-500 bg-red-50/40 focus-visible:ring-red-500",
        success: "border-green-500 bg-green-50/40 focus-visible:ring-green-500"
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-11 px-4 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);

// src/components/Input/Input.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = (0, import_react2.forwardRef)(
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
    const [showPassword, setShowPassword] = (0, import_react2.useState)(false);
    const generatedId = (0, import_react2.useId)();
    const inputId = id || `input-${generatedId}`;
    const effectiveVariant = error ? "error" : success ? "success" : variant;
    const effectiveType = type === "password" && showPassword ? "text" : type;
    const hasLeftElement = Boolean(leftElement);
    const hasRightElement = Boolean(rightElement) || type === "password" || Boolean(clearable && value);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "w-full", children: [
      label ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { htmlFor: inputId, className: "mb-1.5 block text-sm font-medium text-slate-900", children: [
        label,
        required ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ml-1 text-red-500", "aria-label": "required", children: "*" }) : null
      ] }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative flex items-center", children: [
        hasLeftElement ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "pointer-events-none absolute left-3 flex items-center text-slate-400", children: leftElement }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          __spreadValues({
            ref,
            id: inputId,
            type: effectiveType,
            value,
            className: cn(
              inputVariants({ variant: effectiveVariant, size }),
              hasLeftElement && "pl-9",
              hasRightElement && "pr-10",
              className
            ),
            "aria-invalid": Boolean(error),
            "aria-describedby": error ? `${inputId}-error` : success ? `${inputId}-success` : hint ? `${inputId}-hint` : void 0
          }, props)
        ),
        hasRightElement ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "absolute right-3 flex items-center gap-1", children: [
          clearable && value ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              onClick: onClear,
              className: "text-slate-400 transition-colors hover:text-slate-600",
              "aria-label": "Clear input",
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.X, { className: "h-3.5 w-3.5" })
            }
          ) : null,
          type === "password" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setShowPassword((current) => !current),
              className: "text-slate-400 transition-colors hover:text-slate-600",
              "aria-label": showPassword ? "Hide password" : "Show password",
              children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Eye, { className: "h-4 w-4" })
            }
          ) : null,
          rightElement ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-slate-400", children: rightElement }) : null
        ] }) : null
      ] }),
      error ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { id: `${inputId}-error`, className: "mt-1 text-xs text-red-500", role: "alert", children: typeof error === "string" ? error : "This field is invalid." }) : null,
      success && !error ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { id: `${inputId}-success`, className: "mt-1 text-xs text-green-600", children: success }) : null,
      hint && !error && !success ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { id: `${inputId}-hint`, className: "mt-1 text-xs text-slate-500", children: hint }) : null
    ] });
  }
);
Input.displayName = "Input";
var Input_default = Input;

// src/components/Card/Card.tsx
var import_react3 = require("react");
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var cardVariants = (0, import_class_variance_authority3.cva)(
  "rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm transition-shadow",
  {
    variants: {
      variant: {
        default: "border-slate-200 bg-white",
        elevated: "border-slate-100 shadow-md",
        outline: "border-2 border-slate-300 shadow-none",
        outlined: "border-2 border-slate-300 shadow-none",
        filled: "border-slate-200 bg-slate-100",
        accent: "border-blue-200 bg-blue-50",
        navy: "border-blue-900 bg-blue-900 text-white",
        primary: "border-slate-900 bg-slate-900 text-white",
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
        true: "cursor-pointer hover:shadow-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md"
    }
  }
);
var Card = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className, variant, padding, hoverable, children } = _b, props = __objRest(_b, ["className", "variant", "padding", "hoverable", "children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var CardHeader = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", __spreadValues({ ref, className: cn("flex flex-col space-y-1.5", className) }, props));
  }
);
var CardTitle = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", __spreadValues({ ref, className: cn("text-lg font-semibold leading-none tracking-tight", className) }, props));
  }
);
var CardDescription = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", __spreadValues({ ref, className: cn("text-sm text-slate-500", className) }, props));
  }
);
var CardContent = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", __spreadValues({ ref, className: cn("pt-0", className) }, props));
  }
);
var CardFooter = (0, import_react3.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", __spreadValues({ ref, className: cn("flex items-center border-t border-slate-100 pt-4", className) }, props));
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
var import_react4 = require("react");
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
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
  const dialogRef = (0, import_react4.useRef)(null);
  const previouslyFocusedRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (!open || !closeOnEsc) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose, closeOnEsc]);
  (0, import_react4.useEffect)(() => {
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
  (0, import_react4.useEffect)(() => {
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
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": title ? "modal-title" : void 0,
      "aria-describedby": description ? "modal-description" : void 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "div",
          {
            className: "absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in",
            onClick: closeOnOverlay ? onClose : void 0,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "div",
          {
            ref: dialogRef,
            tabIndex: -1,
            className: cn(
              "relative w-full bg-background rounded-xl shadow-modal animate-scale-in",
              "focus:outline-none",
              sizeMap[size],
              className
            ),
            children: [
              (title || showCloseButton) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-start justify-between p-5 border-b border-border", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
                  title && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { id: "modal-title", className: "text-base font-semibold text-foreground", children: title }),
                  description && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { id: "modal-description", className: "text-sm text-muted-foreground mt-1", children: description })
                ] }),
                showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: onClose,
                    "aria-label": "Close modal",
                    className: "ml-4 shrink-0 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-gray-100 transition-colors",
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.X, { className: "h-4 w-4" })
                  }
                )
              ] }),
              children && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "p-5", children }),
              footer && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex items-center justify-end gap-2 px-5 pb-5 pt-2", children: footer })
            ]
          }
        )
      ]
    }
  );
};
Modal.displayName = "Modal";
var Modal_default = Modal;

// src/components/Table/Table.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: cn("w-full overflow-x-auto rounded-lg border border-[#d7d7d7]", className), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("table", { className: "w-full text-sm border-collapse", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tr", { className: "bg-gray-50 border-b border-[#d7d7d7]", children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "th",
      {
        style: { width: col.width },
        className: cn(
          cellPad,
          "text-xs font-semibold text-[#808080] tracking-wide uppercase whitespace-nowrap",
          col.align === "center" && "text-center",
          col.align === "right" && "text-right",
          col.sortable && "cursor-pointer select-none hover:text-[#1e1e1e] hover:bg-gray-100 transition-colors",
          bordered && "border-r border-[#d7d7d7] last:border-r-0"
        ),
        onClick: () => col.sortable && (onSort == null ? void 0 : onSort(col.key)),
        "aria-sort": sortKey === col.key ? sortDir === "asc" ? "ascending" : "descending" : void 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "inline-flex items-center gap-1", children: [
          col.header,
          col.sortable && sortKey === col.key && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { "aria-hidden": "true", className: "text-[#000080]", children: sortDir === "asc" ? "\u2191" : "\u2193" })
        ] })
      },
      col.key
    )) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", { children: loading ? Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tr", { className: "border-b border-[#d7d7d7]", children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: cellPad, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "h-4 bg-gray-200 rounded animate-pulse" }) }, col.key)) }, i)) : data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "td",
      {
        colSpan: columns.length,
        className: "py-12 text-center text-[#808080]",
        children: emptyMessage
      }
    ) }) : data.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "tr",
      {
        onClick: () => onRowClick == null ? void 0 : onRowClick(row),
        className: cn(
          "border-b border-[#d7d7d7] last:border-b-0 transition-colors duration-100",
          striped && i % 2 === 1 && "bg-gray-50/60",
          hoverable && "hover:bg-[#dae8ff]/30",
          onRowClick && "cursor-pointer"
        ),
        children: columns.map((col) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "td",
            {
              className: cn(
                cellPad,
                "text-[#1e1e1e]",
                col.align === "center" && "text-center",
                col.align === "right" && "text-right",
                bordered && "border-r border-[#d7d7d7] last:border-r-0"
              ),
              children: col.cell ? col.cell(row, i) : String((_a = row[col.key]) != null ? _a : "\u2014")
            },
            col.key
          );
        })
      },
      keyExtractor(row, i)
    )) })
  ] }) });
}
Table.displayName = "Table";
var Table_default = Table;

// src/components/Table/index.ts
var Table_default2 = Table_default;

// src/components/Pagination/Pagination.tsx
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime6 = require("react/jsx-runtime");
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
    "inline-flex items-center justify-center rounded-md border border-border font-medium transition-all duration-100",
    "hover:bg-accent hover:border-primary hover:text-accent-foreground",
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-border disabled:hover:text-inherit",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
    sizeMap2[size]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: cn("flex items-center flex-wrap gap-3", className), children: [
    showTotal && /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "text-sm text-muted-foreground tabular-nums", children: [
      (page - 1) * pageSize + 1,
      "\u2013",
      Math.min(page * pageSize, total),
      " of ",
      total.toLocaleString()
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center gap-1 ml-auto", children: [
      showFirstLast && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(1),
          disabled: page === 1,
          className: btnClass,
          "aria-label": "First page",
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react4.ChevronsLeft, { className: "h-3.5 w-3.5" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(page - 1),
          disabled: page === 1,
          className: btnClass,
          "aria-label": "Previous page",
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react4.ChevronLeft, { className: "h-3.5 w-3.5" })
        }
      ),
      pages.map(
        (p, i) => p === "..." ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: cn("inline-flex items-center justify-center text-muted-foreground", sizeMap2[size]), children: "\u2026" }, `ellipsis-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            type: "button",
            onClick: () => onPageChange(p),
            "aria-current": page === p ? "page" : void 0,
            className: cn(
              btnClass,
              page === p && "bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground hover:border-primary/90"
            ),
            children: p
          },
          p
        )
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(page + 1),
          disabled: page === totalPages,
          className: btnClass,
          "aria-label": "Next page",
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react4.ChevronRight, { className: "h-3.5 w-3.5" })
        }
      ),
      showFirstLast && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "button",
          onClick: () => onPageChange(totalPages),
          disabled: page === totalPages,
          className: btnClass,
          "aria-label": "Last page",
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react4.ChevronsRight, { className: "h-3.5 w-3.5" })
        }
      )
    ] }),
    showPageSize && onPageSizeChange && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "select",
      {
        value: pageSize,
        onChange: (e) => onPageSizeChange(Number(e.target.value)),
        className: "h-8 pl-2 pr-6 text-sm border border-border rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-background text-foreground",
        "aria-label": "Rows per page",
        children: pageSizeOptions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("option", { value: s, children: [
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
var import_react6 = require("react");
var import_lucide_react5 = require("lucide-react");

// src/hooks/useClickOutside.ts
var import_react5 = require("react");
function useClickOutside(ref, callback) {
  (0, import_react5.useEffect)(() => {
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
var import_jsx_runtime7 = require("react/jsx-runtime");
var sizeMap3 = {
  sm: "h-8 px-3 text-sm",
  md: "h-9 px-3 text-sm",
  lg: "h-10 px-4 text-base"
};
var Select = (0, import_react6.forwardRef)(
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
    const [open, setOpen] = (0, import_react6.useState)(false);
    const [activeIndex, setActiveIndex] = (0, import_react6.useState)(-1);
    const containerRef = (0, import_react6.useRef)(null);
    const generatedId = (0, import_react6.useId)();
    const selectId = id || `select-${generatedId}`;
    useClickOutside(containerRef, () => setOpen(false));
    const selectedValues = multiple ? value || [] : value ? [value] : [];
    const selectedLabels = selectedValues.map((v) => {
      var _a;
      return (_a = options.find((o) => o.value === v)) == null ? void 0 : _a.label;
    }).filter(Boolean);
    const isSelected = (optValue) => selectedValues.includes(optValue);
    const enabledIndices = options.map((option, index) => ({ option, index })).filter((entry) => !entry.option.disabled).map((entry) => entry.index);
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
    (0, import_react6.useEffect)(() => {
      var _a;
      if (!open) {
        setActiveIndex(-1);
        return;
      }
      const selectedIndex = options.findIndex((option) => isSelected(option.value) && !option.disabled);
      if (selectedIndex >= 0) {
        setActiveIndex(selectedIndex);
        return;
      }
      setActiveIndex((_a = enabledIndices[0]) != null ? _a : -1);
    }, [open, options, value]);
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { ref: containerRef, className: cn("w-full", className), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "label",
        {
          htmlFor: selectId,
          className: "block text-sm font-medium text-foreground mb-1.5",
          children: [
            label,
            required && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "text-red-500 ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative", ref, children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
              "w-full flex items-center justify-between gap-2 rounded-md border bg-background transition-all duration-150",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
              sizeMap3[size],
              error ? "border-red-400" : open ? "border-primary" : "border-border hover:border-muted-foreground",
              disabled && "opacity-50 cursor-not-allowed bg-gray-50"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: cn("flex-1 text-left truncate", !selectedLabels.length && "text-muted-foreground"), children: selectedLabels.length ? multiple ? `${selectedLabels.length} selected` : selectedLabels[0] : placeholder }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "flex items-center gap-1 shrink-0", children: [
                clearable && selectedValues.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: handleClear,
                    className: "text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
                    "aria-label": "Clear selection",
                    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react5.X, { className: "h-3.5 w-3.5" })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  import_lucide_react5.ChevronDown,
                  {
                    className: cn("h-4 w-4 text-muted-foreground transition-transform duration-150", open && "rotate-180"),
                    "aria-hidden": "true"
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "ul",
          {
            id: `${selectId}-listbox`,
            role: "listbox",
            "aria-multiselectable": multiple,
            onKeyDown: handleListboxKeyDown,
            className: "absolute z-50 mt-1 w-full bg-background border border-border rounded-md shadow-dropdown overflow-auto max-h-56 animate-fade-in scrollbar-thin",
            children: [
              options.map((opt, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
                "li",
                {
                  id: `${selectId}-option-${index}`,
                  role: "option",
                  "aria-selected": isSelected(opt.value),
                  "aria-disabled": opt.disabled,
                  onMouseEnter: () => !opt.disabled && setActiveIndex(index),
                  onClick: () => !opt.disabled && handleSelect(opt.value),
                  className: cn(
                    "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors duration-100",
                    activeIndex === index && !opt.disabled && "bg-gray-50",
                    isSelected(opt.value) ? "bg-accent text-accent-foreground font-medium" : "text-foreground hover:bg-gray-50",
                    opt.disabled && "opacity-40 cursor-not-allowed"
                  ),
                  children: [
                    opt.icon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "shrink-0", children: opt.icon }),
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "flex-1", children: [
                      opt.label,
                      opt.description && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "block text-xs text-muted-foreground", children: opt.description })
                    ] }),
                    isSelected(opt.value) && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react5.Check, { className: "h-3.5 w-3.5 shrink-0", "aria-hidden": "true" })
                  ]
                },
                opt.value
              )),
              options.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { className: "px-3 py-4 text-sm text-muted-foreground text-center", children: "No options available" })
            ]
          }
        )
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mt-1 text-xs text-red-500", role: "alert", children: error }),
      hint && !error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mt-1 text-xs text-muted-foreground", children: hint })
    ] });
  }
);
Select.displayName = "Select";
var Select_default = Select;

// src/components/Select/index.ts
var Select_default2 = Select_default;

// src/components/Textarea/Textarea.tsx
var import_react7 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Textarea = (0, import_react7.forwardRef)(
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
    const generatedId = (0, import_react7.useId)();
    const textareaId = id || `textarea-${generatedId}`;
    const charCount = typeof value === "string" ? value.length : 0;
    const resizeMap = {
      none: "resize-none",
      both: "resize",
      horizontal: "resize-x",
      vertical: "resize-y"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-full", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { htmlFor: textareaId, className: "block text-sm font-medium text-[#1e1e1e] mb-1.5", children: [
        label,
        required && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "text-red-500 ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "textarea",
        __spreadValues({
          ref,
          id: textareaId,
          value,
          maxLength,
          className: cn(
            "w-full min-h-[80px] px-3 py-2.5 text-sm font-sans rounded-md border bg-white text-[#1e1e1e] placeholder:text-[#808080]",
            "transition-all duration-150",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-0 focus-visible:border-[#000080]",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50",
            error ? "border-red-400 focus-visible:ring-red-400" : "border-[#d7d7d7] hover:border-[#b0b0b0]",
            success && !error && "border-green-400 focus-visible:ring-green-400",
            resizeMap[resize],
            className
          ),
          "aria-invalid": !!error
        }, props)
      ),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-start justify-between mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          error && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-red-500", role: "alert", children: error }),
          success && !error && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-green-600", children: success }),
          hint && !error && !success && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-xs text-[#808080]", children: hint })
        ] }),
        showCount && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "text-xs text-[#808080] tabular-nums shrink-0 ml-2", children: [
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
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime9 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority4.cva)(
  "inline-flex items-center gap-1 font-medium rounded-full transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground",
        primary: "bg-primary text-primary-foreground",
        navy: "bg-navy text-white",
        secondary: "bg-muted text-muted-foreground",
        success: "bg-green-100 text-green-700",
        warning: "bg-amber-100 text-amber-700",
        destructive: "bg-red-100 text-red-700",
        info: "bg-sky-100 text-sky-700",
        outline: "border border-border bg-transparent text-foreground",
        ghost: "bg-transparent text-muted-foreground"
      },
      size: {
        sm: "px-1.5 py-0.5 text-xs",
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "span",
    __spreadProps(__spreadValues({
      className: cn(badgeVariants({ variant, size, dot }), className)
    }, props), {
      children: [
        dot && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "span",
          {
            className: cn("inline-block w-1.5 h-1.5 rounded-full", dotColor || "bg-current"),
            "aria-hidden": "true"
          }
        ),
        children,
        removable && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "button",
          {
            type: "button",
            onClick: onRemove,
            className: "ml-0.5 hover:opacity-70 transition-opacity",
            "aria-label": "Remove badge",
            children: "\xD7"
          }
        )
      ]
    })
  );
};
Badge.displayName = "Badge";
var Badge_default = Badge;

// src/components/Tabs/Tabs.tsx
var import_react8 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var tabListVariants = {
  line: "border-b border-border gap-0",
  pill: "bg-gray-100 p-1 rounded-lg gap-1",
  enclosed: "border border-border rounded-t-lg overflow-hidden gap-0",
  soft: "gap-1"
};
var tabItemVariants = {
  line: {
    base: "px-4 py-2.5 border-b-2 border-transparent -mb-px font-medium text-muted-foreground hover:text-foreground hover:border-border transition-all duration-150",
    active: "border-primary text-primary",
    disabled: "opacity-40 cursor-not-allowed"
  },
  pill: {
    base: "px-3 py-1.5 rounded-md font-medium text-muted-foreground hover:text-foreground hover:bg-background transition-all duration-150",
    active: "bg-background text-primary shadow-sm",
    disabled: "opacity-40 cursor-not-allowed"
  },
  enclosed: {
    base: "px-4 py-2.5 font-medium text-muted-foreground border-r border-border last:border-r-0 hover:bg-gray-50 transition-all duration-150",
    active: "bg-background text-primary shadow-sm",
    disabled: "opacity-40 cursor-not-allowed"
  },
  soft: {
    base: "px-3 py-2 rounded-md font-medium text-muted-foreground hover:text-foreground hover:bg-gray-100 transition-all duration-150",
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
  const [internalTab, setInternalTab] = (0, import_react8.useState)(defaultTab || ((_a = items[0]) == null ? void 0 : _a.id));
  const current = controlledTab != null ? controlledTab : internalTab;
  const baseId = (0, import_react8.useId)();
  const tabRefs = (0, import_react8.useRef)([]);
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: cn("w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        role: "tablist",
        className: cn("flex items-center", tabListVariants[variant], fullWidth && "w-full"),
        children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "flex items-center gap-1.5 justify-center", children: [
              item.icon && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "shrink-0", children: item.icon }),
              item.label,
              item.badge !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "inline-flex items-center justify-center h-4 min-w-[1rem] px-1 rounded-full bg-primary text-primary-foreground text-xs font-medium leading-none", children: item.badge })
            ] })
          },
          item.id
        ))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var import_react9 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var ChevronDownIcon = ({ className }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("polyline", { points: "6 9 12 15 18 9" })
  }
);
var Accordion = ({
  items,
  defaultOpen = [],
  multiple = false,
  variant = "default",
  className
}) => {
  const [openIds, setOpenIds] = (0, import_react9.useState)(defaultOpen);
  const toggle = (id) => {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      return multiple ? [...prev, id] : [id];
    });
  };
  const isOpen = (id) => openIds.includes(id);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      className: cn(
        "w-full",
        variant === "bordered" && "border border-border rounded-lg overflow-hidden divide-y divide-border",
        variant === "default" && "divide-y divide-border",
        variant === "flush" && "divide-y divide-border",
        className
      ),
      children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "div",
        {
          className: cn(
            variant === "filled" && "mb-2 rounded-lg overflow-hidden border border-border"
          ),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
              "button",
              {
                type: "button",
                onClick: () => !item.disabled && toggle(item.id),
                disabled: item.disabled,
                "aria-expanded": isOpen(item.id),
                className: cn(
                  "w-full flex items-center justify-between gap-3 py-3.5 px-0 text-left transition-colors duration-150",
                  variant === "filled" && "px-4 bg-muted hover:bg-muted/80",
                  variant === "bordered" && "px-4",
                  variant === "flush" && "px-0",
                  item.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:text-primary",
                  isOpen(item.id) && "text-primary"
                ),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "flex items-center gap-2 font-medium text-sm", children: [
                    item.icon && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "shrink-0", children: item.icon }),
                    item.title,
                    item.badge && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "shrink-0", children: item.badge })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "div",
              {
                className: cn(
                  "overflow-hidden transition-all duration-200 ease-in-out",
                  isOpen(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: cn("pb-4 text-sm text-muted-foreground", variant === "filled" && "px-4", variant === "bordered" && "px-4"), children: item.content })
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
var import_class_variance_authority5 = require("class-variance-authority");
var import_lucide_react6 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var alertVariants = (0, import_class_variance_authority5.cva)(
  "relative flex gap-3 rounded-lg border p-4 text-sm",
  {
    variants: {
      variant: {
        info: "bg-accent border-primary/20 text-accent-foreground",
        success: "bg-green-50 border-green-200 text-green-800",
        warning: "bg-amber-50 border-amber-200 text-amber-800",
        destructive: "bg-red-50 border-red-200 text-red-800",
        navy: "bg-navy border-navy-medium text-white",
        neutral: "bg-muted border-border text-foreground"
      }
    },
    defaultVariants: { variant: "info" }
  }
);
var iconMap = {
  info: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.Info, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  success: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.CheckCircle2, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  warning: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.AlertTriangle, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  destructive: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.AlertCircle, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  navy: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.Info, { className: "h-4 w-4 shrink-0 mt-0.5" }),
  neutral: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.Info, { className: "h-4 w-4 shrink-0 mt-0.5" })
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    __spreadProps(__spreadValues({
      role: "alert",
      className: cn(alertVariants({ variant }), className)
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { children: icon != null ? icon : iconMap[variant] }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex-1", children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "font-semibold mb-0.5", children: title }),
          children && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "leading-relaxed", children }),
          action && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mt-2", children: action })
        ] }),
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            "aria-label": "Dismiss alert",
            className: "shrink-0 p-0.5 rounded opacity-60 hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react6.X, { className: "h-3.5 w-3.5" })
          }
        )
      ]
    })
  );
};
Alert.displayName = "Alert";
var Alert_default = Alert;

// src/components/Avatar/Avatar.tsx
var import_class_variance_authority6 = require("class-variance-authority");
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var avatarVariants = (0, import_class_variance_authority6.cva)(
  "inline-flex items-center justify-center shrink-0 overflow-hidden font-medium select-none",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10 text-base",
        lg: "h-12 w-12 text-lg",
        xl: "h-16 w-16 text-xl",
        "2xl": "h-20 w-20 text-2xl"
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md"
      },
      variant: {
        image: "",
        initials: "bg-accent text-accent-foreground",
        icon: "bg-muted text-muted-foreground",
        navy: "bg-navy text-white",
        primary: "bg-primary text-primary-foreground"
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
  online: "bg-green-500",
  offline: "bg-muted-foreground",
  busy: "bg-red-500",
  away: "bg-amber-400"
};
var Avatar = (_a) => {
  var _b = _a, {
    className,
    size,
    shape,
    variant,
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "relative inline-flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "div",
      __spreadProps(__spreadValues({
        className: cn(avatarVariants({ size, shape, variant: effectiveVariant }), className),
        role: "img",
        "aria-label": alt
      }, props), {
        children: src ? (
          // eslint-disable-next-line @next/next/no-img-element
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { src, alt, className: "h-full w-full object-cover" })
        ) : initials ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { "aria-hidden": "true", children: initials }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react7.User, { className: "h-1/2 w-1/2", "aria-hidden": "true" })
      })
    ),
    status && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "span",
      {
        className: cn(
          "absolute bottom-0 right-0 block rounded-full ring-2 ring-white",
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
var import_lucide_react8 = require("lucide-react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var sizeMap5 = { sm: "text-xs", md: "text-sm", lg: "text-base" };
var Breadcrumb = ({
  items,
  separator = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react8.ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground", "aria-hidden": "true" }),
  showHome = false,
  maxItems,
  className,
  size = "md"
}) => {
  const allItems = showHome ? [{ label: "Home", href: "/", icon: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react8.Home, { className: "h-3.5 w-3.5" }) }, ...items] : items;
  const displayed = maxItems && allItems.length > maxItems ? [allItems[0], { label: "\u2026", href: void 0 }, ...allItems.slice(-2)] : allItems;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("nav", { "aria-label": "Breadcrumb", className: cn("flex items-center", className), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("ol", { className: cn("flex items-center gap-1.5 flex-wrap", sizeMap5[size]), children: displayed.map((item, i) => {
    const isLast = i === displayed.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("li", { className: "flex items-center gap-1.5", children: [
      i > 0 && separator,
      isLast ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "span",
        {
          "aria-current": "page",
          className: "font-medium text-foreground flex items-center gap-1",
          children: [
            item.icon,
            item.label
          ]
        }
      ) : item.href ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "a",
        {
          href: item.href,
          className: "text-muted-foreground hover:text-primary transition-colors flex items-center gap-1",
          children: [
            item.icon,
            item.label
          ]
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: "text-muted-foreground flex items-center gap-1", children: [
        item.icon,
        item.label
      ] })
    ] }, i);
  }) }) });
};
Breadcrumb.displayName = "Breadcrumb";
var Breadcrumb_default = Breadcrumb;

// src/components/Calendar/Calendar.tsx
var import_react10 = require("react");
var import_outline = require("@heroicons/react/24/outline");

// src/components/Calendar/component.variants.ts
var import_class_variance_authority7 = require("class-variance-authority");
var calendarVariants = (0, import_class_variance_authority7.cva)(
  [
    "inline-block select-none font-sans"
  ],
  {
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
  }
);
var calendarCellVariants = (0, import_class_variance_authority7.cva)(
  [
    "flex items-center justify-center rounded cursor-pointer transition-colors duration-100",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1"
  ],
  {
    variants: {
      size: {
        sm: "h-7 w-7 text-xs",
        md: "h-8 w-8 text-sm",
        lg: "h-9 w-9 text-base"
      },
      selected: {
        true: "bg-[#000080] text-white font-semibold hover:bg-[#0000a0]",
        false: ""
      },
      outside: {
        true: "text-gray-300",
        false: ""
      },
      disabled: {
        true: "opacity-40 cursor-not-allowed pointer-events-none",
        false: ""
      }
    },
    compoundVariants: [
      {
        selected: false,
        outside: false,
        disabled: false,
        className: "hover:bg-[#dae8ff] text-gray-700"
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
var import_jsx_runtime15 = require("react/jsx-runtime");
var DAY_HEADERS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var MONTH_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
function NavHeader({ label, onPrev, onNext, onLabelClick, isNavy, size, prevAriaLabel, nextAriaLabel }) {
  const textSize = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";
  const btnSize = size === "sm" ? "h-6 w-6" : size === "lg" ? "h-8 w-8" : "h-7 w-7";
  const iconSize = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-4 w-4" : "h-3.5 w-3.5";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "flex items-center justify-between mb-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "button",
      {
        type: "button",
        onClick: onPrev,
        "aria-label": prevAriaLabel,
        className: cn(
          btnSize,
          "flex items-center justify-center rounded transition-colors duration-100",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1",
          isNavy ? "text-gray-400 hover:text-white hover:bg-[#000060]" : "text-gray-400 hover:text-gray-700 hover:bg-[#dae8ff]"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_outline.ChevronLeftIcon, { className: iconSize })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "button",
      {
        type: "button",
        onClick: onLabelClick,
        className: cn(
          textSize,
          "font-medium px-2 py-0.5 rounded transition-colors duration-100",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1",
          isNavy ? "text-gray-300 hover:text-white hover:bg-[#000060]" : "text-gray-500 hover:text-gray-800 hover:bg-[#dae8ff]"
        ),
        "aria-label": `Switch to broader view, currently showing ${label}`,
        children: label
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "button",
      {
        type: "button",
        onClick: onNext,
        "aria-label": nextAriaLabel,
        className: cn(
          btnSize,
          "flex items-center justify-center rounded transition-colors duration-100",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1",
          isNavy ? "text-gray-400 hover:text-white hover:bg-[#000060]" : "text-gray-400 hover:text-gray-700 hover:bg-[#dae8ff]"
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_outline.ChevronRightIcon, { className: iconSize })
      }
    )
  ] });
}
function DayView({ viewDate, selected, today, size, isNavy, onSelectDay, onPrevMonth, onNextMonth, onHeaderClick, minDate, maxDate }) {
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { role: "grid", "aria-label": headerText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "grid grid-cols-7 mb-1", role: "row", children: DAY_HEADERS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        role: "columnheader",
        "aria-label": d,
        className: cn(
          "flex items-center justify-center font-medium",
          cellSize,
          dayHeaderSize,
          isNavy ? "text-gray-400" : "text-gray-400"
        ),
        children: d
      },
      d
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "grid grid-cols-7 gap-0", children: cells.map(({ date, outside }, idx) => {
      const isSelected = selected ? isSameDay(date, selected) : false;
      const isToday = isSameDay(date, today);
      const disabled = isDisabled(date);
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "button",
        {
          type: "button",
          role: "gridcell",
          "aria-label": date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
          "aria-selected": isSelected,
          "aria-disabled": disabled,
          tabIndex: isSelected ? 0 : -1,
          disabled,
          onClick: () => !disabled && onSelectDay(date),
          className: cn(
            cellSize,
            "flex items-center justify-center rounded transition-colors duration-100",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1",
            "border",
            isSelected ? "bg-[#000080] text-white font-semibold border-[#000080] hover:bg-[#0000a0]" : outside ? isNavy ? "text-gray-600 border-transparent hover:bg-[#000060]" : "text-gray-300 border-transparent hover:bg-gray-50" : isToday && !isSelected ? isNavy ? "text-white border-[#000080] hover:bg-[#000060]" : "text-[#000080] border-[#000080] font-semibold hover:bg-[#dae8ff]" : isNavy ? "text-gray-200 border-[#000040] hover:bg-[#000060]" : "text-gray-700 border-gray-200 hover:bg-[#dae8ff]",
            disabled && "opacity-40 cursor-not-allowed pointer-events-none"
          ),
          children: date.getDate()
        },
        idx
      );
    }) })
  ] });
}
function MonthView({ viewDate, selected, size, isNavy, onSelectMonth, onPrevYear, onNextYear, onHeaderClick }) {
  const year = viewDate.getFullYear();
  const cellSize = size === "sm" ? "h-8 text-xs" : size === "lg" ? "h-11 text-base" : "h-9 text-sm";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { role: "grid", "aria-label": `Month picker for ${year}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "grid grid-cols-4 gap-1 mt-2", children: MONTH_NAMES.map((name, idx) => {
      const isSelected = selected ? selected.getFullYear() === year && selected.getMonth() === idx : false;
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
            "flex items-center justify-center rounded-md font-medium transition-colors duration-100",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1",
            isSelected ? "bg-[#000080] text-white hover:bg-[#0000a0]" : isNavy ? "text-gray-200 hover:bg-[#000060]" : "text-gray-700 hover:bg-[#dae8ff]"
          ),
          children: name
        },
        name
      );
    }) })
  ] });
}
function YearView({ viewDate, selected, size, isNavy, onSelectYear, onPrevRange, onNextRange }) {
  const rangeStart = getYearRangeStart(viewDate.getFullYear());
  const rangeEnd = rangeStart + YEAR_RANGE_SIZE - 1;
  const years = Array.from({ length: YEAR_RANGE_SIZE }, (_, i) => rangeStart + i);
  const cellSize = size === "sm" ? "h-8 text-xs" : size === "lg" ? "h-11 text-base" : "h-9 text-sm";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { role: "grid", "aria-label": `Year picker ${rangeStart}\u2013${rangeEnd}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "grid grid-cols-4 gap-1 mt-2", children: years.map((yr) => {
      const isSelected = selected ? selected.getFullYear() === yr : false;
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
            "flex items-center justify-center rounded-md font-medium transition-colors duration-100",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1",
            isSelected ? "bg-[#000080] text-white hover:bg-[#0000a0]" : isNavy ? "text-gray-200 hover:bg-[#000060]" : "text-gray-700 hover:bg-[#dae8ff]"
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
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const [internalSelected, setInternalSelected] = (0, import_react10.useState)(
    defaultValue != null ? defaultValue : null
  );
  const selected = value !== void 0 ? value : internalSelected;
  const [viewDate, setViewDate] = (0, import_react10.useState)(() => {
    const base = selected != null ? selected : today;
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });
  const [view, setView] = (0, import_react10.useState)(initialView);
  const isNavy = theme === "navy";
  (0, import_react10.useEffect)(() => {
    if (value) {
      setViewDate(new Date(value.getFullYear(), value.getMonth(), 1));
    }
  }, [value]);
  const handleSelectDay = (0, import_react10.useCallback)((date) => {
    if (value === void 0) setInternalSelected(date);
    onChange == null ? void 0 : onChange(date);
  }, [value, onChange]);
  const handlePrevMonth = (0, import_react10.useCallback)(() => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }, []);
  const handleNextMonth = (0, import_react10.useCallback)(() => {
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }, []);
  const handleSelectMonth = (0, import_react10.useCallback)((month) => {
    setViewDate((d) => new Date(d.getFullYear(), month, 1));
    setView("day");
  }, []);
  const handlePrevYear = (0, import_react10.useCallback)(() => {
    setViewDate((d) => new Date(d.getFullYear() - 1, d.getMonth(), 1));
  }, []);
  const handleNextYear = (0, import_react10.useCallback)(() => {
    setViewDate((d) => new Date(d.getFullYear() + 1, d.getMonth(), 1));
  }, []);
  const handleSelectYear = (0, import_react10.useCallback)((year) => {
    setViewDate((d) => new Date(year, d.getMonth(), 1));
    setView("month");
  }, []);
  const handlePrevRange = (0, import_react10.useCallback)(() => {
    setViewDate((d) => new Date(d.getFullYear() - YEAR_RANGE_SIZE, d.getMonth(), 1));
  }, []);
  const handleNextRange = (0, import_react10.useCallback)(() => {
    setViewDate((d) => new Date(d.getFullYear() + YEAR_RANGE_SIZE, d.getMonth(), 1));
  }, []);
  const containerPadding = size === "sm" ? "p-3" : size === "lg" ? "p-5" : "p-4";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "div",
    {
      role: "application",
      "aria-label": ariaLabel,
      className: cn(
        calendarVariants({ size }),
        containerPadding,
        "rounded-lg",
        isNavy ? "bg-[#00002a] text-white" : "bg-white text-gray-900",
        className
      ),
      children: [
        view === "day" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
        view === "month" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
        view === "year" && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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

// src/components/Checkbox/Checkbox.tsx
var import_react11 = require("react");
var import_lucide_react9 = require("lucide-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var sizeMap6 = {
  sm: { box: "h-3.5 w-3.5", icon: "h-2.5 w-2.5", label: "text-xs" },
  md: { box: "h-4 w-4", icon: "h-3 w-3", label: "text-sm" },
  lg: { box: "h-5 w-5", icon: "h-3.5 w-3.5", label: "text-base" }
};
var Checkbox = (0, import_react11.forwardRef)(
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
    const generatedId = (0, import_react11.useId)();
    const checkboxId = id || `checkbox-${generatedId}`;
    const s = sizeMap6[size];
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: cn("flex items-start gap-2", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "relative flex items-center justify-center shrink-0 mt-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "div",
          {
            className: cn(
              "flex items-center justify-center rounded transition-all duration-150 border-2 cursor-pointer",
              s.box,
              checked || indeterminate ? "bg-primary border-primary" : "bg-background border-input hover:border-primary",
              disabled && "opacity-50 cursor-not-allowed",
              error && !checked && "border-red-400"
            ),
            "aria-hidden": "true",
            children: indeterminate ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react9.Minus, { className: cn(s.icon, "text-white"), strokeWidth: 3 }) : checked ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react9.Check, { className: cn(s.icon, "text-white"), strokeWidth: 3 }) : null
          }
        )
      ] }),
      (label || description) && /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("label", { htmlFor: checkboxId, className: cn("cursor-pointer", disabled && "cursor-not-allowed"), children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: cn("font-medium text-foreground block", s.label), children: label }),
        description && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-xs text-muted-foreground block mt-0.5", children: description })
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "text-xs text-red-500 mt-1", role: "alert", children: error })
    ] });
  }
);
Checkbox.displayName = "Checkbox";
var Checkbox_default = Checkbox;

// src/components/Divider/Divider.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      __spreadValues({
        role: "separator",
        "aria-orientation": "vertical",
        className: cn("inline-block self-stretch w-px bg-[#d7d7d7] mx-2", className)
      }, props)
    );
  }
  if (label) {
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "div",
      __spreadProps(__spreadValues({
        role: "separator",
        className: cn("flex items-center gap-3 w-full", className)
      }, props), {
        children: [
          labelAlign !== "left" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: cn("flex-1 border-[#d7d7d7]", variantMap[variant], thicknessMap[thickness]) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-xs text-[#808080] font-medium whitespace-nowrap shrink-0", children: label }),
          labelAlign !== "right" && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: cn("flex-1 border-[#d7d7d7]", variantMap[variant], thicknessMap[thickness]) })
        ]
      })
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "hr",
    __spreadValues({
      role: "separator",
      className: cn(
        "border-[#d7d7d7] w-full my-0",
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
var import_react12 = require("react");
var import_lucide_react10 = require("lucide-react");
var import_jsx_runtime18 = require("react/jsx-runtime");
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
  (0, import_react12.useEffect)(() => {
    if (!closeOnEsc) return;
    const handler = (e) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose, closeOnEsc]);
  (0, import_react12.useEffect)(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "fixed inset-0 z-50", role: "dialog", "aria-modal": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "div",
      {
        className: "absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in",
        onClick: closeOnOverlay ? onClose : void 0,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
      "div",
      {
        className: cn(
          "absolute bg-white shadow-modal flex flex-col",
          placementStyles[placement],
          sizeStyles[placement][size],
          className
        ),
        children: [
          (title || showCloseButton) && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex items-center justify-between p-5 border-b border-[#d7d7d7] shrink-0", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "text-base font-semibold text-[#1e1e1e]", children: title }),
              description && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "text-sm text-[#808080] mt-0.5", children: description })
            ] }),
            showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "button",
              {
                type: "button",
                onClick: onClose,
                "aria-label": "Close drawer",
                className: "p-1 rounded-md text-[#808080] hover:text-[#1e1e1e] hover:bg-gray-100 transition-colors",
                children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react10.X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex-1 overflow-y-auto p-5 scrollbar-thin", children }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "shrink-0 flex items-center justify-end gap-2 p-5 border-t border-[#d7d7d7]", children: footer })
        ]
      }
    )
  ] });
};
Drawer.displayName = "Drawer";
var Drawer_default = Drawer;

// src/components/Dropdown/Dropdown.tsx
var import_react13 = require("react");
var import_lucide_react11 = require("lucide-react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var Dropdown = ({
  trigger,
  items,
  align = "left",
  className,
  menuClassName
}) => {
  const [open, setOpen] = (0, import_react13.useState)(false);
  const ref = (0, import_react13.useRef)(null);
  const menuRef = (0, import_react13.useRef)(null);
  const menuId = (0, import_react13.useId)();
  useClickOutside(ref, () => setOpen(false));
  (0, import_react13.useEffect)(() => {
    var _a;
    if (!open) return;
    const firstItem = (_a = menuRef.current) == null ? void 0 : _a.querySelector('button[role="menuitem"]:not(:disabled)');
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
      (_b = (_a = menuRef.current) == null ? void 0 : _a.querySelectorAll('button[role="menuitem"]:not(:disabled)')) != null ? _b : []
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { ref, className: cn("relative inline-flex", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "button",
      {
        type: "button",
        "aria-haspopup": "menu",
        "aria-expanded": open,
        "aria-controls": menuId,
        onClick: () => setOpen((v) => !v),
        onKeyDown: handleTriggerKeyDown,
        className: "cursor-pointer",
        children: trigger
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "div",
      {
        ref: menuRef,
        id: menuId,
        role: "menu",
        onKeyDown: handleMenuKeyDown,
        className: cn(
          "absolute z-50 mt-1 min-w-[180px] bg-background border border-border rounded-lg shadow-dropdown py-1 animate-fade-in",
          align === "right" ? "right-0" : "left-0",
          "top-full",
          menuClassName
        ),
        children: items.map((item) => {
          if ("separator" in item && item.separator) {
            return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
              item.label && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "block px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: item.label }),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("hr", { className: "my-1 border-border" })
            ] }, item.id);
          }
          const d = item;
          return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
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
                "w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors duration-100 text-left",
                d.danger ? "text-red-600 hover:bg-red-50" : "text-foreground hover:bg-accent hover:text-accent-foreground",
                d.disabled && "opacity-40 cursor-not-allowed"
              ),
              children: [
                d.checked !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "w-4 shrink-0", children: d.checked && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react11.Check, { className: "h-3.5 w-3.5" }) }),
                d.icon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "shrink-0 text-[#808080]", children: d.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "flex-1", children: d.label }),
                d.shortcut && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("kbd", { className: "text-xs text-muted-foreground font-mono", children: d.shortcut }),
                d.children && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react11.ChevronRight, { className: "h-3.5 w-3.5 text-muted-foreground shrink-0" })
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

// src/components/Progress/Progress.tsx
var import_class_variance_authority8 = require("class-variance-authority");
var import_jsx_runtime20 = require("react/jsx-runtime");
var progressTrackVariants = (0, import_class_variance_authority8.cva)(
  "w-full overflow-hidden rounded-full bg-muted",
  {
    variants: {
      size: {
        xs: "h-1",
        sm: "h-1.5",
        md: "h-2.5",
        lg: "h-4",
        xl: "h-6"
      }
    },
    defaultVariants: { size: "md" }
  }
);
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
    striped = false
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
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", __spreadProps(__spreadValues({ className: cn("w-full", className) }, props), { children: [
    (showLabel || label) && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-between items-center mb-1.5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-xs font-medium text-[#1e1e1e]", children: label }),
      showLabel && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "text-xs text-[#808080] tabular-nums", children: [
        Math.round(pct),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        className: progressTrackVariants({ size }),
        role: "progressbar",
        "aria-valuenow": value,
        "aria-valuemin": 0,
        "aria-valuemax": max,
        "aria-label": label || `Progress: ${Math.round(pct)}%`,
        children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          "div",
          {
            className: cn(
              "h-full rounded-full transition-all duration-500 ease-out",
              colorMap[color],
              striped && "bg-stripes",
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
var import_react14 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var sizeMap7 = {
  sm: { outer: "h-3.5 w-3.5", inner: "h-1.5 w-1.5", label: "text-xs" },
  md: { outer: "h-4 w-4", inner: "h-2 w-2", label: "text-sm" },
  lg: { outer: "h-5 w-5", inner: "h-2.5 w-2.5", label: "text-base" }
};
var Radio = (0, import_react14.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className, label, description, size = "md", checked, disabled, error, id } = _b, props = __objRest(_b, ["className", "label", "description", "size", "checked", "disabled", "error", "id"]);
    const generatedId = (0, import_react14.useId)();
    const radioId = id || `radio-${generatedId}`;
    const s = sizeMap7[size];
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: cn("flex items-start gap-2", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "relative flex items-center justify-center shrink-0 mt-0.5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          "div",
          {
            className: cn(
              "flex items-center justify-center rounded-full border-2 transition-all duration-150",
              s.outer,
              checked ? "border-primary" : "border-input hover:border-primary",
              disabled && "opacity-50 cursor-not-allowed",
              error && !checked && "border-red-400"
            ),
            "aria-hidden": "true",
            children: checked && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: cn("rounded-full bg-primary", s.inner) })
          }
        )
      ] }),
      (label || description) && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("label", { htmlFor: radioId, className: cn("cursor-pointer", disabled && "cursor-not-allowed opacity-50"), children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: cn("font-medium text-foreground block", s.label), children: label }),
        description && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "text-xs text-muted-foreground block mt-0.5", children: description })
      ] })
    ] });
  }
);
Radio.displayName = "Radio";
var Radio_default = Radio;

// src/components/ServerDataTable/ServerDataTable.tsx
var import_react15 = require("react");
var import_outline2 = require("@heroicons/react/24/outline");
var import_jsx_runtime22 = require("react/jsx-runtime");
function getThemeTokens(theme) {
  if (theme === "navy") {
    return {
      // Status toggle
      toggleBorder: "border-[#6699cc]",
      toggleActiveBg: "bg-[#000060] text-white",
      toggleInactiveBg: "bg-[#000040] text-[#99bbdd]",
      // Search
      searchBorder: "border-[#000060]",
      searchBg: "bg-[#000030] text-white placeholder-[#6688aa]",
      searchFocus: "focus:ring-[#6699cc]/40 focus:border-[#6699cc]",
      searchIcon: "text-[#6688aa]",
      // Header
      headerBg: "#000060",
      headerText: "text-[#aaccee]",
      headerHover: "hover:text-white",
      // Row card
      rowBg: "bg-[#000040]",
      rowBorder: "border-[#000060]",
      rowExpandedBorder: "border-[#6699cc]/40",
      rowText: "text-[#ddeeff]",
      // Expand button
      expandBtnBorder: "border-[#000060] hover:border-[#6699cc] hover:bg-[#6699cc]/10",
      expandBtnIcon: "text-[#aaccee]",
      expandBtnFocus: "focus:ring-[#6699cc]/30",
      // Expanded panel
      expandedBg: "bg-[#000030]",
      expandedBorder: "border-[#6699cc]/40",
      // Note input
      noteInputBorder: "border-[#000060]",
      noteInputBg: "bg-[#000040] text-[#ddeeff] placeholder-[#6688aa]",
      noteInputFocus: "focus:ring-[#6699cc]/30 focus:border-[#6699cc]",
      noteLabel: "text-[#aaccee]",
      appliedText: "text-[#aaccee]",
      // Pagination
      paginationText: "text-[#6688aa]",
      paginationBtn: "border-[#000060] text-[#aaccee] hover:bg-[#000060]",
      paginationActivePage: "bg-[#000080] text-white",
      paginationInactivePage: "border-[#000060] text-[#aaccee] hover:bg-[#000060]",
      paginationEllipsis: "text-[#6688aa]",
      // Empty state
      emptyBg: "bg-[#000040]",
      emptyBorder: "border-[#000060]",
      emptyText: "text-[#6688aa]",
      // Skeleton
      skeletonBg: "bg-[#000040]",
      skeletonBorder: "border-[#000060]",
      skeletonPulse: "bg-[#000060]",
      // Sort icon active
      sortIconActive: "text-[#6699cc]"
    };
  }
  return {
    toggleBorder: "border-[#000080]",
    toggleActiveBg: "bg-[#000080] text-white",
    toggleInactiveBg: "bg-white text-[#000080]",
    searchBorder: "border-gray-300",
    searchBg: "bg-white text-gray-900 placeholder-gray-400",
    searchFocus: "focus:ring-[#000080]/30 focus:border-[#000080]",
    searchIcon: "text-gray-400",
    headerBg: "#dde3f0",
    headerText: "text-[#000040]",
    headerHover: "hover:text-[#000080]",
    rowBg: "bg-white",
    rowBorder: "border-gray-200",
    rowExpandedBorder: "border-[#000080]/30",
    rowText: "text-[#1e1e1e]",
    expandBtnBorder: "border-gray-300 hover:border-[#000080] hover:bg-[#000080]/5",
    expandBtnIcon: "text-gray-600",
    expandBtnFocus: "focus:ring-[#000080]/30",
    expandedBg: "bg-white",
    expandedBorder: "border-[#000080]/30",
    noteInputBorder: "border-gray-300",
    noteInputBg: "bg-white text-gray-900 placeholder-gray-400",
    noteInputFocus: "focus:ring-[#000080]/30 focus:border-[#000080]",
    noteLabel: "text-[#1e1e1e]",
    appliedText: "text-[#1e1e1e]",
    paginationText: "text-gray-500",
    paginationBtn: "border-gray-300 text-gray-700 hover:bg-gray-50",
    paginationActivePage: "bg-[#000080] text-white",
    paginationInactivePage: "border-gray-300 text-gray-700 hover:bg-gray-50",
    paginationEllipsis: "text-gray-400",
    emptyBg: "bg-white",
    emptyBorder: "border-gray-200",
    emptyText: "text-gray-400",
    skeletonBg: "bg-white",
    skeletonBorder: "border-gray-200",
    skeletonPulse: "bg-gray-200",
    sortIconActive: "text-[#000080]"
  };
}
function SkeletonRow({ cols, tk }) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: `${tk.skeletonBg} rounded-xl border ${tk.skeletonBorder} shadow-sm px-4 py-3 mb-2 flex items-center gap-4 animate-pulse`, children: [
    Array.from({ length: cols }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: `flex-1 h-4 ${tk.skeletonPulse} rounded` }, i)),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: `w-8 h-8 ${tk.skeletonPulse} rounded-full flex-shrink-0` })
  ] });
}
function SortIcon({ direction, activeClass }) {
  if (direction === "asc") return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_outline2.ChevronUpIcon, { className: `h-3.5 w-3.5 ${activeClass}` });
  if (direction === "desc") return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_outline2.ChevronDownIcon, { className: `h-3.5 w-3.5 ${activeClass}` });
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_outline2.ChevronDownIcon, { className: "h-3.5 w-3.5 text-gray-400" });
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
  const [status, setStatus] = (0, import_react15.useState)("active");
  const [search, setSearch] = (0, import_react15.useState)("");
  const [debouncedSearch, setDebouncedSearch] = (0, import_react15.useState)("");
  const [sortField, setSortField] = (0, import_react15.useState)(null);
  const [sortDirection, setSortDirection] = (0, import_react15.useState)(null);
  const [page, setPage] = (0, import_react15.useState)(1);
  const [data, setData] = (0, import_react15.useState)([]);
  const [total, setTotal] = (0, import_react15.useState)(0);
  const [loading, setLoading] = (0, import_react15.useState)(false);
  const [expandedRow, setExpandedRow] = (0, import_react15.useState)(null);
  const [notes, setNotes] = (0, import_react15.useState)({});
  const debounceRef = (0, import_react15.useRef)(null);
  (0, import_react15.useEffect)(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [search]);
  const load = (0, import_react15.useCallback)(async () => {
    setLoading(true);
    try {
      const result = await fetchData({ page, pageSize, search: debouncedSearch, sortField, sortDirection, status });
      setData(result.data);
      setTotal(result.total);
    } catch (e) {
      setData([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [fetchData, page, pageSize, debouncedSearch, sortField, sortDirection, status]);
  (0, import_react15.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: `w-full ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex justify-center mb-5", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: `inline-flex rounded-full border-2 ${tk.toggleBorder} overflow-hidden`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "button",
        {
          onClick: () => handleStatusToggle("active"),
          className: `px-8 py-2 text-sm font-semibold transition-colors focus:outline-none ${status === "active" ? tk.toggleActiveBg : tk.toggleInactiveBg}`,
          children: "Active"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "button",
        {
          onClick: () => handleStatusToggle("closed"),
          className: `px-8 py-2 text-sm font-semibold transition-colors focus:outline-none ${status === "closed" ? tk.toggleActiveBg : tk.toggleInactiveBg}`,
          children: "Closed"
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "mb-4 relative max-w-xs", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_outline2.MagnifyingGlassIcon, { className: `absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${tk.searchIcon} pointer-events-none` }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "input",
        {
          type: "text",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search...",
          className: `w-full pl-9 pr-3 py-2 text-sm border ${tk.searchBorder} ${tk.searchBg} rounded-lg focus:outline-none focus:ring-2 ${tk.searchFocus}`
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      "div",
      {
        className: "flex items-center gap-2 px-4 py-2.5 rounded-lg mb-2",
        style: { background: tk.headerBg },
        children: [
          columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
            "div",
            {
              style: colStyle,
              className: `flex items-center gap-1 text-xs font-semibold ${tk.headerText} select-none ${col.sortable ? `cursor-pointer ${tk.headerHover}` : ""}`,
              onClick: () => col.sortable && handleSort(col.key),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { children: col.header }),
                col.sortable && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "w-9 flex-shrink-0" })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { children: loading ? Array.from({ length: pageSize > 5 ? 5 : pageSize }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SkeletonRow, { cols: colCount, tk }, i)) : data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: `${tk.emptyBg} rounded-xl border ${tk.emptyBorder} shadow-sm px-4 py-10 text-center text-sm ${tk.emptyText}`, children: "No records found." }) : data.map((row) => {
      var _a;
      const key = keyExtractor(row);
      const isExpanded = expandedRow === key;
      const appliedDate = appliedDateField ? String((_a = row[appliedDateField]) != null ? _a : "") : "";
      return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "mb-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
          "div",
          {
            className: `${tk.rowBg} rounded-xl border shadow-sm px-4 py-3 flex items-center gap-2 transition-all ${isExpanded ? `${tk.rowExpandedBorder} rounded-b-none mb-0` : tk.rowBorder}`,
            children: [
              columns.map((col) => {
                var _a2;
                return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { style: colStyle, className: `text-sm ${tk.rowText} truncate`, children: col.cell ? col.cell(row) : String((_a2 = row[col.key]) != null ? _a2 : "") }, col.key);
              }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                "button",
                {
                  onClick: () => toggleExpand(key),
                  "aria-label": isExpanded ? "Collapse row" : "Expand row",
                  className: `w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border ${tk.expandBtnBorder} transition-colors focus:outline-none focus:ring-2 ${tk.expandBtnFocus}`,
                  children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_outline2.ChevronUpIcon, { className: `h-4 w-4 ${tk.expandBtnIcon}` }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_outline2.ChevronDownIcon, { className: `h-4 w-4 ${tk.expandBtnIcon}` })
                }
              )
            ]
          }
        ),
        isExpanded && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: `${tk.expandedBg} border border-t-0 ${tk.expandedBorder} rounded-b-xl px-4 py-4`, children: renderExpandedRow ? renderExpandedRow(
          row,
          getNote(key),
          (v) => setNote(key, v),
          () => {
            onApprove == null ? void 0 : onApprove(row, getNote(key));
          },
          () => {
            onReject == null ? void 0 : onReject(row, getNote(key));
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          DefaultExpandedContent,
          {
            note: getNote(key),
            onNoteChange: (v) => setNote(key, v),
            appliedDate,
            onApprove: () => onApprove == null ? void 0 : onApprove(row, getNote(key)),
            onReject: () => onReject == null ? void 0 : onReject(row, getNote(key)),
            tk
          }
        ) })
      ] }, key);
    }) }),
    !loading && total > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-center justify-between mt-4 px-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: `text-xs ${tk.paginationText}`, children: [
        "Showing ",
        Math.min((page - 1) * pageSize + 1, total),
        "\u2013",
        Math.min(page * pageSize, total),
        " of ",
        total
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
          "button",
          {
            onClick: () => setPage((p) => Math.max(1, p - 1)),
            disabled: page === 1,
            className: `flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border ${tk.paginationBtn} disabled:opacity-40 disabled:cursor-not-allowed transition-colors`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_outline2.ChevronLeftIcon, { className: "h-3.5 w-3.5" }),
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
          (p, idx) => p === "..." ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: `px-2 text-xs ${tk.paginationEllipsis}`, children: "\u2026" }, `ellipsis-${idx}`) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "button",
            {
              onClick: () => setPage(p),
              className: `w-8 h-8 text-xs font-medium rounded-lg transition-colors ${page === p ? tk.paginationActivePage : `border ${tk.paginationInactivePage}`}`,
              children: p
            },
            p
          )
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
          "button",
          {
            onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
            disabled: page === totalPages,
            className: `flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border ${tk.paginationBtn} disabled:opacity-40 disabled:cursor-not-allowed transition-colors`,
            children: [
              "Next",
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_outline2.ChevronRightIcon, { className: "h-3.5 w-3.5" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function DefaultExpandedContent({ note, onNoteChange, appliedDate, onApprove, onReject, tk }) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "space-y-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: `text-sm font-medium ${tk.noteLabel} w-12 flex-shrink-0`, children: "Note" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "input",
        {
          type: "text",
          value: note,
          onChange: (e) => onNoteChange(e.target.value),
          placeholder: "Reason",
          className: `flex-1 max-w-sm px-3 py-1.5 text-sm border ${tk.noteInputBorder} ${tk.noteInputBg} rounded-lg focus:outline-none focus:ring-2 ${tk.noteInputFocus}`
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: `text-sm ${tk.appliedText}`, children: [
        "Applied on: ",
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("strong", { children: appliedDate || "dd mm, yyyy" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "button",
          {
            onClick: onReject,
            className: "px-5 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-400",
            children: "Reject"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "button",
          {
            onClick: onApprove,
            className: "px-5 py-2 text-sm font-semibold text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-600",
            style: { backgroundColor: "#1a6b2a" },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "#155722",
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "#1a6b2a",
            children: "Approve"
          }
        )
      ] })
    ] })
  ] });
}

// src/components/Skeleton/Skeleton.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
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
  const base = cn(
    "rounded-md bg-gray-200",
    animated && "animate-pulse",
    className
  );
  if (variant === "text" && lines > 1) {
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", __spreadProps(__spreadValues({ className: "flex flex-col gap-2" }, props), { children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "div",
      {
        className: cn(base, "h-4"),
        style: { width: i === lines - 1 ? "75%" : "100%" }
      },
      i
    )) }));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "div",
    __spreadValues({
      className: cn(
        base,
        variant === "circle" && "rounded-full",
        variant === "text" && "h-4"
      ),
      style: __spreadValues({
        width: width ? typeof width === "number" ? `${width}px` : width : void 0,
        height: height ? typeof height === "number" ? `${height}px` : height : void 0
      }, style),
      "aria-hidden": "true"
    }, props)
  );
};
var SkeletonCard = ({ className }) => /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: cn("p-4 border border-[#d7d7d7] rounded-lg space-y-3", className), children: [
  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Skeleton, { variant: "circle", width: 40, height: 40 }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex-1 space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Skeleton, { variant: "text", width: "60%", height: 16 }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Skeleton, { variant: "text", width: "40%", height: 12 })
    ] })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Skeleton, { variant: "text", lines: 3 }),
  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex gap-2 pt-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Skeleton, { width: 80, height: 32 }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Skeleton, { width: 80, height: 32 })
  ] })
] });
SkeletonCard.displayName = "SkeletonCard";
Skeleton.displayName = "Skeleton";
var Skeleton_default = Skeleton;

// src/components/Spinner/Spinner.tsx
var import_class_variance_authority9 = require("class-variance-authority");
var import_jsx_runtime24 = require("react/jsx-runtime");
var spinnerVariants = (0, import_class_variance_authority9.cva)(
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
        success: "text-green-500",
        warning: "text-amber-400",
        danger: "text-red-500"
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "div",
    __spreadProps(__spreadValues({
      role: "status",
      "aria-label": label,
      className: cn("inline-flex items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: cn(spinnerVariants({ size, color })) }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "sr-only", children: label })
      ]
    })
  );
};
Spinner.displayName = "Spinner";
var Spinner_default = Spinner;

// src/components/Switch/Switch.tsx
var import_react16 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var sizeMap8 = {
  sm: { track: "h-4 w-7", thumb: "h-3 w-3", translate: "translate-x-3", label: "text-xs" },
  md: { track: "h-5 w-9", thumb: "h-4 w-4", translate: "translate-x-4", label: "text-sm" },
  lg: { track: "h-6 w-11", thumb: "h-5 w-5", translate: "translate-x-5", label: "text-base" }
};
var Switch = (0, import_react16.forwardRef)(
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
    const generatedId = (0, import_react16.useId)();
    const switchId = id || `switch-${generatedId}`;
    const s = sizeMap8[size];
    const track = /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "div",
      {
        className: cn(
          "relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer",
          s.track,
          checked ? "bg-primary" : "bg-muted",
          disabled && "opacity-50 cursor-not-allowed"
        ),
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "span",
          {
            className: cn(
              "inline-block rounded-full bg-background shadow-sm transition-transform duration-200 ease-in-out",
              s.thumb,
              checked ? s.translate : "translate-x-0.5"
            )
          }
        )
      }
    );
    const labelEl = label && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("span", { className: cn("font-medium text-foreground", s.label), children: [
      label,
      description && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "block text-xs text-muted-foreground font-normal mt-0.5", children: description })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "label",
      {
        htmlFor: switchId,
        className: cn(
          "inline-flex items-start gap-2.5 cursor-pointer",
          disabled && "cursor-not-allowed opacity-50",
          className
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
var import_lucide_react12 = require("lucide-react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var colorMap2 = {
  default: "bg-gray-100 text-gray-700 border-gray-200",
  blue: "bg-[#dae8ff] text-[#000080] border-[#b3d4ff]",
  green: "bg-green-50 text-green-700 border-green-200",
  red: "bg-red-50 text-red-700 border-red-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  purple: "bg-purple-50 text-purple-700 border-purple-200",
  pink: "bg-pink-50 text-pink-700 border-pink-200"
};
var sizeMap9 = {
  sm: "h-5 px-2 text-xs gap-1",
  md: "h-6 px-2.5 text-xs gap-1.5",
  lg: "h-7 px-3 text-sm gap-1.5"
};
var Tag = (_a) => {
  var _b = _a, {
    className,
    size = "md",
    variant = "default",
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
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    "span",
    __spreadProps(__spreadValues({
      className: cn(
        "inline-flex items-center rounded-md border font-medium transition-colors",
        sizeMap9[size],
        colorMap2[color],
        className
      )
    }, props), {
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className: "shrink-0", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { children }),
        removable && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          "button",
          {
            type: "button",
            onClick: onRemove,
            className: "shrink-0 hover:opacity-70 transition-opacity ml-0.5",
            "aria-label": `Remove ${children} tag`,
            children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react12.X, { className: "h-3 w-3" })
          }
        )
      ]
    })
  );
};
Tag.displayName = "Tag";
var Tag_default = Tag;

// src/components/Tooltip/Tooltip.tsx
var import_react17 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
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
  const [visible, setVisible] = (0, import_react17.useState)(false);
  const timerRef = (0, import_react17.useRef)(null);
  const show = (0, import_react17.useCallback)(() => {
    if (disabled) return;
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay, disabled]);
  const hide = (0, import_react17.useCallback)(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "div",
    {
      className: "relative inline-flex",
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      children: [
        children,
        visible && /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
          "div",
          {
            role: "tooltip",
            className: cn(
              "absolute z-50 px-2.5 py-1.5 text-xs font-medium text-background bg-foreground rounded-md shadow-lg whitespace-nowrap animate-fade-in pointer-events-none",
              placementStyles2[placement],
              className
            ),
            style: { maxWidth },
            children: [
              content,
              /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: cn("absolute border", arrowStyles[placement]), "aria-hidden": "true" })
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
var import_react18 = require("react");
var import_lucide_react13 = require("lucide-react");
var import_jsx_runtime28 = require("react/jsx-runtime");
var Topbar = (0, import_react18.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "header",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "w-full border-b border-slate-200 bg-white px-4 py-3 sm:px-6",
          className
        )
      }, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "button",
              {
                onClick: onMenuToggle,
                className: "p-1.5 hover:bg-slate-100 rounded-lg transition-colors lg:hidden",
                "aria-label": menuOpen ? "Close menu" : "Open menu",
                children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react13.X, { className: "h-5 w-5 text-slate-600" }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react13.Menu, { className: "h-5 w-5 text-slate-600" })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("h1", { className: "text-lg font-semibold text-slate-900", children: title })
          ] }),
          onSearchChange && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "hidden md:flex flex-1 max-w-sm", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "relative w-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react13.Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
              "input",
              {
                type: "text",
                placeholder: "Search...",
                onChange: (e) => onSearchChange(e.target.value),
                className: "w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              }
            )
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
              "button",
              {
                onClick: onNotifications,
                className: "relative p-2 hover:bg-slate-100 rounded-lg transition-colors",
                "aria-label": "Notifications",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react13.Bell, { className: "h-5 w-5 text-slate-600" }),
                  notifications > 0 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
              "button",
              {
                onClick: onProfile,
                className: "flex items-center gap-2 p-1.5 hover:bg-slate-100 rounded-lg transition-colors",
                "aria-label": "Profile menu",
                children: [
                  profileImage ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
                    "img",
                    {
                      src: profileImage,
                      alt: userName || "User",
                      className: "h-6 w-6 rounded-full object-cover"
                    }
                  ) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react13.User, { className: "h-5 w-5 text-slate-600" }),
                  userName && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "hidden sm:inline text-sm text-slate-700 font-medium", children: userName })
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
var import_react19 = require("react");
var import_lucide_react14 = require("lucide-react");
var import_jsx_runtime29 = require("react/jsx-runtime");
var AdminSidebar = (0, import_react19.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
      "aside",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "bg-slate-900 text-white transition-all duration-200 flex flex-col",
          collapsed ? "w-20" : "w-64",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "flex items-center justify-between p-4 border-b border-slate-800", children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              "h1",
              {
                className: cn(
                  "font-bold transition-all",
                  collapsed ? "text-xs" : "text-lg"
                ),
                children: collapsed ? "UI" : "@shubh/ui"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              "button",
              {
                onClick: onToggle,
                className: "p-1 hover:bg-slate-800 rounded-lg transition-colors",
                "aria-label": collapsed ? "Expand" : "Collapse",
                children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react14.Menu, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react14.X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("nav", { className: "flex-1 overflow-y-auto py-4 px-3 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
              "button",
              {
                onClick: () => onNavigate == null ? void 0 : onNavigate(item.id),
                className: cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left",
                  activeItem === item.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/10"
                ),
                children: [
                  item.icon && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "flex-shrink-0", children: item.icon }),
                  !collapsed && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "text-sm font-medium", children: item.label })
                ]
              }
            ),
            item.children && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "ml-3 mt-1 space-y-1", children: item.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
              "button",
              {
                onClick: () => onNavigate == null ? void 0 : onNavigate(child.id),
                className: cn(
                  "w-full flex items-center gap-3 px-3 py-1.5 rounded text-xs transition-colors text-left",
                  activeItem === child.id ? "bg-primary/80 text-primary-foreground" : "text-muted-foreground hover:bg-muted/10"
                ),
                children: child.label
              },
              child.id
            )) })
          ] }, item.id)) }),
          children && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { className: "border-t border-border p-4", children })
        ]
      })
    );
  }
);
AdminSidebar.displayName = "AdminSidebar";
var AdminSidebar_default = AdminSidebar;

// src/components/admin/StatsCard/StatsCard.tsx
var import_react20 = require("react");
var import_lucide_react15 = require("lucide-react");
var import_jsx_runtime30 = require("react/jsx-runtime");
var variantStyles = {
  default: "bg-card border-border text-card-foreground",
  primary: "bg-accent border-primary/20 text-accent-foreground",
  success: "bg-green-50 border-green-200 text-green-900",
  warning: "bg-amber-50 border-amber-200 text-amber-900",
  danger: "bg-red-50 border-red-200 text-red-900"
};
var iconBgVariants = {
  default: "bg-muted",
  primary: "bg-accent",
  success: "bg-green-100",
  warning: "bg-amber-100",
  danger: "bg-red-100"
};
var trendColorVariants = {
  up: "text-green-600",
  down: "text-red-600"
};
var StatsCard = (0, import_react20.forwardRef)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "rounded-lg border p-6 transition-shadow hover:shadow-md",
          variantStyles[variant],
          className
        )
      }, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-sm font-medium text-muted-foreground", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "mt-2 flex items-baseline gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-2xl font-bold", children: value }),
              subtitle && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-xs text-muted-foreground", children: subtitle })
            ] }),
            trend && trendPercent && /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: cn("mt-2 flex items-center gap-1 text-sm font-medium", trendColorVariants[trend]), children: [
              trend === "up" ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react15.TrendingUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react15.TrendingDown, { className: "h-4 w-4" }),
              /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { children: [
                trendPercent,
                "%"
              ] }),
              trendLabel && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "text-muted-foreground", children: trendLabel })
            ] })
          ] }),
          icon && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "div",
            {
              className: cn(
                "rounded-lg p-3",
                iconBgVariants[variant]
              ),
              children: icon
            }
          )
        ] })
      })
    );
  }
);
StatsCard.displayName = "StatsCard";
var StatsCard_default = StatsCard;

// src/layout/Navbar/Navbar.tsx
var import_react21 = require("react");
var import_jsx_runtime31 = require("react/jsx-runtime");
var Navbar = (0, import_react21.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className, sticky = false, children } = _b, props = __objRest(_b, ["className", "sticky", "children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      "header",
      __spreadProps(__spreadValues({
        ref,
        role: "banner",
        className: cn(
          "w-full border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 sm:px-6",
          sticky && "sticky top-0 z-40",
          className
        )
      }, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "mx-auto flex w-full max-w-7xl items-center justify-between gap-3", children })
      })
    );
  }
);
Navbar.displayName = "Navbar";
var Navbar_default = Navbar;

// src/layout/Sidebar/Sidebar.tsx
var import_react22 = require("react");
var import_jsx_runtime32 = require("react/jsx-runtime");
var Sidebar = (0, import_react22.forwardRef)(
  (_a, ref) => {
    var _b = _a, { className, collapsed = false, children } = _b, props = __objRest(_b, ["className", "collapsed", "children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      "aside",
      __spreadProps(__spreadValues({
        ref,
        role: "complementary",
        className: cn(
          "h-full border-r border-slate-200 bg-white px-3 py-4",
          collapsed ? "w-16" : "w-64",
          className
        )
      }, props), {
        children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("nav", { "aria-label": "Sidebar navigation", className: "flex h-full flex-col gap-1", children })
      })
    );
  }
);
Sidebar.displayName = "Sidebar";
var Sidebar_default = Sidebar;

// src/hooks/useDebounce.ts
var import_react23 = require("react");
function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = (0, import_react23.useState)(value);
  (0, import_react23.useEffect)(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

// src/hooks/useToggle.ts
var import_react24 = require("react");
function useToggle(initialValue = false) {
  const [value, setValue] = (0, import_react24.useState)(initialValue);
  const toggle = (0, import_react24.useCallback)(() => setValue((v) => !v), []);
  const setOn = (0, import_react24.useCallback)(() => setValue(true), []);
  const setOff = (0, import_react24.useCallback)(() => setValue(false), []);
  return [value, toggle, setOn, setOff, setValue];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AdminButton,
  AdminCard,
  AdminCardContent,
  AdminCardDescription,
  AdminCardFooter,
  AdminCardHeader,
  AdminCardTitle,
  AdminInput,
  AdminPagination,
  AdminSelect,
  AdminSidebar,
  AdminTable,
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Divider,
  Drawer,
  Dropdown,
  Input,
  Modal,
  Navbar,
  Pagination,
  Progress,
  Radio,
  Select,
  ServerDataTable,
  Sidebar,
  Skeleton,
  SkeletonCard,
  Spinner,
  StatsCard,
  Switch,
  Table,
  Tabs,
  Tag,
  Textarea,
  Tooltip,
  Topbar,
  alertVariants,
  badgeVariants,
  buttonVariants,
  calendarCellVariants,
  calendarVariants,
  cardVariants,
  cn,
  inputVariants,
  useClickOutside,
  useDebounce,
  useToggle
});
//# sourceMappingURL=index.js.map