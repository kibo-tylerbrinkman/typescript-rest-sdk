/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FieldValueBoost } from './FieldValueBoost';
import {
    FieldValueBoostFromJSON,
    FieldValueBoostFromJSONTyped,
    FieldValueBoostToJSON,
} from './FieldValueBoost';
import type { FieldWeight } from './FieldWeight';
import {
    FieldWeightFromJSON,
    FieldWeightFromJSONTyped,
    FieldWeightToJSON,
} from './FieldWeight';

/**
 * 
 * @export
 * @interface ProductSuggestSettings
 */
export interface ProductSuggestSettings {
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductSuggestSettings
     */
    customBoosts?: Array<string> | null;
    /**
     * 
     * @type {FieldValueBoost}
     * @memberof ProductSuggestSettings
     */
    fieldValueBoost?: FieldValueBoost;
    /**
     * 
     * @type {boolean}
     * @memberof ProductSuggestSettings
     */
    searchChildProductsByDefault?: boolean;
    /**
     * 
     * @type {Array<FieldWeight>}
     * @memberof ProductSuggestSettings
     */
    fieldWeights?: Array<FieldWeight> | null;
    /**
     * 
     * @type {string}
     * @memberof ProductSuggestSettings
     */
    personalizationExperience?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSuggestSettings
     */
    personalizationFactor?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductSuggestSettings
     */
    returnFields?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof ProductSuggestSettings
     */
    crossFieldAdditiveScoreFactor?: number;
}

/**
 * Check if a given object implements the ProductSuggestSettings interface.
 */
export function instanceOfProductSuggestSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductSuggestSettingsFromJSON(json: any): ProductSuggestSettings {
    return ProductSuggestSettingsFromJSONTyped(json, false);
}

export function ProductSuggestSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductSuggestSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customBoosts': !exists(json, 'customBoosts') ? undefined : json['customBoosts'],
        'fieldValueBoost': !exists(json, 'fieldValueBoost') ? undefined : FieldValueBoostFromJSON(json['fieldValueBoost']),
        'searchChildProductsByDefault': !exists(json, 'searchChildProductsByDefault') ? undefined : json['searchChildProductsByDefault'],
        'fieldWeights': !exists(json, 'fieldWeights') ? undefined : (json['fieldWeights'] === null ? null : (json['fieldWeights'] as Array<any>).map(FieldWeightFromJSON)),
        'personalizationExperience': !exists(json, 'personalizationExperience') ? undefined : json['personalizationExperience'],
        'personalizationFactor': !exists(json, 'personalizationFactor') ? undefined : json['personalizationFactor'],
        'returnFields': !exists(json, 'returnFields') ? undefined : json['returnFields'],
        'crossFieldAdditiveScoreFactor': !exists(json, 'crossFieldAdditiveScoreFactor') ? undefined : json['crossFieldAdditiveScoreFactor'],
    };
}

export function ProductSuggestSettingsToJSON(value?: ProductSuggestSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customBoosts': value.customBoosts,
        'fieldValueBoost': FieldValueBoostToJSON(value.fieldValueBoost),
        'searchChildProductsByDefault': value.searchChildProductsByDefault,
        'fieldWeights': value.fieldWeights === undefined ? undefined : (value.fieldWeights === null ? null : (value.fieldWeights as Array<any>).map(FieldWeightToJSON)),
        'personalizationExperience': value.personalizationExperience,
        'personalizationFactor': value.personalizationFactor,
        'returnFields': value.returnFields,
        'crossFieldAdditiveScoreFactor': value.crossFieldAdditiveScoreFactor,
    };
}
