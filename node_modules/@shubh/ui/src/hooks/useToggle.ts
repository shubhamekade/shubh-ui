import { useState, useCallback } from 'react';

/**
 * useToggle — simple boolean toggle hook.
 * @param initialValue - initial state (default false)
 * @returns [value, toggle, setOn, setOff, setValue]
 */
export function useToggle(initialValue = false): [
  boolean,
  () => void,
  () => void,
  () => void,
  (v: boolean) => void,
] {
  const [value, setValue] = useState(initialValue);
  const toggle  = useCallback(() => setValue(v => !v), []);
  const setOn   = useCallback(() => setValue(true), []);
  const setOff  = useCallback(() => setValue(false), []);
  return [value, toggle, setOn, setOff, setValue];
}