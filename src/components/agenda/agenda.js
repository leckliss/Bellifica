import React, { useState } from 'react';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1, transition: 'opacity 300ms ease-in-out' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', minWidth: '300px', transform: 'scale(1)', transition: 'transform 300ms ease-in-out' }}>
        <h2 style={{color: 'black'}}>{title}</h2>
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

function Agenda() {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [isModalAgendamentoOpen, setIsModalAgendamentoOpen] = useState(false);
  const [isModalGerenciarOpen, setIsModalGerenciarOpen] = useState(false);

  const handleMudancaData = novaData => {
    setDataSelecionada(novaData);
  };

  const openModalAgendamento = () => setIsModalAgendamentoOpen(true);
  const closeModalAgendamento = () => setIsModalAgendamentoOpen(false);

  const openModalGerenciar = () => setIsModalGerenciarOpen(true);
  const closeModalGerenciar = () => setIsModalGerenciarOpen(false);

  return (
    <div className="agendapainel" style={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
      <div className="agendaheader" style={{ width: '100%', height: '10vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <div>
        <input
          type="date"
          value={dataSelecionada.toISOString().split('T')[0]}
          onChange={e => handleMudancaData(new Date(e.target.value))}
          style={{color: 'black', height: '100px', padding: '10px' }}
        />
        <button onClick={() => {console.log("Atualizado " + dataSelecionada)}} style={{ color: 'black' }}>
          Atualizar
        </button>
        </div>
        <button onClick={openModalAgendamento} style={{ color: 'black' }}>
          Inserir Agendamento
        </button>

        <button onClick={openModalGerenciar} style={{ color: 'black' }}>
          Gerenciar agendamentos
        </button>
      </div>
      <div className="agenda-body" style={{ color: 'black' }}>
        {/* Renderização dos agendamentos */}
      </div>
      <div className="agenda-footer" style={{ color: 'black' }}>
        {/* Rodapé da agenda */}
      </div>

      <Modal isOpen={isModalAgendamentoOpen} onClose={closeModalAgendamento} title="Inserir Agendamento">
        <input style={{color: 'black', height: '75px', width: '300px', padding: '10px' }} type="text" placeholder="Cliente" required />
        <input style={{color: 'black', height: '75px', width: '300px', padding: '10px' }} type="text" placeholder="Serviço" required />
        <input style={{color: 'black', height: '75px', padding: '10px' }} type="date" placeholder="Data Agendamento" required  />
        <input style={{color: 'black', height: '75px', padding: '10px' }} type="time" placeholder="Hora Agendamento"  required />
        <button type="submit">Agendar</button>
      </Modal>

      <Modal isOpen={isModalGerenciarOpen} onClose={closeModalGerenciar} title="Gerenciar Agendamentos">
        <button>Cadastrar Cliente</button>
        <button>Cadastrar Serviço</button>
        <button>Cadastrar Endereço</button>
        <button>Configurar Tela de Agendamento para Clientes</button>
      </Modal>
    </div>
  );
}

export default Agenda;
