const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test('сортировка 1', () => {
    expect(sortProductsByPrice(products, 'asc').map((product) => product.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('сортировка 2', () => {
    expect(sortProductsByPrice(products).map((product) => product.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('сортировка 3', () => {
    expect(sortProductsByPrice([products[0], products[2], products[3]], 'asc').map((product) => product.id)).toEqual([3, 4, 1]);
  });

  test('сортировка 4', () => {
    expect(sortProductsByPrice(products, 'desc').map((product) => product.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test('сортировка 5', () => {
    expect(sortProductsByPrice([products[2], products[0], products[3]], 'desc').map((product) => product.id)).toEqual([1, 4, 3]);
  });

  test('сортировка 6', () => {
    expect(sortProductsByPrice([products[4], products[1], products[5]], 'desc').map((product) => product.id)).toEqual([2, 5, 6]);
  });

  test('не изменяет исходный массив 7', () => {
    const input = [products[0], products[2], products[3]];
    const before = [...input];
    sortProductsByPrice(input, 'asc');
    expect(input).toEqual(before);
    expect(input.map((product) => product.id)).toEqual([1, 3, 4]);
  });

  test('не изменяет исходный массив 8', () => {
    const input = [products[0], products[2], products[3]];
    const before = [...input];
    sortProductsByPrice(input, 'desc');
    expect(input).toEqual(before);
    expect(input.map((product) => product.id)).toEqual([1, 3, 4]);
  });

  test('не изменяет исходный массив 9', () => {
    const input = products;
    const before = [...input];
    sortProductsByPrice(input);
    expect(input).toEqual(before);
    expect(input.map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
