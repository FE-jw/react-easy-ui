import { useState, useEffect } from 'react';
import style from './ThemeToggle.module.scss';

type Theme = 'light' | 'dark';

interface ThemeToggleProps {
  view: 'mobile' | 'pc';
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  const saved = localStorage.getItem('react-ui-theme');
  if (saved === 'light' || saved === 'dark') return saved;

  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle({ view }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = next;
    localStorage.setItem('react-ui-theme', next);
    setTheme(next);

    window.dispatchEvent(new Event('theme-changed'));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('react-ui-theme', theme);
  }, [theme]);

  useEffect(() => {
    const syncTheme = () => {
      const current = document.documentElement.dataset.theme;
      if (current === 'light' || current === 'dark') {
        setTheme(prev => (prev === current ? prev : current));
      }
    };

    window.addEventListener('storage', syncTheme);
    window.addEventListener('theme-changed', syncTheme);

    return () => {
      window.removeEventListener('storage', syncTheme);
      window.removeEventListener('theme-changed', syncTheme);
    };
  }, []);

  return (
    <div className={`${style.themeToggleWrap} ${style[view]}`}>
      <button type="button" aria-label="테마 토글" onClick={toggleTheme} className={style.themeToggleBtn}>
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}
