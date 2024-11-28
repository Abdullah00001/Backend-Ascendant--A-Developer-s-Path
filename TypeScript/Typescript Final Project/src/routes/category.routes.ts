import { Router } from 'express';

const router = Router();

/* ===================================================
-----------------------MIDDLEWARES--------------------
=====================================================*/

/* ===================================================
-----------------------CONTROLLERS--------------------
=====================================================*/

router.route('/category').get().post();

router.route('category/:id').get().put().delete();

export default router;
