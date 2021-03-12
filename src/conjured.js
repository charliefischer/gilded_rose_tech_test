const Item = require('./item')

class Conjured extends Item {
  updateQuality() {
    this.sellIn--
    this.quality -= 2
    if(this.sellIn < 0) {
      this.quality -= 2
    }
    if(this.quality <= 0) {
      this.quality = 0
    } 
  }
}

module.exports = Conjured