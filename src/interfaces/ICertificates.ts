export default interface ICertificates {
  id: number;
  name: string;
  description: string;
  issuer: string;
  issueDate: string;
  expirationDate: string;
  url: string;
  credentialID: string;
  image: string;
  stacks: string[];
}
