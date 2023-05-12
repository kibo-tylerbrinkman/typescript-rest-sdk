/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
  ProductExtra,
  ProductExtraValueDeltaPrice,
} from '../models';
import {
    ProductExtraFromJSON,
    ProductExtraToJSON,
    ProductExtraValueDeltaPriceFromJSON,
    ProductExtraValueDeltaPriceToJSON,
} from '../models';

export interface ProductExtrasApiAddExtraRequest {
    productCode: string;
    productExtra?: ProductExtra;
}

export interface ProductExtrasApiAddExtraValueLocalizedDeltaPriceRequest {
    productCode: string;
    attributeFQN: string;
    value: string;
    productExtraValueDeltaPrice?: ProductExtraValueDeltaPrice;
}

export interface ProductExtrasApiDeleteExtraRequest {
    productCode: string;
    attributeFQN: string;
}

export interface ProductExtrasApiDeleteExtraValueLocalizedDeltaPriceRequest {
    productCode: string;
    attributeFQN: string;
    value: string;
    currencyCode: string;
}

export interface ProductExtrasApiGetExtraRequest {
    productCode: string;
    attributeFQN: string;
}

export interface ProductExtrasApiGetExtraValueLocalizedDeltaPriceRequest {
    productCode: string;
    attributeFQN: string;
    value: string;
    currencyCode: string;
}

export interface ProductExtrasApiGetExtraValueLocalizedDeltaPricesRequest {
    productCode: string;
    attributeFQN: string;
    value: string;
}

export interface ProductExtrasApiGetExtrasRequest {
    productCode: string;
}

export interface ProductExtrasApiUpdateExtraRequest {
    productCode: string;
    attributeFQN: string;
    productExtra?: ProductExtra;
}

export interface ProductExtrasApiUpdateExtraValueLocalizedDeltaPriceRequest {
    productCode: string;
    attributeFQN: string;
    value: string;
    currencyCode: string;
    productExtraValueDeltaPrice?: ProductExtraValueDeltaPrice;
}

export interface ProductExtrasApiUpdateExtraValueLocalizedDeltaPricesRequest {
    productCode: string;
    attributeFQN: string;
    value: string;
    productExtraValueDeltaPrice?: Array<ProductExtraValueDeltaPrice>;
}

/**
 * 
 */
