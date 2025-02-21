export async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json();
}
