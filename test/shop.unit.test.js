const { Shop, Item } = require("../src/gilded_rose");

describe('Shop', () => {
  test('initializes with out any items', () => {
    let shop = new Shop()
    console.log(shop)
    expect(shop.items).toEqual([])
  })
  test('can store items', () => {
    let items = ['pencils', 'post-it notes', 'balloons']
    let shop = new Shop(items)
    expect(shop.items).toEqual(items)
  })
})