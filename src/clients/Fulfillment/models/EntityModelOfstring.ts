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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';

/**
 * 
 * @export
 * @interface EntityModelOfstring
 */
export interface EntityModelOfstring {
    /**
     * 
     * @type {Links}
     * @memberof EntityModelOfstring
     */
    links?: Links;
}

/**
 * Check if a given object implements the EntityModelOfstring interface.
 */
export function instanceOfEntityModelOfstring(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EntityModelOfstringFromJSON(json: any): EntityModelOfstring {
    return EntityModelOfstringFromJSONTyped(json, false);
}

export function EntityModelOfstringFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityModelOfstring {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : LinksFromJSON(json['_links']),
    };
}

export function EntityModelOfstringToJSON(value?: EntityModelOfstring | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': LinksToJSON(value.links),
    };
}
