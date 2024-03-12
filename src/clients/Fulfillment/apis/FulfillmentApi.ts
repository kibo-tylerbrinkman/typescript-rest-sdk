/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment API - Production Profile
 * REST API backing the Kibo Fulfiller User Interface
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


export namespace fulfillmentApiParams { 
    export interface GetFeaturesRequest {
        xVolTenant: number;
        xVolSite?: number;
    }
    export interface GetPublicSettingsRequest {
        xVolTenant: number;
        xVolSite?: number;
    }
    export interface GetTenantAttributesRequest {
        xVolTenant: number;
        xVolSite?: number;
    }
}
/**
* FulfillmentApiService - interface
* 
* @export
* @interface FulfillmentApi
*/
export interface FulfillmentApiService {
    /**
    * getFeatures
    * @summary getFeatures
    * @param {number} xVolTenant 
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FulfillmentApiInterface
    */
    getFeaturesRaw(requestParameters: fulfillmentApiParams.GetFeaturesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>>;

    /**
    * getFeatures
    * getFeatures
    */
    getFeatures(requestParameters: fulfillmentApiParams.GetFeaturesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }>;

    /**
    * getPublicSettings
    * @summary getPublicSettings
    * @param {number} xVolTenant 
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FulfillmentApiInterface
    */
    getPublicSettingsRaw(requestParameters: fulfillmentApiParams.GetPublicSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>>;

    /**
    * getPublicSettings
    * getPublicSettings
    */
    getPublicSettings(requestParameters: fulfillmentApiParams.GetPublicSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }>;

    /**
    * getTenantAttributes
    * @summary getTenantAttributes
    * @param {number} xVolTenant 
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof FulfillmentApiInterface
    */
    getTenantAttributesRaw(requestParameters: fulfillmentApiParams.GetTenantAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>>;

    /**
    * getTenantAttributes
    * getTenantAttributes
    */
    getTenantAttributes(requestParameters: fulfillmentApiParams.GetTenantAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }>;

}


/**
 * 
 */
export class FulfillmentApi extends runtime.BaseAPI implements FulfillmentApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * getFeatures
     * getFeatures
     */


    async getFeaturesRaw(requestParameters: fulfillmentApiParams.GetFeaturesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getFeatures.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/features`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * getFeatures
     * getFeatures
     */
    async getFeatures(requestParameters: fulfillmentApiParams.GetFeaturesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }> {
        const response = await this.getFeaturesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getPublicSettings
     * getPublicSettings
     */


    async getPublicSettingsRaw(requestParameters: fulfillmentApiParams.GetPublicSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getPublicSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * getPublicSettings
     * getPublicSettings
     */
    async getPublicSettings(requestParameters: fulfillmentApiParams.GetPublicSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }> {
        const response = await this.getPublicSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getTenantAttributes
     * getTenantAttributes
     */


    async getTenantAttributesRaw(requestParameters: fulfillmentApiParams.GetTenantAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: object; }>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getTenantAttributes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/tenantAttributes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * getTenantAttributes
     * getTenantAttributes
     */
    async getTenantAttributes(requestParameters: fulfillmentApiParams.GetTenantAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: object; }> {
        const response = await this.getTenantAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
