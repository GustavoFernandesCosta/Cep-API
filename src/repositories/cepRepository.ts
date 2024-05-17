import { IAddress } from "../contracts/address";
import { CepRepositoryInterface } from "./interfaces/cepRepositoryInterface";

export class CepRepository implements CepRepositoryInterface {
  constructor(private readonly cepRepository: CepRepositoryInterface) {}

  save(address: IAddress) {
    this.cepRepository.save(address);
  }
}
