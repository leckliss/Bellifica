import React from "react";

export default function Painel(){

    return(
        <div>
        <h3>Conteúdo Dinâmico</h3>
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
    );
}