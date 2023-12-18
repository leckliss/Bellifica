import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './cadastro.module.css';
import { toast } from 'react-toastify';
import backgroundImage from '../../assets/imgs/cad-login/fundo.jpg';

function Cadastro() {
  const { handleSubmit, formState: { errors }, register, watch } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (formData) => {
    function convertDateToISO(dateString) {
      const parts = dateString.split('/');
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }

    const dataNascimentoISO = formData.dataNascimento ? convertDateToISO(formData.dataNascimento) : null;

    const profissionalInfo = {
      nome: formData.nome,
      sobrenome: formData.sobrenome,
      nomeNegocio: formData.nomeNegocio,
      dataNascimento: dataNascimentoISO,
      telefone: formData.telefone,
      email: formData.email,
      senha: formData.password,
      iniciante: formData.iniciante || false,
      profissao: formData.profissao,
      regras: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    };

    try {
      const response = await fetch('https://bellifica-back-end-production.up.railway.app/users/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profissionalInfo),
      });

      if (response.ok) {
        const responseData = await response.json();

        // A resposta JSON contém os dados do profissional, incluindo o nome
        const nomeDoUsuario = responseData.nome;

        toast.success(`Cadastro realizado com sucesso, ${nomeDoUsuario}! Efetue login`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate('/login');
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
      }
    } catch (error) {
      console.error('Erro:', error);
      toast.error(`Erro no cadastro: ${error.toString()}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }


  return (
    <div className={styles.background} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Cadastro</h2>

          <div className={styles.cads}>
            <div className={styles.cad1}>
              <div className={styles.inputBox}>
                <input
                  className={errors.nome && styles.inputError}
                  id="nome"
                  placeholder='Nome'
                  name="nome"
                  type="text"
                  autoComplete="off"
                  {...register("nome", { required: 'Nome é obrigatório' })}
                  style={{
                    width: "300px", height: "50px", backgroundColor: "transparent", borderBottom: "1px solid white", color: "white", fontSize: "20px",
                  }}
                />
                {errors.nome && <p className={styles.errorMessage}>{errors.nome.message}</p>}
              </div>

              <div className={styles.inputBox}>
                <input
                  className={errors.sobrenome && styles.inputError}
                  placeholder='Sobrenome'
                  id="sobrenome"
                  name="sobrenome"
                  type="text"
                  autoComplete="off"
                  {...register("sobrenome", { required: 'Sobrenome é obrigatório' })}
                  style={{
                    width: "300px", height: "50px", backgroundColor: "transparent", borderBottom: "1px solid white", color: "white", fontSize: "20px",
                  }}
                />
                {errors.sobrenome && <p className={styles.errorMessage}>{errors.sobrenome.message}</p>}
              </div>

              <div className={styles.inputBox}>
                <input
                  className={errors.dataNascimento && styles.inputError}
                  id="dataNascimento"
                  placeholder="Data de Nascimento"
                  name="dataNascimento"
                  type="text"
                  autoComplete="off"
                  {...register("dataNascimento", { required: 'Data de nascimento é obrigatória' })}
                  style={{
                    width: "300px", height: "50px", backgroundColor: "transparent", borderBottom: "1px solid white", color: "white", fontSize: "20px",
                  }}
                />
                {errors.dataNascimento && <p className={styles.errorMessage}>{errors.dataNascimento.message}</p>}
              </div>

              <div className={styles.inputBox}>
                <input
                  className={errors.email && styles.inputError}
                  id="email"
                  placeholder='E-mail'
                  name="email"
                  type="text"
                  autoComplete="off"
                  {...register("email", { required: 'E-mail é obrigatório' })}
                  style={{
                    width: "300px", height: "50px", backgroundColor: "transparent", borderBottom: "1px solid white", color: "white", fontSize: "20px",
                  }}
                />
                <HiOutlineMail />
                {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

                <div className={styles.loginLink}>
                  <p>Já tem uma conta? <Link className={styles.registerLink} to="/login">Conecte-se</Link></p>
                  <p><Link className={styles.registerLink} to="/">Voltar para HOME</Link></p>
                </div>
              </div>


            </div>

            <div className={styles.cad2}>

              <div className={styles.inputBox}>
                <input className=''
                  id="nomeNegocio"
                  placeholder="Nome da empresa / Negócio"
                  name="nomeNegocio"
                  type="text"
                  autoComplete="off"
                  {...register("nomeNegocio")}
                  style={{
                    width: "300px", height: "50px", backgroundColor: "transparent", borderBottom: "1px solid white", color: "white", fontSize: "20px",
                  }}
                />
              </div>

              <div className={styles.inputBox}>
                <select
                  {...register("profissao", { required: 'Profissão é obrigatória' })}
                  style={{
                    width: "300px", height: "50px", backgroundColor: "transparent", borderBottom: "1px solid white", color: "white", fontSize: "20px",
                  }}
                >
                  <option value="">Selecione a Profissão</option>
                  <option value="CABELELEIRO">Cabeleleiro</option>
                  <option value="BARBEIRO">Barbeiro</option>
                  <option value="MAQUIADOR">Maquiador</option>
                  <option value="MANICURE">Manicure</option>
                  <option value="PEDICURE">Pedicure</option>
                  <option value="DESIGNER_SOMBRANCELHAS">Designer de Sombrancelhas</option>
                  <option value="DEPILADOR">Depilador</option>
                  <option value="CONSULTOR_PRODUTOS_BELEZA">Consultor de Produtos de Beleza</option>
                  <option value="ESTETICISTA_CORPORAL">Esteticista Corporal</option>
                  <option value="MASSOTERAPEUTA">Massoterapeuta</option>
                  <option value="ESTETICISTA">Esteticista</option>
                </select>
                {errors.profissao && <p className={styles.errorMessage}>{errors.profissao.message}</p>}
              </div>

              <div className={styles.inputBox}>
                <input
                  className={errors.password && styles.inputError}
                  id="password"
                  placeholder='Senha'
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="off"
                  {...register("password", { required: 'Senha é obrigatória', minLength: { value: 8, message: 'Senha precisa ter de 8 a 10 caracteres' } })}
                  style={{
                    width: "300px", height: "50px", backgroundColor: "transparent", borderBottom: "1px solid white", color: "white", fontSize: "20px",
                  }}
                />
                <RiLockPasswordLine onClick={() => setShowPassword(!showPassword)} />
                {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}


              </div>



              <div className={styles.inputBox}>
                <input
                  className={errors.confirmarSenha && styles.inputError}
                  id="confirmarSenha"
                  placeholder="Confirmar senha"
                  name="confirmarSenha"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="off"
                  {...register("confirmarSenha", { required: 'Confirmação de senha é obrigatória', validate: value => value === watch('password') || 'As senhas não coincidem' })}
                  style={{
                    width: "300px", height: "50px", backgroundColor: "transparent", borderBottom: "1px solid white", color: "white", fontSize: "20px",
                  }}
                />
                <RiLockPasswordLine onClick={() => setShowPassword(!showPassword)} />
                {errors.confirmarSenha && <p className={styles.errorMessage}>{errors.confirmarSenha.message}</p>}
              </div>
              <div className={styles.inputBox}>
                <input
                  type="checkbox"
                  id="termosUso"
                  {...register("termosUso", { required: 'Você precisa concordar com os termos de uso' })}
                />
                <label htmlFor="termosUso" className={styles.checkboxLabel}>
                  Li e concordo com os termos de uso
                </label>
                {errors.termosUso && <p className={styles.errorMessage}>{errors.termosUso.message}</p>}
              </div>
              <div className={styles.inputBox}>
                <input
                  type="checkbox"
                  id="iniciante"
                  {...register("iniciante",)}
                />
                <label htmlFor="iniciante" className={styles.checkboxLabel}>
                  Sou iniciante (marque se for iniciante na área da Beleza)
                </label>
              </div>

              <button type="submit" className={styles.buttonRegister} id='button'>
                Cadastre-me
              </button>
            </div>
          </div>


        </form>
      </div>
    </div>
  );
}

export default Cadastro;
