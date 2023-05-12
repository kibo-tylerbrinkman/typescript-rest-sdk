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
 * @interface ExportInventoryRequestAllOf
 */
export interface ExportInventoryRequestAllOf {
    /**
     * Name of the Export Settings to use
     * @type {string}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsName?: string;
    /**
     * Name of the FTP Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsFTPName?: string;
    /**
     * Name of the S3 Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequestAllOf
     */
    exportSettingsS3Name?: string;
    /**
     * Flag for sending the exports to the development droppoint
     * @type {boolean}
     * @memberof ExportInventoryRequestAllOf
     */
    development?: boolean;
}

/**
 * Check if a given object implements the ExportInventoryRequestAllOf interface.
 */
export function instanceOfExportInventoryRequestAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportInventoryRequestAllOfFromJSON(json: any): ExportInventoryRequestAllOf {
    return ExportInventoryRequestAllOfFromJSONTyped(json, false);
}

export function ExportInventoryRequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportInventoryRequestAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportSettingsName': !exists(json, 'exportSettingsName') ? undefined : json['exportSettingsName'],
        'exportSettingsFTPName': !exists(json, 'exportSettingsFTPName') ? undefined : json['exportSettingsFTPName'],
        'exportSettingsS3Name': !exists(json, 'exportSettingsS3Name') ? undefined : json['exportSettingsS3Name'],
        'development': !exists(json, 'development') ? undefined : json['development'],
    };
}

export function ExportInventoryRequestAllOfToJSON(value?: ExportInventoryRequestAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exportSettingsName': value.exportSettingsName,
        'exportSettingsFTPName': value.exportSettingsFTPName,
        'exportSettingsS3Name': value.exportSettingsS3Name,
        'development': value.development,
    };
}
