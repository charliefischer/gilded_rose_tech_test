const Item = require('./item')

class NonSpecialItem extends Item{
  updateQuality() {
    this.sellIn -= 1
    this.#qualityDepreciator()
  }
  
  #qualityDepreciator(){
    if (this.quality > 0 && this.sellIn >= 0) {
      this.quality -= 1
    } else if (this.quality > 1 && this.sellIn < 0){
      this.quality -= 2
    } else if (this.quality > 0 && this.sellIn < 0){
      this.quality -= 1
    }
  }
}

module.exports = NonSpecialItem