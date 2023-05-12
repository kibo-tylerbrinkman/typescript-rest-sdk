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
 * Export Inventory Request
 * @export
 * @interface ExportInventoryRequest
 */
export interface ExportInventoryRequest {
    /**
     * Name of the Export Settings to use
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    exportSettingsName?: string;
    /**
     * Name of the FTP Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    exportSettingsFTPName?: string;
    /**
     * Name of the S3 Settings to use. Will only check for this if exportID is already set
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    exportSettingsS3Name?: string;
    /**
     * Flag for sending the exports to the development droppoint
     * @type {boolean}
     * @memberof ExportInventoryRequest
     */
    development?: boolean;
    /**
     * Location Code
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof ExportInventoryRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof ExportInventoryRequest
     */
    sortBy?: string;
}

/**
 * Check if a given object implements the ExportInventoryRequest interface.
 */
export function instanceOfExportInventoryRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportInventoryRequestFromJSON(json: any): ExportInventoryRequest {
    return ExportInventoryRequestFromJSONTyped(json, false);
}

export function ExportInventoryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportInventoryRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportSettingsName': !exists(json, 'exportSettingsName') ? undefined : json['exportSettingsName'],
        'exportSettingsFTPName': !exists(json, 'exportSettingsFTPName') ? undefined : json['exportSettingsFTPName'],
        'exportSettingsS3Name': !exists(json, 'exportSettingsS3Name') ? undefined : json['exportSettingsS3Name'],
        'development': !exists(json, 'development') ? undefined : json['development'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'userID': !exists(json, 'userID') ? undefined : json['userID'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageNum': !exists(json, 'pageNum') ? undefined : json['pageNum'],
        'sortBy': !exists(json, 'sortBy') ? undefined : json['sortBy'],
    };
}

export function ExportInventoryRequestToJSON(value?: ExportInventoryRequest | null): any {
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
        'locationCode': value.locationCode,
        'userID': value.userID,
        'pageSize': value.pageSize,
        'pageNum': value.pageNum,
        'sortBy': value.sortBy,
    };
}

