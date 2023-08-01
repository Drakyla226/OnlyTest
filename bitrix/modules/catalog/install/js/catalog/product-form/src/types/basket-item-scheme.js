import {DiscountTypes} from "catalog.product-calculator";

export type BasketItemScheme = {
	innerId: string,
	productId?: number,
	skuId?: number,
	type?: number,
	code?: string | number,
	module?: string,
	sort: number,
	price: number,
	basePrice: number,
	priceExclusive: number,
	showedPrice: number,
	quantity: number,
	name: string,
	discount: number,
	discountRate: number,
	discountType: DiscountTypes,
	tax: number,
	taxSum: number,
	taxIncluded: 'Y' | 'N',
	measureCode: number,
	measureName: string,
	measureRatio: number,
	isCustomPrice: 'Y' | 'N',
	additionalFields: Array<any>,
	properties: Array<any>,
	brands: Array<any>,
	morePhoto?: object,
}
