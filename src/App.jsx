import React from "react";
import './App.css'

import "./index.css";
import Primeiro from "./components/basics/first";
import ComParamentro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";

//por se tratar de js tem que passar a consntante em { } para renderizala.
export default function App(props) {
  return (
    <div className="App">
      <h1> Fundamentos React</h1>

      <div className="Cards">
        <Card titulo = "#04 - desafio de Aleatorio">
          <Aleatorio max = {100} min = {1} />
        </Card>

        <Card titulo = "#03 - Fragmento">
          <Fragmento />
        </Card>

        <Card titulo = "#02 - ComParametro">
          <ComParamentro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
          />
        </Card>      
        <Card titulo = " #01 - Primeiro Componente">
          <Primeiro></Primeiro>
        </Card>

      </div>
      
      
    </div> // as propriedades são somente para leitura caso tente edita-las em uma outra pag um erro sera gerado, contudo se criado uma nova variavel e atribui-la as propriedades ja existente então o codigo seguira em funcionamento.
    //EX: na linha 8 da ./components/ComParametro
    //OBS -> PROPRIEDADES SÃO SOMENTE LEITURA
  );
}
