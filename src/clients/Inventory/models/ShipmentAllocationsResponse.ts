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
import type { InventoryAllocationResponse } from './InventoryAllocationResponse';
import {
    InventoryAllocationResponseFromJSON,
    InventoryAllocationResponseFromJSONTyped,
    InventoryAllocationResponseToJSON,
} from './InventoryAllocationResponse';

/**
 * ShipmentAllocationsResponse Object
 * @export
 * @interface ShipmentAllocationsResponse
 */
export interface ShipmentAllocationsResponse {
    /**
     * List of InventoryAllocationResponse objects
     * @type {Array<InventoryAllocationResponse>}
     * @memberof ShipmentAllocationsResponse
     */
    currentAllocations?: Array<InventoryAllocationResponse>;
    /**
     * List of InventoryAllocationResponse objects
     * @type {Array<InventoryAllocationResponse>}
     * @memberof ShipmentAllocationsResponse
     */
    futureAllocations?: Array<InventoryAllocationResponse>;
}

/**
 * Check if a given object implements the ShipmentAllocationsResponse interface.
 */
export function instanceOfShipmentAllocationsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ShipmentAllocationsResponseFromJSON(json: any): ShipmentAllocationsResponse {
    return ShipmentAllocationsResponseFromJSONTyped(json, false);
}

export function ShipmentAllocationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShipmentAllocationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentAllocations': !exists(json, 'currentAllocations') ? undefined : ((json['currentAllocations'] as Array<any>).map(InventoryAllocationResponseFromJSON)),
        'futureAllocations': !exists(json, 'futureAllocations') ? undefined : ((json['futureAllocations'] as Array<any>).map(InventoryAllocationResponseFromJSON)),
    };
}

export function ShipmentAllocationsResponseToJSON(value?: ShipmentAllocationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currentAllocations': value.currentAllocations === undefined ? undefined : ((value.currentAllocations as Array<any>).map(InventoryAllocationResponseToJSON)),
        'futureAllocations': value.futureAllocations === undefined ? undefined : ((value.futureAllocations as Array<any>).map(InventoryAllocationResponseToJSON)),
    };
}
