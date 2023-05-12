/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Storefront Service
 * OpenAPI Spec for Kibo Location Storefront Service
 *
 * The version of the OpenAPI document: v1_storefront
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
 * @interface TransferTime
 */
export interface TransferTime {
    /**
     * 
     * @type {string}
     * @memberof TransferTime
     */
    unit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof TransferTime
     */
    value?: number;
}

/**
 * Check if a given object implements the TransferTime interface.
 */
export function instanceOfTransferTime(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransferTimeFromJSON(json: any): TransferTime {
    return TransferTimeFromJSONTyped(json, false);
}

export function TransferTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferTime {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function TransferTimeToJSON(value?: TransferTime | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'unit': value.unit,
        'value': value.value,
    };
}

