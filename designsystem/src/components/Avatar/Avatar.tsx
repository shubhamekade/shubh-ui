import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { User } from 'lucide-react';
import { cn } from '@/utils/cn';

export const avatarVariants = cva(
  'inline-flex items-center justify-center shrink-0 overflow-hidden font-semibold select-none ring-2 ring-border/50',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-[10px]',
        sm: 'h-8 w-8 text-xs',
        md: 'h-9 w-9 text-sm',
        lg: 'h-11 w-11 text-base',
        xl: 'h-14 w-14 text-lg',
        '2xl': 'h-18 w-18 text-xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-xl',
      },
      variant: {
        image: 'ring-0',
        initials: 'bg-accent text-accent-foreground ring-0',
        icon: 'bg-muted text-muted-foreground ring-0',
        navy: 'bg-sidebar text-sidebar-foreground ring-0',
        primary: 'bg-primary text-primary-foreground ring-0',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
      variant: 'initials',
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  initials?: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
}

const statusColors: Record<string, string> = {
  online: 'bg-success',
  offline: 'bg-muted-foreground',
  busy: 'bg-destructive',
  away: 'bg-warning',
};

const Avatar: React.FC<AvatarProps> = ({
  className,
  size,
  shape,
  variant: _variant,
  src,
  alt = 'Avatar',
  initials,
  status,
  ...props
}) => {
  const effectiveVariant = src ? 'image' : initials ? 'initials' : 'icon';

  return (
    <div className="relative inline-flex">
      <div
        className={cn(avatarVariants({ size, shape, variant: effectiveVariant }), className)}
        role="img"
        aria-label={alt}
        {...props}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : initials ? (
          <span aria-hidden="true">{initials}</span>
        ) : (
          <User className="h-1/2 w-1/2" aria-hidden="true" />
        )}
      </div>
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-card',
            statusColors[status],
            size === 'xs' || size === 'sm' ? 'h-2 w-2' : 'h-3 w-3'
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
export default Avatar;
