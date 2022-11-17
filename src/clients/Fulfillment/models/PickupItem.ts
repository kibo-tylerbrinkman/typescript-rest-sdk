/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
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
 * @interface PickupItem
 */
export interface PickupItem {
    /**
     * 
     * @type {number}
     * @memberof PickupItem
     */
    lineId: number;
    /**
     * 
     * @type {number}
     * @memberof PickupItem
     */
    quantity: number;
}

/**
 * Check if a given object implements the PickupItem interface.
 */
export function instanceOfPickupItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lineId" in value;
    isInstance = isInstance && "quantity" in value;

    return isInstance;
}

export function PickupItemFromJSON(json: any): PickupItem {
    return PickupItemFromJSONTyped(json, false);
}

export function PickupItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickupItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lineId': json['lineId'],
        'quantity': json['quantity'],
    };
}

export function PickupItemToJSON(value?: PickupItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lineId': value.lineId,
        'quantity': value.quantity,
    };
}
