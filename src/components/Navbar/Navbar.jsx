import './Navbar.scss'

function Navbar({galeria,nosotros, servicios, contacto}) {
  return (
    <div className='Nav-container '>
        <a href="#nosotros" onClick={()=>nosotros()} className='coolBeans'>Nosotros</a>
        <a href="#servicios" onClick={()=>servicios()} className='coolBeans'>Servicios</a>
        <a href="#galeria" onClick={()=>galeria()} className='coolBeans'>Galeria</a>
        <a href="#contacto" onClick={()=>contacto()} className='coolBeans'>Contacto</a>
    </div>
  )
}

export default Navbar