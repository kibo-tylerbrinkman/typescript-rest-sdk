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
import type { UserRole } from './UserRole';
import {
    UserRoleFromJSON,
    UserRoleFromJSONTyped,
    UserRoleToJSON,
} from './UserRole';

/**
 * Customer account. Customers provide contact information, view order history, and set email preferences on their account. 
 * Merchants can edit accounts to add internal notes or assign them to segments.
 * @export
 * @interface B2BUser
 */
export interface B2BUser {
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    emailAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof B2BUser
     */
    localeCode?: string | null;
    /**
     * Unique identifier of the user who is currently logged in. This is null if the user is anonymous (not logged in).  Unicode data with a maximum length of 55 characters.
     * @type {string}
     * @memberof B2BUser
     */
    userId?: string | null;
    /**
     * 
     * @type {Array<UserRole>}
     * @memberof B2BUser
     */
    roles?: Array<UserRole> | null;
    /**
     * 
     * @type {boolean}
     * @memberof B2BUser
     */
    isLocked?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof B2BUser
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof B2BUser
     */
    isRemoved?: boolean;
    /**
     * If true, the customer prefers to receive marketing material such as newsletters or email offers.
     * @type {boolean}
     * @memberof B2BUser
     */
    acceptsMarketing?: boolean;
    /**
     * Indicates if an external password is set on this account
     * @type {boolean}
     * @memberof B2BUser
     */
    hasExternalPassword?: boolean;
}

/**
 * Check if a given object implements the B2BUser interface.
 */
export function instanceOfB2BUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function B2BUserFromJSON(json: any): B2BUser {
    return B2BUserFromJSONTyped(json, false);
}

export function B2BUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): B2BUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'roles': !exists(json, 'roles') ? undefined : (json['roles'] === null ? null : (json['roles'] as Array<any>).map(UserRoleFromJSON)),
        'isLocked': !exists(json, 'isLocked') ? undefined : json['isLocked'],
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'isRemoved': !exists(json, 'isRemoved') ? undefined : json['isRemoved'],
        'acceptsMarketing': !exists(json, 'acceptsMarketing') ? undefined : json['acceptsMarketing'],
        'hasExternalPassword': !exists(json, 'hasExternalPassword') ? undefined : json['hasExternalPassword'],
    };
}

export function B2BUserToJSON(value?: B2BUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailAddress': value.emailAddress,
        'userName': value.userName,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'localeCode': value.localeCode,
        'userId': value.userId,
        'roles': value.roles === undefined ? undefined : (value.roles === null ? null : (value.roles as Array<any>).map(UserRoleToJSON)),
        'isLocked': value.isLocked,
        'isActive': value.isActive,
        'isRemoved': value.isRemoved,
        'acceptsMarketing': value.acceptsMarketing,
        'hasExternalPassword': value.hasExternalPassword,
    };
}
