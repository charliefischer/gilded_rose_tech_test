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
      if(this.items[i].name.includes('Aged Brie')){
        this.#brieUpdater(this.items[i])
      } else if (this.items[i].name.includes('Sulfuras')) {
        this.#sulfurasUpdater(this.items[i])
      } else if (this.items[i].name.includes('Backstage Passes')) {
        this.#backstagePassUpdater(this.items[i])
      } else {
        this.#otherItemsUpdater(this.items[i])
      }
    }
  }

  #otherItemsUpdater(item) {
    this.#qualityDepreciator(item)
    item.sellIn -= 1
  }

  #brieUpdater(item) {
    if (item.quality < 50) {
      item.quality += 1
    }
    item.sellIn -= 1
  }

  #sulfurasUpdater(item) {
    return item
  }

  #backstagePassUpdater(item) {
    if (item.sellIn <= 0) {
     return item.quality = 0
    }
    if (item.sellIn > 10) {
      item.quality += 1
    } else {
      item.quality += 2
    } 
    item.sellIn -= 1
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








  // updateQuality() {
  //   for (let i = 0; i < this.items.length; i++) {
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.items[i].quality = this.items[i].quality - 1;
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1;
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1;
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }
}

module.exports = {
  Item,
  Shop
}
