const BackstagePass = require('../src/backstagePass')

describe('backstagePassUpdater', () => {
  test('the quality goes up by 1 if sellIn is more than 10', () => {
    let bp = new BackstagePass('Backstage passes', 25, 20)
    bp.updateQuality()

    expect(bp.quality).toEqual(21)
  })

  test('the quality goes up by 2 if sellIn is less than 10', () => {
    let bp = new BackstagePass('Backstage passes', 9, 10)
    bp.updateQuality()

    expect(bp.quality).toEqual(12)
  })

  test('the quality goes up by 3 if sellIn is less than 5', () => {
    let bp = new BackstagePass('Backstage passes', 4, 10)
    bp.updateQuality()

    expect(bp.quality).toEqual(13)
  })

  test('the quality drops to 0 if the sellIn is -1', () => {
    let bp = new BackstagePass('Backstage passes', 0, 10)
    bp.updateQuality()

    expect(bp.quality).toEqual(0)
  })
})