export interface ClientTestimony {
  company: CompanyData;
  client: ClientData;
  content: string[];
}

interface CompanyData {
  name: string;
  logoSrc: string;
}

interface ClientData {
  name: string;
  title: string;
  photoSrc: string;
}
