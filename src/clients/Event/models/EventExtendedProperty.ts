/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Event Service
 * OpenAPI Spec for Kibo Event Service
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
 * Event Extended Property
 * @export
 * @interface EventExtendedProperty
 */
export interface EventExtendedProperty {
    /**
     * 
     * @type {string}
     * @memberof EventExtendedProperty
     */
    key?: string | null;
    /**
     * 
     * @type {any}
     * @memberof EventExtendedProperty
     */
    value?: any | null;
}

/**
 * Check if a given object implements the EventExtendedProperty interface.
 */
export function instanceOfEventExtendedProperty(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventExtendedPropertyFromJSON(json: any): EventExtendedProperty {
    return EventExtendedPropertyFromJSONTyped(json, false);
}

export function EventExtendedPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventExtendedProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function EventExtendedPropertyToJSON(value?: EventExtendedProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'value': value.value,
    };
}
