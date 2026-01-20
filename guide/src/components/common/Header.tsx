import { useState } from 'react';
import style from './Header.module.scss';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={style.header}>
      <h1 className={style.title}>react-ui {/* 가이드 */}</h1>
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
      </nav>
    </header>
  );
}
