import React from "react";
import './painel.module.css';

export default function Painel() {

  return (
    <div className="compainel" style={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <h2 style={{ color: 'black' }}>Conteúdo Dinâmico</h2>
      <div style={{ width: '100%', height: '30vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1> Dados sobre agendamentos</h1>
        </div>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1> Dados sobre clientes</h1>
        </div>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1> Dados sobre cursos</h1>
        </div>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1> Dados sobre você</h1>
        </div>

      </div>
      <h2 style={{ color: 'black' }}>Dicas</h2>
      <div style={{ width: '100%', height: '30vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ width: '30%', height: '35vh', backgroundColor: 'pink', borderRadius: '30px', textAlign: 'center'}}>
          <iframe
            width="100%"
            height="80%"
            src="https://www.youtube.com/embed/j9-I1jbJnH8"
            title="Vídeo de Exemplo"
            frameborder="0"
            style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>12 Dicas para você aumentar engajamento do seu instagram</h4>
        </div>
        <div style={{ width: '30%', height: '35vh', backgroundColor: 'pink', borderRadius: '30px', textAlign: 'center' }}>
          <iframe
            width="100%"
            height="80%"
            src="https://www.youtube.com/embed/o5Z2Fi26hu0"
            title="Vídeo de Exemplo"
            frameborder="0"
            style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>3 Dicas para conseguir mais clientes</h4>
        </div>
        <div style={{ width: '30%', height: '35vh', backgroundColor: 'pink', borderRadius: '30px', textAlign: 'center' }}>
          <iframe
            width="100%"
            height="80%"
            src="https://www.youtube.com/embed/p0gc4b3ZKio"
            title="Vídeo de Exemplo"
            frameborder="0"
            style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>Como gerenciar melhor seu tempo?</h4>
        </div>
      </div>
    </div>
  );
}
