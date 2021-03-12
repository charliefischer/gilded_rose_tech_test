const Sulfuras = require('../src/sulfuras')

describe('Sulfuras', () => {
  test("the quality and sellIn of Sulfuras doesn't depreciate", () => {
    let sulf = new Sulfuras('Sulfuras', 10, 10)
    sulf.updateQuality()

    expect(sulf.quality).toEqual(10)
    expect(sulf.sellIn).toEqual(10)
  })
})