import conexao from "../config/db.js";

export const listarUsuario = async (req, res) => {
    let conn;
    try {
        conn = await conexao.getConnection();

        const [usuarios] = await conn.query(`
            SELECT id,nome,email,senha,perfil,criado_em FROM usuarios 
            `);

        res.status(200).json(usuarios);

    } catch (error) {

        res.status(500).json({ msg: "Erro ao listar usuarios" });

    } finally {

        if (conexao) conn.release();

    }
}