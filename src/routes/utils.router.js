import { Router } from 'express';
import { getLanguages } from '../controllers/utils.controller.js';

const router = Router();

router.get('/language/:id', async (req, res) => {
  try {
    res.send(await getLanguages(req));
  } catch(e) {
    console.error(e)
    res.send({ error: e })
  }
})

export default router;