import Default from "../components/default";

function Gato() {
  return (
    <>
      <Default
        src={"/assets/img/gato.png"}
        title={"Juego De Gato"}
        id1={"React"}
        ide2={"Javascript"}
        ide3={"Css"}
        url={"https://gato-psi.vercel.app"}
        descrip={
          "El Juego de Gato es una aplicación web interactiva desarrollada en React que permite a dos jugadores competir en el clásico juego de tres en línea."
        }
      />
    </>
  );
}

export default Gato;
