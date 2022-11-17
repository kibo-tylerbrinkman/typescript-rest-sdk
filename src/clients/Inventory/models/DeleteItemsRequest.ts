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
import type { Item } from './Item';
import {
    ItemFromJSON,
    ItemFromJSONTyped,
    ItemToJSON,
} from './Item';

/**
 * Request needed for deleting inventory
 * @export
 * @interface DeleteItemsRequest
 */
export interface DeleteItemsRequest {
    /**
     * Flag used to differentiate between a test and a non-test run.
     * @type {boolean}
     * @memberof DeleteItemsRequest
     */
    dryRun?: boolean;
    /**
     * Flag used to request explicit inventory, location, pick wave, and audit information for each request item.
     * @type {boolean}
     * @memberof DeleteItemsRequest
     */
    explicit?: boolean;
    /**
     * An array of locationCodes to be considered for item-deletion purposes. Optional.
     *     All locationCodes associated with the requesting tenant will be considered if no locationCodes are provided.
     * @type {Array<string>}
     * @memberof DeleteItemsRequest
     */
    locationCodes?: Array<string>;
    /**
     * Flag used to request deletion of inventory across all locations (overrides locationCodes).
     * @type {boolean}
     * @memberof DeleteItemsRequest
     */
    allLocations?: boolean;
    /**
     * List of items to delete. Supports basic regex operators: .*+?^$[]
     * @type {Array<Item>}
     * @memberof DeleteItemsRequest
     */
    items?: Array<Item>;
    /**
     * Associative Map of <String, String> for tagCategoryName => tagName
     * @type {{ [key: string]: string; }}
     * @memberof DeleteItemsRequest
     */
    tags?: { [key: string]: string; };
}

/**
 * Check if a given object implements the DeleteItemsRequest interface.
 */
export function instanceOfDeleteItemsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteItemsRequestFromJSON(json: any): DeleteItemsRequest {
    return DeleteItemsRequestFromJSONTyped(json, false);
}

export function DeleteItemsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteItemsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dryRun': !exists(json, 'dryRun') ? undefined : json['dryRun'],
        'explicit': !exists(json, 'explicit') ? undefined : json['explicit'],
        'locationCodes': !exists(json, 'locationCodes') ? undefined : json['locationCodes'],
        'allLocations': !exists(json, 'allLocations') ? undefined : json['allLocations'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(ItemFromJSON)),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function DeleteItemsRequestToJSON(value?: DeleteItemsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dryRun': value.dryRun,
        'explicit': value.explicit,
        'locationCodes': value.locationCodes,
        'allLocations': value.allLocations,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(ItemToJSON)),
        'tags': value.tags,
    };
}
