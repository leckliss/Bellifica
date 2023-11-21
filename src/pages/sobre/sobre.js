import Styles from './Sobre.module.css';
import Header from '../../components/header/index'
import logo from '../../assets/imgs/sobre/Bellifica-logo.png';
import make from '../../assets/imgs/sobre/moca-make.png';
import cuidos from '../../assets/imgs/sobre/estetica.png';
import Footer from '../../components/footer/index';
import enfoque from '../../assets/imgs/sobre/enfoque.png'
import etica from '../../assets/imgs/sobre/etica.png'
import meta from '../../assets/imgs/sobre/meta.png'
import bellogo from '../../assets/imgs/sobre/sig-logo.png'

function Sobre() {
    return (

        <body className={Styles.pagsobre}>

            <Header />

             {/*parte de quem somos*/}

            <section className={Styles.quemsomos}>
                <div className={Styles.imglogo}>
                    <img src={logo} alt='logo' className={Styles.logo} />
                </div>

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
                            <h1 className={Styles.titprinci}>Nossos Princípios</h1>
                        </div>

                        <img src={cuidos} alt='mulher se olhando no espelho' className={Styles.imagem2} />
                    </div>
                </div>
            </section>

            {/*parte dos principios*/}

            <section className={Styles.princi}>
                <div className={Styles.enfoque}>
                    <div className={Styles.conteuenfo}>
                        <h2 className={Styles.enfo}>Enfoque</h2>
                        <p className={Styles.textenfo}>Simplificar a gestão e fomentar o crescimento dos empreendedores da beleza através de soluções tecnológicas inovadoras.</p>
                    </div>
                    <img src={enfoque} alt='um olho desenhado' className={Styles.iconeenf} />
                </div>

                <div className={Styles.campetica}>
                    <div className={Styles.etica}>
                        <img src={etica} alt='um coracao' className={Styles.iconeetic} />
                        <div className={Styles.conteuetica}>
                            <h2 className={Styles.etic}>Ética</h2>
                            <p className={Styles.textetic}>Comprometidos em facilitar a vida dos profissionais autônomos da beleza por meio de eficiência, excelência e inovação tecnológica.</p>
                        </div>
                    </div>
                </div>

                <div className={Styles.meta}>
                    <div className={Styles.conteumeta}>
                        <h2 className={Styles.met}>Meta</h2>
                        <p className={Styles.textmet}>Desenvolver ferramentas acessíveis e eficazes para a gestão de negócios de beleza, impulsionando o sucesso e a autonomia dos profissionais.</p>
                    </div>
                    <img src={meta} alt='um tiro ao alvo' className={Styles.iconemeta} />
                </div>
            </section>

            <section className={Styles.bellogo}>
            <img src={bellogo} alt='logo da Bellifica e seus siginificados' className={Styles.siglogo} />
            </section>

            <Footer/>
        </body>

    )
}

export default Sobre;