import { Router } from 'express';
import pokemonRoutes from './pokemon.router.js';
import pokedexRoutes from './pokedex.router.js';
import utilsRoutes from './utils.router.js';

const router = Router();

router.get('/', (req, res) => {
  res.send({ mes: 'hello'})
});

router.use('/pokemon', pokemonRoutes);
router.use('/pokedex', pokedexRoutes);
router.use('/utils', utilsRoutes);

export default router;