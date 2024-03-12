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
  LocationType,
  LocationTypeCollection,
} from '../models';

export interface AddLocationTypeAsyncRequest {
    responseFields?: string;
    locationType?: LocationType;
}

export interface DeleteLocationTypeRequest {
    locationTypeCode: string;
}

export interface GetLocationTypeRequest {
    locationTypeCode: string;
    responseFields?: string;
}

export interface GetLocationTypesRequest {
    responseFields?: string;
}

export interface GetLocationTypesWithPaginationRequest {
    startIndex?: number;
    pageSize?: number;
    responseFields?: string;
}

export interface UpdateLocationTypeRequest {
    locationTypeCode: string;
    responseFields?: string;
    locationType?: LocationType;
}

/**
 * LocationTypeApi - interface
 * 
 * @export
 * @interface LocationTypeApiInterface
 */
export interface LocationTypeApiInterface {
    /**
     * Create a LocationType.
     * @summary Add Location Type Async
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {LocationType} [locationType] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationTypeApiInterface
     */
    addLocationTypeAsyncRaw(requestParameters: AddLocationTypeAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationType>>;

    /**
     * Create a LocationType.
     * Add Location Type Async
     */
    addLocationTypeAsync(requestParameters: AddLocationTypeAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationType>;

    /**
     * Delete Location Type.
     * @summary Delete Location Type
     * @param {string} locationTypeCode 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationTypeApiInterface
     */
    deleteLocationTypeRaw(requestParameters: DeleteLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete Location Type.
     * Delete Location Type
     */
    deleteLocationType(requestParameters: DeleteLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Get a LocationType.
     * @summary Get Location Type
     * @param {string} locationTypeCode 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationTypeApiInterface
     */
    getLocationTypeRaw(requestParameters: GetLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationType>>;

    /**
     * Get a LocationType.
     * Get Location Type
     */
    getLocationType(requestParameters: GetLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationType>;

    /**
     * Get a collection of LocationTypes.
     * @summary Get Location Types
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationTypeApiInterface
     */
    getLocationTypesRaw(requestParameters: GetLocationTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LocationType>>>;

    /**
     * Get a collection of LocationTypes.
     * Get Location Types
     */
    getLocationTypes(requestParameters: GetLocationTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LocationType>>;

    /**
     * Get a collection of LocationTypes.
     * @summary Get Location Types  <param name=\"pageSize\"></param><param name=\"sortBy\"></param>
     * @param {number} [startIndex] 
     * @param {number} [pageSize] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationTypeApiInterface
     */
    getLocationTypesWithPaginationRaw(requestParameters: GetLocationTypesWithPaginationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationTypeCollection>>;

    /**
     * Get a collection of LocationTypes.
     * Get Location Types  <param name=\"pageSize\"></param><param name=\"sortBy\"></param>
     */
    getLocationTypesWithPagination(requestParameters: GetLocationTypesWithPaginationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationTypeCollection>;

    /**
     * Update a LocationType.
     * @summary Update Location Type
     * @param {string} locationTypeCode 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {LocationType} [locationType] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationTypeApiInterface
     */
    updateLocationTypeRaw(requestParameters: UpdateLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationType>>;

    /**
     * Update a LocationType.
     * Update Location Type
     */
    updateLocationType(requestParameters: UpdateLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationType>;

}

/**
 * 
 */
export class LocationTypeApi extends runtime.BaseAPI implements LocationTypeApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create a LocationType.
     * Add Location Type Async
     */


    async addLocationTypeAsyncRaw(requestParameters: AddLocationTypeAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationType>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/admin/locationtypes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationType,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a LocationType.
     * Add Location Type Async
     */
    async addLocationTypeAsync(requestParameters: AddLocationTypeAsyncRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationType> {
        const response = await this.addLocationTypeAsyncRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Location Type.
     * Delete Location Type
     */


    async deleteLocationTypeRaw(requestParameters: DeleteLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.locationTypeCode === null || requestParameters.locationTypeCode === undefined) {
            throw new runtime.RequiredError('locationTypeCode','Required parameter requestParameters.locationTypeCode was null or undefined when calling deleteLocationType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/admin/locationtypes/{locationTypeCode}`.replace(`{${"locationTypeCode"}}`, encodeURIComponent(String(requestParameters.locationTypeCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Location Type.
     * Delete Location Type
     */
    async deleteLocationType(requestParameters: DeleteLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteLocationTypeRaw(requestParameters, initOverrides);
    }

    /**
     * Get a LocationType.
     * Get Location Type
     */


    async getLocationTypeRaw(requestParameters: GetLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationType>> {
        if (requestParameters.locationTypeCode === null || requestParameters.locationTypeCode === undefined) {
            throw new runtime.RequiredError('locationTypeCode','Required parameter requestParameters.locationTypeCode was null or undefined when calling getLocationType.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/admin/locationtypes/{locationTypeCode}`.replace(`{${"locationTypeCode"}}`, encodeURIComponent(String(requestParameters.locationTypeCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a LocationType.
     * Get Location Type
     */
    async getLocationType(requestParameters: GetLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationType> {
        const response = await this.getLocationTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a collection of LocationTypes.
     * Get Location Types
     */


    async getLocationTypesRaw(requestParameters: GetLocationTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<LocationType>>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/admin/locationtypes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a collection of LocationTypes.
     * Get Location Types
     */
    async getLocationTypes(requestParameters: GetLocationTypesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<LocationType>> {
        const response = await this.getLocationTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a collection of LocationTypes.
     * Get Location Types  <param name=\"pageSize\"></param><param name=\"sortBy\"></param>
     */


    async getLocationTypesWithPaginationRaw(requestParameters: GetLocationTypesWithPaginationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationTypeCollection>> {
        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/admin/locationtypes/withpagination`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a collection of LocationTypes.
     * Get Location Types  <param name=\"pageSize\"></param><param name=\"sortBy\"></param>
     */
    async getLocationTypesWithPagination(requestParameters: GetLocationTypesWithPaginationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationTypeCollection> {
        const response = await this.getLocationTypesWithPaginationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a LocationType.
     * Update Location Type
     */


    async updateLocationTypeRaw(requestParameters: UpdateLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationType>> {
        if (requestParameters.locationTypeCode === null || requestParameters.locationTypeCode === undefined) {
            throw new runtime.RequiredError('locationTypeCode','Required parameter requestParameters.locationTypeCode was null or undefined when calling updateLocationType.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/admin/locationtypes/{locationTypeCode}`.replace(`{${"locationTypeCode"}}`, encodeURIComponent(String(requestParameters.locationTypeCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationType,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a LocationType.
     * Update Location Type
     */
    async updateLocationType(requestParameters: UpdateLocationTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationType> {
        const response = await this.updateLocationTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
