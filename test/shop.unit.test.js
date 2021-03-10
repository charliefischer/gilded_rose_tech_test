const { Shop, Item } = require("../src/gilded_rose");

let goods;

beforeEach(() => {
  goods = [];
})

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
  test('it updates the quality of a non special item', () => {
    let item = new Item('pencils', 10, 10)
    goods.push(item)
    let shop = new Shop(goods)
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(9)
    expect(shop.items[0].sellIn).toEqual(9)
  })

  test('it updates the quality of multiple non special items', () => {
    let item = new Item('pencils', 10, 10)
    let itemTwo = new Item('rubbers', 8, 8)
    goods.push(item)
    goods.push(itemTwo)
    let shop = new Shop(goods)
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(9)
    expect(shop.items[1].quality).toEqual(7)
    expect(shop.items[0].sellIn).toEqual(9)
    expect(shop.items[1].sellIn).toEqual(7)
  })

  test('the quality of an item cannot be less than 0', () => {
    let item = new Item('sausages', 2, 0)
    goods.push(item)
    let shop = new Shop(goods)
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(0)
  })

  test('after the sellIn date quality depreciates twice as fast', () => {
    let item = new Item('corned beef', -1, 2)
    goods.push(item)
    let shop = new Shop(goods)
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(0)
  })

  test('the quality of an item cannot be less than 0 after sellIn date', () => {
    let item = new Item('scotch egg', 0, 1)
    goods.push(item)
    let shop = new Shop(goods)
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(0)
  })
})

describe('brieUpdater', () => {
  test('it updates the quality of Aged Brie correctly', () => {
    let item = new Item('Aged Brie', 10, 10)
    goods.push(item)
    let shop = new Shop(goods)
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(11)
  })

  test('the quality value can not exceed 50', () => {
    let item = new Item('Aged Brie', 10, 50)
    goods.push(item)
    let shop = new Shop(goods)
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(50)
  })
})

describe('sulfurasUpdater', () => {
  test("the quality and sellIn of Sulfuras doesn't depreciate", () => {
    let item = new Item('Sulfuras', 10, 10)
    goods.push(item)
    let shop = new Shop(goods)
    shop.updateQuality()
    expect(shop.items[0].quality).toEqual(10)
    expect(shop.items[0].sellIn).toEqual(10)
  })
})