export class ProductExtrasApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Add extra
     * Add extra
     */


    async addExtraRaw(requestParameters: ProductExtrasApiAddExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtra>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addExtra.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductExtraToJSON(requestParameters.productExtra),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductExtraFromJSON(jsonValue));
    }

    /**
     * Add extra
     * Add extra
     */
    async addExtra(requestParameters: ProductExtrasApiAddExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtra> {
        const response = await this.addExtraRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Add extra value localized delta price
     */


    async addExtraValueLocalizedDeltaPriceRaw(requestParameters: ProductExtrasApiAddExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtraValueDeltaPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling addExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling addExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling addExtraValueLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductExtraValueDeltaPriceToJSON(requestParameters.productExtraValueDeltaPrice),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductExtraValueDeltaPriceFromJSON(jsonValue));
    }

    /**
     * 
     * Add extra value localized delta price
     */
    async addExtraValueLocalizedDeltaPrice(requestParameters: ProductExtrasApiAddExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtraValueDeltaPrice> {
        const response = await this.addExtraValueLocalizedDeltaPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete extra
     * Delete extra
     */


    async deleteExtraRaw(requestParameters: ProductExtrasApiDeleteExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteExtra.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteExtra.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete extra
     * Delete extra
     */
    async deleteExtra(requestParameters: ProductExtrasApiDeleteExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteExtraRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Delete extra value localized delta price
     */


    async deleteExtraValueLocalizedDeltaPriceRaw(requestParameters: ProductExtrasApiDeleteExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling deleteExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling deleteExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling deleteExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling deleteExtraValueLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Delete extra value localized delta price
     */
    async deleteExtraValueLocalizedDeltaPrice(requestParameters: ProductExtrasApiDeleteExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteExtraValueLocalizedDeltaPriceRaw(requestParameters, initOverrides);
    }

    /**
     * Get individual extra.
     * Get extra
     */


    async getExtraRaw(requestParameters: ProductExtrasApiGetExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtra>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getExtra.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getExtra.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductExtraFromJSON(jsonValue));
    }

    /**
     * Get individual extra.
     * Get extra
     */
    async getExtra(requestParameters: ProductExtrasApiGetExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtra> {
        const response = await this.getExtraRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get extra value localized delta price
     */


    async getExtraValueLocalizedDeltaPriceRaw(requestParameters: ProductExtrasApiGetExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtraValueDeltaPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling getExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling getExtraValueLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductExtraValueDeltaPriceFromJSON(jsonValue));
    }

    /**
     * 
     * Get extra value localized delta price
     */
    async getExtraValueLocalizedDeltaPrice(requestParameters: ProductExtrasApiGetExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtraValueDeltaPrice> {
        const response = await this.getExtraValueLocalizedDeltaPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get extra value localized delta prices
     */


    async getExtraValueLocalizedDeltaPricesRaw(requestParameters: ProductExtrasApiGetExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductExtraValueDeltaPrice>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getExtraValueLocalizedDeltaPrices.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getExtraValueLocalizedDeltaPrices.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling getExtraValueLocalizedDeltaPrices.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProductExtraValueDeltaPriceFromJSON));
    }

    /**
     * 
     * Get extra value localized delta prices
     */
    async getExtraValueLocalizedDeltaPrices(requestParameters: ProductExtrasApiGetExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductExtraValueDeltaPrice>> {
        const response = await this.getExtraValueLocalizedDeltaPricesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get extras for the product.
     * Get extras
     */


    async getExtrasRaw(requestParameters: ProductExtrasApiGetExtrasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductExtra>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling getExtras.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProductExtraFromJSON));
    }

    /**
     * Get extras for the product.
     * Get extras
     */
    async getExtras(requestParameters: ProductExtrasApiGetExtrasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductExtra>> {
        const response = await this.getExtrasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update extra
     * Update extra
     */


    async updateExtraRaw(requestParameters: ProductExtrasApiUpdateExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtra>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateExtra.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateExtra.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductExtraToJSON(requestParameters.productExtra),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductExtraFromJSON(jsonValue));
    }

    /**
     * Update extra
     * Update extra
     */
    async updateExtra(requestParameters: ProductExtrasApiUpdateExtraRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtra> {
        const response = await this.updateExtraRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Update extra value localized delta price
     */


    async updateExtraValueLocalizedDeltaPriceRaw(requestParameters: ProductExtrasApiUpdateExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductExtraValueDeltaPrice>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling updateExtraValueLocalizedDeltaPrice.');
        }

        if (requestParameters.currencyCode === null || requestParameters.currencyCode === undefined) {
            throw new runtime.RequiredError('currencyCode','Required parameter requestParameters.currencyCode was null or undefined when calling updateExtraValueLocalizedDeltaPrice.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))).replace(`{${"currencyCode"}}`, encodeURIComponent(String(requestParameters.currencyCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ProductExtraValueDeltaPriceToJSON(requestParameters.productExtraValueDeltaPrice),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductExtraValueDeltaPriceFromJSON(jsonValue));
    }

    /**
     * 
     * Update extra value localized delta price
     */
    async updateExtraValueLocalizedDeltaPrice(requestParameters: ProductExtrasApiUpdateExtraValueLocalizedDeltaPriceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductExtraValueDeltaPrice> {
        const response = await this.updateExtraValueLocalizedDeltaPriceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Update extra value localized delta prices
     */


    async updateExtraValueLocalizedDeltaPricesRaw(requestParameters: ProductExtrasApiUpdateExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProductExtraValueDeltaPrice>>> {
        if (requestParameters.productCode === null || requestParameters.productCode === undefined) {
            throw new runtime.RequiredError('productCode','Required parameter requestParameters.productCode was null or undefined when calling updateExtraValueLocalizedDeltaPrices.');
        }

        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateExtraValueLocalizedDeltaPrices.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling updateExtraValueLocalizedDeltaPrices.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice`.replace(`{${"productCode"}}`, encodeURIComponent(String(requestParameters.productCode))).replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.productExtraValueDeltaPrice.map(ProductExtraValueDeltaPriceToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProductExtraValueDeltaPriceFromJSON));
    }

    /**
     * 
     * Update extra value localized delta prices
     */
    async updateExtraValueLocalizedDeltaPrices(requestParameters: ProductExtrasApiUpdateExtraValueLocalizedDeltaPricesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProductExtraValueDeltaPrice>> {
        const response = await this.updateExtraValueLocalizedDeltaPricesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
