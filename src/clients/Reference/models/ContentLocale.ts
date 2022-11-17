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
/**
 * 
 * @export
 * @interface ContentLocale
 */
export interface ContentLocale {
    /**
     * 
     * @type {string}
     * @memberof ContentLocale
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContentLocale
     */
    name?: string | null;
}

/**
 * Check if a given object implements the ContentLocale interface.
 */
export function instanceOfContentLocale(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContentLocaleFromJSON(json: any): ContentLocale {
    return ContentLocaleFromJSONTyped(json, false);
}

export function ContentLocaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentLocale {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ContentLocaleToJSON(value?: ContentLocale | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
    };
}
