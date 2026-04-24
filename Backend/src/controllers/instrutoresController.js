import conexao from "../config/db.js";

export const listarInstrutores = async (req, res) => {
    let conn;
    try {
        conn = await conexao.getConnection();

        const [instrutores] = await conn.query(`
            SELECT id,nome,especialidade,telefone,email FROM instrutores 
            `);

        res.status(200).json(instrutores);

    } catch (error) {

        res.status(500).json({ msg: "Erro ao listar instrutores" });

    } finally {

        if (conexao) conn.release();

    }
}