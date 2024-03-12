/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
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
  InventorySettings,
} from '../models';

export interface CreateInventorySettingsRequest {
    responseFields?: string;
    inventorySettings?: InventorySettings;
}

export interface GetInventorySettingsRequest {
    responseFields?: string;
}

export interface UpdateInventorySettingsRequest {
    responseFields?: string;
    inventorySettings?: InventorySettings;
}

/**
 * InventorySettingsApi - interface
 * 
 * @export
 * @interface InventorySettingsApiInterface
 */
export interface InventorySettingsApiInterface {
    /**
     * Creates inventory settings for the site
     * @summary Create Inventory Settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {InventorySettings} [inventorySettings] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventorySettingsApiInterface
     */
    createInventorySettingsRaw(requestParameters: CreateInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySettings>>;

    /**
     * Creates inventory settings for the site
     * Create Inventory Settings
     */
    createInventorySettings(requestParameters: CreateInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySettings>;

    /**
     * Retrieves existing inventory settings for the site which contain inventory export job settings.
     * @summary Get Inventory Settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventorySettingsApiInterface
     */
    getInventorySettingsRaw(requestParameters: GetInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySettings>>;

    /**
     * Retrieves existing inventory settings for the site which contain inventory export job settings.
     * Get Inventory Settings
     */
    getInventorySettings(requestParameters: GetInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySettings>;

    /**
     * Modifies existing inventory settings
     * @summary Update Inventory Settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {InventorySettings} [inventorySettings] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventorySettingsApiInterface
     */
    updateInventorySettingsRaw(requestParameters: UpdateInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySettings>>;

    /**
     * Modifies existing inventory settings
     * Update Inventory Settings
     */
    updateInventorySettings(requestParameters: UpdateInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySettings>;

}

/**
 * 
 */
export class InventorySettingsApi extends runtime.BaseAPI implements InventorySettingsApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates inventory settings for the site
     * Create Inventory Settings
     */


    async createInventorySettingsRaw(requestParameters: CreateInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/inventory/inventorySettings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.inventorySettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates inventory settings for the site
     * Create Inventory Settings
     */
    async createInventorySettings(requestParameters: CreateInventorySettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySettings> {
        const response = await this.createInventorySettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves existing inventory settings for the site which contain inventory export job settings.
     * Get Inventory Settings
     */


    async getInventorySettingsRaw(requestParameters: GetInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/inventory/inventorySettings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves existing inventory settings for the site which contain inventory export job settings.
     * Get Inventory Settings
     */
    async getInventorySettings(requestParameters: GetInventorySettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySettings> {
        const response = await this.getInventorySettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies existing inventory settings
     * Update Inventory Settings
     */


    async updateInventorySettingsRaw(requestParameters: UpdateInventorySettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventorySettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/inventory/inventorySettings`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.inventorySettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies existing inventory settings
     * Update Inventory Settings
     */
    async updateInventorySettings(requestParameters: UpdateInventorySettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventorySettings> {
        const response = await this.updateInventorySettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
