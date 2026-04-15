// Assets
import style from './Text.module.scss';

interface TextProps {
  text: React.ReactNode;
}

export default function Text({ text }: TextProps) {
  return <p className={style.text}>{text}</p>;
}
