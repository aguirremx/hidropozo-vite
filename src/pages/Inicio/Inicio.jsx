import { useState } from "react";
import Header from "../../components/Header/Header";
import Galeria from "../../components/Galeria/Galeria";
import Nosotros from "../../components/Nosotros/Nosotros";
import Servicios from "../../components/Servicios/Servicios";
import Contacto from "../Contacto/Contacto";
import "./Inicio.scss";


export default function Inicio() {
  const navState = {
    galeriaOpen:true,
    nosotrosOpen:false,
    serviciosOpen:false,
    contactoOpen:false
  }
  const [state, setState] = useState(navState)

  const clickGaleria =() => {
    setState({
      galeriaOpen: true,
      nosotrosOpen: false,
      serviciosOpen: false,
      contactoOpen: false,
    }); 

 }

  const clickNosotros =() => {
     setState({
      galeriaOpen:false,
      nosotrosOpen:true,
      serviciosOpen:false,
      contactoOpen:false
    }) 

  }
  const clickServicios =() => {
    setState({
      galeriaOpen:false,
     nosotrosOpen:false,
     serviciosOpen:true,
     contactoOpen:false
   }) 

 }
 const clickContacto =() => {
  setState({
    galeriaOpen:false,
   nosotrosOpen:false,
   serviciosOpen:false,
   contactoOpen:true
 }) 
}
 
  return (
    <div className="main-container">
      <section className="header-section">
          <Header 
          galeria={clickGaleria}
          nosotros={clickNosotros}
          servicios={clickServicios}
          contacto={clickContacto}
          />
      </section>
      {/* // Componente Galería */}
      {
        state.galeriaOpen &&
        <section className="galeria" id="galeria">
          <Galeria />
        </section>
      }
       
       {/* //Componente nosotros */}
       {
        state.nosotrosOpen &&
      <section className="nosotros" id="nosotros">
       <Nosotros/>
      </section>
       }
       
       {/* // Componente servicios */}
      {
        state.serviciosOpen &&
      <section className="servicios" id="servicios">
       <Servicios/>
      </section>
      }
       
       {/* // Componente contacto */}
       {
        state.contactoOpen &&
      <section className="contacto" id="contacto">
       <Contacto/>
      </section>
       }
    </div>
  );
}
