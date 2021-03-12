const Shop = require("../src/gilded_rose");
const AgedBrie = jest.createMockFromModule('../src/agedBrie')
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

  test('can update items accordingly', () => {
    mockItem = new AgedBrie()
    const spy = jest.spyOn(mockItem, 'updateQuality')
    arr = [mockItem]
    let shop = new Shop(arr)
    shop.updateQuality()

    expect(spy).toHaveBeenCalled()
  })
})





