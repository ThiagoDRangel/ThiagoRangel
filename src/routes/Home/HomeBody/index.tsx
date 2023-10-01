import Footer from '../../../components/Footer';
import avatarFoto from '../../../assets/images/avatarFoto.png';
import frontend from '../../../assets/images/frontend.jpg';
import backend from '../../../assets/images/backend.jpg';
import './styles.css';


function HomeBody() {
  return (
    <main>
      <section className="first-container">
        <h1>Seja bem vindo!</h1>
        <div className="title"><p>Soluções para negócios e empresas</p></div>
      </section>
      <section className="container-first">
        <ul>
          <p>Desenvolvedor Full-stack</p>
          <li>Domínio das principais tecnologias do mercado.</li>
          <li>Proficiência em metodologias ágeis.</li>
          <li>Excelência na produção de código de alta qualidade.</li>
          <li>Habilidades interpessoais sólidas.</li>
          <li>Resolução eficaz de problemas complexos.</li>
          <li>Comunicação clara e eficaz.</li>
          <li>Pensamento crítico e analítico.</li>
        </ul>
        <img src={avatarFoto} alt="avatar foto" />
      </section>
      <section className="container-second">
        <h3>Front-End</h3>
        <div className="text-container">
          <a href="https://dscommerce-thiagodrangel.netlify.app/" target="_blank">
            <img src={frontend} alt="front-end" className="img-frontend" />
          </a>
            <p>Principais projetos</p>
          </div>
      </section>
      <section className="container-third">
        <h3>Back-End</h3>
        <div className="text-container">
          <a href="https://github.com/ThiagoDRangel">
            <img src={backend} alt="back-end" className="img-backend" />
          </a>
          <p>Principais projetos</p>
          </div>
      </section>
      <Footer />
    </main>
  );
}

export default HomeBody;
