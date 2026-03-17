import { useEffect, RefObject } from 'react';

/**
 * useClickOutside — fires callback when user clicks outside the referenced element.
 */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
): void {
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [ref, callback]);
}
