import Header from "../../components/header";
import Footer from "../../components/footer";
import Style from "./faleconosco.module.css";
import { AiOutlineSend } from "react-icons/ai"

function Faleconosco() {
    return (
        <>
            <Header />
            <div className={Style.divnavbar}></div>
            <section className={Style.faleconosco_corpo}>
                <div className={Style.formulariofaleconosco_corpo}>
                    <h2 className={Style.titulo_formulariofaleconosco}>Fale conosco</h2>
                    <input className={Style.input_nomefaleconosco} type="name" placeholder="Seu nome" required></input>
                    <input className={Style.input_emailfaleconosco2} type="email" placeholder="Seu email" required></input>
                    <textarea className="input_textfaleconosco" placeholder="Seu comentario" lenght="50"></textarea>
                    <button className={Style.submit_faleconosco} type="submit"><span className={Style.send_faleconosco}>Enviar</span> <AiOutlineSend className={Style.AiOutlineSend} /></button>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Faleconosco;