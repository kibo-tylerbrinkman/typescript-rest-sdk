/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
  SearchRedirect,
  SearchRedirectCollection,
} from '../models';

export interface AddSearchRedirectRequest {
    fromSystemDefault?: boolean;
    responseFields?: string;
    searchRedirect?: SearchRedirect;
}

export interface DeleteSearchRedirectRequest {
    redirectId: string;
}

export interface GetSearchRedirectRequest {
    redirectId: string;
    responseFields?: string;
}

export interface GetSearchRedirectsRequest {
    responseFields?: string;
}

export interface UpdateSearchRedirectRequest {
    redirectId: string;
    responseFields?: string;
    searchRedirect?: SearchRedirect;
}

/**
 * SearchRedirectApi - interface
 * 
 * @export
 * @interface SearchRedirectApiInterface
 */
export interface SearchRedirectApiInterface {
    /**
     * Adds a search redirect for a specific site.
     * @summary Add search redirect
     * @param {boolean} [fromSystemDefault] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {SearchRedirect} [searchRedirect] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchRedirectApiInterface
     */
    addSearchRedirectRaw(requestParameters: AddSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>>;

    /**
     * Adds a search redirect for a specific site.
     * Add search redirect
     */
    addSearchRedirect(requestParameters: AddSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect>;

    /**
     * Deletes a specific redirect for a site.
     * @summary Delete search redirect
     * @param {string} redirectId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchRedirectApiInterface
     */
    deleteSearchRedirectRaw(requestParameters: DeleteSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>>;

    /**
     * Deletes a specific redirect for a site.
     * Delete search redirect
     */
    deleteSearchRedirect(requestParameters: DeleteSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect>;

    /**
     * Get search redirect by redirect id.
     * @summary Get search redirect
     * @param {string} redirectId 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchRedirectApiInterface
     */
    getSearchRedirectRaw(requestParameters: GetSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>>;

    /**
     * Get search redirect by redirect id.
     * Get search redirect
     */
    getSearchRedirect(requestParameters: GetSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect>;

    /**
     * Get search redirect list.
     * @summary Get search redirects
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchRedirectApiInterface
     */
    getSearchRedirectsRaw(requestParameters: GetSearchRedirectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirectCollection>>;

    /**
     * Get search redirect list.
     * Get search redirects
     */
    getSearchRedirects(requestParameters: GetSearchRedirectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirectCollection>;

    /**
     * Update a search redirect for a specific site.
     * @summary Update search redirect
     * @param {string} redirectId 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {SearchRedirect} [searchRedirect] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchRedirectApiInterface
     */
    updateSearchRedirectRaw(requestParameters: UpdateSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>>;

    /**
     * Update a search redirect for a specific site.
     * Update search redirect
     */
    updateSearchRedirect(requestParameters: UpdateSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect>;

}

/**
 * 
 */
export class SearchRedirectApi extends runtime.BaseAPI implements SearchRedirectApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds a search redirect for a specific site.
     * Add search redirect
     */


    async addSearchRedirectRaw(requestParameters: AddSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>> {
        const queryParameters: any = {};

        if (requestParameters.fromSystemDefault !== undefined) {
            queryParameters['fromSystemDefault'] = requestParameters.fromSystemDefault;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/redirect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.searchRedirect,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds a search redirect for a specific site.
     * Add search redirect
     */
    async addSearchRedirect(requestParameters: AddSearchRedirectRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect> {
        const response = await this.addSearchRedirectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a specific redirect for a site.
     * Delete search redirect
     */


    async deleteSearchRedirectRaw(requestParameters: DeleteSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>> {
        if (requestParameters.redirectId === null || requestParameters.redirectId === undefined) {
            throw new runtime.RequiredError('redirectId','Required parameter requestParameters.redirectId was null or undefined when calling deleteSearchRedirect.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/redirect/{redirectId}`.replace(`{${"redirectId"}}`, encodeURIComponent(String(requestParameters.redirectId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes a specific redirect for a site.
     * Delete search redirect
     */
    async deleteSearchRedirect(requestParameters: DeleteSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect> {
        const response = await this.deleteSearchRedirectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get search redirect by redirect id.
     * Get search redirect
     */


    async getSearchRedirectRaw(requestParameters: GetSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>> {
        if (requestParameters.redirectId === null || requestParameters.redirectId === undefined) {
            throw new runtime.RequiredError('redirectId','Required parameter requestParameters.redirectId was null or undefined when calling getSearchRedirect.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/redirect/{redirectId}`.replace(`{${"redirectId"}}`, encodeURIComponent(String(requestParameters.redirectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get search redirect by redirect id.
     * Get search redirect
     */
    async getSearchRedirect(requestParameters: GetSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect> {
        const response = await this.getSearchRedirectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get search redirect list.
     * Get search redirects
     */


    async getSearchRedirectsRaw(requestParameters: GetSearchRedirectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirectCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/redirect`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get search redirect list.
     * Get search redirects
     */
    async getSearchRedirects(requestParameters: GetSearchRedirectsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirectCollection> {
        const response = await this.getSearchRedirectsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a search redirect for a specific site.
     * Update search redirect
     */


    async updateSearchRedirectRaw(requestParameters: UpdateSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchRedirect>> {
        if (requestParameters.redirectId === null || requestParameters.redirectId === undefined) {
            throw new runtime.RequiredError('redirectId','Required parameter requestParameters.redirectId was null or undefined when calling updateSearchRedirect.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/search/redirect/{redirectId}`.replace(`{${"redirectId"}}`, encodeURIComponent(String(requestParameters.redirectId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.searchRedirect,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update a search redirect for a specific site.
     * Update search redirect
     */
    async updateSearchRedirect(requestParameters: UpdateSearchRedirectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchRedirect> {
        const response = await this.updateSearchRedirectRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
