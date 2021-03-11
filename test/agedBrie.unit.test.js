const { 
  AgedBrie } = require("../src/gilded_rose")

describe("Aged Brie", () => {
  test('updates the values of brie correctly', () => {
    const mockItem = jest.fn()
    mockItem.name = 'AgedBrie'
    mockItem.quality = 10
    mockItem.sellIn = 10
    new AgedBrie(mockItem)

    expect(mockItem.quality).toEqual(11)
    expect(mockItem.sellIn).toEqual(9)
  })


  test('the quality of brie can not exceed 50', () => {
    const mockItem = jest.fn()
    mockItem.name = 'AgedBrie'
    mockItem.quality = 50
    mockItem.sellIn = 10
    new AgedBrie(mockItem)

    expect(mockItem.quality).toEqual(50)
  })
})