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
          return new AgedBrie(this.items[i])
        case (itemCategory.includes('Sulfuras')):
          return new Sulfuras(this.items[i])
        case (itemCategory.includes('Backstage passes')):
          let bp = new BackstagePass(this.items[i])
          return bp.backstagePassUpdater();
        case (itemCategory.includes('Conjured')):
          return new Conjured(this.items[i])
        default:
          this.#otherItemsUpdater(this.items[i]);
      }
    }
    return this.items
  }

  #otherItemsUpdater(item) {
    item.sellIn -= 1
    this.#qualityDepreciator(item)
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
}

class AgedBrie {
  constructor(item) {
    this.item = item
    this.brieUpdater()
  }

  brieUpdater() {
    this.item.sellIn -= 1
    if (this.item.quality < 50) {
      this.item.quality += 1
    }
  }
}

class BackstagePass {
  constructor(item) {
    this.item = item 
  }

  backstagePassUpdater() {
    this.item.sellIn -= 1
    if (this.item.sellIn >= 0) {
      this.#backstagePassStillValid()
    } else {
      this.#backstagePassExpired()
    }
  }

  #backstagePassExpired() {
    return this.item.quality = 0
  }

  #backstagePassStillValid() {
    if (this.item.sellIn < 5) {
      this.item.quality += 3
    } else if (this.item.sellIn < 10) {
      this.item.quality += 2
    } else {
      this.item.quality += 1
    } 
  }

}

class Sulfuras {
  constructor(item){
    return item
  }
}

class Conjured {
  constructor(item){
    this.item = item
    this.#conjuredUpdater()
  }
  #conjuredUpdater() {
    this.item.sellIn -= 1
    this.item.quality -= 2
    if(this.item.sellIn < 0) {
      this.item.quality -= 2
    }
    if(this.item.quality <= 0) {
      this.item.quality = 0
    } 
  }
}

module.exports = {
  Item,
  Shop,
  AgedBrie
}
