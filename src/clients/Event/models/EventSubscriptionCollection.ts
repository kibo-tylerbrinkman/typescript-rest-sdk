/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Event Service
 * OpenAPI Spec for Kibo Event Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EventSubscription } from './EventSubscription';
import {
    EventSubscriptionFromJSON,
    EventSubscriptionFromJSONTyped,
    EventSubscriptionToJSON,
} from './EventSubscription';

/**
 * Collection of subscriptions returned as a whole.
 * @export
 * @interface EventSubscriptionCollection
 */
export interface EventSubscriptionCollection {
    /**
     * 
     * @type {number}
     * @memberof EventSubscriptionCollection
     */
    startIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof EventSubscriptionCollection
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof EventSubscriptionCollection
     */
    pageCount?: number;
    /**
     * 
     * @type {number}
     * @memberof EventSubscriptionCollection
     */
    totalCount?: number;
    /**
     * 
     * @type {Array<EventSubscription>}
     * @memberof EventSubscriptionCollection
     */
    items?: Array<EventSubscription> | null;
}

/**
 * Check if a given object implements the EventSubscriptionCollection interface.
 */
export function instanceOfEventSubscriptionCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventSubscriptionCollectionFromJSON(json: any): EventSubscriptionCollection {
    return EventSubscriptionCollectionFromJSONTyped(json, false);
}

export function EventSubscriptionCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventSubscriptionCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startIndex': !exists(json, 'startIndex') ? undefined : json['startIndex'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageCount': !exists(json, 'pageCount') ? undefined : json['pageCount'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(EventSubscriptionFromJSON)),
    };
}

export function EventSubscriptionCollectionToJSON(value?: EventSubscriptionCollection | null): any {
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
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(EventSubscriptionToJSON)),
    };
}
