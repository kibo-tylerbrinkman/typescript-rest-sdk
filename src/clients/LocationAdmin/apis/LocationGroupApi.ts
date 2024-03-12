/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Admin Service
 * OpenAPI Spec for Kibo Location Admin Service
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
  LocationGroupCollection,
  LocationLocationGroup,
} from '../models';

export interface AddLocationGroupRequest {
    responseFields?: string;
    locationLocationGroup?: LocationLocationGroup;
}

export interface DeleteLocationGroupRequest {
    locationGroupCode: string;
}

export interface GetLocationGroupRequest {
    locationGroupCode: string;
    responseFields?: string;
}

export interface GetLocationGroupsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
    responseFields?: string;
}

export interface UpdateLocationGroupRequest {
    locationGroupCode: string;
    responseFields?: string;
    locationLocationGroup?: LocationLocationGroup;
}

/**
 * LocationGroupApi - interface
 * 
 * @export
 * @interface LocationGroupApiInterface
 */
export interface LocationGroupApiInterface {
    /**
     * Add a location group.
     * @summary Add Location Group
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {LocationLocationGroup} [locationLocationGroup] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationGroupApiInterface
     */
    addLocationGroupRaw(requestParameters: AddLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationLocationGroup>>;

    /**
     * Add a location group.
     * Add Location Group
     */
    addLocationGroup(requestParameters: AddLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationLocationGroup>;

    /**
     * Deletes a location group specified by location group code.
     * @summary Delete Location Group
     * @param {string} locationGroupCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationGroupApiInterface
     */
    deleteLocationGroupRaw(requestParameters: DeleteLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Deletes a location group specified by location group code.
     * Delete Location Group
     */
    deleteLocationGroup(requestParameters: DeleteLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Gets a location group by code.
     * @summary Get Location Group
     * @param {string} locationGroupCode 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationGroupApiInterface
     */
    getLocationGroupRaw(requestParameters: GetLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationLocationGroup>>;

    /**
     * Gets a location group by code.
     * Get Location Group
     */
    getLocationGroup(requestParameters: GetLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationLocationGroup>;

    /**
     * Gets a collection of location groups.
     * @summary Get Location Groups
     * @param {number} [startIndex] 
     * @param {number} [pageSize] 
     * @param {string} [sortBy] 
     * @param {string} [filter] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationGroupApiInterface
     */
    getLocationGroupsRaw(requestParameters: GetLocationGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroupCollection>>;

    /**
     * Gets a collection of location groups.
     * Get Location Groups
     */
    getLocationGroups(requestParameters: GetLocationGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroupCollection>;

    /**
     * Update an existing location group.
     * @summary Update Location Group
     * @param {string} locationGroupCode 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {LocationLocationGroup} [locationLocationGroup] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationGroupApiInterface
     */
    updateLocationGroupRaw(requestParameters: UpdateLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationLocationGroup>>;

    /**
     * Update an existing location group.
     * Update Location Group
     */
    updateLocationGroup(requestParameters: UpdateLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationLocationGroup>;

}

/**
 * 
 */
export class LocationGroupApi extends runtime.BaseAPI implements LocationGroupApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add a location group.
     * Add Location Group
     */


    async addLocationGroupRaw(requestParameters: AddLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationLocationGroup>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/admin/locationGroups`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationLocationGroup,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Add a location group.
     * Add Location Group
     */
    async addLocationGroup(requestParameters: AddLocationGroupRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationLocationGroup> {
        const response = await this.addLocationGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a location group specified by location group code.
     * Delete Location Group
     */


    async deleteLocationGroupRaw(requestParameters: DeleteLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.locationGroupCode === null || requestParameters.locationGroupCode === undefined) {
            throw new runtime.RequiredError('locationGroupCode','Required parameter requestParameters.locationGroupCode was null or undefined when calling deleteLocationGroup.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/admin/locationGroups/{locationGroupCode}`.replace(`{${"locationGroupCode"}}`, encodeURIComponent(String(requestParameters.locationGroupCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a location group specified by location group code.
     * Delete Location Group
     */
    async deleteLocationGroup(requestParameters: DeleteLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteLocationGroupRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a location group by code.
     * Get Location Group
     */


    async getLocationGroupRaw(requestParameters: GetLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationLocationGroup>> {
        if (requestParameters.locationGroupCode === null || requestParameters.locationGroupCode === undefined) {
            throw new runtime.RequiredError('locationGroupCode','Required parameter requestParameters.locationGroupCode was null or undefined when calling getLocationGroup.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/admin/locationGroups/{locationGroupCode}`.replace(`{${"locationGroupCode"}}`, encodeURIComponent(String(requestParameters.locationGroupCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a location group by code.
     * Get Location Group
     */
    async getLocationGroup(requestParameters: GetLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationLocationGroup> {
        const response = await this.getLocationGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of location groups.
     * Get Location Groups
     */


    async getLocationGroupsRaw(requestParameters: GetLocationGroupsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroupCollection>> {
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
            path: `/commerce/admin/locationGroups`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of location groups.
     * Get Location Groups
     */
    async getLocationGroups(requestParameters: GetLocationGroupsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroupCollection> {
        const response = await this.getLocationGroupsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing location group.
     * Update Location Group
     */


    async updateLocationGroupRaw(requestParameters: UpdateLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationLocationGroup>> {
        if (requestParameters.locationGroupCode === null || requestParameters.locationGroupCode === undefined) {
            throw new runtime.RequiredError('locationGroupCode','Required parameter requestParameters.locationGroupCode was null or undefined when calling updateLocationGroup.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/admin/locationGroups/{locationGroupCode}`.replace(`{${"locationGroupCode"}}`, encodeURIComponent(String(requestParameters.locationGroupCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationLocationGroup,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update an existing location group.
     * Update Location Group
     */
    async updateLocationGroup(requestParameters: UpdateLocationGroupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationLocationGroup> {
        const response = await this.updateLocationGroupRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
