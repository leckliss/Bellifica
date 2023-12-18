import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import 'react-toastify/dist/ReactToastify.css';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1, transition: 'opacity 300ms ease-in-out' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', minWidth: '300px', transform: 'scale(1)', transition: 'transform 300ms ease-in-out' }}>
        <h2 style={{ color: 'black' }}>{title}</h2>
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

function Agenda() {


  const [cliente, setCliente] = useState('');
  const [servico, setServico] = useState('');
  const [dataAgendamento, setDataAgendamento] = useState('');
  const [horaAgendamento, setHoraAgendamento] = useState('');
  const idUser = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  const handleAgendamentoSubmit = async () => {
    try {

      function convertDateToISO(dateString) {
        const parts = dateString.split('/');
        if (parts.length === 3) {
          return `${parts[2]}-${parts[1]}-${parts[0]}`;
        } else {
          return '';
        }
      }

      const dataAgendamentoISO = dataAgendamento ? convertDateToISO(dataAgendamento) : '';

      if (!dataAgendamentoISO) {
        toast.error('Por favor, insira a data no formato DD/MM/YYYY', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }

      const agendamentoInfo = {
        nomeCliente: cliente,
        nomeServico: servico,
        dataAgendamento: dataAgendamentoISO,
        horaAgendamento: horaAgendamento,
        profissionalId: Number(idUser)
      };
      console.log(agendamentoInfo);

      const response = await fetch('https://bellifica-back-end-production.up.railway.app/agendamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(agendamentoInfo),
      });

      console.log("Token:", token);
      console.log("Resposta Bruta:", response);
      console.log("Status da Resposta:", response.status);

      if (response.ok) {
        const responseData = await response.json();
        toast.success(`Agendamento realizado com sucesso`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setCliente('');
        setServico('');
        setDataAgendamento('');
        setHoraAgendamento('');
      } else {
        const errorData = await response.json();
        toast.error(`Falha na requisição: ${errorData.message} (Erro ${response.status})`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error('Falha ao agendar');
      }
    } catch (error) {
      console.error('Erro:', error);
      toast.error(`Erro em agendar: ${error.toString()}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.error('Ocorreu um erro ao tentar fazer o agendamento: ', error);
    }
  };

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
            style={{ color: 'black', height: '100px', padding: '10px' }}
          />
          <button onClick={() => { console.log("Atualizado " + dataSelecionada) }} style={{ color: 'black' }}>
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
        <Table responsive>
          <thead style={{ backgroundColor: '#fd9ba6' }} >
            <tr>
              <th style={{ backgroundColor: '#fd9ba6' }}>#</th>

              <th style={{ backgroundColor: '#fd9ba6' }} >Nome do Cliente</th>
              <th style={{ backgroundColor: '#fd9ba6' }} >Serviço</th>
              <th style={{ backgroundColor: '#fd9ba6' }} >Data do Agendamento</th>
              <th style={{ backgroundColor: '#fd9ba6' }} >Hora do Agendamento</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Fabiano</td>
              <td>Cilios</td>
              <td>12/12/2023</td>
              <td>09:00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Amanda</td>
              <td>Sombrancelhas</td>
              <td>13/12/2023</td>
              <td>11:00</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="agenda-footer" style={{ color: 'black' }}>
        {/* Rodapé da agenda */}
      </div>

      <Modal isOpen={isModalAgendamentoOpen} onClose={closeModalAgendamento} title="Inserir Agendamento">
        <input
          style={{ color: 'black', height: '75px', width: '300px', padding: '10px' }}
          type="text"
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
        />
        <input
          style={{ color: 'black', height: '75px', width: '300px', padding: '10px' }}
          type="text"
          placeholder="Serviço"
          value={servico}
          onChange={(e) => setServico(e.target.value)}
          required
        />
        <input
          style={{ color: 'black', height: '75px', padding: '10px' }}
          type="text"
          placeholder="Data Agendamento"
          value={dataAgendamento}
          onChange={(e) => setDataAgendamento(e.target.value)}
          required
        />
        <input
          style={{ color: 'black', height: '75px', padding: '10px' }}
          type="time"
          placeholder="Hora Agendamento"
          value={horaAgendamento}
          onChange={(e) => setHoraAgendamento(e.target.value)}
          required
        />
        <button onClick={handleAgendamentoSubmit}>Agendar</button>
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
