const fetchProducts = async () => {
  const response = await fetch('http://localhost:3001/products/');
  const data = await response.json();

  return data;
};

export default fetchProducts;
