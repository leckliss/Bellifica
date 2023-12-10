import React from 'react';
import Styles from './meusdados.module.css';


function Meusdados() {
    return (
      <div className={Styles.configpainelstyle}>
       <div className={Styles.meudado}>
        <h1>Meus Dados</h1>
        <br />
        <h2>Nome</h2>
        <input type="text" />
        <h2>Profissão</h2>
        <input type="text" />
        <h2>Data de Nascimento</h2>
        <input type="date" />
        <h2>Senha</h2>
        <input type="password" />
        
        <label>Iniciante?</label>
        <input type="radio" />
        <br />
        <input type="submit" value={'Salvar'}
        style={{backgroundColor: '#DAB2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}/>
       </div>
    </div>
    );
  }
  export default Meusdados;