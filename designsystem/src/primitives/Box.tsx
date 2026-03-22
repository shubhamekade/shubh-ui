import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export type BoxProps = HTMLAttributes<HTMLDivElement>;

const Box = forwardRef<HTMLDivElement, BoxProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn(className)} {...props} />;
});

Box.displayName = 'Box';

export default Box;
