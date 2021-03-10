class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality(){
    for (let i = 0; i < this.items.length; i++){
      let itemCategory = this.items[i].name
      switch(true) {
        case (itemCategory.includes('Aged Brie')):
          return this.#brieUpdater(this.items[i]);
        case (itemCategory.includes('Sulfuras')):
          return this.#sulfurasUpdater(this.items[i]);
        case (itemCategory.includes('Backstage passes')):
          return this.#backstagePassUpdater(this.items[i]);
        case (itemCategory.includes('Conjured')):
          return this.#conjuredUpdater(this.items[i])
        default:
          this.#otherItemsUpdater(this.items[i])
      }
    }
    return this.items
  }

  #otherItemsUpdater(item) {
    item.sellIn -= 1
    this.#qualityDepreciator(item)
  }

  #brieUpdater(item) {
    item.sellIn -= 1
    if (item.quality < 50) {
      item.quality += 1
    }
  }

  #sulfurasUpdater(item) {
    return item
  }

  #backstagePassUpdater(item) {
    item.sellIn -= 1
    if (item.sellIn >= 0) {
      this.#backstagePassStillValid(item)
    } else {
      this.#backstagePassExpired(item)
    }
  }

  #qualityDepreciator(item){
    if (item.quality > 0 && item.sellIn >= 0) {
      item.quality -= 1
    } else if (item.quality > 1 && item.sellIn < 0){
      item.quality -= 2
    } else if (item.quality > 0 && item.sellIn < 0){
      item.quality -= 1
    }
  }

  #backstagePassExpired(item) {
      return item.quality = 0
  }

  #backstagePassStillValid(item) {
    if (item.sellIn < 5) {
      item.quality += 3
    } else if (item.sellIn > 10) {
      item.quality += 1
    } else {
      item.quality += 2
    } 
  }

  #conjuredUpdater(item) {
    item.sellIn -= 1
    item.quality -= 2
  }
}

module.exports = {
  Item,
  Shop
}
