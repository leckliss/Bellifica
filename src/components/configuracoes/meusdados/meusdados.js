import React, { useEffect, useState } from 'react';
import Styles from './meusdados.module.css';


function Meusdados() {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [profissao, setProfissao] = useState('');
  const [nomeNegocio, setNomeNegocio] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setData] = useState('');
  const [iniciante, setIniciante] = useState('');
  const [senha, setSenha] = useState('');




  useEffect(() => {

    const nomeStored = localStorage.getItem('nome');
    const sobrenomeStored = localStorage.getItem('sobrenome');
    const profissaoStored = localStorage.getItem('profissao');
    const nomeNegocioStored = localStorage.getItem('nomeNegocio');
    const idStored = localStorage.getItem('id');
    const emailStored = localStorage.getItem('email');
    const dataNascimentoStored = localStorage.getItem('dataNascimento');
    const inicianteStored = localStorage.getItem('iniciante');
    const senhaStored = localStorage.getItem('senha');

    setNome(nomeStored);
    setSobrenome(sobrenomeStored);
    setProfissao(profissaoStored);
    if (nomeNegocioStored == 'null') {
      setNomeNegocio('')
    } else { setNomeNegocio(nomeNegocioStored); }
    setId(idStored);
    setEmail(emailStored);
    setData(dataNascimentoStored);
    setIniciante(inicianteStored);
    setSenha(senhaStored);

  }, []);

  return (
    <div className={Styles.configpainelstyle}>
      <div className={Styles.meudado}>
        <h1>Meus Dados</h1>
        <br />
        <h2>Nome</h2>
        <input type="text" value={nome} />
        <h2>Sobrenome</h2>
        <input type="text" value={sobrenome} />
        <h2>Profissão</h2>
        <input type="text" value={profissao} />
        <h2>Nome do Negócio</h2>
        <input type="text" value={nomeNegocio} />
        <h2>Email</h2>
        <input type="text" value={email} />
        <h2>Data de Nascimento</h2>
        <input type="text" value={dataNascimento} />
        <h2>Senha</h2>
        <input type="password" value={senha} />

        <label>Iniciante?</label>
        <input type="radio" checked={iniciante} />
        <br />
        <input type="submit" value={'Salvar'}
          style={{ backgroundColor: '#DAB2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
      </div>
    </div>
  );
}
export default Meusdados;