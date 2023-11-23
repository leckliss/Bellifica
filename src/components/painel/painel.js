import React from "react";
import './painel.module.css';

export default function Painel() {

  return (
    <div className="compainel" style={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <h2 style={{ color: 'black' }}>Conteúdo Dinâmico</h2>
      <div style={{ width: '100%', height: '30vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px',  display:'flex', alignItems:'center', justifyContent: 'center'  }}>
          <h1> Dados sobre agendamentos</h1>
        </div>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px',  display:'flex', alignItems:'center', justifyContent: 'center'  }}>
          <h1> Dados sobre clientes</h1>
        </div>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px',  display:'flex', alignItems:'center', justifyContent: 'center'  }}>
          <h1> Dados sobre cursos</h1>
        </div>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px', display:'flex', alignItems:'center', justifyContent: 'center' }}>
          <h1> Dados sobre você</h1>
        </div>

      </div>
      <h2 style={{ color: 'black' }}>Dicas</h2>
      <div style={{ width: '100%', height: '30vh', backgroundColor: 'pink', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <iframe
          width="30%"
          height="100%"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Vídeo de Exemplo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="30%"
          height="100%"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Vídeo de Exemplo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="30%"
          height="100%"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Vídeo de Exemplo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}