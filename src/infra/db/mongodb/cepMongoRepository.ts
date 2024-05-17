import { IAddress } from "../../../contracts/address";
import Address from "./models/cepModel";

export class CepMongoRepository {
  async save(address: IAddress): Promise<void> {
    const addressExists = await Address.findOne({ cep: address.cep });
    const newAddress = new Address(address);

    if (!addressExists) await newAddress.save();
  }
}
