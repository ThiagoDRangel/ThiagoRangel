import './styles.css';
import backOne from '../../../../assets/projects/back_01.png';
import backTwo from '../../../../assets/projects/back_02.png';
import backThree from '../../../../assets/projects/back_03.png';
import backFour from '../../../../assets/projects/back_04.png';

function Backend() {
  return (
    <main>
      <div className="first-container-back">
      </div>
      <div className="second-container">
        <h1>Principais projetos</h1>
      </div>
      <section className="project-container">
        <div className="info-container">
          <a href="https://github.com/ThiagoDRangel/Java/tree/main/dscommerce" target='_blank'>
            <img className="image-product" src={backOne} alt="Dev Commerce" />
          </a>
          <p>Languages</p>
          <h4>Java Spring Postgresql Spring Security</h4>
        </div>
        <div className="info-container">
          <a href="https://github.com/ThiagoDRangel/Blogs-api" target='_blank'>
            <img className="image-product" src={backTwo} alt="Blogs-api" />
          </a>
          <p>Languages</p>
          <h4>JavaScript Sequelize Docker</h4>
        </div>
      </section>
      <section className="project-container">
        <div className="info-container">
          <a href="https://github.com/ThiagoDRangel/HeroMart-Ecommerce" target='_blank'>
            <img className="image-product" src={backThree} alt="HeroMart" />
          </a>
          <p>Languages</p>
          <h4>TypeScript Docker JavaScript Sequelize</h4>
        </div>
        <div className="info-container">
          <a href="https://github.com/ThiagoDRangel/Bootcamp-Santander-2023" target='_blank'>
            <img className="image-product" src={backFour} alt="Bootcamp-Santander" />
          </a>
          <p>Languages</p>
          <h4>Java JavaScript Python C# Kotlin</h4>
        </div>
      </section>
    </main>
  );
}

export default Backend;
