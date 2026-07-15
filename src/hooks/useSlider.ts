import { useCallback, useEffect, useRef, useState } from "react";

interface UseSliderOptions {
  total: number;
  autoPlayInterval?: number;
}

interface UseSliderReturn {
  current: number;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  pause: () => void;
  resume: () => void;
}

export function useSlider({ total, autoPlayInterval = 5000 }: UseSliderOptions): UseSliderReturn {
  const [current, setCurrent] = useState(0);
  const paused = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const pause = useCallback(() => {
    paused.current = true;
  }, []);

  const resume = useCallback(() => {
    paused.current = false;
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!paused.current) {
        next();
      }
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, autoPlayInterval]);

  return { current, goTo, next, prev, pause, resume };
}
