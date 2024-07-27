import Social from "../components/social";

function About() {
  return (
    <main id="Inicio">
      <li className="Avatar-container">
        <a href="https://github.com/Alexsoto042" target="_blank">
          <img
            className="Avatar"
            src="/assets/img/portada2.jpg"
            alt="portada"
          />
        </a>
        <a href="https://github.com/Alexsoto042" target="_blank">
          <Social id="Github" />
        </a>
        <a href="https://www.linkedin.com/in/alexsoto042/" target="_blank">
          <Social id="Linkedin" />
        </a>
        <a href="/assets/Cv_Alejandro_Martinez.pdf" download>
          <Social id="cv" />
        </a>
      </li>
      <div className="TextContainer">
        <h2 className="Titulo">Sobre Mi</h2>
        <p className="Descripcion">
          {
            "Hola, me llamo Alejandro Soto Martínez y soy un estudiante de ingeniería en sistemas con un fuerte interés en el desarrollo de software y la tecnología de la información. Poseo conocimientos en programación y bases de datos. Mi enfoque se centra actualmente en el desarrollo Front-end, pero me gustará llegar a poseer conocimiento de Back-end."
          }
        </p>
      </div>
      <div className="Flecha">
        <img className="Flecha-img" src="/assets/img/flecha.gif" alt="flecha" />
      </div>
      <h2 id="Proyectos" className="proyecto">
        Proyectos
      </h2>
    </main>
  );
}

export default About;
