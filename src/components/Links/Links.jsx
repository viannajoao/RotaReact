import { Link, useLocation } from 'react-router-dom';
import style from './Links.module.css';

export function Links({ children, to }) {

  const location = useLocation();

  return (

    <Link className={`${location.pathname === to ? style.linkDestacado : style.link}`} to={to}> {children}</Link>

  )
}