import style from './App.module.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Link from './components/Link';
import SectionTit from './components/common/SectionTit';
import Text from './components/common/Text';
import ComponentList from './components/ComponentList';

export default function App() {
  return (
    <div className={style['app-guide']}>
      <Header />
      <main>
        <section id="intro">
          <SectionTit title="소개" />
          <Text
            text={
              <>
                이 페이지는 <strong className="txt-box">@jwook/react-ui</strong> 패키지의 리액트{' '}
                <Link href="http://fe-jw.github.io/react-ui/storybook">컴포넌트 사용법</Link>
                과 커스텀 방법을 안내합니다.
                <br />
                접두어 E는 Easy의 약자입니다. 누구나 쉽게 사용할 수 있는 컴포넌트를 목표로 합니다.
              </>
            }
          />
        </section>
        <section id="components">
          <SectionTit title="컴포넌트 목록" />
          <ComponentList />
        </section>
        {/* <section id="custom">
          <SectionTit title="커스텀 방법" />
          <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, enim?" />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
