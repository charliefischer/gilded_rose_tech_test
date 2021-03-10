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
  })


})

describe('updateSellIn', () => {
  test('it updates the sellIn of a non special item', () => {
    let item = new Item('pencils', 10, 10)
    goods.push(item)
    let shop = new Shop(goods)
    console.log(shop.items)
    shop.updateSellIn()
    expect(shop.items[0].sellIn).toEqual(9)
  })

  test('it updates the quality and sellIn of multiple non special items', () => {
    let item = new Item('pencils', 10, 10)
    let itemTwo = new Item('rubbers', 8, 8)
    goods.push(item)
    goods.push(itemTwo)
    let shop = new Shop(goods)
    shop.updateSellIn()
    expect(shop.items[0].sellIn).toEqual(9)
    expect(shop.items[1].sellIn).toEqual(7)
  })
})