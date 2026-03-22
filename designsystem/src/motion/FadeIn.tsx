'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

import { motionTokens } from './tokens';

export interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
}

export function FadeIn({ delay = 0, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{
        duration: motionTokens.duration.base,
        ease: motionTokens.easing.standard,
        delay,
      }}
      {...props}
    />
  );
}