import { PERFIL_TEXT } from '../../utils/system';
import profile from '../../assets/images/new-profile.png';
import email from '../../assets/images/email.png';
import whatsapp from '../../assets/images/whatsapp.png';
import './styles.css';
import pdfFile from '../../data/thiagodrangel.pdf'; // Importe o PDF

function User() {
  return (
    <main className="user-container-profile">
      <form action="">
        <section className="personal-infos">
          <div className="contact-container">
            <li>
              <a href="https://api.whatsapp.com/send?phone=22998720889&text=Olá Thiago" target="_blank" rel="noopener noreferrer">
                <img
                  alt="whatsapp"
                  className="images-contact"
                  src={whatsapp}
                />
              </a>
            </li>
            <li>
              <a href="mailto:info.tec.campos@gmail.com?subject=Assunto do Email&body=Olá, Thiago." target="_blank" rel="noopener noreferrer">
                <img
                  alt="email"
                  className="images-contact"
                  src={email}
                  />
              </a>
            </li>
            <div className="image-profile-container">
              <img className="image-profile" src={profile} alt="foto" />
              <a href={pdfFile} download className="download-button">
                Baixar Currículo
              </a>
            </div>
          </div>
          <div className="text-container">
            <p>{PERFIL_TEXT}</p>
          </div>
        </section>
        <ul className="background-container">
          <p className="strong">Formação Acadêmica:</p>
          <li>Técnico em Informática - 2014</li>
          <li>Engenharia Civil - 2021</li>
          <li>MBA em Marketing Estratégico e Digital - 2022</li>
          <li>Desenvolvimento Front-End - 2022</li>
          <li>Desenvolvimento Back-End - 2023</li>
          <li>BootCamp Santander - 2023</li>
          <li>AWS re/start - 2023</li>
          <li>Análise e Desenvolvimento de Sistemas - Cursando</li>
        </ul>
        <ul className="background-container">
          <p className="strong">Experiência Profissional:</p>
          <li><div className="title-containers">Empresa: Colégio Eucarístico</div></li>
          <li>Gestão do sistema educacional | 2011 - 2013</li>
          <li>Tarefas administrativas | 2014 - 2021</li>
        </ul>
        <ul className="background-container">
          <p className="strong">Habilidades Técnicas:</p>
          <p className="title-containers">Frontend</p>
          <li>React.js</li>
          <li>React.ts</li>
          <p className="title-containers">Backend</p>
          <li>Java/Spring</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
        </ul>
        <ul className="background-container">
          <p className="strong">Cursos de expecialização:</p>
          <li>Java Sprint Ultimate | Nélio Alves</li>
          <li>C# | Udemy</li>
          <li>Java | Nélio Alves</li>
          <li>React.js | Trybe</li>
          <li>React.ts | DevSuperior</li>
          <li>Ciência de dados | Google</li>
        </ul>
        <ul>
          <li className="background-container">Inglês - Avançado</li>
        </ul>
      </form>
    </main>
  );
}

export default User;
