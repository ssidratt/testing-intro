const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test('сценарий 1', () => {
    expect(filterByCategory(products, 'all').map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('сценарий 2', () => {
    expect(filterByCategory(products, undefined).map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('сценарий 3', () => {
    expect(filterByCategory(products, '').map((product) => product.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('сценарий 4', () => {
    expect(filterByCategory(products, 'electronics').map((product) => product.id)).toEqual([1, 2]);
  });

  test('сценарий 5', () => {
    expect(filterByCategory(products, 'books').map((product) => product.id)).toEqual([3, 6]);
  });

  test('сценарий 6', () => {
    expect(filterByCategory(products, 'home').map((product) => product.id)).toEqual([4, 5]);
  });

  test('сценарий 7', () => {
    expect(filterByCategory(products, 'clothes').map((product) => product.id)).toEqual([]);
  });

  test('сценарий 8', () => {
    expect(filterByCategory(products, 'toys').map((product) => product.id)).toEqual([]);
  });

  test('сценарий 9', () => {
    expect(filterByCategory(products, 'sports').map((product) => product.id)).toEqual([]);
  });
});
