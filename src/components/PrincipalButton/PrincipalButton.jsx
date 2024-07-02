import style from "./PrincipalButton.module.css";

// eslint-disable-next-line react/prop-types
export function PrincipalButton({ children, tamanho}){
  return (
    <button className={`
      ${style.botaoPrincipal}
      ${style[tamanho]}
      `}>{children}</button>
  )
}