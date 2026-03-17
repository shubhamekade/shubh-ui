import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { User } from 'lucide-react';
import { cn } from '@/utils/cn';

export const avatarVariants = cva(
  'inline-flex items-center justify-center shrink-0 overflow-hidden font-medium select-none',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-16 w-16 text-xl',
        '2xl': 'h-20 w-20 text-2xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
      variant: {
        image: '',
        initials: 'bg-[#dae8ff] text-[#000080]',
        icon:    'bg-gray-100 text-gray-500',
        navy:    'bg-[#000040] text-white',
        primary: 'bg-[#000080] text-white',
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
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  initials?: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
}

const statusColors: Record<string, string> = {
  online:  'bg-green-500',
  offline: 'bg-gray-400',
  busy:    'bg-red-500',
  away:    'bg-amber-400',
};

const Avatar: React.FC<AvatarProps> = ({
  className,
  size,
  shape,
  variant,
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
            'absolute bottom-0 right-0 block rounded-full ring-2 ring-white',
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