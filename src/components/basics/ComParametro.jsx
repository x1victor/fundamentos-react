import React from "react";

export default function ComParamentro(props) {
  //console.log(props); // observar a os parametros q são passados pelo props

  const status = props.nota >= 7 ? "Aprovado" : "Recuperação"; // if = (?) else = (:)
  const al = props.aluno;
  const notaInt = Math.ceil(props.nota); //explicação dessa alteração na linha 19 do arquivo index.js
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong> {al} </strong>
        tem nota
        <strong> {notaInt} </strong>e está
        <strong> {status}</strong>
      </p>
    </div>
  );
}
