import { Router } from "express";
import { CepControllerInterface } from "../controllers/interfaces/cepControllerInterface";

function cepRoutes(cepController: CepControllerInterface) {
  const router = Router();
  router.get("/:cep", async (req, res) => {
    const { cep } = req.params;
    const result = await cepController.getCep(cep);
    res.json(result);
  });
  return router;
}

export default cepRoutes;
