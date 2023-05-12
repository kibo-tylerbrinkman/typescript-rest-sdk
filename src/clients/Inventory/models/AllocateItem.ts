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
 * Item for Allocation
 * @export
 * @interface AllocateItem
 */
export interface AllocateItem {
    /**
     * part number
     * @type {string}
     * @memberof AllocateItem
     */
    partNumber?: string;
    /**
     * upc
     * @type {string}
     * @memberof AllocateItem
     */
    upc?: string;
    /**
     * sku
     * @type {string}
     * @memberof AllocateItem
     */
    sku?: string;
    /**
     * quantity
     * @type {number}
     * @memberof AllocateItem
     */
    quantity: number;
    /**
     * order ID
     * @type {number}
     * @memberof AllocateItem
     */
    orderID: number;
    /**
     * order item ID
     * @type {number}
     * @memberof AllocateItem
     */
    orderItemID: number;
    /**
     * Cart ID (GUID)
     * @type {string}
     * @memberof AllocateItem
     */
    cartID?: string;
    /**
     * Reservation ID
     * @type {string}
     * @memberof AllocateItem
     */
    reservationID?: string;
    /**
     * Cart Item ID (GUID)
     * @type {string}
     * @memberof AllocateItem
     */
    cartItemID?: string;
    /**
     * shipment ID
     * @type {number}
     * @memberof AllocateItem
     */
    shipmentID: number;
    /**
     * location Code
     * @type {string}
     * @memberof AllocateItem
     */
    locationCode?: string;
    /**
     * previous order item ID
     * @type {number}
     * @memberof AllocateItem
     */
    previousOrderItemID?: number;
    /**
     * Bin Location Identifier
     * @type {number}
     * @memberof AllocateItem
     */
    binID?: number;
    /**
     * Block assignment of item at product/location level. ONLY allowed on deallocate.
     * @type {boolean}
     * @memberof AllocateItem
     */
    blockAssignment?: boolean;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof AllocateItem
     */
    tags?: { [key: string]: string; };
    /**
     * Future Date at which the inventory should be allocated against. Expected format '2020-09-28T12:00:00-0500'
     * @type {Date}
     * @memberof AllocateItem
     */
    futureDate?: Date;
}

/**
 * Check if a given object implements the AllocateItem interface.
 */
export function instanceOfAllocateItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "quantity" in value;
    isInstance = isInstance && "orderID" in value;
    isInstance = isInstance && "orderItemID" in value;
    isInstance = isInstance && "shipmentID" in value;

    return isInstance;
}

export function AllocateItemFromJSON(json: any): AllocateItem {
    return AllocateItemFromJSONTyped(json, false);
}

export function AllocateItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AllocateItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'quantity': json['quantity'],
        'orderID': json['orderID'],
        'orderItemID': json['orderItemID'],
        'cartID': !exists(json, 'cartID') ? undefined : json['cartID'],
        'reservationID': !exists(json, 'reservationID') ? undefined : json['reservationID'],
        'cartItemID': !exists(json, 'cartItemID') ? undefined : json['cartItemID'],
        'shipmentID': json['shipmentID'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'previousOrderItemID': !exists(json, 'previousOrderItemID') ? undefined : json['previousOrderItemID'],
        'binID': !exists(json, 'binID') ? undefined : json['binID'],
        'blockAssignment': !exists(json, 'blockAssignment') ? undefined : json['blockAssignment'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'futureDate': !exists(json, 'futureDate') ? undefined : json['futureDate'],
    };
}

export function AllocateItemToJSON(value?: AllocateItem | null): any {
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
        'orderID': value.orderID,
        'orderItemID': value.orderItemID,
        'cartID': value.cartID,
        'reservationID': value.reservationID,
        'cartItemID': value.cartItemID,
        'shipmentID': value.shipmentID,
        'locationCode': value.locationCode,
        'previousOrderItemID': value.previousOrderItemID,
        'binID': value.binID,
        'blockAssignment': value.blockAssignment,
        'tags': value.tags,
        'futureDate': value.futureDate,
    };
}

