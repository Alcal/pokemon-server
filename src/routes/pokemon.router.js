import { Router } from 'express';

const router = Router();

router.get('/encounter', async (req, res) => {
  res.send({ encountered: true })
})

export default router;