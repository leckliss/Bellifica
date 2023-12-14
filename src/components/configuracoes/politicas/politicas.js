import React from 'react';
import Styles from './politicas.module.css';


function Politicas() {
  return (
    <div className={Styles.configpainelstyle}>
      <div className={Styles.politica}>
        <h1>Privacidade</h1>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <h2>Compartilhar meus dados com a Bellifica para melhoria do serviço</h2>
          <input type="checkbox" checked />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <h2>Compartilhar meus dados com parceiros da Bellifica automaticamente</h2>
          <input type="checkbox" notchecked />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <h2>Receber <span style={{ color: '#9348af' }}>e-mails</span> da Bellifica sobre <span style={{ color: '#9348af' }}> ofertas</span></h2>
          <input type="checkbox" notchecked />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <h2>Receber <span style={{ color: '#9348af' }}>sms</span> da Bellifica sobre <span style={{ color: '#9348af' }}> ofertas</span></h2>
          <input type="checkbox" notchecked />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <h2>Receber <span style={{ color: '#9348af' }}>e-mails</span> da Bellifica sobre <span style={{ color: '#9348af' }}> reservas</span></h2>
          <input type="checkbox" notchecked />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <h2>Receber <span style={{ color: '#9348af' }}>sms</span> da Bellifica sobre <span style={{ color: '#9348af' }}>reservas</span> </h2>
          <input type="checkbox" notchecked />
        </div>
        <div>
          <input type="submit" value={'Salvar'}
            style={{ backgroundColor: '#DAB2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
        </div>
      </div>
    </div>
  );
}
export default Politicas;

