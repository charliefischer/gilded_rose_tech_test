const AgedBrie = require("../src/agedBrie")

describe("Aged Brie", () => {
  test('updates the values of brie correctly', () => {
    let brie = new AgedBrie('AgedBrie', 10, 10)
    brie.updateQuality()
    
    expect(brie.quality).toEqual(11)
    expect(brie.sellIn).toEqual(9)
  })


  test('the quality of brie can not exceed 50', () => {
    let brie = new AgedBrie('AgedBrie', 10, 50)
    brie.updateQuality()

    expect(brie.quality).toEqual(50)
  })
})