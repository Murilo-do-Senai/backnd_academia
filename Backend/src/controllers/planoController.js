import conexao from "../config/db.js";

export const listarPlanos = async (req, res) => {
    let conn;
    try {
        conn = await conexao.getConnection();

        const [planos] = await conn.query(`
            SELECT id,nome,descricao,valor,duracao_meses,ativo FROM planos 
            `);

        res.status(200).json(planos);

    } catch (error) {

        res.status(500).json({ msg: "Erro ao listar planos" });

    } finally {

        if (conexao) conn.release();

    }
}