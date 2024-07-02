import style from "./NotFound.module.css";
import erro404 from "../../assets/erro_404.png";
import { useNavigate } from "react-router-dom";
import { PrincipalButton } from "/src/components/PrincipalButton/PrincipalButton";

export function NotFound() {

  const navegar = useNavigate()

  return (
    <>
      <div className={style.conteudoContainer}>
        <span className={style.texto404}>404</span>
        <h1 className={style.titulo}>Ops! Pagina nao encontrada</h1>
        <p className={style.paragrafo}>Tem certeza de que era isso que voce estava procurando?</p>
        <p className={style.paragrafo}>Aguarde alguns instantes e recarregue a pagina </p>
        <div onClick={() => navegar(-1)} className={style.botaoContainer}>
          <PrincipalButton tamanho="lg">Voltar</PrincipalButton>
        </div>
        <img className={style.imagemCachorro} src={erro404} alt="Cachorro de oculos" />

      </div>
      <div className={style.espacoEmBranco}></div>
    </>
  )
}