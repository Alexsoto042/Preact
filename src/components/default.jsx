import Social from "../components/social";
const Default = ({ title, descrip, src, id1, ide2, ide3, url }) => {
  return (
    <main>
      <div className="Container">
        <a href={url} target="_blank">
          <img className="GatoImg" src={src} alt="Imagen del juego gato" />
        </a>
        <div className="Texto">
          <h2 className="Titulo">{title}</h2>
          <p className="Descripcion">{descrip}.</p>
        </div>
      </div>
      <div className="Iconos">
        <Social id={id1} />
        <Social id={ide2} />
        <Social id={ide3} />
      </div>
    </main>
  );
};

export default Default;
