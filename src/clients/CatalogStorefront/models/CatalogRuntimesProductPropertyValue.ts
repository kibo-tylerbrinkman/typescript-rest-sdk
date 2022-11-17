/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CatalogRuntimesAttributeVocabularyValueDisplayInfo } from './CatalogRuntimesAttributeVocabularyValueDisplayInfo';
import {
    CatalogRuntimesAttributeVocabularyValueDisplayInfoFromJSON,
    CatalogRuntimesAttributeVocabularyValueDisplayInfoFromJSONTyped,
    CatalogRuntimesAttributeVocabularyValueDisplayInfoToJSON,
} from './CatalogRuntimesAttributeVocabularyValueDisplayInfo';

/**
 * Value of product property
 * @export
 * @interface CatalogRuntimesProductPropertyValue
 */
export interface CatalogRuntimesProductPropertyValue {
    /**
     * 
     * @type {any}
     * @memberof CatalogRuntimesProductPropertyValue
     */
    value?: any | null;
    /**
     * Localized Value in the language of the locale code
     * @type {string}
     * @memberof CatalogRuntimesProductPropertyValue
     */
    stringValue?: string | null;
    /**
     * 
     * @type {CatalogRuntimesAttributeVocabularyValueDisplayInfo}
     * @memberof CatalogRuntimesProductPropertyValue
     */
    displayInfo?: CatalogRuntimesAttributeVocabularyValueDisplayInfo;
}

/**
 * Check if a given object implements the CatalogRuntimesProductPropertyValue interface.
 */
export function instanceOfCatalogRuntimesProductPropertyValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogRuntimesProductPropertyValueFromJSON(json: any): CatalogRuntimesProductPropertyValue {
    return CatalogRuntimesProductPropertyValueFromJSONTyped(json, false);
}

export function CatalogRuntimesProductPropertyValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogRuntimesProductPropertyValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'stringValue': !exists(json, 'stringValue') ? undefined : json['stringValue'],
        'displayInfo': !exists(json, 'displayInfo') ? undefined : CatalogRuntimesAttributeVocabularyValueDisplayInfoFromJSON(json['displayInfo']),
    };
}

export function CatalogRuntimesProductPropertyValueToJSON(value?: CatalogRuntimesProductPropertyValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'stringValue': value.stringValue,
        'displayInfo': CatalogRuntimesAttributeVocabularyValueDisplayInfoToJSON(value.displayInfo),
    };
}
