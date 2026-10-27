import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const THEME_STORAGE_KEY = 'zheye-theme';
const THEME_CHANGE_EVENT = 'zheye-theme-change';

const getIsDark = () => document.documentElement.classList.contains('dark');

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(getIsDark);

  useEffect(() => {
    const syncTheme = () => setIsDark(getIsDark());
    window.addEventListener(THEME_CHANGE_EVENT, syncTheme);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, syncTheme);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !getIsDark();
    document.documentElement.classList.toggle('dark', nextIsDark);
    localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? 'dark' : 'light');
    setIsDark(nextIsDark);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-sm backdrop-blur transition-all hover:border-[#c82e29]/50 hover:text-[#c82e29] dark:border-white/10 dark:bg-zinc-900/80 dark:text-amber-300 dark:hover:border-amber-300/40 dark:hover:text-amber-200"
      aria-label={isDark ? '切换到日间模式' : '切换到夜间模式'}
      title={isDark ? '切换到日间模式' : '切换到夜间模式'}
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
};
