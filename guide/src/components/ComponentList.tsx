// Assets
import style from './ComponentList.module.scss';

export default function ComponentList() {
  return (
    <dl className={style.listWrap}>
      <div className={style.listItem}>
        <dt className={style.name}>EButton</dt>
        <dd className={style.description}>기본 액션을 전달하는 버튼 컴포넌트입니다.</dd>
      </div>
      <div className={style.listItem}>
        <dt className={style.name}>EInput</dt>
        <dd className={style.description}>사용자 입력을 받는 필드형 컴포넌트입니다.</dd>
      </div>
      <div className={style.listItem}>
        <dt className={style.name}>EToggleSwitch</dt>
        <dd className={style.description}>켜짐과 꺼짐 상태를 전환하는 스위치 컴포넌트입니다.</dd>
      </div>
      <div className={style.listItem}>
        <dt className={style.name}>ECheckbox</dt>
        <dd className={style.description}>단일 선택 상태를 표현하는 체크박스 컴포넌트입니다.</dd>
      </div>
      <div className={style.listItem}>
        <dt className={style.name}>ECheckboxGroup</dt>
        <dd className={style.description}>
          여러 체크박스를 그룹으로 묶어 다중 선택을 관리하는 컴포넌트입니다. 수직·수평 방향 및 gap 조절을 지원합니다.
        </dd>
      </div>
    </dl>
  );
}
