import nosotrosImage from "../../assets/images/Nosotros.jpg";
import "./Nosotros.scss";

function Nosotros() {
  return (
    <div className="nosotros-container">
      <br />
      <div className="has-animation animate-in animation-rtl nosotros-title">
        <p className="bigger">Sobre Nosotros </p>
      </div>
      <div className="has-animation animate-in animation-rtl">
        <p className="text">
          Somos una empresa{" "}
          <b>
            <font color="deepskyblue">
              100% mexicana ubicada en tula de Allende
            </font>
          </b>
          , Hidalgo con más de 30 años de experiencia en la industria respaldada
          por la confiazay resultados entregados a nuestros clientes.
        </p>
      </div>
      <div className="has-animation animate-in animation-rtl">
        <p className="text">
          Proporcionamos nuestros servicios a toda la república mexicana para
          todos los sectores, desde el{" "}
          <b>
            <font color="deepskyblue">
              sector primario e industrial hasta el sector residencial, tanto
              para clientes públicos como privados
            </font>
          </b>
          . Nuestro equipo de trabajo está ampliamente capacitado para
          solucionar de manera efectiva todos los proyectos, adecuándose en todo
          momento a las necesidades de nuestros clientes y{" "}
          <b>
            <font color="deepskyblue">
              proporcionando nuestros servicios apegados a los más altos
              estándares de calidad que existen en el mercado.
            </font>
          </b>{" "}
          Por esto y más, nosotros somos hidrogeología y perforaciones.
        </p>
      </div>
      <div className="has-animation animate-in animation-rtl nosotros-images">
        <img src={nosotrosImage} className="nosotros-image" />
      </div>
    </div>
  );
}

export default Nosotros;

// <div id="app">
// <div className="title">
//   <div className="title-inner">
//     <div className="cafe">
//       <div className="cafe-inner">Sobre</div>
//     </div>
//     <div className="mozart">
//       <div className="mozart-inner">Nosotros</div>
//     </div>
//   </div>
// </div>
// <div className="image">
//   <img src={nosotrosImage} alt />
// </div>
// </div>
// <p className="Texto">
// Somos una empresa <b><font color="deepskyblue">100% mexicana ubicada en tula de Allende</font></b>, Hidalgo con
// más de 30 años de experiencia en la industria respaldada por la confiaza
// y resultados entregados a nuestros clientes.
// </p>
// <p className="Texto">
// Proporcionamos nuestros servicios a toda la república mexicana para
// todos los sectores, desde el <b><font color="deepskyblue">sector primario e industrial hasta el
// sector residencial, tanto para clientes públicos como privados</font></b>. Nuestro
// equipo de trabajo está ampliamente capacitado para solucionar de manera
// efectiva todos los proyectos, adecuándose en todo momento a las
// necesidades de nuestros clientes y <b><font color="deepskyblue">proporcionando nuestros servicios
// apegados a los más altos estándares de calidad que existen en el
// mercado.</font></b> Por esto y más, nosotros somos hidrogeología y perforaciones.
// </p>
