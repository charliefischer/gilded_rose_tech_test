const Item = require('./item')

class AgedBrie extends Item{
  updateQuality() {
    this.sellIn--
    if (this.quality < 50) {
      this.quality += 1
    }
  }
} 

module.exports = AgedBrie