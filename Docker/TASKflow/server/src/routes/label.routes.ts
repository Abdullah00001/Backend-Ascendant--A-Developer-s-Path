import { Router } from "express";
import createLabelController from "../controllers/create-label.controllers.js";
import getAllLabelController from "../controllers/get-all-label.controllers.js";

const router = Router();

router.route("/label").post(createLabelController).get(getAllLabelController);

export default router;
