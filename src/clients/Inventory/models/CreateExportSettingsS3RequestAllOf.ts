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
import type { ExportSettingsS3 } from './ExportSettingsS3';
import {
    ExportSettingsS3FromJSON,
    ExportSettingsS3FromJSONTyped,
    ExportSettingsS3ToJSON,
} from './ExportSettingsS3';

/**
 * 
 * @export
 * @interface CreateExportSettingsS3RequestAllOf
 */
export interface CreateExportSettingsS3RequestAllOf {
    /**
     * Export Settings Name to associate the ftp settings with
     * @type {string}
     * @memberof CreateExportSettingsS3RequestAllOf
     */
    exportSettingsName?: string;
    /**
     * 
     * @type {ExportSettingsS3}
     * @memberof CreateExportSettingsS3RequestAllOf
     */
    exportSettingsS3?: ExportSettingsS3;
}

/**
 * Check if a given object implements the CreateExportSettingsS3RequestAllOf interface.
 */
export function instanceOfCreateExportSettingsS3RequestAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateExportSettingsS3RequestAllOfFromJSON(json: any): CreateExportSettingsS3RequestAllOf {
    return CreateExportSettingsS3RequestAllOfFromJSONTyped(json, false);
}

export function CreateExportSettingsS3RequestAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateExportSettingsS3RequestAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportSettingsName': !exists(json, 'exportSettingsName') ? undefined : json['exportSettingsName'],
        'exportSettingsS3': !exists(json, 'exportSettingsS3') ? undefined : ExportSettingsS3FromJSON(json['exportSettingsS3']),
    };
}

export function CreateExportSettingsS3RequestAllOfToJSON(value?: CreateExportSettingsS3RequestAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exportSettingsName': value.exportSettingsName,
        'exportSettingsS3': ExportSettingsS3ToJSON(value.exportSettingsS3),
    };
}
