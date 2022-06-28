import { useState } from 'react'
import img1 from '../../assets/images/Galeria/CONTRADEME TUBERÍA.jpeg'
import img2 from '../../assets/images/Galeria/LAVADO DE POZO.jpeg'
import img3 from '../../assets/images/Galeria/WhatsApp Image 2022-06-15 at 4.46.13 PM.jpeg'
import img4 from '../../assets/images/Galeria/WhatsApp Image 2022-06-15 at 4.52.22 PM.jpeg'
import img5 from '../../assets/images/Galeria/WhatsApp Image 2022-06-15 at 4.52.23 PM.jpeg'
import Module from '../Module/Module'
import './Galeria.scss'

function Galeria() {
  const [image, setImage] = useState()
  const [module, setModule] = useState(false)

  const handleClick =(item) =>{
    setModule(true)
    setImage(item)
  }
  return (
    <div className='nosotros-container'>
     <br />
      <div >
        <p className="bigger">Galería de fotos </p>
      </div>
      <br />
      <br />
      <div className="galeria-container ">
        <img src={img1} onClick={()=> handleClick(img1)}/>
        <img src={img2} onClick={()=> handleClick(img2)}/>
        <img src={img3} onClick={()=> handleClick(img3)}/>
        <img src={img4} onClick={()=> handleClick(img4)}/>
        <img src={img5} onClick={()=> handleClick(img5)}/>

        <img src={img1} onClick={()=> handleClick(img1)}/>
        <img src={img2} onClick={()=> handleClick(img2)}/>
        <img src={img3} onClick={()=> handleClick(img3)}/>
        <img src={img4} onClick={()=> handleClick(img4)}/>
        <img src={img5} onClick={()=> handleClick(img5)}/>

      
      </div>
      {module &&
      <Module image={image} module={setModule}/>
      }
    </div>


  );
}

export default Galeria