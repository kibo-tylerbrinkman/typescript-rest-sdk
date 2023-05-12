/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 5.0
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
 * @interface UpdateExportSettingsResponseAllOf
 */
export interface UpdateExportSettingsResponseAllOf {
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsResponseAllOf
     */
    tenantID?: number;
    /**
     * Name
     * @type {string}
     * @memberof UpdateExportSettingsResponseAllOf
     */
    name?: string;
}

/**
 * Check if a given object implements the UpdateExportSettingsResponseAllOf interface.
 */
export function instanceOfUpdateExportSettingsResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateExportSettingsResponseAllOfFromJSON(json: any): UpdateExportSettingsResponseAllOf {
    return UpdateExportSettingsResponseAllOfFromJSONTyped(json, false);
}

export function UpdateExportSettingsResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateExportSettingsResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function UpdateExportSettingsResponseAllOfToJSON(value?: UpdateExportSettingsResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenantID': value.tenantID,
        'name': value.name,
    };
}

