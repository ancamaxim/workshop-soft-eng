export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (var elem of this.items) {
          if (elem.name == 'Aged Brie') {
            if (elem.quality < 50 && elem.sellIn >= 0)
              elem.quality++
            else if (elem.quality < 49 && elem.sellIn < 0)
              elem.quality += 2

          } else if (elem.name == 'Backstage passes to a TAFKAL80ETC concert') {

            if (elem.sellIn < 0)
              elem.quality = 0;
            else if (elem.quality < 48 && elem.sellIn <= 5)
              elem.quality += 3
            else if (elem.quality < 49 && elem.sellIn <= 10)
              elem.quality += 2
            else if (elem.quality < 50)
              elem.quality++

          } else if (elem.name == 'Sulfuras, Hand of Ragnaros') {
            continue
          } else if (elem.name == 'Conjured Mana Cake') {
            if (elem.sellIn >= 0 && elem.quality > 1)
              elem.quality -= 2
            else if (elem.sellIn < 0 && elem.quality > 3)
              elem.quality -= 4

          } else {
            if (elem.sellIn >= 0 && elem.quality > 0)
              elem.quality--
            else if (elem.sellIn < 0 && elem.quality > 1)
              elem.quality -= 2
          }
          elem.sellIn--;
        }

        return this.items;
    }
}
