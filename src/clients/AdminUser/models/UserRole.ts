/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Admin User Service
 * OpenAPI Spec for Kibo Admin User Service
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
import type { Resource } from './Resource';
import {
    ResourceFromJSON,
    ResourceFromJSONTyped,
    ResourceToJSON,
} from './Resource';
import type { UserScope } from './UserScope';
import {
    UserScopeFromJSON,
    UserScopeFromJSONTyped,
    UserScopeToJSON,
} from './UserScope';

/**
 * 
 * @export
 * @interface UserRole
 */
export interface UserRole {
    /**
     * 
     * @type {string}
     * @memberof UserRole
     */
    userId?: string | null;
    /**
     * 
     * @type {UserScope}
     * @memberof UserRole
     */
    assignedInScope?: UserScope;
    /**
     * 
     * @type {number}
     * @memberof UserRole
     */
    roleId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserRole
     */
    roleName?: string | null;
    /**
     * 
     * @type {Array<Resource>}
     * @memberof UserRole
     */
    roleResources?: Array<Resource> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserRole
     */
    roleTags?: Array<string> | null;
    /**
     * 
     * @type {AuditInfo}
     * @memberof UserRole
     */
    auditInfo?: AuditInfo;
}

/**
 * Check if a given object implements the UserRole interface.
 */
export function instanceOfUserRole(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserRoleFromJSON(json: any): UserRole {
    return UserRoleFromJSONTyped(json, false);
}

export function UserRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRole {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'assignedInScope': !exists(json, 'assignedInScope') ? undefined : UserScopeFromJSON(json['assignedInScope']),
        'roleId': !exists(json, 'roleId') ? undefined : json['roleId'],
        'roleName': !exists(json, 'roleName') ? undefined : json['roleName'],
        'roleResources': !exists(json, 'roleResources') ? undefined : (json['roleResources'] === null ? null : (json['roleResources'] as Array<any>).map(ResourceFromJSON)),
        'roleTags': !exists(json, 'roleTags') ? undefined : json['roleTags'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AuditInfoFromJSON(json['auditInfo']),
    };
}

export function UserRoleToJSON(value?: UserRole | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'assignedInScope': UserScopeToJSON(value.assignedInScope),
        'roleId': value.roleId,
        'roleName': value.roleName,
        'roleResources': value.roleResources === undefined ? undefined : (value.roleResources === null ? null : (value.roleResources as Array<any>).map(ResourceToJSON)),
        'roleTags': value.roleTags,
        'auditInfo': AuditInfoToJSON(value.auditInfo),
    };
}

