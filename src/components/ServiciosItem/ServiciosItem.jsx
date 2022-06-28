import './ServiciosItem.scss'

function ServiciosItem({texto, imagen}) {
  
  return (
    <div className="a-box " >
      <div className="img-container ">
        <div className="img-inner">
          <div className="inner-skew">
            <img src={imagen} />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3>{texto}</h3>
      </div>
      
    </div>
  );
}

export default ServiciosItem