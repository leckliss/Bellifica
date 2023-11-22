import Header from "../../components/header";
import Footer from "../../components/footer";
import Styles from "../../pages/produtos/produtos.module.css"
import imgpdtcurso from "../../assets/imgs/produto/Group 351.png"
import imgpdtagenda from "../../assets/imgs/produto/Group 352.png"
function Produtos() {
    return (

        <>
            <Header />

            <div className={Styles.pagproduto}>

                <section className={Styles.sessãopdt}>

                    <div className={Styles.caixaprodutos}>
                        <div className={Styles.pdttexto}><h1 className={Styles.Titulo_produtos}>Nossos Serviços</h1></div>
                        <div className={Styles.pdtcursodicas}>
                            <div className={Styles.pdtdescrição}> <h2>Cursos e dicas</h2>
                                <p>Auxiliamos você a entrar no caminho certo para o crescimento do seu negócio, indicamos cursos e dicas para ajudar no seu dia-a-dia.</p></div>
                            <img src={imgpdtcurso}></img>
                        </div>

                        <div className={Styles.pdtagendamento}>
                            <img src={imgpdtagenda}></img>
                            <div className={Styles.pdtdescrição}> <h2>Agendamento</h2>
                                <p>Com produto de agendamento  é possível automatizar a forma que seus atendimentos são agendados, trazendo benefícios para você e seus clientes.</p></div>
                        </div>
                    </div>

                </section>
                <Footer />
            </div>
        </>
    );
}

export default Produtos;