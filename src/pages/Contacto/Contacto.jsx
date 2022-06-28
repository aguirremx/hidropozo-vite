import Phone from '../../assets/incons/phone.png'
import Mail from '../../assets/incons/mail.png'
import Map from '../../assets/incons/map.png'
import './Contacto.scss'

export default function Contacto() {
  return (
    <div className="nosotros-container">
      <br />
      <div className="has-animation animate-in animation-rtl nosotros-title">
        <p className="bigger">Contactanos </p>
      </div>
      <div className="form-container">
        <form id="form" className="topBefore">
          <input id="name" type="text" placeholder="Nombre" />
          <input id="email" type="text" placeholder="Correo" />
          <input id="email" type="text" placeholder="Teléfono" />
          <textarea
            id="message"
            type="text"
            placeholder="Escribe tu mensaje..."
            defaultValue={""}
            className="areatext"
          />
          <input id="submit" type="submit" defaultValue="GO!" />
        </form>
        <footer>
          <ul>
            <li><img src={Phone} style={{width:"30px", height:"30px"}}/> 773 688 3555 </li>
            <li><img src={Mail} style={{width:"30px",height:"30px"}}/> d.trejo@hidrogeologiayperforaciones.com</li>
            <li><img src={Map} style={{width:"30px",height:"30px"}}/> <a href="https://www.google.com/maps/place/Graciano+S%C3%A1nchez+123a-Int.+4,+Iturbe,+42820+El+Llano,+Hgo./@20.0734935,-99.3257177,17z/data=!3m1!4b1!4m5!3m4!1s0x85d22d281814d3cd:0x85ac4a2a809546b5!8m2!3d20.0734885!4d-99.323529">Graciano Sánchez 123a-Int. 4, Iturbe, 42820 El Llano, Hgo.</a></li>
          </ul>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.4494945475753!2d-99.323529!3d20.073488500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d22d281814d3cd%3A0x85ac4a2a809546b5!2sGraciano%20S%C3%A1nchez%20123a-Int.%204%2C%20Iturbe%2C%2042820%20El%20Llano%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1656101816057!5m2!1ses-419!2smx" width={400} height={250} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </footer>
      </div>
    </div>
  );
}

// <div id="app">
//         <div className="title">
//           <div className="title-inner">
//             <div className="cafe">
//               <div className="cafe-inner">Ponte en</div>
//             </div>
//             <div className="mozart">
//               <div className="mozart-inner">Contacto</div>
//             </div>
//           </div>
//         </div>
//         <div className="image">
//           <img src={contactanos} alt="" />
//         </div>
        
//       </div>
