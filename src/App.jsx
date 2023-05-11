import React from "react";
import './App.css'

import "./index.css";
import ListaAlunos from "./components/repeticao/listaAlunos";
import Familia from "./components/basics/familia";
import FamiliaMembro from "./components/basics/familiaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basics/Aleatorio";
import Fragmento from "./components/basics/Fragmento";
import ComParamentro from "./components/basics/ComParametro";
import Primeiro from "./components/basics/first";

//por se tratar de js tem que passar a consntante em { } para renderizala.
export default function App(props) {
  return (
    <div className="App">
      <h1> Fundamentos React</h1>

      <div className="Cards">
      <Card titulo = "#06 - Repetição" color = "#DC143C">
        <ListaAlunos ></ListaAlunos>
      </Card>
      <Card titulo = "#05 - Componente com filhos" color = "#DC143C">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo"/>

          </Familia>
        </Card>

        <Card titulo = "#04 - desafio de Aleatorio" color = "#FF00FF">
          <Aleatorio max = {100} min = {1} />
        </Card>

        <Card titulo = "#03 - Fragmento" color = "#0000FF">
          <Fragmento />
        </Card>

        <Card titulo = "#02 - ComParametro" color = "#836FFF">
          <ComParamentro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
          />
        </Card>      
        <Card titulo = " #01 - Primeiro Componente" color = "#00FFFF">
          <Primeiro></Primeiro>
        </Card>

      </div>
      
      
    </div> // as propriedades são somente para leitura caso tente edita-las em uma outra pag um erro sera gerado, contudo se criado uma nova variavel e atribui-la as propriedades ja existente então o codigo seguira em funcionamento.
    //EX: na linha 8 da ./components/ComParametro
    //OBS -> PROPRIEDADES SÃO SOMENTE LEITURA
  );
}
