/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MZDB Service
 * OpenAPI Spec for Kibo MZDB Service
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
 * @interface EntityCollection
 */
export interface EntityCollection {
    /**
     * 
     * @type {number}
     * @memberof EntityCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<any>}
     * @memberof EntityCollection
     */
    items?: Array<any> | null;
}

/**
 * Check if a given object implements the EntityCollection interface.
 */
export function instanceOfEntityCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EntityCollectionFromJSON(json: any): EntityCollection {
    return EntityCollectionFromJSONTyped(json, false);
}

export function EntityCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : json['items'],
    };
}

export function EntityCollectionToJSON(value?: EntityCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startIndex': value.startIndex,
        'pageSize': value.pageSize,
        'pageCount': value.pageCount,
        'totalCount': value.totalCount,
        'items': value.items,
    };
}
