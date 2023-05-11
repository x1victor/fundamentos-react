import React from "react";
import alunos from "../../data/alunos";

export default function props() {
  const alunosLI = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id} {aluno.nome} -> {aluno.nota}
      </li>
    );
  });
  return <ul style={{ listStyle: "none" }}>{alunosLI}</ul>;
}
