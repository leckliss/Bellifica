import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../pages/produtos/produtos.module.css"
import imgpdtpremium from "../../assets/imgs/produto/Group 368.png"
import imgpdtgratuito from "../../assets/imgs/produto/Group 370.png"
import imgpdtagendamento from "../../assets/imgs/produto/Group 369.png"
import imgpdtdicas from "../../assets/imgs/produto/Group 372.png"
import imgpdtchat from "../../assets/imgs/produto/Group 371.png"


import FundinRoxo from '../../assets/imgs/produto/Group 361.png';
import React, { useEffect, useRef } from "react";

function Produtos() {

    useEffect(() => {
        const section = document.getElementById('inicio-produtos');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);


    const myRef = useRef(null);

    const scrollToSection = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <>
            <Header />

            <div className={Styles.pagproduto}>

                <div className={Styles.carrosel} id='inicio-produtos' name='inicio-produtos'>

                    <div className={Styles.sec11}>
                        <div className={Styles.body_effects} style={{ color: 'black', fontWeight: 'bolder', }}>
                            <h1 className={Styles.typingeffect}>
                                Nossos serviços foram <span style={{ color: '#fd9ba6', fontWeight: 'bolder' }}>delineados</span> e embelezados pensando em <span style={{ color: '#fd9ba6', fontWeight: 'bolder' }}>você</span>.
                            </h1>
                        </div>
                        <h5 style={{ fontSize: 'x-large', color: 'white' }}>Com a Bellifica você fará mais de forma mais eficiente e eficaz</h5>
                        <button className={Styles.buttonino} onClick={scrollToSection} >Conhecer serviços</button>

                    </div>

                    <div className={Styles.sec12}>

                        <img
                            className={Styles.fundinroxo}
                            src={FundinRoxo}

                        />


                    </div>

                </div>

                <section className={Styles.sessãopdt}>

                    <div className={Styles.caixaprodutos}>
                        <div className={Styles.pdttexto}><h1 className={Styles.Titulo_produtos} ref={myRef}>O que oferecemos?</h1></div>

                        <div className={Styles.campagendamento}>
                            <div className={Styles.pdtagendamento}>

                                <div className={Styles.pdtdescrição}>
                                    <img src={imgpdtgratuito}></img>
                                    <div className={Styles.text1}>
                                        <h2>Cursos Gratuitos</h2>
                                        <p>Nós recomendamos e oferecemos cursos de parceiros para que você possa se capacitar gratuitamente ou pagando se preferir</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={Styles.pdtcursodicas}>
                            <div className={Styles.text2}>
                                <div className={Styles.pdtdescri}>
                                    <h2>Cursos Premium</h2>
                                    <p>Assinando nosso plano Borboleta, você terá acesso a cursos pagos que estarão inclusos com sua assinatura, além também de receber conteúdo antecipadamente</p>
                                </div>
                            </div>
                            <img className={Styles.imagem_curso} src={imgpdtpremium}></img>
                        </div>

                        <div className={Styles.campagendamento}>
                            <div className={Styles.pdtagendamento} style={{ backgroundColor: '#7677d2' }}>

                                <div className={Styles.pdtdescrição}>
                                    <img src={imgpdtagendamento}></img>
                                    <div className={Styles.text1}>
                                        <h2>Agendamento</h2>
                                        <p>Com produto de agendamento  é possível automatizar a forma que seus atendimentos são agendados, trazendo benefícios para você e seus clientes.</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={Styles.pdtcursodicas}>
                            <div className={Styles.text2}>
                                <div className={Styles.pdtdescri}>
                                    <h2>Dicas Semanais</h2>
                                    <p>Recomendamos dicas práticas que irão lhe ajudar no seu dia-a-dia.</p>
                                </div>
                            </div>
                            <img className={Styles.imagem_curso} src={imgpdtdicas}></img>
                        </div>

                        <div className={Styles.campagendamento}>
                            <div className={Styles.pdtagendamento} style={{ backgroundColor: '#7677d2' }}>

                                <div className={Styles.pdtdescrição}>
                                    <img src={imgpdtchat}></img>
                                    <div className={Styles.text1}>
                                        <h2>Chatbot IA</h2>
                                        <p>Com a assinatura Borboleta, você terá acesso ao nosso chatbot personalizado para atender você que quer ter um atendimento rápido e individual</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}

export default Produtos;