import style from './Link.module.scss';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: string;
}

export default function Link({ children, href, target = '_blank' }: LinkProps) {
  return (
    <a className={style.link} href={href} target={target}>
      {children}
    </a>
  );
}
