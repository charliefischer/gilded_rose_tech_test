const {
  Conjured
} = require('../src/gilded_rose')

describe('conjuredUpdater', () => {
  const mockItem = jest.fn()
  mockItem.name = 'Conjured'
    
  test('conjured items depreciate twice as fast as normal', () => {
    mockItem.quality = 10
    mockItem.sellIn = 10
    new Conjured(mockItem)

    expect(mockItem.sellIn).toEqual(9)
    expect(mockItem.quality).toEqual(8)
  })

  test('conjured items quality can not fall below 0', () => {
    mockItem.quality = 0
    mockItem.sellIn = 10
    new Conjured(mockItem)

    expect(mockItem.quality).toEqual(0)
  })

  test('conjured items depreciate twice as fast as normal even after sellIn is less than 0', () => {
    mockItem.quality = 10
    mockItem.sellIn = -3
    new Conjured(mockItem)

    expect(mockItem.quality).toEqual(6)
  })
})