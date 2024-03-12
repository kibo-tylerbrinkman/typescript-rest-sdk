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


export namespace productQuickEditApiParams { 
    export interface UpdateProductInCatalogRequest {
        responseFields?: string;
        quickEditProductInCatalogActions?: QuickEditProductInCatalogActions;
    }
    export interface UpdateProductPropertiesRequest {
        responseFields?: string;
        quickEditProductPropertyActions?: QuickEditProductPropertyActions;
    }
    export interface UpdateProductTypeRequest {
        responseFields?: string;
        quickEditChangeProductTypeActions?: QuickEditChangeProductTypeActions;
    }
    export interface UpdateProductsRequest {
        responseFields?: string;
        quickEditProductActions?: QuickEditProductActions;
    }
}
/**
* ProductQuickEditApiService - interface
* 
* @export
* @interface ProductQuickEditApi
*/
export interface ProductQuickEditApiService {
    /**
    *  Values will be added not replaced.
    * @summary Endpoint  is used to update product in Catalog
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {QuickEditProductInCatalogActions} [quickEditProductInCatalogActions] Mozu.ProductAdmin.Contracts.QuickEditProductInCatalogActions
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductQuickEditApiInterface
    */
    updateProductInCatalogRaw(requestParameters: productQuickEditApiParams.UpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>>;

    /**
    *  Values will be added not replaced.
    * Endpoint  is used to update product in Catalog
    */
    updateProductInCatalog(requestParameters: productQuickEditApiParams.UpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse>;

    /**
    * 
    * @summary Endpoint used to apply properties updates  Values will be added not replaced
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {QuickEditProductPropertyActions} [quickEditProductPropertyActions] Mozu.ProductAdmin.Contracts.QuickEditProductPropertyActions
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductQuickEditApiInterface
    */
    updateProductPropertiesRaw(requestParameters: productQuickEditApiParams.UpdateProductPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>>;

    /**
    * 
    * Endpoint used to apply properties updates  Values will be added not replaced
    */
    updateProductProperties(requestParameters: productQuickEditApiParams.UpdateProductPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse>;

    /**
    * Endpoint used to apply updates for product type
    * @summary Endpoint used to apply updates for product type
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {QuickEditChangeProductTypeActions} [quickEditChangeProductTypeActions] Mozu.ProductAdmin.Contracts.QuickEditChangeProductTypeActions
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductQuickEditApiInterface
    */
    updateProductTypeRaw(requestParameters: productQuickEditApiParams.UpdateProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditChangeProductTypeResponse>>;

    /**
    * Endpoint used to apply updates for product type
    * Endpoint used to apply updates for product type
    */
    updateProductType(requestParameters: productQuickEditApiParams.UpdateProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditChangeProductTypeResponse>;

    /**
    * 
    * @summary Endpoint used to apply top level product updates  Downside is that the whole product has to be hydrated
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {QuickEditProductActions} [quickEditProductActions] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ProductQuickEditApiInterface
    */
    updateProductsRaw(requestParameters: productQuickEditApiParams.UpdateProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>>;

    /**
    * 
    * Endpoint used to apply top level product updates  Downside is that the whole product has to be hydrated
    */
    updateProducts(requestParameters: productQuickEditApiParams.UpdateProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse>;

}


/**
 * 
 */
export class ProductQuickEditApi extends runtime.BaseAPI implements ProductQuickEditApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     *  Values will be added not replaced.
     * Endpoint  is used to update product in Catalog
     */


    async updateProductInCatalogRaw(requestParameters: productQuickEditApiParams.UpdateProductInCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>> {
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
    async updateProductInCatalog(requestParameters: productQuickEditApiParams.UpdateProductInCatalogRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse> {
        const response = await this.updateProductInCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Endpoint used to apply properties updates  Values will be added not replaced
     */


    async updateProductPropertiesRaw(requestParameters: productQuickEditApiParams.UpdateProductPropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>> {
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
    async updateProductProperties(requestParameters: productQuickEditApiParams.UpdateProductPropertiesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse> {
        const response = await this.updateProductPropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Endpoint used to apply updates for product type
     * Endpoint used to apply updates for product type
     */


    async updateProductTypeRaw(requestParameters: productQuickEditApiParams.UpdateProductTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditChangeProductTypeResponse>> {
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
    async updateProductType(requestParameters: productQuickEditApiParams.UpdateProductTypeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditChangeProductTypeResponse> {
        const response = await this.updateProductTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Endpoint used to apply top level product updates  Downside is that the whole product has to be hydrated
     */


    async updateProductsRaw(requestParameters: productQuickEditApiParams.UpdateProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuickEditResponse>> {
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
    async updateProducts(requestParameters: productQuickEditApiParams.UpdateProductsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuickEditResponse> {
        const response = await this.updateProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
