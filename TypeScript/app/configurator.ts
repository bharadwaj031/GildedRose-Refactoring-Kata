import { Products } from "./constants"
import { Item } from "./gilded-rose"
import { 
    ProductAgedBrie,
    ProductCommon,
    ProductBStage,
    ProductConjured,
    ProductSulfuras } from './productConfig'

/**
 * class ProductConfigurator 
 * Individual product configuration to be employed during specific case
 * All products extend the features of Common product configuration
 * 
 * method:  
 *  type: static
 *  description: static method to be called with the Class Name instead of new keyword
 *  return Product<Item>
 */

export class ProductConfigurator {
    static productConfiguration(item: Item): ProductCommon{
        if(item) {
            switch(item.name) {
                case Products.ProductAB:
                    return new ProductAgedBrie(item.name, item.quality, item.sellIn)
                case Products.ProductSulfuras:
                    return new ProductSulfuras(item.name, item.quality)
                case Products.ProductBStage:
                    return new ProductBStage(item.name, item.quality, item.sellIn)
                case Products.ProductConjured:
                    return new ProductConjured(item.name, item.quality, item.sellIn)
                default:
                    return new ProductCommon(item.name, item.quality, item.sellIn)
            }
        } else {
            return new ProductCommon("", null, null)
        }
    }
}