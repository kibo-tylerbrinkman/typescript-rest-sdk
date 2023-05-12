/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
 *
 * The version of the OpenAPI document: v1
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
import {
    CustomRouteSettingsFromJSON,
    CustomRouteSettingsToJSON,
    GeneralSettingsFromJSON,
    GeneralSettingsToJSON,
    TaxableTerritoryFromJSON,
    TaxableTerritoryToJSON,
} from '../models';

export interface GeneralSettingsApiAddTaxableTerritoryRequest {
    taxableTerritory?: TaxableTerritory;
}

export interface GeneralSettingsApiCreateCustomRouteSettingsRequest {
    customRouteSettings?: CustomRouteSettings;
}

export interface GeneralSettingsApiUpdateCustomRouteSettingsRequest {
    customRouteSettings?: CustomRouteSettings;
}

export interface GeneralSettingsApiUpdateGeneralSettingsRequest {
    generalSettings?: GeneralSettings;
}

export interface GeneralSettingsApiUpdateTaxableTerritoriesRequest {
    taxableTerritory?: Array<TaxableTerritory>;
}

/**
 * 
 */
export class GeneralSettingsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates taxble territories for the site.
     * Adds Taxable Territory
     */


    async addTaxableTerritoryRaw(requestParameters: GeneralSettingsApiAddTaxableTerritoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxableTerritory>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/taxableterritories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TaxableTerritoryToJSON(requestParameters.taxableTerritory),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaxableTerritoryFromJSON(jsonValue));
    }

    /**
     * Creates taxble territories for the site.
     * Adds Taxable Territory
     */
    async addTaxableTerritory(requestParameters: GeneralSettingsApiAddTaxableTerritoryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxableTerritory> {
        const response = await this.addTaxableTerritoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates Custom Route Settings on a tenant which includes routes, validators and mappings
     * Create Custom Route Settings
     */


    async createCustomRouteSettingsRaw(requestParameters: GeneralSettingsApiCreateCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomRouteSettings>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/customroutes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomRouteSettingsToJSON(requestParameters.customRouteSettings),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomRouteSettingsFromJSON(jsonValue));
    }

    /**
     * Creates Custom Route Settings on a tenant which includes routes, validators and mappings
     * Create Custom Route Settings
     */
    async createCustomRouteSettings(requestParameters: GeneralSettingsApiCreateCustomRouteSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomRouteSettings> {
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


    async getCustomRouteSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomRouteSettings>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/customroutes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomRouteSettingsFromJSON(jsonValue));
    }

    /**
     * Retrieves Custom Route Settings on a tenant which includes routes, validators and mappings
     * Get Custom Route Settings
     */
    async getCustomRouteSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomRouteSettings> {
        const response = await this.getCustomRouteSettingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieves list of general settings for the site, which includes settings like theme, email, address validation etc.
     * Get General Settings
     */


    async getGeneralSettingsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralSettings>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GeneralSettingsFromJSON(jsonValue));
    }

    /**
     * Retrieves list of general settings for the site, which includes settings like theme, email, address validation etc.
     * Get General Settings
     */
    async getGeneralSettings(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralSettings> {
        const response = await this.getGeneralSettingsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieves list of taxble territories for the site.
     * Get Taxable Territories
     */


    async getTaxableTerritoriesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxableTerritory>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/taxableterritories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxableTerritoryFromJSON));
    }

    /**
     * Retrieves list of taxble territories for the site.
     * Get Taxable Territories
     */
    async getTaxableTerritories(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxableTerritory>> {
        const response = await this.getTaxableTerritoriesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Updates existing custom route settings defined on the tenant
     * Update Custom Route Settings
     */


    async updateCustomRouteSettingsRaw(requestParameters: GeneralSettingsApiUpdateCustomRouteSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomRouteSettings>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/customroutes`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomRouteSettingsToJSON(requestParameters.customRouteSettings),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomRouteSettingsFromJSON(jsonValue));
    }

    /**
     * Updates existing custom route settings defined on the tenant
     * Update Custom Route Settings
     */
    async updateCustomRouteSettings(requestParameters: GeneralSettingsApiUpdateCustomRouteSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomRouteSettings> {
        const response = await this.updateCustomRouteSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates general settings for the site, which includes settings like theme, email, address validation etc
     * Update General Settings
     */


    async updateGeneralSettingsRaw(requestParameters: GeneralSettingsApiUpdateGeneralSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GeneralSettings>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GeneralSettingsToJSON(requestParameters.generalSettings),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GeneralSettingsFromJSON(jsonValue));
    }

    /**
     * Updates general settings for the site, which includes settings like theme, email, address validation etc
     * Update General Settings
     */
    async updateGeneralSettings(requestParameters: GeneralSettingsApiUpdateGeneralSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GeneralSettings> {
        const response = await this.updateGeneralSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates taxble territories for the site.
     * Update Taxable Territories
     */


    async updateTaxableTerritoriesRaw(requestParameters: GeneralSettingsApiUpdateTaxableTerritoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TaxableTerritory>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/general/taxableterritories`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.taxableTerritory.map(TaxableTerritoryToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaxableTerritoryFromJSON));
    }

    /**
     * Updates taxble territories for the site.
     * Update Taxable Territories
     */
    async updateTaxableTerritories(requestParameters: GeneralSettingsApiUpdateTaxableTerritoriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TaxableTerritory>> {
        const response = await this.updateTaxableTerritoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
