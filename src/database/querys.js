export const queries = {
  getProducts: "select * from product",
  createProduct: "insert into product (name) values (@name)",
};
