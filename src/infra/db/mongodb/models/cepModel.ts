import { Schema, model } from "mongoose";
import { IAddress } from "../../../../contracts/address";

const AddressSchema = new Schema({
  cep: { type: String, unique: true },
  logradouro: { type: String },
  complemento: { type: String },
  bairro: { type: String },
  localidade: { type: String },
  uf: { type: String },
  ibge: { type: String },
  gia: { type: String },
  ddd: { type: String },
  siafi: { type: String },
});

const Address = model<IAddress>("Address", AddressSchema);
export default Address;
