import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('should foo', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].name).toBe('foo');
    });

    it('sword quality drops by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

  it('Aged Brie should increase by 1', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(21);
  })

  it('Aged Brie should increase by 2', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Aged Brie', -1, 30)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(32);
  })

  it('Sulfuras should stay constant', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(80);
  })

  it('Conjured should decrease by 4', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', -1, 10)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(6);
  })

  it('Backstage should increase by 1', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(50);
  })

  it('Backstage should increase by 1', () => {
    // Arrange
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);

    // Act
    const items = gildedRose.updateQuality();

    // Assert
    expect(items[0].quality).toBe(50);
  })

});
