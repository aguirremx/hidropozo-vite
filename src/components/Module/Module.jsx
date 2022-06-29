import "./Module.scss";

function Module({ image, module }) {
  return (
    <div className="Module-Container">
      <div className="Module">
        <div className="cerrar">
          <span n onClick={() => module(false)}>
            X
          </span>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Module;
