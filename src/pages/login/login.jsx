import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './login.module.css';

import backgroundImage from '../../assets/imgs/cad-login/fundo.jpg';

function Login() {
  const { handleSubmit, formState: { errors }, register } = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Lógica de submissão do formulário aqui
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
