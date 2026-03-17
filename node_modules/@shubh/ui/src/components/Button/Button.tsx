import React, { forwardRef } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "../../utils/cn";
import { type ButtonProps } from "./Button.types";
import { buttonVariants } from "./component.variants";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, loading }), className)}
        disabled={isDisabled}
        aria-busy={loading}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon && <span className="shrink-0" aria-hidden="true">{leftIcon}</span>
        )}
        {children ? <span>{children}</span> : null}
        {!loading && rightIcon ? <span className="shrink-0" aria-hidden="true">{rightIcon}</span> : null}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
