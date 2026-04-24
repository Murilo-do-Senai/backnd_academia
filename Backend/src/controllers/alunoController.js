import conexao from "../config/db.js";

export const listarAlunos = async (req, res) => {
    let conn;
    try {
        conn = await conexao.getConnection();

        const [alunos] = await conn.query(`
            SELECT id,nome,cpf,telefone,email,data_nascimento,plano_id,status FROM alunos 
            `);

        res.status(200).json(alunos);

    } catch (error) {

        res.status(500).json({ msg: "Erro ao listar alunos" });

    } finally {

        if (conexao) conn.release();

    }
}