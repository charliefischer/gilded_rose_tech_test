const { Shop, Item } = require("../src/gilded_rose");

describe('Shop', () => {
  test('initializes with out any items', () => {
    let shop = new Shop()
    expect(shop.items).toEqual([])
  })
  test('can store items', () => {
    let items = ['pencils', 'post-it notes', 'balloons']
    let shop = new Shop(items)
    expect(shop.items).toEqual(items)
  })
})

describe('updateQuality', () => {
  test('it updates the quality and sellIn of a non special item', () => {
    let item = new Item('pencils', 10, 10)
    let shop = new Shop(item)
    shop.updateQuality()
    expect(shop.items.quality).toEqual(9)
    expect(shop.items.sellIn).toEqual(9)
  })

})