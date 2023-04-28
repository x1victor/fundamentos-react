import React  from 'react';

export default function Aleatorio(props){
    const random = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    return(
        <div>
            <h2> 
                sera gerado um numero aleatorio entre 
                <strong> {props.min} </strong> e 
                <strong> {props.max}</strong>
            </h2>
            <p>
                Numero aleatorio: <strong> {random} </strong>
            </p>

        </div>
    )
}