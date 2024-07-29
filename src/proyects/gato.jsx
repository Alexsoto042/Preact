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
        descrip={
          "Este proyecto es un juego de gato desarrollado con React, JavaScript y CSS."
        }
      />
    </>
  );
}

export default Gato;
