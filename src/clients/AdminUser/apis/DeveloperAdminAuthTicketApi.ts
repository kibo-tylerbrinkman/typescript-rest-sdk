/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Admin User Service
 * OpenAPI Spec for Kibo Admin User Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../../client-runtime';
import { basePathTemplate } from '../api-path';
import type {
  DeveloperAdminUserAuthTicket,
  UserAuthInfo,
} from '../models';

export interface CreateDeveloperUserAuthTicketRequest {
    developerAccountId?: number;
    responseFields?: string;
    userAuthInfo?: UserAuthInfo;
}

export interface DeleteUserAuthTicketRequest {
    refreshToken?: string;
}

export interface RefreshDeveloperAuthTicketRequest {
    developerAccountId?: number;
    responseFields?: string;
    developerAdminUserAuthTicket?: DeveloperAdminUserAuthTicket;
}

/**
 * DeveloperAdminAuthTicketApi - interface
 * 
 * @export
 * @interface DeveloperAdminAuthTicketApiInterface
 */
export interface DeveloperAdminAuthTicketApiInterface {
    /**
     * Authenticates a user for a particular tenant given a set of user credentials adn a tenantId.
     * @summary Create Developer User Auth Ticket
     * @param {number} [developerAccountId] The users developer account Id
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {UserAuthInfo} [userAuthInfo] User\&#39;s email address and password.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeveloperAdminAuthTicketApiInterface
     */
    createDeveloperUserAuthTicketRaw(requestParameters: CreateDeveloperUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeveloperAdminUserAuthTicket>>;

    /**
     * Authenticates a user for a particular tenant given a set of user credentials adn a tenantId.
     * Create Developer User Auth Ticket
     */
    createDeveloperUserAuthTicket(requestParameters: CreateDeveloperUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeveloperAdminUserAuthTicket>;

    /**
     * Logs out a user by deleting the refresh token
     * @summary Delete User Auth Ticket
     * @param {string} [refreshToken] The refresh token to delete.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeveloperAdminAuthTicketApiInterface
     */
    deleteUserAuthTicketRaw(requestParameters: DeleteUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Logs out a user by deleting the refresh token
     * Delete User Auth Ticket
     */
    deleteUserAuthTicket(requestParameters: DeleteUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Reauthenticates the current user for a different tenant. If the user does not have access to the tenant, the operation fails.
     * @summary Refresh Developer Auth Ticket
     * @param {number} [developerAccountId] The users developer account Id
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {DeveloperAdminUserAuthTicket} [developerAdminUserAuthTicket] An existing valid auth ticket containing the refresh token.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeveloperAdminAuthTicketApiInterface
     */
    refreshDeveloperAuthTicketRaw(requestParameters: RefreshDeveloperAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeveloperAdminUserAuthTicket>>;

    /**
     * Reauthenticates the current user for a different tenant. If the user does not have access to the tenant, the operation fails.
     * Refresh Developer Auth Ticket
     */
    refreshDeveloperAuthTicket(requestParameters: RefreshDeveloperAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeveloperAdminUserAuthTicket>;

}

/**
 * 
 */
export class DeveloperAdminAuthTicketApi extends runtime.BaseAPI implements DeveloperAdminAuthTicketApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Authenticates a user for a particular tenant given a set of user credentials adn a tenantId.
     * Create Developer User Auth Ticket
     */


    async createDeveloperUserAuthTicketRaw(requestParameters: CreateDeveloperUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeveloperAdminUserAuthTicket>> {
        const queryParameters: any = {};

        if (requestParameters.developerAccountId !== undefined) {
            queryParameters['developerAccountId'] = requestParameters.developerAccountId;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/developer/authtickets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.userAuthInfo,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Authenticates a user for a particular tenant given a set of user credentials adn a tenantId.
     * Create Developer User Auth Ticket
     */
    async createDeveloperUserAuthTicket(requestParameters: CreateDeveloperUserAuthTicketRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeveloperAdminUserAuthTicket> {
        const response = await this.createDeveloperUserAuthTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Logs out a user by deleting the refresh token
     * Delete User Auth Ticket
     */


    async deleteUserAuthTicketRaw(requestParameters: DeleteUserAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.refreshToken !== undefined) {
            queryParameters['refreshToken'] = requestParameters.refreshToken;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/developer/authtickets`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Logs out a user by deleting the refresh token
     * Delete User Auth Ticket
     */
    async deleteUserAuthTicket(requestParameters: DeleteUserAuthTicketRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserAuthTicketRaw(requestParameters, initOverrides);
    }

    /**
     * Reauthenticates the current user for a different tenant. If the user does not have access to the tenant, the operation fails.
     * Refresh Developer Auth Ticket
     */


    async refreshDeveloperAuthTicketRaw(requestParameters: RefreshDeveloperAuthTicketRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeveloperAdminUserAuthTicket>> {
        const queryParameters: any = {};

        if (requestParameters.developerAccountId !== undefined) {
            queryParameters['developerAccountId'] = requestParameters.developerAccountId;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/developer/authtickets`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.developerAdminUserAuthTicket,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Reauthenticates the current user for a different tenant. If the user does not have access to the tenant, the operation fails.
     * Refresh Developer Auth Ticket
     */
    async refreshDeveloperAuthTicket(requestParameters: RefreshDeveloperAuthTicketRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeveloperAdminUserAuthTicket> {
        const response = await this.refreshDeveloperAuthTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
