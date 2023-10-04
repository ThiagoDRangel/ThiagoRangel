import Footer from '../../../components/Footer';
import './styles.css';


function HomeBody() {
  return (
    <main>
      <section className="homebody-container">
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
      </section>
      
      <p>Principais projetos</p>
          
      <Footer />
    </main>
  );
}

export default HomeBody;
