const Item = require('./item')

class BackstagePass extends Item {

  updateQuality() {
    this.sellIn -= 1
    if (this.sellIn >= 0) {
      this.#backstagePassStillValid()
    } else {
      this.#backstagePassExpired()
    }
  }

  #backstagePassExpired() {
    return this.quality = 0
  }

  #backstagePassStillValid() {
    if (this.sellIn < 5) {
      this.quality += 3
    } else if (this.sellIn < 10) {
      this.quality += 2
    } else {
      this.quality += 1
    } 
  }
}

module.exports = BackstagePass