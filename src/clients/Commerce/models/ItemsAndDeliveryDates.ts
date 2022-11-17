/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ItemsAndDeliveryDates
 */
export interface ItemsAndDeliveryDates {
    /**
     * 
     * @type {Date}
     * @memberof ItemsAndDeliveryDates
     */
    deliveryDate?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof ItemsAndDeliveryDates
     */
    itemIds?: Array<string> | null;
}

/**
 * Check if a given object implements the ItemsAndDeliveryDates interface.
 */
export function instanceOfItemsAndDeliveryDates(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemsAndDeliveryDatesFromJSON(json: any): ItemsAndDeliveryDates {
    return ItemsAndDeliveryDatesFromJSONTyped(json, false);
}

export function ItemsAndDeliveryDatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemsAndDeliveryDates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deliveryDate': !exists(json, 'deliveryDate') ? undefined : (new Date(json['deliveryDate'])),
        'itemIds': !exists(json, 'itemIds') ? undefined : json['itemIds'],
    };
}

export function ItemsAndDeliveryDatesToJSON(value?: ItemsAndDeliveryDates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deliveryDate': value.deliveryDate === undefined ? undefined : (value.deliveryDate.toISOString()),
        'itemIds': value.itemIds,
    };
}
