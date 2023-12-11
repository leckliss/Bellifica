import React, { useEffect, useState } from "react";
import './painel.module.css';

export default function Painel() {

  const [nome, setNome] = useState('');
  const [msg, setMsg] = useState('');
  
  const iniciante = localStorage.getItem('iniciante');

  useEffect(() => {
    const storedNome = localStorage.getItem('nome');

    setNome(storedNome);

    if (iniciante === 'true') {
      setMsg('iniciante na área da Beleza');
    } else {
      setMsg('de volta');
    }

  }, []);

  return (
    <div className="compainel" style={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <h1 style={{ color: 'black' }}>
        Olá <span style={{ color: '#9979c1', fontWeight: 'bolder' }}>{nome}</span>,
        seja bem-vindo(a) {msg}!
      </h1>
      <div style={{ width: '99%', height: '30vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ width: "22%", height: "100%", backgroundColor: '#fd9ba6', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
          <h2> Agendamentos para hoje: </h2>
          <h1> 1 </h1>
        </div>
        <div style={{ width: "22%", height: "100%", backgroundColor: '#fd9ba6', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
          <h2> Seus agendamentos:</h2>
          <h1> 2 </h1>
        </div>
        <div style={{ width: "22%", height: "100%", backgroundColor: '#fd9ba6', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
          <h2> Clientes novos: </h2>
          <h1> 1 </h1>
        </div>
        <div style={{ width: "22%", height: "100%", backgroundColor: '#fd9ba6', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
          <h2> Cursos na plataforma: </h2>
          <h1> 10 </h1>
        </div>
      </div>
      <h2 style={{ color: 'black' }}>Dicas semanais</h2>
      <div style={{ width: '99%', height: '30vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ width: '30%', height: '35vh', backgroundColor: '#fd9ba6', borderRadius: '30px', textAlign: 'center' }}>
          <iframe
            width="100%"
            height="80%"
            src="https://www.youtube.com/embed/j9-I1jbJnH8"
            title="Vídeo de Exemplo"
            frameborder="0"
            style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>12 Dicas para você aumentar engajamento do seu instagram</h4>
        </div>
        <div style={{ width: '30%', height: '35vh', backgroundColor: '#fd9ba6', borderRadius: '30px', textAlign: 'center' }}>
          <iframe
            width="100%"
            height="80%"
            src="https://www.youtube.com/embed/o5Z2Fi26hu0"
            title="Vídeo de Exemplo"
            frameborder="0"
            style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>3 Dicas para conseguir mais clientes</h4>
        </div>
        <div style={{ width: '30%', height: '35vh', backgroundColor: '#fd9ba6', borderRadius: '30px', textAlign: 'center' }}>
          <iframe
            width="100%"
            height="80%"
            src="https://www.youtube.com/embed/p0gc4b3ZKio"
            title="Vídeo de Exemplo"
            frameborder="0"
            style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>Como gerenciar melhor seu tempo?</h4>
        </div>
      </div>
    </div>
  );
}
