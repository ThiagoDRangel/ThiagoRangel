import { PERFIL_TEXT } from '../../utils/system';
import profile from '../../assets/images/profile.jpeg';
import email from '../../assets/images/email.jpg';
import whatsapp from '../../assets/images/whatsapp.jpg';
import './styles.css';

function User() {

  return (
    <main className="user-container">
      <form action="">
        <ul className="personal-infos">
          <div className="contact-container">
            <li>
              <a href="https://api.whatsapp.com/send?phone=22998720889&text=Olá Thiago" target="_blank">
                <img
                  alt="whatsapp"
                  className="images-contact"
                  src={whatsapp}
                />
              </a>
            </li>
            <li>
              <a href="mailto:info.tec.campos@gmail.com?subject=Assunto do Email&body=Olá, Thiago." target="_blank">
                <img
                  alt="email"
                  className="images-contact"
                  src={email}
                  />
              </a>
            </li>
            <img src={profile} alt="foto" />
          </div>
          <span>
            <li className="text-container">{PERFIL_TEXT}</li>
          </span>
        </ul>
        <ul className="background-container">
          <li className="strong">Formação Acadêmica:</li>
          <li>Técnico em Informática - 2014</li>
          <li>Engenharia Civil - 2021</li>
          <li>MBA em Marketing Estratégico e Digital - 2022</li>
          <li>Desenvolvimento Front-End - 2022</li>
          <li>Desenvolvimento Back-End - 2023</li>
          <li>BootCamp Santander - 2023</li>
          <li>AWS re/start - 2023</li>
        </ul>
        <ul className="background-container">
          <li className="strong">Experiência Profissional:</li>
          <li>Gestão do sistema educacional | 2011 - 2013</li>
          <li>Tarefas administrativas | 2014 - 2021</li>
        </ul>
        <ul className="background-container">
          <li className="strong">Habilidades Técnicas:</li>
          <li>Docker</li>
          <li>Git</li>
          <li>Java</li>
          <li>Spring</li>
          <li>JavaScript</li>
          <li>Mysql</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
        <ul className="background-container">
          <li className="strong">Cursos de expecialização:</li>
          <li>Java Sprint Ultimate | Nélio Alves</li>
          <li>C# | Udemy</li>
          <li>Java | Nélio Alves</li>
          <li>React.js | Trybe</li>
          <li>React.ts | DevSuperior</li>
          <li>Nodem sequelize e TypeScript | Trybe</li>
        </ul>
        <ul >
          <li className="background-container">Inglês - Intermediário</li>
        </ul>
      </form>
    </main>
  );
}

export default User;
