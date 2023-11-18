import React from 'react';

function Dashboard() {
  
    return (
      <div>
        <h2>Painel de Controle</h2>
  
        {/* Gráfico de Vendas */}
        <div>
          <h3>Gráfico de Vendas</h3>
        </div>
  
        {/* Vídeo de exemplo do YouTube */}
        <div>
          <h3>Vídeo de Exemplo</h3>
          <iframe
            width="560"
            height="315"
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
  
  export default Dashboard;