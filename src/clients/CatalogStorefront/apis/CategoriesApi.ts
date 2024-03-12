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
  CatalogRuntimesCategory,
  CatalogRuntimesCategoryCollection,
  CatalogRuntimesCategoryPagedCollection,
} from '../models';


export namespace categoriesApiParams { 
    export interface StorefrontGetCategoriesRequest {
        filter?: string;
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        includeAttributes?: boolean;
        responseFields?: string;
    }
    export interface StorefrontGetCategoryRequest {
        categoryId: number;
        allowInactive?: boolean;
        includeAttributes?: boolean;
        responseFields?: string;
    }
    export interface StorefrontGetCategoryTreeRequest {
        includeAttributes?: boolean;
        responseFields?: string;
    }
}
/**
* CategoriesApiService - interface
* 
* @export
* @interface CategoriesApi
*/
export interface CategoriesApiService {
    /**
    * Retrieves a list of product categories that appear on the storefront as a flat list. Hidden categories do not appear in the list.
    * @summary Get a list of product categories
    * @param {string} [filter] Optional. A set of filter expressions representing the search parameters for a query:              eq&#x3D;equals, ne&#x3D;not equals, gt&#x3D;greater than, lt &#x3D; less than, gt &#x3D; greater than or equals, le &#x3D; less than or equals,              sw &#x3D; starts with, or cont &#x3D; contains.
    * @param {number} [startIndex] Optional. Used to page results from a query.              Indicates the zero-based offset in the complete result set where the returned entities begin.              For example, with a pageSize of 25, to get the 51st through the 75th items, startIndex&#x3D;3.              The default value is 0.
    * @param {number} [pageSize] Optional. Used to page results from a query.              Indicates the maximum number of entities to return from a query. Default value: 20. Maximum value: 200.
    * @param {string} [sortBy] The element to sort the results by and the order in which the results appear.              Either ascending order (a-z) which accepts \&#39;asc\&#39; or \&#39;ASC\&#39; or descending order (z-a) which accepts \&#39;desc\&#39; or \&#39;DESC\&#39;.              The sortBy parameter follows an available property.              For example, to sort results by category ID ascending, use sortBy&#x3D;categoryId asc.
    * @param {boolean} [includeAttributes] Optional. Used to include Category Attributes in response
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    storefrontGetCategoriesRaw(requestParameters: categoriesApiParams.StorefrontGetCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogRuntimesCategoryPagedCollection>>;

    /**
    * Retrieves a list of product categories that appear on the storefront as a flat list. Hidden categories do not appear in the list.
    * Get a list of product categories
    */
    storefrontGetCategories(requestParameters: categoriesApiParams.StorefrontGetCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogRuntimesCategoryPagedCollection>;

    /**
    * Retrieves the name and details of a category that appears on the storefront. 
    * @summary Get a product category
    * @param {number} categoryId Required. Unique identifier of the category whose details you want to get.
    * @param {boolean} [allowInactive] Optional. Allow the return of items with the IsDisplayed flag set to false.
    * @param {boolean} [includeAttributes] Optional. If True, Return Category Attributes collection with Category
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    storefrontGetCategoryRaw(requestParameters: categoriesApiParams.StorefrontGetCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogRuntimesCategory>>;

    /**
    * Retrieves the name and details of a category that appears on the storefront. 
    * Get a product category
    */
    storefrontGetCategory(requestParameters: categoriesApiParams.StorefrontGetCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogRuntimesCategory>;

    /**
    * Retrieves the list of product categories that appear on the storefront organized in a hierarchical format. Hidden categories do not appear in the list.
    * @summary Get a category tree
    * @param {boolean} [includeAttributes] Optional. If True, Return Category Attributes collection with Category
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CategoriesApiInterface
    */
    storefrontGetCategoryTreeRaw(requestParameters: categoriesApiParams.StorefrontGetCategoryTreeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogRuntimesCategoryCollection>>;

    /**
    * Retrieves the list of product categories that appear on the storefront organized in a hierarchical format. Hidden categories do not appear in the list.
    * Get a category tree
    */
    storefrontGetCategoryTree(requestParameters: categoriesApiParams.StorefrontGetCategoryTreeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogRuntimesCategoryCollection>;

}


/**
 * 
 */
export class CategoriesApi extends runtime.BaseAPI implements CategoriesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Retrieves a list of product categories that appear on the storefront as a flat list. Hidden categories do not appear in the list.
     * Get a list of product categories
     */


    async storefrontGetCategoriesRaw(requestParameters: categoriesApiParams.StorefrontGetCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogRuntimesCategoryPagedCollection>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.includeAttributes !== undefined) {
            queryParameters['includeAttributes'] = requestParameters.includeAttributes;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/storefront/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of product categories that appear on the storefront as a flat list. Hidden categories do not appear in the list.
     * Get a list of product categories
     */
    async storefrontGetCategories(requestParameters: categoriesApiParams.StorefrontGetCategoriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogRuntimesCategoryPagedCollection> {
        const response = await this.storefrontGetCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the name and details of a category that appears on the storefront. 
     * Get a product category
     */


    async storefrontGetCategoryRaw(requestParameters: categoriesApiParams.StorefrontGetCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogRuntimesCategory>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling storefrontGetCategory.');
        }

        const queryParameters: any = {};

        if (requestParameters.allowInactive !== undefined) {
            queryParameters['allowInactive'] = requestParameters.allowInactive;
        }

        if (requestParameters.includeAttributes !== undefined) {
            queryParameters['includeAttributes'] = requestParameters.includeAttributes;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/storefront/categories/{categoryId}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the name and details of a category that appears on the storefront. 
     * Get a product category
     */
    async storefrontGetCategory(requestParameters: categoriesApiParams.StorefrontGetCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogRuntimesCategory> {
        const response = await this.storefrontGetCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the list of product categories that appear on the storefront organized in a hierarchical format. Hidden categories do not appear in the list.
     * Get a category tree
     */


    async storefrontGetCategoryTreeRaw(requestParameters: categoriesApiParams.StorefrontGetCategoryTreeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CatalogRuntimesCategoryCollection>> {
        const queryParameters: any = {};

        if (requestParameters.includeAttributes !== undefined) {
            queryParameters['includeAttributes'] = requestParameters.includeAttributes;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/storefront/categories/tree`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the list of product categories that appear on the storefront organized in a hierarchical format. Hidden categories do not appear in the list.
     * Get a category tree
     */
    async storefrontGetCategoryTree(requestParameters: categoriesApiParams.StorefrontGetCategoryTreeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CatalogRuntimesCategoryCollection> {
        const response = await this.storefrontGetCategoryTreeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
