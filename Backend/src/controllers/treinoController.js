import conexao from "../config/db.js";

export const listarTreino = async (req, res) => {
    let conn;
    try {
        conn = await conexao.getConnection();

        const [Treino] = await conn.query(`
            SELECT id,aluno_id,instrutor_id,senha,perfil,criado_em FROM treinos 
            `);

        res.status(200).json(Treino);

    } catch (error) {

        res.status(500).json({ msg: "Erro ao listar treinos" });

    } finally {

        if (conexao) conn.release();

    }
}