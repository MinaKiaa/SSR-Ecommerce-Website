module.exports.priceNewProducts = (products) => {
  const newProduct = products.map((product) => {
    product.priceNew = (
      (product.price * (100 - product.discountPercentage)) /
      100
    ).toFixed(0);
    return product;
  });

  return newProduct;
};

module.exports.priceNewProduct = (product) => {
  const priceNew = (
    (product.price * (100 - product.discountPercentage)) /
    100
  ).toFixed(0);
  return parseInt(priceNew);
};
