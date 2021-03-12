const NonSpecialItem = require('../src/nonSpecialItem')

test('it updates the quality of a non special item', () => {
  let pencil = new NonSpecialItem('pencils', 10, 10)
  pencil.updateQuality()

  expect(pencil.quality).toEqual(9)
  expect(pencil.sellIn).toEqual(9)
})

test('the quality of an item cannot be less than 0', () => {
  let sausages = new NonSpecialItem('sausages', 2, 0)
  sausages.updateQuality()

  expect(sausages.quality).toEqual(0)
})

test('after the sellIn date quality depreciates twice as fast', () => {
  let cornedBeef = new NonSpecialItem('corned beef', -1, 2)
  cornedBeef.updateQuality()

  expect(cornedBeef.quality).toEqual(0)
})

test('the quality of an item cannot be less than 0 after sellIn date', () => {
  let scotchEgg = new NonSpecialItem('scotch egg', -5, 1)
  scotchEgg.updateQuality()

  expect(scotchEgg.quality).toEqual(0)
})