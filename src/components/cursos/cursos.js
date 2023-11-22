import React from 'react';
import './cursos.module.css'; // Certifique-se de que o nome do arquivo CSS corresponda

function CursosDicas() {
  // Aqui você pode adicionar lógica para buscar e exibir cursos e dicas
  // const cursos = [...] // Seus cursos
  // const dicas = [...] // Suas dicas

  return (
    <div className="cursos-dicas-container">
      <h1>Cursos e Dicas</h1>
      <div className="conteudo">
        {/* Aqui você iteraria sobre seus cursos e dicas para exibi-los */}
        {/* Exemplo: */}
        {/* cursos.map(curso => <div className="curso-item">{curso.nome}</div>) */}
        {/* dicas.map(dica => <div className="dica-item">{dica.titulo}</div>) */}
      </div>
    </div>
  );
}

export default CursosDicas;
