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
  AdminGroup,
  AdminGroupCollection,
} from '../models';


export namespace adminGroupApiParams { 
    export interface AddAdminGroupRequest {
        responseFields?: string;
        adminGroup?: AdminGroup;
    }
    export interface AddUsersRequest {
        groupCode: string;
        responseFields?: string;
        requestBody?: Array<string>;
    }
    export interface DeleteAdminGroupRequest {
        groupCode: string;
    }
    export interface GetAdminGroupRequest {
        groupCode: string;
        responseFields?: string;
    }
    export interface GetAdminGroupsRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface RemoveUsersRequest {
        groupCode: string;
        responseFields?: string;
        requestBody?: Array<string>;
    }
    export interface UpdateAdminGroupRequest {
        groupCode: string;
        responseFields?: string;
        adminGroup?: AdminGroup;
    }
}
/**
* AdminGroupApiService - interface
* 
* @export
* @interface AdminGroupApi
*/
export interface AdminGroupApiService {
    /**
    * Add a admin group
    * @summary Add a admin group
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {AdminGroup} [adminGroup] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AdminGroupApiInterface
    */
    addAdminGroupRaw(requestParameters: adminGroupApiParams.AddAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminGroup>>;

    /**
    * Add a admin group
    * Add a admin group
    */
    addAdminGroup(requestParameters: adminGroupApiParams.AddAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminGroup>;

    /**
    * Add users to admin group
    * @summary Add users to admin group
    * @param {string} groupCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<string>} [requestBody] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AdminGroupApiInterface
    */
    addUsersRaw(requestParameters: adminGroupApiParams.AddUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminGroup>>;

    /**
    * Add users to admin group
    * Add users to admin group
    */
    addUsers(requestParameters: adminGroupApiParams.AddUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminGroup>;

    /**
    * Deletes a Admin Group
    * @summary Deletes a Admin Group
    * @param {string} groupCode 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AdminGroupApiInterface
    */
    deleteAdminGroupRaw(requestParameters: adminGroupApiParams.DeleteAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a Admin Group
    * Deletes a Admin Group
    */
    deleteAdminGroup(requestParameters: adminGroupApiParams.DeleteAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets a Admin group by id
    * @summary Get Admin Group
    * @param {string} groupCode groupCode
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AdminGroupApiInterface
    */
    getAdminGroupRaw(requestParameters: adminGroupApiParams.GetAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminGroup>>;

    /**
    * Gets a Admin group by id
    * Get Admin Group
    */
    getAdminGroup(requestParameters: adminGroupApiParams.GetAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminGroup>;

    /**
    * Gets a collection of user groups
    * @summary Get Admin Groups
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AdminGroupApiInterface
    */
    getAdminGroupsRaw(requestParameters: adminGroupApiParams.GetAdminGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminGroupCollection>>;

    /**
    * Gets a collection of user groups
    * Get Admin Groups
    */
    getAdminGroups(requestParameters: adminGroupApiParams.GetAdminGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminGroupCollection>;

    /**
    * Remove users from admin group
    * @summary Remove users from admin group
    * @param {string} groupCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Array<string>} [requestBody] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AdminGroupApiInterface
    */
    removeUsersRaw(requestParameters: adminGroupApiParams.RemoveUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Remove users from admin group
    * Remove users from admin group
    */
    removeUsers(requestParameters: adminGroupApiParams.RemoveUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Update an existing adminGroup
    * @summary Update an existing adminGroup
    * @param {string} groupCode 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {AdminGroup} [adminGroup] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof AdminGroupApiInterface
    */
    updateAdminGroupRaw(requestParameters: adminGroupApiParams.UpdateAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminGroup>>;

    /**
    * Update an existing adminGroup
    * Update an existing adminGroup
    */
    updateAdminGroup(requestParameters: adminGroupApiParams.UpdateAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminGroup>;

}


/**
 * 
 */
export class AdminGroupApi extends runtime.BaseAPI implements AdminGroupApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add a admin group
     * Add a admin group
     */


    async addAdminGroupRaw(requestParameters: adminGroupApiParams.AddAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminGroup>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/adminuser/groups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.adminGroup,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add a admin group
     * Add a admin group
     */
    async addAdminGroup(requestParameters: adminGroupApiParams.AddAdminGroupRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminGroup> {
        const response = await this.addAdminGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add users to admin group
     * Add users to admin group
     */


    async addUsersRaw(requestParameters: adminGroupApiParams.AddUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminGroup>> {
        if (requestParameters.groupCode === null || requestParameters.groupCode === undefined) {
            throw new runtime.RequiredError('groupCode','Required parameter requestParameters.groupCode was null or undefined when calling addUsers.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/adminuser/groups/{groupCode}/addusers`.replace(`{${"groupCode"}}`, encodeURIComponent(String(requestParameters.groupCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add users to admin group
     * Add users to admin group
     */
    async addUsers(requestParameters: adminGroupApiParams.AddUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminGroup> {
        const response = await this.addUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a Admin Group
     * Deletes a Admin Group
     */


    async deleteAdminGroupRaw(requestParameters: adminGroupApiParams.DeleteAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupCode === null || requestParameters.groupCode === undefined) {
            throw new runtime.RequiredError('groupCode','Required parameter requestParameters.groupCode was null or undefined when calling deleteAdminGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/adminuser/groups/{groupCode}`.replace(`{${"groupCode"}}`, encodeURIComponent(String(requestParameters.groupCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a Admin Group
     * Deletes a Admin Group
     */
    async deleteAdminGroup(requestParameters: adminGroupApiParams.DeleteAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAdminGroupRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a Admin group by id
     * Get Admin Group
     */


    async getAdminGroupRaw(requestParameters: adminGroupApiParams.GetAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminGroup>> {
        if (requestParameters.groupCode === null || requestParameters.groupCode === undefined) {
            throw new runtime.RequiredError('groupCode','Required parameter requestParameters.groupCode was null or undefined when calling getAdminGroup.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/adminuser/groups/{groupCode}`.replace(`{${"groupCode"}}`, encodeURIComponent(String(requestParameters.groupCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a Admin group by id
     * Get Admin Group
     */
    async getAdminGroup(requestParameters: adminGroupApiParams.GetAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminGroup> {
        const response = await this.getAdminGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of user groups
     * Get Admin Groups
     */


    async getAdminGroupsRaw(requestParameters: adminGroupApiParams.GetAdminGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminGroupCollection>> {
        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/adminuser/groups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of user groups
     * Get Admin Groups
     */
    async getAdminGroups(requestParameters: adminGroupApiParams.GetAdminGroupsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminGroupCollection> {
        const response = await this.getAdminGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove users from admin group
     * Remove users from admin group
     */


    async removeUsersRaw(requestParameters: adminGroupApiParams.RemoveUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupCode === null || requestParameters.groupCode === undefined) {
            throw new runtime.RequiredError('groupCode','Required parameter requestParameters.groupCode was null or undefined when calling removeUsers.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/adminuser/groups/{groupCode}/removeusers`.replace(`{${"groupCode"}}`, encodeURIComponent(String(requestParameters.groupCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove users from admin group
     * Remove users from admin group
     */
    async removeUsers(requestParameters: adminGroupApiParams.RemoveUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeUsersRaw(requestParameters, initOverrides);
    }

    /**
     * Update an existing adminGroup
     * Update an existing adminGroup
     */


    async updateAdminGroupRaw(requestParameters: adminGroupApiParams.UpdateAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AdminGroup>> {
        if (requestParameters.groupCode === null || requestParameters.groupCode === undefined) {
            throw new runtime.RequiredError('groupCode','Required parameter requestParameters.groupCode was null or undefined when calling updateAdminGroup.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/adminuser/groups/{groupCode}`.replace(`{${"groupCode"}}`, encodeURIComponent(String(requestParameters.groupCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.adminGroup,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update an existing adminGroup
     * Update an existing adminGroup
     */
    async updateAdminGroup(requestParameters: adminGroupApiParams.UpdateAdminGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AdminGroup> {
        const response = await this.updateAdminGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
