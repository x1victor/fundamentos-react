import React from "react";

export default function Fragment(props) {
  return (
    // o <react.Fragment> ou (<> - </>)  serve para substituir uma <div> para que os conteudos n detenham de erro mas o React.Fragment é melhor pois permite a utillização de atributos.
    <React.Fragment>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </React.Fragment>
  );
}
