/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GatewayCredentialFieldValue } from './GatewayCredentialFieldValue';
import {
    GatewayCredentialFieldValueFromJSON,
    GatewayCredentialFieldValueFromJSONTyped,
    GatewayCredentialFieldValueToJSON,
} from './GatewayCredentialFieldValue';

/**
 * 
 * @export
 * @interface GatewayAccount
 */
export interface GatewayAccount {
    /**
     * 
     * @type {string}
     * @memberof GatewayAccount
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayAccount
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayAccount
     */
    gatewayDefinitionId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GatewayAccount
     */
    countryCode?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof GatewayAccount
     */
    isActive?: boolean;
    /**
     * 
     * @type {Array<GatewayCredentialFieldValue>}
     * @memberof GatewayAccount
     */
    credentialFields?: Array<GatewayCredentialFieldValue> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GatewayAccount
     */
    binPatterns?: Array<string> | null;
}

/**
 * Check if a given object implements the GatewayAccount interface.
 */
export function instanceOfGatewayAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GatewayAccountFromJSON(json: any): GatewayAccount {
    return GatewayAccountFromJSONTyped(json, false);
}

export function GatewayAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewayAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'gatewayDefinitionId': !exists(json, 'gatewayDefinitionId') ? undefined : json['gatewayDefinitionId'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'credentialFields': !exists(json, 'credentialFields') ? undefined : (json['credentialFields'] === null ? null : (json['credentialFields'] as Array<any>).map(GatewayCredentialFieldValueFromJSON)),
        'binPatterns': !exists(json, 'binPatterns') ? undefined : json['binPatterns'],
    };
}

export function GatewayAccountToJSON(value?: GatewayAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'gatewayDefinitionId': value.gatewayDefinitionId,
        'countryCode': value.countryCode,
        'isActive': value.isActive,
        'credentialFields': value.credentialFields === undefined ? undefined : (value.credentialFields === null ? null : (value.credentialFields as Array<any>).map(GatewayCredentialFieldValueToJSON)),
        'binPatterns': value.binPatterns,
    };
}
