const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test('сценарий 1', () => {
    expect(searchProducts(products, 'Наушники').map((product) => product.id)).toEqual([1]);
  });

  test('сценарий 2', () => {
    expect(searchProducts(products, 'Чистый код').map((product) => product.id)).toEqual([6]);
  });

  test('сценарий 3', () => {
    expect(searchProducts(products, 'Настольная лампа').map((product) => product.id)).toEqual([4]);
  });

  test('сценарий 4', () => {
    expect(searchProducts(products, 'javascript').map((product) => product.id)).toEqual([3]);
  });

  test('сценарий 5', () => {
    expect(searchProducts(products, 'ЧЕХОЛ').map((product) => product.id)).toEqual([5]);
  });

  test('сценарий 6', () => {
    expect(searchProducts(products, 'наушники').map((product) => product.id)).toEqual([1]);
  });

  test('сценарий 7', () => {
    expect(searchProducts(products, '').map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('сценарий 8', () => {
    expect(searchProducts(products, '   ').map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('сценарий 9', () => {
    expect(searchProducts(products, '\t\n').map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
