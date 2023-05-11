/* eslint-disable import/no-anonymous-default-export */
// comentario feito para retirar o alerta que aparece na arrow function
import React, { cloneElement } from "react";
export default (props) => {
  return (
    <div>
{/* inside of React.Children.map(props.children) you get a list of all the childrens */}
{/* The function [child => {}] is used to get the props of father and adding the elements to list of children */}
      {React.Children.map(props.children , (child) => {
        return cloneElement(child, props);
      })}
    </div>
  );
};
// {...props} o operador spread tem a função de puxar todas as proprieadades do componente pai
// aula 26 e 27 components com filhos 