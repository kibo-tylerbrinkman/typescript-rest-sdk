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
  QuickEditChangeProductTypeActions,
  QuickEditChangeProductTypeResponse,
  QuickEditProductActions,
  QuickEditProductInCatalogActions,
  QuickEditProductPropertyActions,
  QuickEditResponse,
} from '../models';

export interface ProductQuickEditApiUpdateProductInCatalogRequest {
    responseFields?: string;
    quickEditProductInCatalogActions?: QuickEditProductInCatalogActions;
}

export interface ProductQuickEditApiUpdateProductPropertiesRequest {
    responseFields?: string;
    quickEditProductPropertyActions?: QuickEditProductPropertyActions;
}

export interface ProductQuickEditApiUpdateProductTypeRequest {
    responseFields?: string;
    quickEditChangeProductTypeActions?: QuickEditChangeProductTypeActions;
}

export interface ProductQuickEditApiUpdateProductsRequest {
    responseFields?: string;
    quickEditProductActions?: QuickEditProductActions;
}

/**
 * ProductQuickEditApi - interface
 * 
 * @export
 * @interface ProductQuickEditApiInterface
 */
export interface ProductQuickEditApiInterface {
    /**
     *  Values will be added not replaced.
     * @summary Endpoint  is used to update product in Catalog
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {QuickEditProductInCatalogActions} [quickEditProductInCatalogActions] Mozu.ProductAdmin.Contracts.QuickEditProductInCatalogActions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductQuickEditApiInterface
     */
    updateProductInCatalogRaw(requestParameters: ProductQuickEditApiUpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>>;

    /**
     *  Values will be added not replaced.
     * Endpoint  is used to update product in Catalog
     */
    updateProductInCatalog(requestParameters: ProductQuickEditApiUpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse>;

    /**
     * 
     * @summary Endpoint used to apply properties updates  Values will be added not replaced
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {QuickEditProductPropertyActions} [quickEditProductPropertyActions] Mozu.ProductAdmin.Contracts.QuickEditProductPropertyActions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductQuickEditApiInterface
     */
    updateProductPropertiesRaw(requestParameters: ProductQuickEditApiUpdateProductPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>>;

    /**
     * 
     * Endpoint used to apply properties updates  Values will be added not replaced
     */
    updateProductProperties(requestParameters: ProductQuickEditApiUpdateProductPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse>;

    /**
     * Endpoint used to apply updates for product type
     * @summary Endpoint used to apply updates for product type
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {QuickEditChangeProductTypeActions} [quickEditChangeProductTypeActions] Mozu.ProductAdmin.Contracts.QuickEditChangeProductTypeActions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductQuickEditApiInterface
     */
    updateProductTypeRaw(requestParameters: ProductQuickEditApiUpdateProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditChangeProductTypeResponse>>;

    /**
     * Endpoint used to apply updates for product type
     * Endpoint used to apply updates for product type
     */
    updateProductType(requestParameters: ProductQuickEditApiUpdateProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditChangeProductTypeResponse>;

    /**
     * 
     * @summary Endpoint used to apply top level product updates  Downside is that the whole product has to be hydrated
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {QuickEditProductActions} [quickEditProductActions] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductQuickEditApiInterface
     */
    updateProductsRaw(requestParameters: ProductQuickEditApiUpdateProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>>;

    /**
     * 
     * Endpoint used to apply top level product updates  Downside is that the whole product has to be hydrated
     */
    updateProducts(requestParameters: ProductQuickEditApiUpdateProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse>;

}

/**
 * 
 */
export class ProductQuickEditApi extends runtime.BaseAPI implements ProductQuickEditApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     *  Values will be added not replaced.
     * Endpoint  is used to update product in Catalog
     */


    async updateProductInCatalogRaw(requestParameters: ProductQuickEditApiUpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/quickedit/products/productincatalog`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.quickEditProductInCatalogActions,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     *  Values will be added not replaced.
     * Endpoint  is used to update product in Catalog
     */
    async updateProductInCatalog(requestParameters: ProductQuickEditApiUpdateProductInCatalogRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse> {
        const response = await this.updateProductInCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Endpoint used to apply properties updates  Values will be added not replaced
     */


    async updateProductPropertiesRaw(requestParameters: ProductQuickEditApiUpdateProductPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/quickedit/products/properties`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.quickEditProductPropertyActions,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Endpoint used to apply properties updates  Values will be added not replaced
     */
    async updateProductProperties(requestParameters: ProductQuickEditApiUpdateProductPropertiesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse> {
        const response = await this.updateProductPropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Endpoint used to apply updates for product type
     * Endpoint used to apply updates for product type
     */


    async updateProductTypeRaw(requestParameters: ProductQuickEditApiUpdateProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditChangeProductTypeResponse>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/quickedit/products/producttype`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.quickEditChangeProductTypeActions,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Endpoint used to apply updates for product type
     * Endpoint used to apply updates for product type
     */
    async updateProductType(requestParameters: ProductQuickEditApiUpdateProductTypeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditChangeProductTypeResponse> {
        const response = await this.updateProductTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Endpoint used to apply top level product updates  Downside is that the whole product has to be hydrated
     */


    async updateProductsRaw(requestParameters: ProductQuickEditApiUpdateProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/quickedit/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.quickEditProductActions,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Endpoint used to apply top level product updates  Downside is that the whole product has to be hydrated
     */
    async updateProducts(requestParameters: ProductQuickEditApiUpdateProductsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse> {
        const response = await this.updateProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
