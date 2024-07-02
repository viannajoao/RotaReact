import styles from "./PostModelo.module.css";

// eslint-disable-next-line react/prop-types
export function PostModelo({ FotoCapa, titulo, children }) {
  return (
    <article className={styles.postModeloContainer}>
      <div className={styles.fotoCapa} style={{backgroundImage: `url(${FotoCapa})`}} />
      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.postContainer}>{children}</div>
    </article>
  )
}
