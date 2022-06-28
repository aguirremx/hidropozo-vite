import Navbar from "../Navbar/Navbar";
import "./Header.scss";

export default function Header({galeria, nosotros, servicios, contacto}) {
  return (
    <>
      <div className="Header-body">
        <h1>Grupo Hidropozo <br/> México</h1>
        <div className="drop-container">
          <div className="drop" />
        </div>
        {/* Slogan */}
        <div className="animated-title">
          <div className="text-top">
            <div>
              <span>Confianza,</span>
              <span>profesionalismo</span>
            </div>
          </div>
          <div className="text-bottom">
            <div>Compromiso</div>
          </div>
        </div>
        {/* Navbar */}
        <div className="NavBar">
            <Navbar
            galeria={galeria}
            nosotros={nosotros}
            servicios={servicios}
            contacto={contacto}
            />
        </div>
        <span className="footer">Copyrigth® 2022</span>
      </div>
    </>
  );
}
