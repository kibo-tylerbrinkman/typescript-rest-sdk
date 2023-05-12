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
import type { RefreshItem } from './RefreshItem';
import {
    RefreshItemFromJSON,
    RefreshItemFromJSONTyped,
    RefreshItemToJSON,
} from './RefreshItem';

/**
 * 
 * @export
 * @interface RefreshRequestAllOf
 */
export interface RefreshRequestAllOf {
    /**
     * List of items to refresh
     * @type {Array<RefreshItem>}
     * @memberof RefreshRequestAllOf
     */
    items?: Array<RefreshItem>;
}

/**
 * Check if a given object implements the RefreshRequestAllOf interface.
 */
export function instanceOfRefreshRequestAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RefreshRequestAllOfFromJSON(json: any): RefreshRequestAllOf {
    return RefreshRequestAllOfFromJSONTyped(json, false);
}

export function RefreshRequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefreshRequestAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(RefreshItemFromJSON)),
    };
}

export function RefreshRequestAllOfToJSON(value?: RefreshRequestAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(RefreshItemToJSON)),
    };
}

