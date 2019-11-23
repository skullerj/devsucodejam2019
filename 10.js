function getProduct(array) {
  return array.reduce((res, val) => res * val, 1);
}

function product(array) {
  let highestProduct = 0;
  let resultArray = null;
  for (let x = 0; x < array.length; x++) {
    let arrayCopy = [...array];
    arrayCopy = arrayCopy.slice(0, x + 1);
    const newProduct = getProduct(arrayCopy);
    if (newProduct > highestProduct) {
      highestProduct = newProduct;
      resultArray = arrayCopy;
    }
  }
  return resultArray;
}

console.log(product([-3.2, 4.2, 7, 5.4, -2.2, -2.5]));

export default product;

