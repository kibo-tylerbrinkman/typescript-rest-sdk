/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BundledProductSummary } from './BundledProductSummary';
import {
    BundledProductSummaryFromJSON,
    BundledProductSummaryFromJSONTyped,
    BundledProductSummaryToJSON,
} from './BundledProductSummary';
import type { Category } from './Category';
import {
    CategoryFromJSON,
    CategoryFromJSONTyped,
    CategoryToJSON,
} from './Category';
import type { PackageMeasurements } from './PackageMeasurements';
import {
    PackageMeasurementsFromJSON,
    PackageMeasurementsFromJSONTyped,
    PackageMeasurementsToJSON,
} from './PackageMeasurements';
import type { ProductImage } from './ProductImage';
import {
    ProductImageFromJSON,
    ProductImageFromJSONTyped,
    ProductImageToJSON,
} from './ProductImage';
import type { ProductInventoryInfo } from './ProductInventoryInfo';
import {
    ProductInventoryInfoFromJSON,
    ProductInventoryInfoFromJSONTyped,
    ProductInventoryInfoToJSON,
} from './ProductInventoryInfo';
import type { ProductPrice } from './ProductPrice';
import {
    ProductPriceFromJSON,
    ProductPriceFromJSONTyped,
    ProductPriceToJSON,
} from './ProductPrice';
import type { ProductPricingBehaviorInfo } from './ProductPricingBehaviorInfo';
import {
    ProductPricingBehaviorInfoFromJSON,
    ProductPricingBehaviorInfoFromJSONTyped,
    ProductPricingBehaviorInfoToJSON,
} from './ProductPricingBehaviorInfo';
import type { ProductProperty } from './ProductProperty';
import {
    ProductPropertyFromJSON,
    ProductPropertyFromJSONTyped,
    ProductPropertyToJSON,
} from './ProductProperty';
import type { ProductPurchasableState } from './ProductPurchasableState';
import {
    ProductPurchasableStateFromJSON,
    ProductPurchasableStateFromJSONTyped,
    ProductPurchasableStateToJSON,
} from './ProductPurchasableState';

/**
 * 
 * @export
 * @interface ProductValidationSummary
 */
export interface ProductValidationSummary {
    /**
     * Merchant-created code associated with the product, for example, a SKU.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    productCode?: string | null;
    /**
     * The location where the product is being purchased.. default is null. Products can have different prices
     * by purchaseLocation via custom priceListResolution....
     * @type {string}
     * @memberof ProductValidationSummary
     */
    purchaseLocation?: string | null;
    /**
     * The UsageType of this product (Standard, Configurable, Bundle, Component)
     * @type {string}
     * @memberof ProductValidationSummary
     */
    productUsage?: string | null;
    /**
     * Indicates the fulfillment types the product supports.
     * @type {Array<string>}
     * @memberof ProductValidationSummary
     */
    fulfillmentTypesSupported?: Array<string> | null;
    /**
     * The GoodsType of the product (Physical, Digital, DigitalCredit....)
     * @type {string}
     * @memberof ProductValidationSummary
     */
    goodsType?: string | null;
    /**
     * The list of Bundled products included in this product. This is only populated when ProductUsage=Bundle
     * @type {Array<BundledProductSummary>}
     * @memberof ProductValidationSummary
     */
    bundledProducts?: Array<BundledProductSummary> | null;
    /**
     * UPC code of the product.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    upc?: string | null;
    /**
     * Manufacturer part number.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    mfgPartNumber?: string | null;
    /**
     * For a product with options, the code of the product variation that represents the current selection of product options.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {ProductPurchasableState}
     * @memberof ProductValidationSummary
     */
    purchasableState?: ProductPurchasableState;
    /**
     * 
     * @type {ProductPrice}
     * @memberof ProductValidationSummary
     */
    price?: ProductPrice;
    /**
     * 
     * @type {PackageMeasurements}
     * @memberof ProductValidationSummary
     */
    measurements?: PackageMeasurements;
    /**
     * Is this product shipped in its own package
     * @type {boolean}
     * @memberof ProductValidationSummary
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {ProductImage}
     * @memberof ProductValidationSummary
     */
    image?: ProductImage;
    /**
     * Brief description of the product typically used when the product is displayed in a list or search results.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    productShortDescription?: string | null;
    /**
     * Name of the product.
     * @type {string}
     * @memberof ProductValidationSummary
     */
    productName?: string | null;
    /**
     * Categories to which the product belongs.
     * @type {Array<Category>}
     * @memberof ProductValidationSummary
     */
    categories?: Array<Category> | null;
    /**
     * List of product Properties.
     * @type {Array<ProductProperty>}
     * @memberof ProductValidationSummary
     */
    properties?: Array<ProductProperty> | null;
    /**
     * 
     * @type {ProductPricingBehaviorInfo}
     * @memberof ProductValidationSummary
     */
    pricingBehavior?: ProductPricingBehaviorInfo;
    /**
     * 
     * @type {ProductInventoryInfo}
     * @memberof ProductValidationSummary
     */
    inventoryInfo?: ProductInventoryInfo;
    /**
     * If true, the product listed on the live order is subject to tax.
     * @type {boolean}
     * @memberof ProductValidationSummary
     */
    isTaxable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductValidationSummary
     */
    productType?: string | null;
}

