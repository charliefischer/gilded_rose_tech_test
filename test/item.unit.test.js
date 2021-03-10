const { Shop, Item } = require("../src/gilded_rose");

test('Item creates a new item object', () => {
  let item = new Item('Parsnips', 10, 30)
  expect(item.name).toEqual('Parsnips')
  expect(item.sellIn).toEqual(10)
  expect(item.quality).toEqual(30)
})
