'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

import { motionTokens } from './tokens';

export function ScaleIn(props: HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        duration: motionTokens.duration.fast,
        ease: motionTokens.easing.standard,
      }}
      {...props}
    />
  );
}