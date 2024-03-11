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
  CartSettings,
} from '../models';

export interface CartSettingsApiCreateCartSettingsRequest {
    responseFields?: string;
    cartSettings?: CartSettings;
}

export interface CartSettingsApiGetCartSettingsRequest {
    responseFields?: string;
}

export interface CartSettingsApiUpdateCartSettingsRequest {
    responseFields?: string;
    cartSettings?: CartSettings;
}

/**
 * CartSettingsApi - interface
 * 
 * @export
 * @interface CartSettingsApiInterface
 */
export interface CartSettingsApiInterface {
    /**
     * Creates new cart settings for a site
     * @summary Create cart settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {CartSettings} [cartSettings] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CartSettingsApiInterface
     */
    createCartSettingsRaw(requestParameters: CartSettingsApiCreateCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CartSettings>>;

    /**
     * Creates new cart settings for a site
     * Create cart settings
     */
    createCartSettings(requestParameters: CartSettingsApiCreateCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CartSettings>;

    /**
     * Retrieves existing cart settings for a site
     * @summary Retrieves existing cart settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CartSettingsApiInterface
     */
    getCartSettingsRaw(requestParameters: CartSettingsApiGetCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CartSettings>>;

    /**
     * Retrieves existing cart settings for a site
     * Retrieves existing cart settings
     */
    getCartSettings(requestParameters: CartSettingsApiGetCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CartSettings>;

    /**
     * Modifies existing cart settings for a site
     * @summary Update Cart Settings
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {CartSettings} [cartSettings] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CartSettingsApiInterface
     */
    updateCartSettingsRaw(requestParameters: CartSettingsApiUpdateCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CartSettings>>;

    /**
     * Modifies existing cart settings for a site
     * Update Cart Settings
     */
    updateCartSettings(requestParameters: CartSettingsApiUpdateCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CartSettings>;

}

/**
 * 
 */
export class CartSettingsApi extends runtime.BaseAPI implements CartSettingsApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates new cart settings for a site
     * Create cart settings
     */


    async createCartSettingsRaw(requestParameters: CartSettingsApiCreateCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CartSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/cart/cartsettings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.cartSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Creates new cart settings for a site
     * Create cart settings
     */
    async createCartSettings(requestParameters: CartSettingsApiCreateCartSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CartSettings> {
        const response = await this.createCartSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves existing cart settings for a site
     * Retrieves existing cart settings
     */


    async getCartSettingsRaw(requestParameters: CartSettingsApiGetCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CartSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/cart/cartsettings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves existing cart settings for a site
     * Retrieves existing cart settings
     */
    async getCartSettings(requestParameters: CartSettingsApiGetCartSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CartSettings> {
        const response = await this.getCartSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies existing cart settings for a site
     * Update Cart Settings
     */


    async updateCartSettingsRaw(requestParameters: CartSettingsApiUpdateCartSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CartSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/cart/cartsettings`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.cartSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies existing cart settings for a site
     * Update Cart Settings
     */
    async updateCartSettings(requestParameters: CartSettingsApiUpdateCartSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CartSettings> {
        const response = await this.updateCartSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
