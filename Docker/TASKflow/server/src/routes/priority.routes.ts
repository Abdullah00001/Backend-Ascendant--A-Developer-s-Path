import { Router } from "express";
import createPriorityController from "../controllers/create-priority.controllers.js";
import getAllPriorityController from "../controllers/get-all-priority.controllers.js";

const router = Router();

router
  .route("/priority")
  .post(createPriorityController)
  .get(getAllPriorityController);

router.route("/priority/:id").get().put().delete();

export default router;
