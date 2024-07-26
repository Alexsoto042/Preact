import Social from "../components/social";

function Gato() {
  return (
    <main>
      <div className="Container">
        <a href="https://gato-psi.vercel.app" target="_blank">
          <img
            className="GatoImg"
            src="/assets/img/gato.png"
            alt="Imagen del juego gato"
          />
        </a>
        <div className="Texto">
          <h2 className="Titulo">Juego de gato</h2>
          <p className="Descripcion">
            Este proyecto es un juego de gato desarrollado con React, JavaScript
            y CSS.
          </p>
        </div>
      </div>
      <div className="Iconos">
        <Social id="React" />
        <Social id="Javascript" />
        <Social id="Css" />
      </div>
    </main>
  );
}

export default Gato;
