import ICertificates from "../interfaces/ICertificates";
import tecnicoInformatica from "../assets/certificates/tecnicoInformatica.png";
import javaDio from "../assets/certificates/javaDio.png";
import pythonData from "../assets/certificates/pythonData.png";
import javaBradesco from "../assets/certificates/javaBradesco.png";
import javaUltimate from "../assets/certificates/javaUltimate.png";

const certificates: ICertificates[] = [
  {
    id: 1,
    name: "Técnico em Informática",
    description: "Diploma/Certificado registrado no SISTEC sob o número 28356/112516815CM, de acordo com a Resolução CNE/CEB nº 3, de 30 de setembro de 2009.",
    issuer: "Colégio Eucarístico",
    issueDate: "18/07/2023",
    expirationDate: "none",
    url: "https://drive.google.com/file/d/1S05LfIR1rkNn3K9Nun29Pvd7YPLJkolJ/view?usp=drive_link",
    credentialID: "28356/112516815CM",
    image: tecnicoInformatica,
    stacks: ["Java", "HTML", "JS", "CSS", "SQL", "MySQL", "PostgreSQL", "C#"]
  },
  {
    id: 2,
    name: "Santander Bootcamp 2023 - Backend Java",
    description: "Santander Universidades",
    issuer: "Dio.me",
    issueDate: "11/09/2023",
    expirationDate: "none",
    url: "https://drive.google.com/file/d/1yDHhxJm_ZbQx1mmESWbpyWKEdKG9bOXf/view?usp=drive_link",
    credentialID: "BED26BF9",
    image: javaDio,
    stacks: ["java", "Spring", "Spring Boot", "Spring Data", "Spring Security", "H2", "JPA"]
  },
  {
    id: 3,
    name: "Desenvolvendo um projeto completo Python com estruturas de dados",
    description: "none",
    issuer: "Fundação Bradesco",
    issueDate: "20/06/2023",
    expirationDate: "none",
    url: "https://drive.google.com/file/d/1gpt2V7s58-poeoj1ZWkyhvjEaEvMGX73/view?usp=drive_link",
    credentialID: "84CB4BEA-FA77-4253-A857-3DC38E761E38",
    image : pythonData,
    stacks: ["Python", "Pandas"]
  },
  {
    id: 4,
    name: "Linguagem de programação Java - Avançado",
    description: "none",
    issuer: "Fundação Bradesco",
    issueDate: "20/06/2023",
    expirationDate: "none",
    url: "https://drive.google.com/file/d/1m_S-gDdkGiLKakwRKr-Ghi5sRYxumO0K/view?usp=drive_link",
    credentialID: "43B5F965-93E1-46D2-A635-A952ABC4F285",
    image: javaBradesco,
    stacks: ["java","maven", "git"]
  },
  {
    id: 5,
    name: "Fundamentos do Desenvolvimento Web",
    description: "Módulo 1",
    issuer: "Trybe",
    issueDate: "08/12/2022",
    expirationDate: "none",
    url: "https://www.credential.net/f5c655bc-73e4-4975-934f-7c54ce8acd9b#gs.5sccx2",
    credentialID: "f5c655bc-73e4-4975-934f-7c54ce8acd9b",
    image: "https://images.credential.net/embed/tpvep3jo.png",
    stacks: ["html", "css", "js", "lógica de programação" , "algoritmos", "git", "github"]
  },
  {
    id: 6,
    name: "Desenvolvimento Front-End",
    description: "Módulo 2",
    issuer: "Trybe",
    issueDate: "04/04/2023",
    expirationDate: "none",
    url: "https://www.credential.net/28c4c79a-e658-4b2b-991c-76089eee7208#gs.5scec4",
    credentialID: "28c4c79a-e658-4b2b-991c-76089eee7208",
    image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/71215695",
    stacks: ["react", "redux", "context api", "Hooks", "RTL", "jest", "css", "js", "ts", "git", "github", "javascript", 'typescript']
  },
  {
    id: 7,
    name: "Desenvolvimento Back-End",
    description: "Módulo 3",
    issuer: "Trybe",
    issueDate: "27/09/2023",
    expirationDate: "none",
    url: "https://www.credential.net/b950375e-129a-42ec-b279-ca370cb26c4f#gs.5scgld",
    credentialID: "b950375e-129a-42ec-b279-ca370cb26c4f",
    image: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/83027587",
    stacks: ["node", "javascript" , "express", "mysql", "mongodb", "jwt", "sequelize", "orm", "tdd", "mocha", "chai", "sinon", "ts", "docker"]
  },
  {
    id: 8,
    name: "Java Spring Professional",
    description: "none",
    issuer: "DevSuperior",
    issueDate: "28/07/2023",
    expirationDate: "none",
    url: "https://paragon.academy/c/5-144",
    credentialID: "5-144",
    image: javaUltimate,
    stacks: ["java", "spring", "spring boot", "spring Data", "spring security", "h2", "jpa"]
  }
];

export default certificates;