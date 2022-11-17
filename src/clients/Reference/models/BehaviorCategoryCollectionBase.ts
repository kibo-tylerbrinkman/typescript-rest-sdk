/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Reference Service
 * OpenAPI Spec for Kibo Reference Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BehaviorCategory } from './BehaviorCategory';
import {
    BehaviorCategoryFromJSON,
    BehaviorCategoryFromJSONTyped,
    BehaviorCategoryToJSON,
} from './BehaviorCategory';

/**
 * 
 * @export
 * @interface BehaviorCategoryCollectionBase
 */
export interface BehaviorCategoryCollectionBase {
    /**
     * 
     * @type {number}
     * @memberof BehaviorCategoryCollectionBase
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<BehaviorCategory>}
     * @memberof BehaviorCategoryCollectionBase
     */
    items?: Array<BehaviorCategory> | null;
}

/**
 * Check if a given object implements the BehaviorCategoryCollectionBase interface.
 */
export function instanceOfBehaviorCategoryCollectionBase(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BehaviorCategoryCollectionBaseFromJSON(json: any): BehaviorCategoryCollectionBase {
    return BehaviorCategoryCollectionBaseFromJSONTyped(json, false);
}

export function BehaviorCategoryCollectionBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BehaviorCategoryCollectionBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(BehaviorCategoryFromJSON)),
    };
}

export function BehaviorCategoryCollectionBaseToJSON(value?: BehaviorCategoryCollectionBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalCount': value.totalCount,
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(BehaviorCategoryToJSON)),
    };
}
