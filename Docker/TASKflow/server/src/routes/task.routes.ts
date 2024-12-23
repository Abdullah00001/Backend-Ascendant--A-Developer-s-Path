import { Router } from "express";
import createTaskController from "../controllers/create-task.controllers.js";
import getAllTaskController from "../controllers/get-all-task.controllers.js";

const router = Router();

router.route("/task").post(createTaskController).get(getAllTaskController);

export default router;
