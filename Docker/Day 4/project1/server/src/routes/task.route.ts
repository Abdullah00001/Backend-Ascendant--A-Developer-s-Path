import { Router } from 'express';
import taskCreateController from '../controllers/task-create.controller.js';

const router = Router();

router.route('/task').post(taskCreateController);

export default router;
