import { getConnection } from "../database/connectiosn";

export const getProduct = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query("select * from product");

  console.log(result);
};
