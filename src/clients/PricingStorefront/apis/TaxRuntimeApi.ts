/* tslint:disable */
/* eslint-disable */
/**
 * Kibo PricingRuntime Service
 * OpenAPI Spec for Kibo PricingRuntime Service
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
  OrderTaxContext,
  TaxableOrder,
} from '../models';

export interface EstimateTaxesRequest {
    responseFields?: string;
    taxableOrder?: TaxableOrder;
}

/**
 * TaxRuntimeApi - interface
 * 
 * @export
 * @interface TaxRuntimeApiInterface
 */
export interface TaxRuntimeApiInterface {
    /**
     * Estimate Taxes
     * @summary Estimate Taxes
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {TaxableOrder} [taxableOrder] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxRuntimeApiInterface
     */
    estimateTaxesRaw(requestParameters: EstimateTaxesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderTaxContext>>;

    /**
     * Estimate Taxes
     * Estimate Taxes
     */
    estimateTaxes(requestParameters: EstimateTaxesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderTaxContext>;

}

/**
 * 
 */
export class TaxRuntimeApi extends runtime.BaseAPI implements TaxRuntimeApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Estimate Taxes
     * Estimate Taxes
     */


    async estimateTaxesRaw(requestParameters: EstimateTaxesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderTaxContext>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/storefront/tax/estimate-order`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.taxableOrder,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Estimate Taxes
     * Estimate Taxes
     */
    async estimateTaxes(requestParameters: EstimateTaxesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderTaxContext> {
        const response = await this.estimateTaxesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
