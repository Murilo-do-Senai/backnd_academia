import conexao from "../config/db.js";

export const listarFrequencias = async (req, res) => {
    let conn;
    try {
        conn = await conexao.getConnection();

        const [frequencia] = await conn.query(`
            SELECT id,aluno_id,data_frequencia,presnte,observacao FROM frequencias 
            `);

        res.status(200).json(frequencia);

    } catch (error) {

        res.status(500).json({ msg: "Erro ao listar frequencias" });

    } finally {

        if (conexao) conn.release();

    }
}