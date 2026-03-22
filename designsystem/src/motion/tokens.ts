export const motionTokens = {
  duration: {
    fast: 0.18,
    base: 0.26,
    slow: 0.42,
  },
  easing: {
    standard: [0.16, 1, 0.3, 1] as const,
    productive: [0.2, 0.8, 0.2, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
  },
};
