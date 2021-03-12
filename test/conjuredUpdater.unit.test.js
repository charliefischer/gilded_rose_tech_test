const Conjured = require('../src/conjured')

describe('conjuredUpdater', () => {
    
  test('conjured items depreciate twice as fast as normal', () => {
    let conj = new Conjured('Conjured', 10, 10)
    conj.updateQuality()

    expect(conj.sellIn).toEqual(9)
    expect(conj.quality).toEqual(8)
  })

  test('conjured items quality can not fall below 0', () => {
    let conj = new Conjured('Conjured', 10, 0)
    conj.updateQuality()

    expect(conj.quality).toEqual(0)
  })

  test('conjured items depreciate twice as fast as normal even after sellIn is less than 0', () => {
    let conj = new Conjured('Conjured', -3, 10)
    conj.updateQuality()

    expect(conj.quality).toEqual(6)
  })
})