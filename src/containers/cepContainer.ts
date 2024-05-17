import { CepController } from "../controllers/cepController";
import { CepMongoRepository } from "../infra/db/mongodb/cepMongoRepository";
import { CepRepository } from "../repositories/cepRepository";
import cepRoutes from "../routes/cepRoutes";
import { CepService } from "../services/cepService";

export function configureCepContainer() {
  const cepImplementation = new CepMongoRepository();
  const cepRepository = new CepRepository(cepImplementation);
  const cepService = new CepService(cepRepository);
  const cepController = new CepController(cepService);
  const cepRoute = cepRoutes(cepController);
  return { cepRoute };
}