/**
 * Check if a given object implements the ProductValidationSummary interface.
 */
export function instanceOfProductValidationSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductValidationSummaryFromJSON(json: any): ProductValidationSummary {
    return ProductValidationSummaryFromJSONTyped(json, false);
}

export function ProductValidationSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductValidationSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'purchaseLocation': !exists(json, 'purchaseLocation') ? undefined : json['purchaseLocation'],
        'productUsage': !exists(json, 'productUsage') ? undefined : json['productUsage'],
        'fulfillmentTypesSupported': !exists(json, 'fulfillmentTypesSupported') ? undefined : json['fulfillmentTypesSupported'],
        'goodsType': !exists(json, 'goodsType') ? undefined : json['goodsType'],
        'bundledProducts': !exists(json, 'bundledProducts') ? undefined : (json['bundledProducts'] === null ? null : (json['bundledProducts'] as Array<any>).map(BundledProductSummaryFromJSON)),
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'mfgPartNumber': !exists(json, 'mfgPartNumber') ? undefined : json['mfgPartNumber'],
        'variationProductCode': !exists(json, 'variationProductCode') ? undefined : json['variationProductCode'],
        'purchasableState': !exists(json, 'purchasableState') ? undefined : ProductPurchasableStateFromJSON(json['purchasableState']),
        'price': !exists(json, 'price') ? undefined : ProductPriceFromJSON(json['price']),
        'measurements': !exists(json, 'measurements') ? undefined : PackageMeasurementsFromJSON(json['measurements']),
        'isPackagedStandAlone': !exists(json, 'isPackagedStandAlone') ? undefined : json['isPackagedStandAlone'],
        'image': !exists(json, 'image') ? undefined : ProductImageFromJSON(json['image']),
        'productShortDescription': !exists(json, 'productShortDescription') ? undefined : json['productShortDescription'],
        'productName': !exists(json, 'productName') ? undefined : json['productName'],
        'categories': !exists(json, 'categories') ? undefined : (json['categories'] === null ? null : (json['categories'] as Array<any>).map(CategoryFromJSON)),
        'properties': !exists(json, 'properties') ? undefined : (json['properties'] === null ? null : (json['properties'] as Array<any>).map(ProductPropertyFromJSON)),
        'pricingBehavior': !exists(json, 'pricingBehavior') ? undefined : ProductPricingBehaviorInfoFromJSON(json['pricingBehavior']),
        'inventoryInfo': !exists(json, 'inventoryInfo') ? undefined : ProductInventoryInfoFromJSON(json['inventoryInfo']),
        'isTaxable': !exists(json, 'isTaxable') ? undefined : json['isTaxable'],
        'productType': !exists(json, 'productType') ? undefined : json['productType'],
    };
}

export function ProductValidationSummaryToJSON(value?: ProductValidationSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'purchaseLocation': value.purchaseLocation,
        'productUsage': value.productUsage,
        'fulfillmentTypesSupported': value.fulfillmentTypesSupported,
        'goodsType': value.goodsType,
        'bundledProducts': value.bundledProducts === undefined ? undefined : (value.bundledProducts === null ? null : (value.bundledProducts as Array<any>).map(BundledProductSummaryToJSON)),
        'upc': value.upc,
        'mfgPartNumber': value.mfgPartNumber,
        'variationProductCode': value.variationProductCode,
        'purchasableState': ProductPurchasableStateToJSON(value.purchasableState),
        'price': ProductPriceToJSON(value.price),
        'measurements': PackageMeasurementsToJSON(value.measurements),
        'isPackagedStandAlone': value.isPackagedStandAlone,
        'image': ProductImageToJSON(value.image),
        'productShortDescription': value.productShortDescription,
        'productName': value.productName,
        'categories': value.categories === undefined ? undefined : (value.categories === null ? null : (value.categories as Array<any>).map(CategoryToJSON)),
        'properties': value.properties === undefined ? undefined : (value.properties === null ? null : (value.properties as Array<any>).map(ProductPropertyToJSON)),
        'pricingBehavior': ProductPricingBehaviorInfoToJSON(value.pricingBehavior),
        'inventoryInfo': ProductInventoryInfoToJSON(value.inventoryInfo),
        'isTaxable': value.isTaxable,
        'productType': value.productType,
    };
}
