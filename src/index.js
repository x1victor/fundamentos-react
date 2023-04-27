import ReactDOM  from "react-dom";
import React from 'react'
import  './index.css'
import Primeiro from './components/basics/first'
const tag = <strong>Olá React</strong>

ReactDOM.render(
    <div>
        <Primeiro></Primeiro> <br/>
        {tag}
    </div>,
    document.getElementById('root')
)
//ep 17