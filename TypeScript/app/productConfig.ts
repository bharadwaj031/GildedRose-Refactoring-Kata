import { Item } from "./gilded-rose"

export class ProductCommon {
    sellIn: number | null
    quality: number | null
    name: string

    sellInValue = -1
    qualityValue = -1
    constructor(name: string, sellIn: number | null, quality: number | null = 80) {
        this.name = name
        this.quality = quality
        this.sellIn = sellIn
    }

    changeQualityValue() {
        if (this.sellIn && this.sellIn <= 0) {
            this.qualityValue=-2
        }
    }

    manageQuality() {
        if (this.quality && this.quality > 50) {
            this.quality = 50
        }
        if (this.quality && this.quality < 0) {
            this.quality = 0
        }
    }

    isValid(): boolean {
        return Boolean(this.name) && this.quality !== null && typeof this.sellIn !== null
    }

    configure(): Item | boolean {
        if (!this.isValid()) {
            return false
        }
        let item = {} as Item
        this.changeQualityValue()        
        this.quality = this.quality ? this.quality + this.qualityValue : null
        this.sellIn = this.sellIn ? this.sellIn + this.sellInValue: null
        this.manageQuality()
        item = {
            name: this.name,
            quality: this.quality,
            sellIn: this.sellIn
        } as Item
        return item
    }
}

export class ProductAgedBrie extends ProductCommon {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }
    changeQualityValue() {
        if (this.sellIn && this.sellIn > 0) {
            this.qualityValue = 1
        } else {
            this.qualityValue = 2
        }
    }
}

export class ProductBStage extends ProductCommon {
    constructor(name: string, quality: number, sellIn: number) {
        super(name, sellIn, quality)
    }

    changeQualityValue() {
        if (this.sellIn && this.sellIn <= 0) {
            this.qualityValue = 0
            this.quality = 0
        } else if (this.sellIn && this.sellIn <= 5) {
            this.qualityValue = 3
        } else if (this.sellIn && this.sellIn <= 10) {
            this.qualityValue = 2
        } else {
            this.qualityValue = 1
        }
    }
}

export class ProductConjured extends ProductCommon {
    constructor(name: string, quality: number, sellIn: number) {
        super(name, quality, sellIn)
    }

    changeQualityValue() {
        this.qualityValue=-2
    }
}

export class ProductSulfuras extends ProductCommon {
    constructor(name: string, sellIn: number) {
        super(name, sellIn)
    }

    changeQualityValue() {
        this.qualityValue = 0
    }
}