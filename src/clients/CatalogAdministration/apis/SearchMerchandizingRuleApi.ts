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
  CatalogAdminsSearchMerchandizingRule,
  SearchMerchandizingRuleCollection,
} from '../models';

export interface CloneSearchMerchandizingRuleRequest {
    code: string;
    responseFields?: string;
}

export interface CreateSearchMerchandizingRuleRequest {
    responseFields?: string;
    catalogAdminsSearchMerchandizingRule?: CatalogAdminsSearchMerchandizingRule;
}

export interface DeleteSearchMerchandizingRuleRequest {
    code: string;
}

export interface GetSearchMerchandizingRuleRequest {
    code: string;
    responseFields?: string;
}

export interface GetSearchMerchandizingRulesRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
    responseGroups?: string;
    q?: string;
    responseFields?: string;
}

export interface UpdateSearchMerchandizingRuleRequest {
    code: string;
    responseFields?: string;
    catalogAdminsSearchMerchandizingRule?: CatalogAdminsSearchMerchandizingRule;
}

/**
 * SearchMerchandizingRuleApi - interface
 * 
 * @export
 * @interface SearchMerchandizingRuleApiInterface
 */
export interface SearchMerchandizingRuleApiInterface {
    /**
     * Clone Search Merchandizing Rule
     * @summary Clone Search Merchandizing Rule
     * @param {string} code 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchMerchandizingRuleApiInterface
     */
    cloneSearchMerchandizingRuleRaw(requestParameters: CloneSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>>;

    /**
     * Clone Search Merchandizing Rule
     * Clone Search Merchandizing Rule
     */
    cloneSearchMerchandizingRule(requestParameters: CloneSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule>;

    /**
     * Create Search Merchandizing Rule
     * @summary Create Search Merchandizing Rule
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {CatalogAdminsSearchMerchandizingRule} [catalogAdminsSearchMerchandizingRule] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchMerchandizingRuleApiInterface
     */
    createSearchMerchandizingRuleRaw(requestParameters: CreateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>>;

    /**
     * Create Search Merchandizing Rule
     * Create Search Merchandizing Rule
     */
    createSearchMerchandizingRule(requestParameters: CreateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule>;

    /**
     * Delete Search Merchandizing Rule
     * @summary Delete Search Merchandizing Rule
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchMerchandizingRuleApiInterface
     */
    deleteSearchMerchandizingRuleRaw(requestParameters: DeleteSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete Search Merchandizing Rule
     * Delete Search Merchandizing Rule
     */
    deleteSearchMerchandizingRule(requestParameters: DeleteSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Get Search Merchandizing Rule
     * @summary Get Search Merchandizing Rule
     * @param {string} code 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchMerchandizingRuleApiInterface
     */
    getSearchMerchandizingRuleRaw(requestParameters: GetSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>>;

    /**
     * Get Search Merchandizing Rule
     * Get Search Merchandizing Rule
     */
    getSearchMerchandizingRule(requestParameters: GetSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule>;

    /**
     * Get Search Merchandizing Rules
     * @summary Get Search Merchandizing Rules
     * @param {number} [startIndex] 
     * @param {number} [pageSize] 
     * @param {string} [sortBy] 
     * @param {string} [filter] 
     * @param {string} [responseGroups] 
     * @param {string} [q] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchMerchandizingRuleApiInterface
     */
    getSearchMerchandizingRulesRaw(requestParameters: GetSearchMerchandizingRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchMerchandizingRuleCollection>>;

    /**
     * Get Search Merchandizing Rules
     * Get Search Merchandizing Rules
     */
    getSearchMerchandizingRules(requestParameters: GetSearchMerchandizingRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchMerchandizingRuleCollection>;

    /**
     * Update Search Merchandizing Rule
     * @summary Update Search Merchandizing Rule
     * @param {string} code 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {CatalogAdminsSearchMerchandizingRule} [catalogAdminsSearchMerchandizingRule] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchMerchandizingRuleApiInterface
     */
    updateSearchMerchandizingRuleRaw(requestParameters: UpdateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>>;

    /**
     * Update Search Merchandizing Rule
     * Update Search Merchandizing Rule
     */
    updateSearchMerchandizingRule(requestParameters: UpdateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule>;

}

/**
 * 
 */
export class SearchMerchandizingRuleApi extends runtime.BaseAPI implements SearchMerchandizingRuleApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Clone Search Merchandizing Rule
     * Clone Search Merchandizing Rule
     */


    async cloneSearchMerchandizingRuleRaw(requestParameters: CloneSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling cloneSearchMerchandizingRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules/{code}/clone`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Clone Search Merchandizing Rule
     * Clone Search Merchandizing Rule
     */
    async cloneSearchMerchandizingRule(requestParameters: CloneSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule> {
        const response = await this.cloneSearchMerchandizingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Search Merchandizing Rule
     * Create Search Merchandizing Rule
     */


    async createSearchMerchandizingRuleRaw(requestParameters: CreateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsSearchMerchandizingRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create Search Merchandizing Rule
     * Create Search Merchandizing Rule
     */
    async createSearchMerchandizingRule(requestParameters: CreateSearchMerchandizingRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule> {
        const response = await this.createSearchMerchandizingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Search Merchandizing Rule
     * Delete Search Merchandizing Rule
     */


    async deleteSearchMerchandizingRuleRaw(requestParameters: DeleteSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteSearchMerchandizingRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Search Merchandizing Rule
     * Delete Search Merchandizing Rule
     */
    async deleteSearchMerchandizingRule(requestParameters: DeleteSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteSearchMerchandizingRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Get Search Merchandizing Rule
     * Get Search Merchandizing Rule
     */


    async getSearchMerchandizingRuleRaw(requestParameters: GetSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getSearchMerchandizingRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Search Merchandizing Rule
     * Get Search Merchandizing Rule
     */
    async getSearchMerchandizingRule(requestParameters: GetSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule> {
        const response = await this.getSearchMerchandizingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Search Merchandizing Rules
     * Get Search Merchandizing Rules
     */


    async getSearchMerchandizingRulesRaw(requestParameters: GetSearchMerchandizingRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchMerchandizingRuleCollection>> {
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

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Search Merchandizing Rules
     * Get Search Merchandizing Rules
     */
    async getSearchMerchandizingRules(requestParameters: GetSearchMerchandizingRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchMerchandizingRuleCollection> {
        const response = await this.getSearchMerchandizingRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Search Merchandizing Rule
     * Update Search Merchandizing Rule
     */


    async updateSearchMerchandizingRuleRaw(requestParameters: UpdateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogAdminsSearchMerchandizingRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateSearchMerchandizingRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchmerchandizingrules/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.catalogAdminsSearchMerchandizingRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update Search Merchandizing Rule
     * Update Search Merchandizing Rule
     */
    async updateSearchMerchandizingRule(requestParameters: UpdateSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogAdminsSearchMerchandizingRule> {
        const response = await this.updateSearchMerchandizingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
