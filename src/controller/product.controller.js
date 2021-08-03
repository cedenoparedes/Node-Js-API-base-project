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

export const getProductById = async (req, res) => {
  const { id } = await req.params;
  if (id == null) {
    return res.send("Please send a ID");
  }
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(queries.getProductById);
    res.send(result.recordset);
  } catch (error) {
    res.status(500);
    res.send({ message: "Fail saving the product" });
  }
};

export const remuveProductById = async (req, res) => {
  const { id } = await req.params;
  if (id == null) {
    return res.send("Please send a ID");
  }
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(queries.remuveProductById);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

export const updateProductById = async (req, res) => {
  const { id } = await req.params;
  const { name } = await req.body;
  if (name == null || id == null) {
    return res.send("Please send a ID");
  }
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("id", sql.Int, id)
      .query(queries.udpdateProductById);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};
