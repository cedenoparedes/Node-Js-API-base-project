import { getConnection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

export const createProduct = async (req, res) => {
  const { name, description } = req.body;

  if (name == null || description == null) {
    return res.status(400).json({ message: "por favor llene todos los datos" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .query(queries.createProduct);
    res.json({ name, description });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
