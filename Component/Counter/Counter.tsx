"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ target, duration = 2000, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Animate every time visible
  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);

      const eased = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(eased * target));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
