import nosotrosImage from "../../assets/images/Nosotros3.jpg";
import ServiciosItem from "../ServiciosItem/ServiciosItem";
import imagen1 from "../../assets/images/Perforacion y equipamiento.jpeg";
import imagen2 from "../../assets/images/mantenimiento/Cepillo y pistón.jpeg";
// import imagen3 from ''
import imagen4 from "../../assets/images/DESARROLLO AFORO.jpeg";
import imagen5 from "../../assets/images/Barrena.jpeg";
import imagen6 from "../../assets/images/Pozos de absorción 2.jpeg";
import imagen7 from "../../assets/images/Estudios geotérmicos.jpg";
import imagen8 from "../../assets/images/Proyectos geotermicos/Pozos geotérmicos.jpeg";

import Module from '../Module/Module';
import { useState } from 'react';

  
import "./Servicios.scss";

function Servicios() {
  const servicios = [
    {
      id: 1,
      servicio: "Perforación y equipamiento de pozos profundos de agua",
      imagen: imagen1,
    },
    {
      id: 2,
      servicio: "Mantenimiento y rehabilitación de pozos profundos de agua",
      imagen: imagen2,
    },
    {
      id: 3,
      servicio: "Venta de equipos sumergibles y accesorios",
      imagen: "",
    },
    {
      id: 4,
      servicio:
        "Aforos- gasto de explotación y determinación de equipo de bombeo adecuado",
      imagen: imagen4,
    },
    {
      id: 5,
      servicio: "Venta de barrenas (brocas de perforación)",
      imagen: imagen5,
    },
    {
      id: 6,
      servicio: "Construcción de pozos de absorción",
      imagen: imagen6,
    },
    {
      id: 7,
      servicio: "Estudios geohidrológicos",
      imagen: imagen7,
    },
    {
      id: 8,
      servicio: "Proyectos/servicios para pozos geotérmicos",
      imagen: imagen8,
    },
  ];
  const [image, setImage] = useState()
  const [module, setModule] = useState(false)
  const handleClick =(item) =>{
    setModule(true)
    setImage(item)
  }

  return (
    <div className="nosotros-container">
      <br />
      <div className="has-animation animate-in animation-rtl nosotros-title">
        <p className="bigger">Nuestros Servicios</p>
      </div>
      <div className="Servicios-container has-animation animate-in animation-rtl  ">
        {servicios.map((servicio) => (
          <ServiciosItem
            texto={servicio.servicio}
            imagen={servicio.imagen}
            key={servicio.id}
            onClick={()=> handleClick(servicio.imagen)}
          />
          ))}
      </div>
      {/*  //TODO: hacer funcional el modulo para la imagen de los servicios */}
          {/* {module && <Module image={image} module={setModule} />} */}
    </div>
  );
}


{/* <div id="app">
        <div className="title">
          <div className="title-inner">
            <div className="cafe">
              <div className="cafe-inner">Nuestros</div>
            </div>
            <div className="mozart">
              <div className="mozart-inner">Servcios</div>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={nosotrosImage} alt />
        </div>
      </div> */}
export default Servicios;
