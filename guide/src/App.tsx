import style from './App.module.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

export default function App() {
  return (
    <div className={style['app-guide']}>
      <Header />
      <main>
        <section id="intro">
          <h2>소개</h2>
          <p>
            이 페이지는 <strong className="txt-box">@jwook/react-ui</strong> 패키지의 리액트 컴포넌트 사용법과 커스텀
            방법을 안내합니다.
            <br />
            접두어 E는 Easy의 약자입니다. 누구나 쉽게 사용할 수 있는 컴포넌트를 목표로 합니다.
          </p>
        </section>
        <section id="components">
          <h2>컴포넌트 목록</h2>
          <ul>
            <li>
              <strong>EButton</strong> - 버튼 컴포넌트
            </li>
          </ul>
        </section>
        <section id="custom">
          <h2>커스텀 방법</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, enim?</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
