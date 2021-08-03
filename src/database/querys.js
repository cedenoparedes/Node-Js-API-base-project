export const queries = {
  getProducts: "select * from product",
  createProduct: "insert into product (name) values (@name)",
  getProductById: "select * from product where id = @id",
  remuveProductById: "delete product where id = @id",
  udpdateProductById: "update product set name = @name where id = @id",
};
