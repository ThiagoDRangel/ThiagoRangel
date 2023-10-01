import projects from "../../../../assets/images/projects.jpg";
import './styles.css';

function Projects() {
  return (
    <section className="project-container">
      <div className="title-container">PROJETOS</div>
      <div className="image-container">
        <a href="https://github.com/ThiagoDRangel" target="_blank">
          <img src={projects} alt="meus projetos" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
