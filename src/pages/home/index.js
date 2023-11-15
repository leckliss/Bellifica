import React from 'react';
import Header from '../../components/header/index.js';
import Fundo from '../../assets/imgs/home/ImageBackground.png';
import './styles.css';

const Home = () => {
  return (
    <>
      <main className='background-page'>
        <Header/>

        <div className='img-div'>
          <img src={Fundo} className='background-img'/>
        </div>
        <div className='text-div'>
          <p className='text'>Uma nova forma de <br/> transformar seu trabalho <br/> único e elegante</p>
        </div>

      </main>
    </>
  );
}

export default Home;
