/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Item Quantity Model
 * @export
 * @interface ItemQuantity
 */
export interface ItemQuantity {
    /**
     * Part/Product Number
     * @type {string}
     * @memberof ItemQuantity
     */
    partNumber?: string;
    /**
     * Universal Product Code
     * @type {string}
     * @memberof ItemQuantity
     */
    upc?: string;
    /**
     * Stock Keeping Unit
     * @type {string}
     * @memberof ItemQuantity
     */
    sku?: string;
    /**
     * Quantity
     * @type {number}
     * @memberof ItemQuantity
     */
    quantity?: number;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof ItemQuantity
     */
    tags?: { [key: string]: string; };
}

/**
 * Check if a given object implements the ItemQuantity interface.
 */
export function instanceOfItemQuantity(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemQuantityFromJSON(json: any): ItemQuantity {
    return ItemQuantityFromJSONTyped(json, false);
}

export function ItemQuantityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemQuantity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function ItemQuantityToJSON(value?: ItemQuantity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'partNumber': value.partNumber,
        'upc': value.upc,
        'sku': value.sku,
        'quantity': value.quantity,
        'tags': value.tags,
    };
}

