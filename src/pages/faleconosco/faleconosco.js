import Header from "../../components/header";
import Footer from "../../components/footer";
import Style from "./faleconosco.module.css";

function Faleconosco() {
    return(
        <>
        <Header/>
        <section className={Style.faleconosco_corpo}>
        <h1>teste</h1>
        </section>
        <Footer/>
        </>
    );
}

export default Faleconosco;