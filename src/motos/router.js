import { Router } from 'express';
import {
    listarMotos,
    criarMoto,
    atualizarMoto,
    deletarMoto
} from './controller.js';

const router = Router();

router.get('/motos', listarMotos);
router.post('/motos', criarMoto);
router.put('/motos/:id', atualizarMoto);
router.delete('/motos/:id', deletarMoto);

export default router;
