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
 * @interface UpdateExportSettingsFTPResponseAllOf
 */
export interface UpdateExportSettingsFTPResponseAllOf {
    /**
     * Tenant ID
     * @type {number}
     * @memberof UpdateExportSettingsFTPResponseAllOf
     */
    tenantID?: number;
    /**
     * Export Settings FTP Name
     * @type {string}
     * @memberof UpdateExportSettingsFTPResponseAllOf
     */
    exportSettingsFTPName?: string;
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof UpdateExportSettingsFTPResponseAllOf
     */
    exportSettingsName?: string;
}

/**
 * Check if a given object implements the UpdateExportSettingsFTPResponseAllOf interface.
 */
export function instanceOfUpdateExportSettingsFTPResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateExportSettingsFTPResponseAllOfFromJSON(json: any): UpdateExportSettingsFTPResponseAllOf {
    return UpdateExportSettingsFTPResponseAllOfFromJSONTyped(json, false);
}

export function UpdateExportSettingsFTPResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateExportSettingsFTPResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
        'exportSettingsFTPName': !exists(json, 'exportSettingsFTPName') ? undefined : json['exportSettingsFTPName'],
        'exportSettingsName': !exists(json, 'exportSettingsName') ? undefined : json['exportSettingsName'],
    };
}

export function UpdateExportSettingsFTPResponseAllOfToJSON(value?: UpdateExportSettingsFTPResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tenantID': value.tenantID,
        'exportSettingsFTPName': value.exportSettingsFTPName,
        'exportSettingsName': value.exportSettingsName,
    };
}

