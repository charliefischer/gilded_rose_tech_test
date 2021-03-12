const Shop = require("../src/gilded_rose");

describe('Shop', () => {
  test('initializes with out any items', () => {
    let shop = new Shop()
    expect(shop.items).toEqual([])
  })

  test('can store items', () => {
    const mockItems = jest.fn(() => ['Elastic Bands', 'Pencil Sharpener'])

    let shop = new Shop(mockItems())
    expect(shop.items).toEqual(mockItems())
  })
})





