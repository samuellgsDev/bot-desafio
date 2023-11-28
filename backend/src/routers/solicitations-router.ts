import { Router } from "express";
import * as solicitationsController from "../modules/controllers/solicitations-controller";

const router = Router();

router.post("/", solicitationsController.create);

router.get("/", solicitationsController.findAll);

router.get("/cards", solicitationsController.cardProblems);

router.get("/loans", solicitationsController.loans);

router.get("/others", solicitationsController.others);

router.put("/finish/:id", solicitationsController.finish);

export default router;
