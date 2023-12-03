import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './login.module.css';
import { toast } from 'react-toastify';

import backgroundImage from '../../assets/imgs/cad-login/fundo.jpg';

function Login() {
  const { handleSubmit, formState: { errors }, register } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });


      if (response.ok) {
        const responseData = await response.json();
        // Supondo que o token e os detalhes do usuário estejam nas chaves 'token', 'nome' e 'nomeNegocio'
        const { token, nome, nomeNegocio } = responseData;

        // Armazenar o token e os detalhes do usuário
        localStorage.setItem('token', token);
        localStorage.setItem('userName', nome);
        localStorage.setItem('nomeNegocio', nomeNegocio);

        if (!nomeNegocio) {
          toast.success(`Olá novamente, ${nome}!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          // Exibir notificação de boas-vindas com o nome e o nome do negócio
          toast.success(`Olá novamente, ${nome} do ${nomeNegocio}!`, {
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
        // Navegue para a página do dashboard após o login
        navigate('/dashboard');
      } else {
        // Se a resposta não for bem-sucedida, exiba a mensagem de erro
        throw new Error(`Erro no login: ${response.status}`);
      }
    } catch (error) {
      console.error('Erro:', error);
      toast.error(error.toString(), {
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
  };

  return (
    <div className={styles.background} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formslogin}>
          <h2>Login</h2>

          <div className={styles.inputBox}>
            <input
              className={errors.email && styles.inputError}
              id="email"
              placeholder="E-mail"
              name="email"
              type="text"
              autoComplete="off"
              {...register("email", { required: 'E-mail é obrigatório' })}
              style={{
                width: "300px",
                height: "50px",
                backgroundColor: "transparent",
                borderBottom: "1px solid white",
                color: "white",
                fontSize: "20px",
              }}
            />
            <HiOutlineMail />
            {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
          </div>

          <div className={styles.inputBox}>
            <input
              className={errors.password && styles.inputError}
              id="password"
              placeholder="Senha"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="off"
              {...register("password", { required: 'Senha é obrigatória' })}
              style={{
                width: "300px",
                height: "50px",
                backgroundColor: "transparent",
                borderBottom: "1px solid white",
                color: "white",
                fontSize: "20px",
              }}
            />
            <RiLockPasswordLine onClick={() => setShowPassword(!showPassword)} />
            {errors.password && <p className={styles.errorMessage}>{errors.password.message}</p>}
          </div>


          <button type="submit" className={styles.buttonRegister} id='button'>
            Entrar
          </button>

          <div className={styles.loginLink}>
            <p>Não tem uma conta? <Link className={styles.registerLink} to="/cadastro">Cadastre-se</Link></p>
            <p><Link className={styles.registerLink} to="/">Voltar para HOME</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
