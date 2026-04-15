import { useState, useEffect } from 'react';
import style from './ThemeToggle.module.scss';

interface ThemeToggleProps {
  view: 'mobile' | 'pc';
}

export default function ThemeToggle({ view }: ThemeToggleProps) {
  const [theme, setTheme] = useState<string>(() => document.documentElement.dataset.theme || 'light');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = next;
    localStorage.setItem('react-ui-theme', next);
    setTheme(next);

    // storage 이벤트는 같은 탭에서는 발생하지 않으므로 커스텀 이벤트로 동기화
    window.dispatchEvent(new Event('theme-changed'));
  };

  useEffect(() => {
    const saved = localStorage.getItem('react-ui-theme');
    if (saved) {
      document.documentElement.dataset.theme = saved;
      setTheme(saved);
    }

    // storage 이벤트(다른 탭), theme-changed(같은 탭) 모두 감지
    const syncTheme = () => {
      const current = document.documentElement.dataset.theme || 'light';
      setTheme(current);
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
