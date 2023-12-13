import React,{useState} from 'react';
import Styles from "./FaqQuestions.module.css";
import poligono from "../../assets/imgs/faq/Polygon 3.png";

function FaqQuestions() {

    const [clicado, setClicado] = useState(false);
  const myFunction = () => {
    if(clicado==true){setClicado(false);}
    else{
    setClicado(true);}
  };

  return (
    <section>
      <div className={Styles.divnavbar}></div>
      <h1>Dúvidas Frequentes</h1>
      <div className={Styles.pergunta} onClick={myFunction}>
        <img src={poligono} className={Styles.poligono}></img>
        <div className={Styles.text}>
          <h3>Como posso me cadastrar na plataforma Bellifica?</h3>
          <ol className={Styles[clicado ? 'visible' : 'invisible']}>

            <li>
              No site da Bellifica, procure o botão Login como oque está acima.
            </li>
            <li>
              Na tela de login procure e clique na opção "Cadastre-se" ou "Criar
              Conta".
            </li>
            <li>
              Preencha o formulário de cadastro com suas informações pessoais,
              como nome, endereço de e-mail, país e data de nascimento.
            </li>
            <li>
              Crie um nome de usuário e uma senha segura para acessar a
              plataforma.
            </li>
            <li>
              Após preencher o formulário, clique em "Cadastrar" ou no botão
              equivalente.
            </li>
            <li>
              Verifique seu e-mail para confirmar o cadastro, seguindo as
              instruções fornecidas.
            </li>
          </ol>
        </div>
      </div>

      <div className={Styles.pergunta} onClick={myFunction}>
        <img src={poligono} className={Styles.poligono}></img>
        <div className={Styles.text}>
          <h3>Quais são as principais funcionalidades oferecidas pela Bellifica?</h3>
          <ol className={Styles[clicado ? 'visible' : 'invisible']}>

            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </li>
            <li>
              Na tela de login procure e clique na opção "Cadastre-se" ou "Criar
              Conta".
            </li>
            <li>
              Preencha o formulário de cadastro com suas informações pessoais,
              como nome, endereço de e-mail, país e data de nascimento.
            </li>
            <li>
              Crie um nome de usuário e uma senha segura para acessar a
              plataforma.
            </li>
            <li>
              Após preencher o formulário, clique em "Cadastrar" ou no botão
              equivalente.
            </li>
            <li>
              Verifique seu e-mail para confirmar o cadastro, seguindo as
              instruções fornecidas.
            </li>
          </ol>
        </div>
      </div>

      <div className={Styles.pergunta} onClick={myFunction}>
        <img src={poligono} className={Styles.poligono}></img>
        <div className={Styles.text}>
          <h3>Como posso recuperar minha senha se eu esquecer?</h3>
          <ol className={Styles[clicado ? 'visible' : 'invisible']}>

            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </li>
            <li>
              Na tela de login procure e clique na opção "Cadastre-se" ou "Criar
              Conta".
            </li>
            <li>
              Preencha o formulário de cadastro com suas informações pessoais,
              como nome, endereço de e-mail, país e data de nascimento.
            </li>
            <li>
              Crie um nome de usuário e uma senha segura para acessar a
              plataforma.
            </li>
            <li>
              Após preencher o formulário, clique em "Cadastrar" ou no botão
              equivalente.
            </li>
            <li>
              Verifique seu e-mail para confirmar o cadastro, seguindo as
              instruções fornecidas.
            </li>
          </ol>
        </div>
      </div>

      <div className={Styles.pergunta} onClick={myFunction}>
        <img src={poligono} className={Styles.poligono}></img>
        <div className={Styles.text}>
          <h3>A Bellifica compartilha minhas informações pessoais com terceiros?</h3>
          <ol className={Styles[clicado ? 'visible' : 'invisible']}>

            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </li>
            <li>
              Na tela de login procure e clique na opção "Cadastre-se" ou "Criar
              Conta".
            </li>
            <li>
              Preencha o formulário de cadastro com suas informações pessoais,
              como nome, endereço de e-mail, país e data de nascimento.
            </li>
            <li>
              Crie um nome de usuário e uma senha segura para acessar a
              plataforma.
            </li>
            <li>
              Após preencher o formulário, clique em "Cadastrar" ou no botão
              equivalente.
            </li>
            <li>
              Verifique seu e-mail para confirmar o cadastro, seguindo as
              instruções fornecidas.
            </li>
          </ol>
        </div>
      </div>

      <div className={Styles.pergunta} onClick={myFunction}>
        <img src={poligono} className={Styles.poligono}></img>
        <div className={Styles.text}>
          <h3>Existe um custo para usar a plataforma Bellifica?</h3>
          <ol className={Styles[clicado ? 'visible' : 'invisible']}>

            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </li>
            <li>
              Na tela de login procure e clique na opção "Cadastre-se" ou "Criar
              Conta".
            </li>
            <li>
              Preencha o formulário de cadastro com suas informações pessoais,
              como nome, endereço de e-mail, país e data de nascimento.
            </li>
            <li>
              Crie um nome de usuário e uma senha segura para acessar a
              plataforma.
            </li>
            <li>
              Após preencher o formulário, clique em "Cadastrar" ou no botão
              equivalente.
            </li>
            <li>
              Verifique seu e-mail para confirmar o cadastro, seguindo as
              instruções fornecidas.
            </li>
          </ol>
        </div>
      </div>

      <div className={Styles.pergunta} onClick={myFunction}>
        <img src={poligono} className={Styles.poligono}></img>
        <div className={Styles.text}>
          <h3>Posso agendar serviços diretamente pela plataforma?</h3>
          <ol className={Styles[clicado ? 'visible' : 'invisible']}>

            <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </li>
            <li>
              Na tela de login procure e clique na opção "Cadastre-se" ou "Criar
              Conta".
            </li>
            <li>
              Preencha o formulário de cadastro com suas informações pessoais,
              como nome, endereço de e-mail, país e data de nascimento.
            </li>
            <li>
              Crie um nome de usuário e uma senha segura para acessar a
              plataforma.
            </li>
            <li>
              Após preencher o formulário, clique em "Cadastrar" ou no botão
              equivalente.
            </li>
            <li>
              Verifique seu e-mail para confirmar o cadastro, seguindo as
              instruções fornecidas.
            </li>
          </ol>
        </div>
      </div>

    </section>
  );
}
export default FaqQuestions;
