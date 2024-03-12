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
  LocationUsage,
  LocationUsageCollection,
} from '../models';

export interface GetLocationUsageRequest {
    code: string;
    responseFields?: string;
}

export interface GetLocationUsagesRequest {
    responseFields?: string;
}

export interface UpdateLocationUsageAsyncRequest {
    code: string;
    responseFields?: string;
    locationUsage?: LocationUsage;
}

/**
 * LocationSettingsApi - interface
 * 
 * @export
 * @interface LocationSettingsApiInterface
 */
export interface LocationSettingsApiInterface {
    /**
     * Get a locationUsage for the Site.
     * @summary Get Location Usage
     * @param {string} code 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationSettingsApiInterface
     */
    getLocationUsageRaw(requestParameters: GetLocationUsageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationUsage>>;

    /**
     * Get a locationUsage for the Site.
     * Get Location Usage
     */
    getLocationUsage(requestParameters: GetLocationUsageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationUsage>;

    /**
     * Get the locationUsages for the Site.
     * @summary Get Location Usages
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationSettingsApiInterface
     */
    getLocationUsagesRaw(requestParameters: GetLocationUsagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationUsageCollection>>;

    /**
     * Get the locationUsages for the Site.
     * Get Location Usages
     */
    getLocationUsages(requestParameters: GetLocationUsagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationUsageCollection>;

    /**
     * Update a locationUsage for the Site.
     * @summary Update Location Usage Async
     * @param {string} code 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {LocationUsage} [locationUsage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationSettingsApiInterface
     */
    updateLocationUsageAsyncRaw(requestParameters: UpdateLocationUsageAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationUsage>>;

    /**
     * Update a locationUsage for the Site.
     * Update Location Usage Async
     */
    updateLocationUsageAsync(requestParameters: UpdateLocationUsageAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationUsage>;

}

/**
 * 
 */
export class LocationSettingsApi extends runtime.BaseAPI implements LocationSettingsApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get a locationUsage for the Site.
     * Get Location Usage
     */


    async getLocationUsageRaw(requestParameters: GetLocationUsageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationUsage>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getLocationUsage.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/locationUsages/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a locationUsage for the Site.
     * Get Location Usage
     */
    async getLocationUsage(requestParameters: GetLocationUsageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationUsage> {
        const response = await this.getLocationUsageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the locationUsages for the Site.
     * Get Location Usages
     */


    async getLocationUsagesRaw(requestParameters: GetLocationUsagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationUsageCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/locationUsages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the locationUsages for the Site.
     * Get Location Usages
     */
    async getLocationUsages(requestParameters: GetLocationUsagesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationUsageCollection> {
        const response = await this.getLocationUsagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a locationUsage for the Site.
     * Update Location Usage Async
     */


    async updateLocationUsageAsyncRaw(requestParameters: UpdateLocationUsageAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationUsage>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateLocationUsageAsync.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/locationUsages/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.locationUsage,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a locationUsage for the Site.
     * Update Location Usage Async
     */
    async updateLocationUsageAsync(requestParameters: UpdateLocationUsageAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationUsage> {
        const response = await this.updateLocationUsageAsyncRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
