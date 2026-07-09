import { useState, useEffect, useRef, useCallback } from "react";

// ==========================================
// useScrollProgress
// ==========================================
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress(total > 0 ? (current / total) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};

// ==========================================
// useMousePosition
// ==========================================
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return position;
};

// ==========================================
// useTypingAnimation
// ==========================================
export const useTypingAnimation = (
  texts,
  speed = 80,
  deleteSpeed = 40,
  pause = 2000,
) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentText = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, pause);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    isPaused,
    textIndex,
    texts,
    speed,
    deleteSpeed,
    pause,
  ]);

  return displayText;
};

// ==========================================
// useInView
// ==========================================
export const useInView = (threshold = 0.1, once = true) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isInView };
};

// ==========================================
// useCounter (animated number)
// ==========================================
export const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isActive, setIsActive] = useState(false);

  const startCounting = useCallback(() => setIsActive(true), []);

  useEffect(() => {
    if (!isActive) return;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = (end - start) / steps;
    let current = start;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = start + increment * Math.min(step, steps);
      setCount(Math.round(current));
      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isActive, end, start, duration]);

  return { count, startCounting };
};

// ==========================================
// useActiveSection
// ==========================================
export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4, rootMargin: "-80px 0px -40% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeSection;
};

// ==========================================
// useMagneticButton
// ==========================================
export const useMagneticButton = (strength = 0.3) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setOffset({
        x: (e.clientX - centerX) * strength,
        y: (e.clientY - centerY) * strength,
      });
    },
    [strength],
  );

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return { ref, offset };
};

// ==========================================
// useTheme
// ==========================================
export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const newVal = !prev;
      localStorage.setItem("theme", newVal ? "dark" : "light");
      if (newVal) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newVal;
    });
  }, []);

  return { isDark, toggleTheme };
};
