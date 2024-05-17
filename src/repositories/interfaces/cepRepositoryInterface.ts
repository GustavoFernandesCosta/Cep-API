import { IAddress } from "../../contracts/address";

export interface CepRepositoryInterface {
  save(address: IAddress): void;
}
