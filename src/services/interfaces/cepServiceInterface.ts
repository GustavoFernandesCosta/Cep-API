import { IAddress } from "../../contracts/address";

export interface CepServiceInterface {
  getCep(cep: string): Promise<IAddress>;
}
