/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface CatalogAdminsProductImageGroupTag
 */
export interface CatalogAdminsProductImageGroupTag {
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsProductImageGroupTag
     */
    fqn: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogAdminsProductImageGroupTag
     */
    values?: Array<string> | null;
}

/**
 * Check if a given object implements the CatalogAdminsProductImageGroupTag interface.
 */
export function instanceOfCatalogAdminsProductImageGroupTag(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fqn" in value;

    return isInstance;
}

export function CatalogAdminsProductImageGroupTagFromJSON(json: any): CatalogAdminsProductImageGroupTag {
    return CatalogAdminsProductImageGroupTagFromJSONTyped(json, false);
}

export function CatalogAdminsProductImageGroupTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogAdminsProductImageGroupTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fqn': json['fqn'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function CatalogAdminsProductImageGroupTagToJSON(value?: CatalogAdminsProductImageGroupTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fqn': value.fqn,
        'values': value.values,
    };
}
