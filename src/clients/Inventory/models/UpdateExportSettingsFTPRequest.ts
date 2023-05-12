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
import type { ExportSettingsFTP } from './ExportSettingsFTP';
import {
    ExportSettingsFTPFromJSON,
    ExportSettingsFTPFromJSONTyped,
    ExportSettingsFTPToJSON,
} from './ExportSettingsFTP';

/**
 * Request needed updating existing Export Settings FTP
 * @export
 * @interface UpdateExportSettingsFTPRequest
 */
export interface UpdateExportSettingsFTPRequest {
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof UpdateExportSettingsFTPRequest
     */
    exportSettingsName: string;
    /**
     * 
     * @type {ExportSettingsFTP}
     * @memberof UpdateExportSettingsFTPRequest
     */
    exportSettingsFTP: ExportSettingsFTP;
    /**
     * Location Code
     * @type {string}
     * @memberof UpdateExportSettingsFTPRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof UpdateExportSettingsFTPRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof UpdateExportSettingsFTPRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof UpdateExportSettingsFTPRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof UpdateExportSettingsFTPRequest
     */
    sortBy?: string;
}

/**
 * Check if a given object implements the UpdateExportSettingsFTPRequest interface.
 */
export function instanceOfUpdateExportSettingsFTPRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exportSettingsName" in value;
    isInstance = isInstance && "exportSettingsFTP" in value;

    return isInstance;
}

export function UpdateExportSettingsFTPRequestFromJSON(json: any): UpdateExportSettingsFTPRequest {
    return UpdateExportSettingsFTPRequestFromJSONTyped(json, false);
}

export function UpdateExportSettingsFTPRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateExportSettingsFTPRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportSettingsName': json['exportSettingsName'],
        'exportSettingsFTP': ExportSettingsFTPFromJSON(json['exportSettingsFTP']),
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'userID': !exists(json, 'userID') ? undefined : json['userID'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageNum': !exists(json, 'pageNum') ? undefined : json['pageNum'],
        'sortBy': !exists(json, 'sortBy') ? undefined : json['sortBy'],
    };
}

export function UpdateExportSettingsFTPRequestToJSON(value?: UpdateExportSettingsFTPRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exportSettingsName': value.exportSettingsName,
        'exportSettingsFTP': ExportSettingsFTPToJSON(value.exportSettingsFTP),
        'locationCode': value.locationCode,
        'userID': value.userID,
        'pageSize': value.pageSize,
        'pageNum': value.pageNum,
        'sortBy': value.sortBy,
    };
}

