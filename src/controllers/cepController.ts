import { HttpResponse } from "../protocols/reponses";
import { CepServiceInterface } from "../services/interfaces/cepServiceInterface";
import { CepInvalidError, CustomError } from "../utils/customError";
import { CepControllerInterface } from "./interfaces/cepControllerInterface";

export class CepController implements CepControllerInterface {
  constructor(private cepService: CepServiceInterface) {}

  async getCep(cep: string): Promise<HttpResponse> {
    try {
      if (cep.match(/^\d{5}-?\d{3}$/) === null) throw new CepInvalidError();

      const data = await this.cepService.getCep(cep);

      return {
        statusCode: 200,
        body: data,
      };
    } catch (error) {
      if (error instanceof CustomError) {
        return {
          statusCode: error.statusCode,
          body: error.message,
        };
      }
      return {
        statusCode: 500,
        body: { message: "Internal server error" },
      };
    }
  }
}
