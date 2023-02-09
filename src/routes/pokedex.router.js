import { Router } from 'express';
import { getPokedexEntry } from '../controllers/pokedex.controller.js';

const router = Router();

router.get('/', async (req, res) => {
  
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try{
    res.send(await getPokedexEntry(id));
  } catch(e) {
    console.log(e)
    res.status(400).send(e)
  }
})

export default router;