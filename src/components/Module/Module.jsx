import "./Module.scss";

function Module({ image, module }) {
  return (
    <div className="Module-Container">
      <div className="Module">
        <div className="cerrar">
          <spa n onClick={() => module(false)}>
            Cerrar
          </spa>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Module;
