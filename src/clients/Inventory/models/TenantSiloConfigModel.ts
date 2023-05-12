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
 * Model of a tenant silo config.
 * @export
 * @interface TenantSiloConfigModel
 */
export interface TenantSiloConfigModel {
    /**
     * A Silo ID
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    siloID?: number;
    /**
     * Name of the Silo
     * @type {string}
     * @memberof TenantSiloConfigModel
     */
    name?: string;
    /**
     * Description of silo configuration
     * @type {string}
     * @memberof TenantSiloConfigModel
     */
    description?: string;
    /**
     * Whether the  silo config is usable or not
     * @type {boolean}
     * @memberof TenantSiloConfigModel
     */
    usable?: boolean;
    /**
     * Check whether theAdditional tenants allowed or not 
     * @type {boolean}
     * @memberof TenantSiloConfigModel
     */
    additonalTenantsAllowed?: boolean;
    /**
     * Number of Batch Workers to run for this tenant.
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    batchWorkers?: number;
    /**
     * Number of Event Sender Workers to run for this tenant.
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    eventSenderWorkers?: number;
    /**
     * A Tenant ID
     * @type {number}
     * @memberof TenantSiloConfigModel
     */
    tenantID?: number;
}

/**
 * Check if a given object implements the TenantSiloConfigModel interface.
 */
export function instanceOfTenantSiloConfigModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TenantSiloConfigModelFromJSON(json: any): TenantSiloConfigModel {
    return TenantSiloConfigModelFromJSONTyped(json, false);
}

export function TenantSiloConfigModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantSiloConfigModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'siloID': !exists(json, 'siloID') ? undefined : json['siloID'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'usable': !exists(json, 'usable') ? undefined : json['usable'],
        'additonalTenantsAllowed': !exists(json, 'additonalTenantsAllowed') ? undefined : json['additonalTenantsAllowed'],
        'batchWorkers': !exists(json, 'batchWorkers') ? undefined : json['batchWorkers'],
        'eventSenderWorkers': !exists(json, 'eventSenderWorkers') ? undefined : json['eventSenderWorkers'],
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
    };
}

export function TenantSiloConfigModelToJSON(value?: TenantSiloConfigModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'siloID': value.siloID,
        'name': value.name,
        'description': value.description,
        'usable': value.usable,
        'additonalTenantsAllowed': value.additonalTenantsAllowed,
        'batchWorkers': value.batchWorkers,
        'eventSenderWorkers': value.eventSenderWorkers,
        'tenantID': value.tenantID,
    };
}

