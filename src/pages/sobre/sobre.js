import Styles from './Sobre.module.css';
import Header from '../../components/header/index'
import logo from '../../assets/imgs/sobre/Bellifica-logo.png';
import make from '../../assets/imgs/sobre/moca-make.png';
import cuidos from '../../assets/imgs/sobre/estetica.png';
import Footer from '../../components/footer/index';

function Sobre() {
    return (
        <>
            <Header />
            <main className={Styles.fundo}>

                <section className={Styles.quemsomos}>
                    <div className={Styles.img - logo}>
                        <img src={logo} alt='logo' className={Styles.logo} />
                    </div>

                    <div className={Styles.fundao}>
                        <div className={Styles.grupo1}>
                            <img src={make} alt='uma mulher sendo maquiada' className={Styles.imagem1} />

                            <div className={Styles.texto1}>
                                <h1>Quem somos</h1>
                                <p>Somos um grupo de estudantes de programação que se reuniu em Agosto de 2023, com o objetivo de desenvolver uma ferramenta capaz de auxiliar profissionais autônomos.</p>
                            </div>
                        </div>

                        <div className={Styles.grupo2}>

                            <div className={Styles.texto2}>
                                <h2>Nosso objetivo</h2>
                                <p>Auxiliar trabalhadores(as) autônomos simplificando a gestão de negócios para profissionais da beleza.<br /> Buscamos proporcionar ferramentas eficientes para agendamento e marketing, permitindo o crescimento e a excelência desses empreendedores.</p>
                                <h1>Nossos Princípios</h1>
                            </div>

                            <img src={cuidos} alt='mulher se olhando no espelho' className={Styles.imagem2} />
                        </div>
                    </div>
                </section>

                <section className={Styles.princi}>
                    <div className={Styles.enfoque}>

                    </div>

                </section>

            </main>


        </>
    )
}

export default Sobre;