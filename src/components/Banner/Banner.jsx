import style from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minhaFoto.jpg";


export function Banner(){
  return (

    <div className={style.banner}>
      <div className={style.apresentacao}>
        <h1 className={style.titulo}>Hello World!</h1>
        <p className={style.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure blanditiis consequatur, odit beatae labore iste reprehenderit nulla impedit corporis error, repellendus nihil ad saepe voluptas assumenda dolore. Eum, tenetur?</p>
      </div>
      <div className={style.imagens}>
        <img className={style.circuloColorido} src={circuloColorido} aria-hidden={true} />
        <img className={style.minhaFoto} src={minhaFoto} alt="Foto de perfil" />
      </div>


    </div>

  )
}