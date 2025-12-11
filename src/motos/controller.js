import * as repository from './repository.js';

export async function listarMotos(req, res) {
    try {
        const motos = await repository.getAllMotos();
        res.json(motos);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export async function criarMoto(req, res) {
    try {
        await repository.createMoto(req.body);
        res.status(201).json({ message: "Moto criada com sucesso!" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export async function atualizarMoto(req, res) {
    try {
        await repository.updateMoto(req.params.id, req.body);
        res.json({ message: 'Moto atualizada com sucesso!' });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export async function deletarMoto(req, res) {
    try {
        await repository.deleteMoto(req.params.id);
        res.json({ message: 'Moto deletada com sucesso!' });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}
