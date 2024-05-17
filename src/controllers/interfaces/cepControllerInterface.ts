import { HttpResponse } from "../../protocols/reponses";

export interface CepControllerInterface {
  getCep(cep: string): Promise<HttpResponse>;
}
