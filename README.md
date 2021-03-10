# Gilded Rose

## The Task
"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items
Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

## My Approach
First things first I needed to refactor the code using TDD as it features up to 5 if statements inside each other. The best way to break this down is into a series of seperate functions that each deal with a specific item. This way it should be clearer to add in the new *conjured* items category.

## Planning
### Items
Items already in stock:
- [ ] "Aged Brie"
- [ ] "Sulfuras"
- [ ] "Backstage Passes"

Items to be added later:
- [ ] "Conjured"

### Depreciation
- [ ] max quality value is 50
- [ ] "Aged Brie" value increases
- [ ] "Sulfuras" does not depreciate
- [ ] "Backstage passes" increase by 1 when > 10 days left : increase by 2 when < 10 days : increase by 3 < 5 days : value of 0 when < 0 days
- [ ] "Conjured" items depreciate twice as fast as normal
- [ ] All other items depreciate by 1 per day

### Refactoring updateQuality()
```
First statement:
> if item is not brie, not backstage pass, not sulfras, item quality > 0
=> Item quality - 1

Else:
> if item quality < 50 
=> quality + 1 
> if item is a backstage pass, if item sellIn < 11, if quality < 50
  => quality + 1
  > if the sellIn < 6, if quality < 50
  => quality + 1

Second statement:
> if item is not a sulfra
=>  quality - 1

Third statement:
> if sellIn < 0, item is not brie, item is not backstage pass, quality > 0, item is not Sulfuras
=> quality - 1

Else:
=> quality = 0

Else:
> if item quality < 50
=> quality + 1
```

### Key Words
- 'Aged Brie'
- 'Sulfuras'
- 'Backstage pass'
- 'Conjured'
- anything else should have the default of -1 quality

### Classes
- Item. This should contain the details of a singular item (the name, the sellIn days, and the quality value)
- Shop. This should contain the array of items that are held in the shop. As well as currently updates the items to the new price at the end of the day
