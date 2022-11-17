/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MongoAdmin Service
 * OpenAPI Spec for Kibo MongoAdmin Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AuditInfo } from './AuditInfo';
import {
    AuditInfoFromJSON,
    AuditInfoFromJSONTyped,
    AuditInfoToJSON,
} from './AuditInfo';
import type { ContextOverride } from './ContextOverride';
import {
    ContextOverrideFromJSON,
    ContextOverrideFromJSONTyped,
    ContextOverrideToJSON,
} from './ContextOverride';
import type { DropLocation } from './DropLocation';
import {
    DropLocationFromJSON,
    DropLocationFromJSONTyped,
    DropLocationToJSON,
} from './DropLocation';
import type { ImportResource } from './ImportResource';
import {
    ImportResourceFromJSON,
    ImportResourceFromJSONTyped,
    ImportResourceToJSON,
} from './ImportResource';

/**
 * 
 * @export
 * @interface ImportJob
 */
export interface ImportJob {
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    requester?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    domain?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    format?: string | null;
    /**
     * 
     * @type {Array<ImportResource>}
     * @memberof ImportJob
     */
    resources?: Array<ImportResource> | null;
    /**
     * 
     * @type {ContextOverride}
     * @memberof ImportJob
     */
    contextOverride?: ContextOverride;
    /**
     * 
     * @type {boolean}
     * @memberof ImportJob
     */
    isComplete?: boolean;
    /**
     * 
     * @type {AuditInfo}
     * @memberof ImportJob
     */
    auditInfo?: AuditInfo;
    /**
     * 
     * @type {number}
     * @memberof ImportJob
     */
    tenant?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    statusDetails?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ImportJob
     */
    statusMessage?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ImportJob
     */
    _configuration?: any | null;
    /**
     * 
     * @type {Array<DropLocation>}
     * @memberof ImportJob
     */
    files?: Array<DropLocation> | null;
}

/**
 * Check if a given object implements the ImportJob interface.
 */
export function instanceOfImportJob(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ImportJobFromJSON(json: any): ImportJob {
    return ImportJobFromJSONTyped(json, false);
}

export function ImportJobFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportJob {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'requester': !exists(json, 'requester') ? undefined : json['requester'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'format': !exists(json, 'format') ? undefined : json['format'],
        'resources': !exists(json, 'resources') ? undefined : (json['resources'] === null ? null : (json['resources'] as Array<any>).map(ImportResourceFromJSON)),
        'contextOverride': !exists(json, 'contextOverride') ? undefined : ContextOverrideFromJSON(json['contextOverride']),
        'isComplete': !exists(json, 'isComplete') ? undefined : json['isComplete'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'statusDetails': !exists(json, 'statusDetails') ? undefined : json['statusDetails'],
        'statusMessage': !exists(json, 'statusMessage') ? undefined : json['statusMessage'],
        '_configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'files': !exists(json, 'files') ? undefined : (json['files'] === null ? null : (json['files'] as Array<any>).map(DropLocationFromJSON)),
    };
}

export function ImportJobToJSON(value?: ImportJob | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'id': value.id,
        'requester': value.requester,
        'domain': value.domain,
        'format': value.format,
        'resources': value.resources === undefined ? undefined : (value.resources === null ? null : (value.resources as Array<any>).map(ImportResourceToJSON)),
        'contextOverride': ContextOverrideToJSON(value.contextOverride),
        'isComplete': value.isComplete,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
        'tenant': value.tenant,
        'status': value.status,
        'statusDetails': value.statusDetails,
        'statusMessage': value.statusMessage,
        'configuration': value._configuration,
        'files': value.files === undefined ? undefined : (value.files === null ? null : (value.files as Array<any>).map(DropLocationToJSON)),
    };
}
