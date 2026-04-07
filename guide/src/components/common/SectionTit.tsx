// Assets
import style from './SectionTit.module.scss';

interface SectionTitProps {
  title: string;
}

export default function SectionTit({ title }: SectionTitProps) {
  return <h2 className={style.title}>{title}</h2>;
}
