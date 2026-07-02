"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className={`${styles.placeholder} ${compact ? styles.compactPlaceholder : ''}`}></div>;
  }

  return (
    <button
      className={`${styles.toggleBtn} ${compact ? styles.compactToggle : ''}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun size={compact ? 18 : 20} /> : <Moon size={compact ? 18 : 20} />}
    </button>
  );
}
