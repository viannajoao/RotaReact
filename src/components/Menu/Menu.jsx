import { Links } from "../Links/Links";
import style from "./Menu.module.css";


export function Menu(){

  return (

    <header>
      <nav className={style.navegacao}>
        <Links to="/">Inicio</Links>
        <Links to="/sobremim">Sobre mim</Links>
      </nav>
    </header>

  )

}