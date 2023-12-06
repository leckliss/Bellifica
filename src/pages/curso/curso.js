import React, { useState } from 'react';

import Styles from './Curso.module.css';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index';

import blob from '../../assets/imgs/curso/mulher-estudando.png'
import senac from '../../assets/imgs/curso/logo-senac.png'
import financeiro from '../../assets/imgs/curso/financeiro.jpg'
import marketing from '../../assets/imgs/curso/marketing.jpg'
import estetica from '../../assets/imgs/curso/beleza-estetica.jpg'
import cabelosenac from '../../assets/imgs/curso/cabelo-senac.png'
import maquiadorasenac from '../../assets/imgs/curso/maquiadora.jpg'
import manicuresenac from '../../assets/imgs/curso/maos-pes.jpg'




function Curso() {

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const cards = [
        { image: financeiro, description: 'Curso de Finanças' },
        { image: marketing, description: 'Curso de Marketing' },
        { image: estetica, description: 'Curso de Beleza e Estética' },
        { image: cabelosenac, description: 'Curso de Cabelo' },
        { image: maquiadorasenac, description: 'Curso de Beleza e Estética' },
        { image: manicuresenac, description: 'Curso de Beleza e Estética' },
    ];

    const nextCard = () => {
        const newIndex = (currentCardIndex + 1) % cards.length;
        setCurrentCardIndex(newIndex);
    };

    const prevCard = () => {
        const newIndex = (currentCardIndex - 1 + cards.length) % cards.length;
        setCurrentCardIndex(newIndex);
    };

    return (

        <body className={Styles.pagcurso}>

            <Header />

            {/*parte de quem somos*/}

            <section className={Styles.banner}>

                <div className={Styles.caixaroxa}>
                    <div className={Styles.descricurso}>
                        <h1 className={Styles.titcurso}>Chegou a hora de desembaraçar a sua vida</h1>

                        <p className={Styles.textcurso}>Nesta seção contém cursos com parceiros que iremos oferecer para você bellificar mais ainda o seu empreendimento</p>
                    </div>

                    <img src={blob} alt='mulher estudando' className={Styles.imgbanner} />
                </div>

            </section>

            <section className={Styles.senac}>
                <img src={senac} alt='logo senac' className={Styles.logosenac} />

                <div className={Styles.cardCarousel}>
                <button onClick={prevCard}>Previous</button>
                <div className={Styles.card}>
                    <img src={cards[currentCardIndex].image} alt={cards[currentCardIndex].description} />
                    <p className={Styles.descri}>{cards[currentCardIndex].description}</p>
                </div>
                <button onClick={nextCard}>Next</button>
            </div>


            </section>



            <Footer />
        </body>

    )
}


export default Curso;