import React from "react";

export default function Aleatorio(props) {
  const min = props.min;
  const max = props.max;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong> valor minimo: </strong> {min}
      </p>
      <p>
        <strong> Valor maximo: </strong> {max}
        <p>
          <strong> Numero aleatorio: </strong> {random}
        </p>
      </p>
    </div>
  );
}
