import ReactDOM  from "react-dom";
import React from 'react'
import  './index.css'
import App from "./App"
// o import ñ precisa necessariamente ter o msm nome da funcao que está sendo importada no processo, contudo deve ser deve ser utilizado o msm nome do import dentro da pag.
// EX: se <ComParamentro/> fosse (cb300) no import ent deveria passar <cb300/> como parametro.

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
//ep 17