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
  CustomRouteSettings,
  GeneralSettings,
  TaxableTerritory,
} from '../models';

export interface AddTaxableTerritoryRequest {
    responseFields?: string;
    taxableTerritory?: TaxableTerritory;
}

export interface CreateCustomRouteSettingsRequest {
    responseFields?: string;
    customRouteSettings?: CustomRouteSettings;
}

export interface GetCustomRouteSettingsRequest {
    responseFields?: string;
}

export interface GetGeneralSettingsRequest {
    responseFields?: string;
}

export interface GetTaxableTerritoriesRequest {
    responseFields?: string;
}

export interface UpdateCustomRouteSettingsRequest {
    responseFields?: string;
    customRouteSettings?: CustomRouteSettings;
}

export interface UpdateGeneralSettingsRequest {
    responseFields?: string;
    generalSettings?: GeneralSettings;
}

export interface UpdateTaxableTerritoriesRequest {
    responseFields?: string;
    taxableTerritory?: Array<TaxableTerritory>;
}

/**
 * GeneralSettingsApi - interface
 * 
 * @export
 * @interface GeneralSettingsApiInterface
 */
export interface GeneralSettingsApiInterface {
    /**
     * Creates taxble territories for the site.
     * @summary Adds Taxable Territory
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {TaxableTerritory} [taxableTerritory] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralSettingsApiInterface
     */
    addTaxableTerritoryRaw(requestParameters: AddTaxableTerritoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxableTerritory>>;

    /**
     * Creates taxble territories for the site.
     * Adds Taxable Territory
     */
    addTaxableTerritory(requestParameters: AddTaxableTerritoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxableTerritory>;

    /**
     * Creates Custom Route Settings on a tenant which includes routes, validators and mappings
     * @summary Create Custom Route Settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {CustomRouteSettings} [customRouteSettings] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralSettingsApiInterface
     */
    createCustomRouteSettingsRaw(requestParameters: CreateCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomRouteSettings>>;

    /**
     * Creates Custom Route Settings on a tenant which includes routes, validators and mappings
     * Create Custom Route Settings
     */
    createCustomRouteSettings(requestParameters: CreateCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomRouteSettings>;

    /**
     * Deletes all existing custom route settings defined on the tenant
     * @summary Delete Custom Route Settings
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralSettingsApiInterface
     */
    deleteCustomRouteSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Deletes all existing custom route settings defined on the tenant
     * Delete Custom Route Settings
     */
    deleteCustomRouteSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Retrieves Custom Route Settings on a tenant which includes routes, validators and mappings
     * @summary Get Custom Route Settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralSettingsApiInterface
     */
    getCustomRouteSettingsRaw(requestParameters: GetCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomRouteSettings>>;

    /**
     * Retrieves Custom Route Settings on a tenant which includes routes, validators and mappings
     * Get Custom Route Settings
     */
    getCustomRouteSettings(requestParameters: GetCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomRouteSettings>;

    /**
     * Retrieves list of general settings for the site, which includes settings like theme, email, address validation etc.
     * @summary Get General Settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralSettingsApiInterface
     */
    getGeneralSettingsRaw(requestParameters: GetGeneralSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralSettings>>;

    /**
     * Retrieves list of general settings for the site, which includes settings like theme, email, address validation etc.
     * Get General Settings
     */
    getGeneralSettings(requestParameters: GetGeneralSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralSettings>;

    /**
     * Retrieves list of taxble territories for the site.
     * @summary Get Taxable Territories
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralSettingsApiInterface
     */
    getTaxableTerritoriesRaw(requestParameters: GetTaxableTerritoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxableTerritory>>>;

    /**
     * Retrieves list of taxble territories for the site.
     * Get Taxable Territories
     */
    getTaxableTerritories(requestParameters: GetTaxableTerritoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxableTerritory>>;

    /**
     * Updates existing custom route settings defined on the tenant
     * @summary Update Custom Route Settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {CustomRouteSettings} [customRouteSettings] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralSettingsApiInterface
     */
    updateCustomRouteSettingsRaw(requestParameters: UpdateCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomRouteSettings>>;

    /**
     * Updates existing custom route settings defined on the tenant
     * Update Custom Route Settings
     */
    updateCustomRouteSettings(requestParameters: UpdateCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomRouteSettings>;

    /**
     * Updates general settings for the site, which includes settings like theme, email, address validation etc
     * @summary Update General Settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {GeneralSettings} [generalSettings] Properties of the updated general settings.  Required properties: WebsiteName, SiteTimeZone, SiteTimeFormat, SenderEmailAddress, and ReplyEmailAddress.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralSettingsApiInterface
     */
    updateGeneralSettingsRaw(requestParameters: UpdateGeneralSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralSettings>>;

    /**
     * Updates general settings for the site, which includes settings like theme, email, address validation etc
     * Update General Settings
     */
    updateGeneralSettings(requestParameters: UpdateGeneralSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralSettings>;

    /**
     * Updates taxble territories for the site.
     * @summary Update Taxable Territories
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {Array<TaxableTerritory>} [taxableTerritory] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralSettingsApiInterface
     */
    updateTaxableTerritoriesRaw(requestParameters: UpdateTaxableTerritoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxableTerritory>>>;

    /**
     * Updates taxble territories for the site.
     * Update Taxable Territories
     */
    updateTaxableTerritories(requestParameters: UpdateTaxableTerritoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxableTerritory>>;

}

/**
 * 
 */
export class GeneralSettingsApi extends runtime.BaseAPI implements GeneralSettingsApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates taxble territories for the site.
     * Adds Taxable Territory
     */


    async addTaxableTerritoryRaw(requestParameters: AddTaxableTerritoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxableTerritory>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/taxableterritories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.taxableTerritory,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates taxble territories for the site.
     * Adds Taxable Territory
     */
    async addTaxableTerritory(requestParameters: AddTaxableTerritoryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxableTerritory> {
        const response = await this.addTaxableTerritoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates Custom Route Settings on a tenant which includes routes, validators and mappings
     * Create Custom Route Settings
     */


    async createCustomRouteSettingsRaw(requestParameters: CreateCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomRouteSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/customroutes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.customRouteSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates Custom Route Settings on a tenant which includes routes, validators and mappings
     * Create Custom Route Settings
     */
    async createCustomRouteSettings(requestParameters: CreateCustomRouteSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomRouteSettings> {
        const response = await this.createCustomRouteSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes all existing custom route settings defined on the tenant
     * Delete Custom Route Settings
     */


    async deleteCustomRouteSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/customroutes`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes all existing custom route settings defined on the tenant
     * Delete Custom Route Settings
     */
    async deleteCustomRouteSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomRouteSettingsRaw(initOverrides);
    }

    /**
     * Retrieves Custom Route Settings on a tenant which includes routes, validators and mappings
     * Get Custom Route Settings
     */


    async getCustomRouteSettingsRaw(requestParameters: GetCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomRouteSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/customroutes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves Custom Route Settings on a tenant which includes routes, validators and mappings
     * Get Custom Route Settings
     */
    async getCustomRouteSettings(requestParameters: GetCustomRouteSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomRouteSettings> {
        const response = await this.getCustomRouteSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves list of general settings for the site, which includes settings like theme, email, address validation etc.
     * Get General Settings
     */


    async getGeneralSettingsRaw(requestParameters: GetGeneralSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves list of general settings for the site, which includes settings like theme, email, address validation etc.
     * Get General Settings
     */
    async getGeneralSettings(requestParameters: GetGeneralSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralSettings> {
        const response = await this.getGeneralSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves list of taxble territories for the site.
     * Get Taxable Territories
     */


    async getTaxableTerritoriesRaw(requestParameters: GetTaxableTerritoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxableTerritory>>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/taxableterritories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves list of taxble territories for the site.
     * Get Taxable Territories
     */
    async getTaxableTerritories(requestParameters: GetTaxableTerritoriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxableTerritory>> {
        const response = await this.getTaxableTerritoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates existing custom route settings defined on the tenant
     * Update Custom Route Settings
     */


    async updateCustomRouteSettingsRaw(requestParameters: UpdateCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomRouteSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/customroutes`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.customRouteSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates existing custom route settings defined on the tenant
     * Update Custom Route Settings
     */
    async updateCustomRouteSettings(requestParameters: UpdateCustomRouteSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomRouteSettings> {
        const response = await this.updateCustomRouteSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates general settings for the site, which includes settings like theme, email, address validation etc
     * Update General Settings
     */


    async updateGeneralSettingsRaw(requestParameters: UpdateGeneralSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.generalSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates general settings for the site, which includes settings like theme, email, address validation etc
     * Update General Settings
     */
    async updateGeneralSettings(requestParameters: UpdateGeneralSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralSettings> {
        const response = await this.updateGeneralSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates taxble territories for the site.
     * Update Taxable Territories
     */


    async updateTaxableTerritoriesRaw(requestParameters: UpdateTaxableTerritoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxableTerritory>>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/taxableterritories`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.taxableTerritory,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates taxble territories for the site.
     * Update Taxable Territories
     */
    async updateTaxableTerritories(requestParameters: UpdateTaxableTerritoriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxableTerritory>> {
        const response = await this.updateTaxableTerritoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
