/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
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
  LocationListResponseModel,
  LocationResponseModel,
} from '../models';

export interface GetLocationByLocationCodeUsingGETRequest {
    locationCode: string;
    xVolSite: number;
    xVolTenant: number;
    responseFields?: string;
}

export interface GetLocationsUsingGETRequest {
    xVolSite: number;
    xVolTenant: number;
    pageNum?: number;
    pageSize?: number;
    responseFields?: string;
}

/**
 * OrderRoutingLocationApi - interface
 * 
 * @export
 * @interface OrderRoutingLocationApiInterface
 */
export interface OrderRoutingLocationApiInterface {
    /**
     * getLocationByLocationCode
     * @summary getLocationByLocationCode
     * @param {string} locationCode locationCode
     * @param {number} xVolSite 
     * @param {number} xVolTenant x-vol-tenant
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderRoutingLocationApiInterface
     */
    getLocationByLocationCodeUsingGETRaw(requestParameters: GetLocationByLocationCodeUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationResponseModel>>;

    /**
     * getLocationByLocationCode
     * getLocationByLocationCode
     */
    getLocationByLocationCodeUsingGET(requestParameters: GetLocationByLocationCodeUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationResponseModel>;

    /**
     * getLocations
     * @summary getLocations
     * @param {number} xVolSite 
     * @param {number} xVolTenant x-vol-tenant
     * @param {number} [pageNum] pageNum
     * @param {number} [pageSize] pageSize
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrderRoutingLocationApiInterface
     */
    getLocationsUsingGETRaw(requestParameters: GetLocationsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationListResponseModel>>;

    /**
     * getLocations
     * getLocations
     */
    getLocationsUsingGET(requestParameters: GetLocationsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationListResponseModel>;

}

/**
 * 
 */
export class OrderRoutingLocationApi extends runtime.BaseAPI implements OrderRoutingLocationApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * getLocationByLocationCode
     * getLocationByLocationCode
     */


    async getLocationByLocationCodeUsingGETRaw(requestParameters: GetLocationByLocationCodeUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationResponseModel>> {
        if (requestParameters.locationCode === null || requestParameters.locationCode === undefined) {
            throw new runtime.RequiredError('locationCode','Required parameter requestParameters.locationCode was null or undefined when calling getLocationByLocationCodeUsingGET.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling getLocationByLocationCodeUsingGET.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getLocationByLocationCodeUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/location/{locationCode}`.replace(`{${"locationCode"}}`, encodeURIComponent(String(requestParameters.locationCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getLocationByLocationCode
     * getLocationByLocationCode
     */
    async getLocationByLocationCodeUsingGET(requestParameters: GetLocationByLocationCodeUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationResponseModel> {
        const response = await this.getLocationByLocationCodeUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getLocations
     * getLocations
     */


    async getLocationsUsingGETRaw(requestParameters: GetLocationsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationListResponseModel>> {
        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling getLocationsUsingGET.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getLocationsUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageNum !== undefined) {
            queryParameters['pageNum'] = requestParameters.pageNum;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/orders/orderrouting/api/v1/location`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getLocations
     * getLocations
     */
    async getLocationsUsingGET(requestParameters: GetLocationsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationListResponseModel> {
        const response = await this.getLocationsUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
