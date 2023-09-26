import "./style.css"
import logo from "../../images/logo1.png"
export default function Header() {

    return (

        <header>
            <div className="alinhamento">
                <img className="header_logo" src={logo} />
                <nav className="botoes_header">
                    <div>Home</div>
                    <div>Eventos</div>
                    <div>Contatos</div>
                </nav>
                <div><button className="header_logar">Logar</button></div>
            </div>
        </header>

    )

}