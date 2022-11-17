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
import type { StackingConfiguration } from './StackingConfiguration';
import {
    StackingConfigurationFromJSON,
    StackingConfigurationFromJSONTyped,
    StackingConfigurationToJSON,
} from './StackingConfiguration';

/**
 * Tenant level discount settings
 * @export
 * @interface DiscountSettings
 */
export interface DiscountSettings {
    /**
     * 
     * @type {StackingConfiguration}
     * @memberof DiscountSettings
     */
    stackingConfiguration?: StackingConfiguration;
    /**
     * Use the pre or post line item discounts order total to evaluate the order minimum constraint
     * @type {boolean}
     * @memberof DiscountSettings
     */
    usePostDiscountedOrderValue?: boolean | null;
}

/**
 * Check if a given object implements the DiscountSettings interface.
 */
export function instanceOfDiscountSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiscountSettingsFromJSON(json: any): DiscountSettings {
    return DiscountSettingsFromJSONTyped(json, false);
}

export function DiscountSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscountSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stackingConfiguration': !exists(json, 'stackingConfiguration') ? undefined : StackingConfigurationFromJSON(json['stackingConfiguration']),
        'usePostDiscountedOrderValue': !exists(json, 'usePostDiscountedOrderValue') ? undefined : json['usePostDiscountedOrderValue'],
    };
}

export function DiscountSettingsToJSON(value?: DiscountSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stackingConfiguration': StackingConfigurationToJSON(value.stackingConfiguration),
        'usePostDiscountedOrderValue': value.usePostDiscountedOrderValue,
    };
}
