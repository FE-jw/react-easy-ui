import { useState } from 'react';
import style from './Header.module.scss';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header className={style.headerWrap}>
      <div className={style.header}>
        <h1 className={style.title}>@jwook/react-ui</h1>
        <ThemeToggle view="mobile" />
        <button
          className={navOpen ? `${style.hamburger} ${style.active}` : style.hamburger}
          aria-label={navOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={navOpen}
          aria-controls="main-nav"
          onClick={() => setNavOpen(v => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav id="main-nav" aria-label="주요 메뉴" className={navOpen ? style.open : ''}>
          <a href="#components" onClick={() => setNavOpen(false)}>
            컴포넌트 목록
          </a>
          <a href="#custom" onClick={() => setNavOpen(false)}>
            커스텀 방법
          </a>
          <ThemeToggle view="pc" />
        </nav>
      </div>
    </header>
  );
}
