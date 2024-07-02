import style from "./Footer.module.css";
import MarcaRegistrada from "../Svgs/MarcaRegistrada";

export function Footer() {
  return (
    <footer className={style.rodape}>
      <MarcaRegistrada />
      <p>Desenvolvido por Joao Vianna</p>

    </footer>
  )
}