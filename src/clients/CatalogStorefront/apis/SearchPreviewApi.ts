/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
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
  FindProductsPreviewParameters,
  ProductSearchPreviewResult,
} from '../models';

export interface SearchPreviewAsyncRequest {
    responseFields?: string;
    findProductsPreviewParameters?: FindProductsPreviewParameters;
}

export interface SiteSearchPreviewAsyncRequest {
    responseFields?: string;
    findProductsPreviewParameters?: FindProductsPreviewParameters;
}

/**
 * SearchPreviewApi - interface
 * 
 * @export
 * @interface SearchPreviewApiInterface
 */
export interface SearchPreviewApiInterface {
    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * @summary Search preview
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {FindProductsPreviewParameters} [findProductsPreviewParameters] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchPreviewApiInterface
     */
    searchPreviewAsyncRaw(requestParameters: SearchPreviewAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSearchPreviewResult>>;

    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * Search preview
     */
    searchPreviewAsync(requestParameters: SearchPreviewAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSearchPreviewResult>;

    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * @summary Site search preview
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {FindProductsPreviewParameters} [findProductsPreviewParameters] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchPreviewApiInterface
     */
    siteSearchPreviewAsyncRaw(requestParameters: SiteSearchPreviewAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSearchPreviewResult>>;

    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * Site search preview
     */
    siteSearchPreviewAsync(requestParameters: SiteSearchPreviewAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSearchPreviewResult>;

}

/**
 * 
 */
export class SearchPreviewApi extends runtime.BaseAPI implements SearchPreviewApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * Search preview
     */


    async searchPreviewAsyncRaw(requestParameters: SearchPreviewAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSearchPreviewResult>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/storefront/productsearch/preview`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.findProductsPreviewParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * Search preview
     */
    async searchPreviewAsync(requestParameters: SearchPreviewAsyncRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSearchPreviewResult> {
        const response = await this.searchPreviewAsyncRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * Site search preview
     */


    async siteSearchPreviewAsyncRaw(requestParameters: SiteSearchPreviewAsyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductSearchPreviewResult>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/storefront/productsearch/sitesearchpreview`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.findProductsPreviewParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Though this endpoint only returns data, the decision has been made to make it a POST because the request body will be larger than what a url length can contain.
     * Site search preview
     */
    async siteSearchPreviewAsync(requestParameters: SiteSearchPreviewAsyncRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductSearchPreviewResult> {
        const response = await this.siteSearchPreviewAsyncRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
