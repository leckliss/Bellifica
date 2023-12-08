import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../pages/produtos/produtos.module.css"
import imgpdtcurso from "../../assets/imgs/produto/Group 351.png"
import imgpdtagenda from "../../assets/imgs/produto/Group 352.png"

import FundinRoxo from '../../assets/imgs/home/fundinroxo.png';
import React, { useEffect } from "react";

function Produtos() {

    useEffect(() => {
        const section = document.getElementById('inicio-produtos');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, []);

    return (

        <>
            <Header />

            <div className={Styles.pagproduto}>

                <div className={Styles.carrosel} id='inicio-produtos' name='inicio-produtos'>

                    <div className={Styles.sec11}>
                        <div className={Styles.body_effects} style={{ color: 'black', fontWeight: 'bolder', }}>
                            <h1 className={Styles.typingeffect}>
                                <span style={{ color: '#9979c1', fontWeight: 'bolder' }}>Embelezando</span> sonhos...
                            </h1>
                            <h1 className={Styles.typingeffect2}>
                                Estruturando <span style={{ color: '#9979c1', fontWeight: 'bolder' }}>realidades.</span>
                            </h1>
                        </div>
                        <h5 className={Styles.descri_Bellifica} style={{  color: 'white' }}>Com a Bellifica você torna-se um(a) profissional organizado(a)</h5>
                        <button className={Styles.buttonino} >Conhecer planos</button>

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
                        <div className={Styles.pdttexto}><h1 className={Styles.Titulo_produtos}>O que oferecemos?</h1></div>
                        <div className={Styles.pdtcursodicas}>
                            <div className={Styles.text2}>
                                <div className={Styles.pdtdescri}>
                                    <h2>Cursos e dicas</h2>
                                    <p>Auxiliamos você a entrar no caminho certo para o crescimento do seu negócio, indicamos cursos e dicas para ajudar no seu dia-a-dia.</p>
                                </div>
                            </div>
                            <img className={Styles.imagem_curso} src={imgpdtcurso}></img>
                        </div>

                        <div className={Styles.campagendamento}>
                            <div className={Styles.pdtagendamento}>

                                <div className={Styles.pdtdescrição}>
                                    <img src={imgpdtagenda}></img>
                                    <div className={Styles.text1}>
                                        <h2>Agendamento</h2>
                                        <p>Com produto de agendamento  é possível automatizar a forma que seus atendimentos são agendados, trazendo benefícios para você e seus clientes.</p>
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