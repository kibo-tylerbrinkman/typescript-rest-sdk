/* tslint:disable */
/* eslint-disable */
/**
 * Kibo AppDev Service
 * OpenAPI Spec for Kibo AppDev Service
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
 * @interface AuthTicket
 */
export interface AuthTicket {
    /**
     * 
     * @type {string}
     * @memberof AuthTicket
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthTicket
     */
    accessToken?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof AuthTicket
     */
    accessTokenExpiration?: Date;
    /**
     * 
     * @type {Date}
     * @memberof AuthTicket
     */
    refreshTokenExpiration?: Date;
}

/**
 * Check if a given object implements the AuthTicket interface.
 */
export function instanceOfAuthTicket(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthTicketFromJSON(json: any): AuthTicket {
    return AuthTicketFromJSONTyped(json, false);
}

export function AuthTicketFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthTicket {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'accessTokenExpiration': !exists(json, 'accessTokenExpiration') ? undefined : (new Date(json['accessTokenExpiration'])),
        'refreshTokenExpiration': !exists(json, 'refreshTokenExpiration') ? undefined : (new Date(json['refreshTokenExpiration'])),
    };
}

export function AuthTicketToJSON(value?: AuthTicket | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'refreshToken': value.refreshToken,
        'accessToken': value.accessToken,
        'accessTokenExpiration': value.accessTokenExpiration === undefined ? undefined : (value.accessTokenExpiration.toISOString()),
        'refreshTokenExpiration': value.refreshTokenExpiration === undefined ? undefined : (value.refreshTokenExpiration.toISOString()),
    };
}
