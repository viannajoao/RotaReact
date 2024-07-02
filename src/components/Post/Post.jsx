/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./Post.module.css";
import { PrincipalButton } from "/src/components/PrincipalButton/PrincipalButton";




export function Post({ post }) {

  const imagem = `/src/assets/posts/${post.id}/capa.png`;
  const url = `/posts/${post.id}`



  return (
    <Link to={url}>
      <div className={style.post}>
        <img className={style.capa} src={imagem} alt="" loading="lazy" />
        <p className={style.titulo}>{post.titulo}</p>
        <PrincipalButton >Ler</PrincipalButton>
      </div>
    </Link>

  )
}