/* eslint-disable import/no-anonymous-default-export */
// comentario feito para retirar o alerta que aparece na arrow function
import React from "react";

export default (props) => {
    return <div>{props.nome} <strong>{props.sobrenome}</strong></div>;
};
