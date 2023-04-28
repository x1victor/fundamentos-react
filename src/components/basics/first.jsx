import React from "react";
export default function Primeiro() {
  const msg = "seja bem vindo(a)!";
  return (
    <div>
      <h2>Primeiro componente</h2>
      <p>{msg}</p>
    </div>
  );
}
// por se tratar de js o msg foi passado ente { } para especificar que é uma cosntante que está sendo passada como paramentro.
