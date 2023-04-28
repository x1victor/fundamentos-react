import React from "react";
import "./index.css";
import Primeiro from "./components/basics/first";
import ComParamentro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
const tag = <strong>Olá React</strong>;
//por se tratar de js tem que passar a consntante em { } para renderizala.
export default function App(props) {
  return (
    <div id="app">
      <h1> Fundamentos React</h1>
      <Aleatorio
      max = {100}
      min = {1}/>
      <Fragmento />
      <ComParamentro
        titulo="Situação do Aluno"
        aluno="Pedro Silva"
        nota={9.3}
      />
      {tag}
      <Primeiro></Primeiro>
    </div> // as propriedades são somente para leitura caso tente edita-las em uma outra pag um erro sera gerado, contudo se criado uma nova variavel e atribui-la as propriedades ja existente então o codigo seguira em funcionamento.
    //EX: na linha 8 da ./components/ComParametro
    //OBS -> PROPRIEDADES SÃO SOMENTE LEITURA
  );
}
