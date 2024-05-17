import axios from "axios";
import { IAddress } from "../contracts/address";
import { CepRepositoryInterface } from "../repositories/interfaces/cepRepositoryInterface";
import { CepNotFoundError } from "../utils/customError";
import { CepServiceInterface } from "./interfaces/cepServiceInterface";

export class CepService implements CepServiceInterface {
  constructor(private readonly cepRepository: CepRepositoryInterface) {}

  async getCep(cep: string): Promise<IAddress> {
    const address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = address.data;

    if (data.erro === true) throw new CepNotFoundError();

    this.cepRepository.save(data);
    return data;
  }
}
