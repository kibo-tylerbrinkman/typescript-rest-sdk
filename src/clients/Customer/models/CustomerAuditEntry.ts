/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
 *
 * The version of the OpenAPI document: v1
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
 * @interface CustomerAuditEntry
 */
export interface CustomerAuditEntry {
    /**
     * Customer associated with this entry
     * @type {number}
     * @memberof CustomerAuditEntry
     */
    customerAccountId?: number;
    /**
     * Id of this entry
     * @type {number}
     * @memberof CustomerAuditEntry
     */
    customerAuditEntryId?: number;
    /**
     * Date of the Entry
     * @type {Date}
     * @memberof CustomerAuditEntry
     */
    entryDate?: Date;
    /**
     * User ID associated with this Entry
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    entryUser?: string | null;
    /**
     * Applicattion associated with this entry
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    application?: string | null;
    /**
     * Site associated wit this entry
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    site?: string | null;
    /**
     * Description of the change (UI Displayable)
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    description?: string | null;
    /**
     * Path of the field value being changed (e.g. /Customer/Contacts/1/FirstName)
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    fieldPath?: string | null;
    /**
     * Original value before this event
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    oldValue?: string | null;
    /**
     * New Value after this event
     * @type {string}
     * @memberof CustomerAuditEntry
     */
    newValue?: string | null;
}

/**
 * Check if a given object implements the CustomerAuditEntry interface.
 */
export function instanceOfCustomerAuditEntry(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerAuditEntryFromJSON(json: any): CustomerAuditEntry {
    return CustomerAuditEntryFromJSONTyped(json, false);
}

export function CustomerAuditEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerAuditEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerAccountId': !exists(json, 'customerAccountId') ? undefined : json['customerAccountId'],
        'customerAuditEntryId': !exists(json, 'customerAuditEntryId') ? undefined : json['customerAuditEntryId'],
        'entryDate': !exists(json, 'entryDate') ? undefined : (new Date(json['entryDate'])),
        'entryUser': !exists(json, 'entryUser') ? undefined : json['entryUser'],
        'application': !exists(json, 'application') ? undefined : json['application'],
        'site': !exists(json, 'site') ? undefined : json['site'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'fieldPath': !exists(json, 'fieldPath') ? undefined : json['fieldPath'],
        'oldValue': !exists(json, 'oldValue') ? undefined : json['oldValue'],
        'newValue': !exists(json, 'newValue') ? undefined : json['newValue'],
    };
}

export function CustomerAuditEntryToJSON(value?: CustomerAuditEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customerAccountId': value.customerAccountId,
        'customerAuditEntryId': value.customerAuditEntryId,
        'entryDate': value.entryDate === undefined ? undefined : (value.entryDate.toISOString()),
        'entryUser': value.entryUser,
        'application': value.application,
        'site': value.site,
        'description': value.description,
        'fieldPath': value.fieldPath,
        'oldValue': value.oldValue,
        'newValue': value.newValue,
    };
}
