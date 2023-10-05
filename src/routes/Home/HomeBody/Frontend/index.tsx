import frontONe from '../../../../assets/projects/front_01.png';
import frontTwo from '../../../../assets/projects/front_02.png';
import './styles.css';

function Frontend() {
  return (
    <main>
      <div className="first-container-front">
      </div>
      <div className="second-container">
        <h1>Principais projetos</h1>
      </div>
      <section className="project-container">
        <div className="info-container">
          <a href="https://dscommerce-thiagodrangel.netlify.app/"target='_blank'>
            <img className="image-product" src={frontONe} alt="Dev Commerce" />
          </a>
          <p>Languages</p>
          <h4>React TypeScript Css</h4>
        </div>
        <div className="info-container">
          <a href="https://thiagodrangel-shopping-cart.vercel.app/" target='_blank'>
            <img className="image-product" src={frontTwo} alt="Dev Commerce" />
          </a>
          <p>Languages</p>
          <h4>JavaScript HTML Css</h4>
        </div>
      </section>
    </main>
  );
}

export default Frontend;
