import Styles from './Sobre.module.css';
import Header from '../../components/header/index'
import logo from '../../assets/imgs/sobre/Bellifica-logo.png';
import make from '../../assets/imgs/sobre/moca-make.png';
import cuidos from '../../assets/imgs/sobre/estetica.png';
import Footer from '../../components/footer/index';
import enfoque from '../../assets/imgs/sobre/enfoque.png'
import etica from '../../assets/imgs/sobre/etica.png'
import meta from '../../assets/imgs/sobre/meta.png'
import bellogo from '../../assets/imgs/sobre/logo-sig.png'
import Grupo_Bellifica from "../../assets/imgs/sobre/grupo_Bellifica.png"

import FundinRoxo from '../../assets/imgs/home/fundinroxo.png';
import React, { useEffect } from "react";
function Sobre() {

    useEffect(() => {
        const section = document.getElementById('inicio-sobre');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);


    return (

        <body className={Styles.pagsobre}>

            <Header />

            <div className={Styles.carrosel} id='inicio-sobre' name='inicio-sobre'>

                <div className={Styles.sec11sobre}>
                    <div style={{ color: 'black', fontWeight: 'bolder', }}>
                        <h1 className={Styles.typingeffect}>
                            Estamos aqui para <span style={{ color: '#9979c1', fontWeight: 'bolder' }}>ajudar</span> você a crescer
                        </h1>
                        <h1 className={Styles.typingeffect2}>
                            e atingir seus <span style={{ color: '#9979c1', fontWeight: 'bolder' }}>objetivos</span>.
                        </h1>
                    </div>
                    <h5 className={Styles.descri_sobre_Bellifica} style={{ color: 'white' }}>Curioso para saber como a Bellifica nasceu?</h5>
                    <button className={Styles.buttonino2} >Conheceça a Bellifica</button>

                </div>

                <div className={Styles.sec12}>

                    <img className={Styles.Grupo_Bellifica} src={Grupo_Bellifica} />
                    




                </div>

            </div>

            <section className={Styles.quemsomos}>

                <div className={Styles.fundao}>
                    <div className={Styles.grupo1}>
                        <img src={make} alt='uma mulher sendo maquiada' className={Styles.imagem1} />

                        <div className={Styles.texto1}>
                            <h1 className={Styles.qmsomos}>Quem somos</h1>
                            <p className={Styles.textsomos}>Somos um grupo de estudantes de programação que se reuniu em Agosto de 2023, com o objetivo de desenvolver uma ferramenta capaz de auxiliar profissionais autônomos.</p>
                        </div>
                    </div>

                    <div className={Styles.grupo2}>

                        <div className={Styles.texto2}>
                            <h2 className={Styles.objetivo}>Nosso objetivo</h2>
                            <p className={Styles.textobjetivo}>Auxiliar trabalhadores(as) autônomos simplificando a gestão de negócios para profissionais da beleza.<br /> Buscamos proporcionar ferramentas eficientes para agendamento e marketing, permitindo o crescimento e a excelência desses empreendedores.</p>

                        </div>

                        <img src={cuidos} alt='mulher se olhando no espelho' className={Styles.imagem2} />
                    </div>
                </div>
            </section>

            {/*parte dos principios*/}

            <section className={Styles.princi}>
                <h1 className={Styles.titprinci}>Nossos Princípios</h1>

                <div className={Styles.princitudo}>
                    <div className={Styles.campenfoque}>
                        <div className={Styles.enfoque}>

                            <div className={Styles.conteuenfo}>
                                <h2 className={Styles.enfo}>Enfoque</h2>
                                <p className={Styles.textenfo}>Simplificar a gestão e fomentar o crescimento dos empreendedores da beleza através de soluções tecnológicas inovadoras.</p>
                            </div>

                            <img src={enfoque} alt='um olho desenhado' className={Styles.iconeenf} />
                        </div>
                    </div>

                    <div className={Styles.campoetica}>
                        <div className={Styles.campetica}>

                            <div className={Styles.etica}>
                                <img src={etica} alt='um coracao' className={Styles.iconeetic} />
                                <div className={Styles.conteuetica}>
                                    <h2 className={Styles.etic}>Ética</h2>
                                    <p className={Styles.textetic}>Comprometidos em facilitar a vida dos profissionais autônomos da beleza por meio de eficiência, excelência e inovação tecnológica.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={Styles.campmeta}>
                        <div className={Styles.meta}>
                            <div className={Styles.conteumeta}>
                                <h2 className={Styles.met}>Meta</h2>
                                <p className={Styles.textmet}>Desenvolver ferramentas acessíveis e eficazes para a gestão de negócios de beleza, impulsionando o sucesso e a autonomia dos profissionais.</p>
                            </div>
                            <img src={meta} alt='um tiro ao alvo' className={Styles.iconemeta} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </body>

    )
}

export default Sobre;