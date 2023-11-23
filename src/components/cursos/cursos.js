import React from 'react';
import './cursos.module.css'; // Certifique-se de que o nome do arquivo CSS corresponda

function CursosDicas() {
  // Aqui você pode adicionar lógica para buscar e exibir cursos e dicas
  // const cursos = [...] // Seus cursos
  // const dicas = [...] // Suas dicas

  return (
    <div className="compainel" style={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <h3 style={{ color: 'black' }}>Cursos Recomendados</h3>
      <div style={{ width: '100%', height: '30vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px',  display:'flex', alignItems:'center', justifyContent: 'center'  }}>
          <h1> Curso 1</h1>
        </div>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px',  display:'flex', alignItems:'center', justifyContent: 'center'  }}>
          <h1> Curso 2</h1>
        </div>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px',  display:'flex', alignItems:'center', justifyContent: 'center'  }}>
          <h1> Curso 3</h1>
        </div>
        <div style={{ width: "23%", height: "100%", backgroundColor: 'pink', borderRadius: '30px', display:'flex', alignItems:'center', justifyContent: 'center' }}>
          <h1> Curso 4</h1>
        </div>

      </div>
      <h3 style={{ color: 'black' }}>Apostilas</h3>
      <div style={{ width: '100%', height: '10vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ width: "15%", height: "100%", backgroundColor: 'pink', borderRadius: '30px',  display:'flex', alignItems:'center', justifyContent: 'center'  }}>
          <h1> AP 1</h1>
        </div>
        <div style={{ width: "15%", height: "100%", backgroundColor: 'pink', borderRadius: '30px',  display:'flex', alignItems:'center', justifyContent: 'center'  }}>
          <h1> AP 2</h1>
        </div>
        <div style={{ width: "15%", height: "100%", backgroundColor: 'pink', borderRadius: '30px',  display:'flex', alignItems:'center', justifyContent: 'center'  }}>
          <h1> AP 3</h1>
        </div>
        <div style={{ width: "15%", height: "100%", backgroundColor: 'pink', borderRadius: '30px', display:'flex', alignItems:'center', justifyContent: 'center' }}>
          <h1> AP 4</h1>
        </div>
        <div style={{ width: "15%", height: "100%", backgroundColor: 'pink', borderRadius: '30px', display:'flex', alignItems:'center', justifyContent: 'center' }}>
          <h1> AP 5</h1>
        </div>

      </div>
      
      <h3 style={{ color: 'black' }}>Cursos</h3>
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

export default CursosDicas;
