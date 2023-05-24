import { useEffect } from 'react';

export function useEffectUnsafe(effect, deps) {
  let initialized = false;

  useEffect(() => {
    if (!initialized) {
      initialized = true;
      effect();
    }
  }, deps);
}
