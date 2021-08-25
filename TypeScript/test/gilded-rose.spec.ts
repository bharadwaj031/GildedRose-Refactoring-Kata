import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
import './golden-master-text-test'

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('should check empty product array', function() {
        const gildedRose = new GildedRose([]);
        const items = gildedRose.updateQuality();
        expect(items.length).to.be.equal(0)
    });

    it('should check all products', function() {
        const gildedRose = new GildedRose([
            new Item("+5 Dexterity Vest", 10, 20), //
            new Item("Aged Brie", 2, 0), //
            new Item("Elixir of the Mongoose", 5, 7), //
            new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
            // this conjured item does not work properly yet
            new Item("Conjured Mana Cake", 3, 6),
            new Item("Conjured", 3, 8), null as unknown as Item, 
            new Item("Aged Brie", -2, -1)]);
        const items = gildedRose.updateQuality();
        console.log(items)
        expect(items[0].name).to.equal('+5 Dexterity Vest');
    });

});
