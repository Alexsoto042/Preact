import Social from "../components/social";

function About() {
  return (
    <main>
      <li className="Avatar-container">
        <a href="https://github.com/Alexsoto042" target="_blank">
          <img
            className="Avatar"
            src="./Preact/src/assets/portada.jpg"
            alt=""
          />
        </a>
        <a href="https://github.com/Alexsoto042" target="_blank">
          <Social id="Github" />
        </a>
        <a href="https://www.linkedin.com/in/alexsoto042/" target="_blank">
          <Social id="Linkedin" />
        </a>
        <a href="./Preact/src/assets/Cv_Alejandro_Martinez.pdf" download>
          <Social id="cv" />
        </a>
      </li>
      <div className="TextContainer">
        <h2 className="Titulo">About Me</h2>
        <p className="Descripcion">
          {
            "Soy un estudiante de ingeniería en sistemas con un fuerte interés en el desarrollo de software y la tecnología de la información. Poseo habilidades fundamentales en programación, bases de datos y análisis de sistemas. Mi enfoque se centra en la resolución de problemas y la optimización de procesos mediante soluciones tecnológicas innovadoras."
          }{" "}
        </p>
      </div>
      <div className="Flecha">
        <img className="Flecha-img" src="./Preact/src/assets/flecha.gif" />
      </div>
    </main>
  );
}

export default About;
