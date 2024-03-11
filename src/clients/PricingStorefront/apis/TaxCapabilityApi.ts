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
  ThrirdPartyOrderTaxContext,
  ThrirdPartyTaxableOrder,
} from '../models';

export interface TaxCapabilityApiGetTaxRequest {
    responseFields?: string;
    thrirdPartyTaxableOrder?: ThrirdPartyTaxableOrder;
}

/**
 * TaxCapabilityApi - interface
 * 
 * @export
 * @interface TaxCapabilityApiInterface
 */
export interface TaxCapabilityApiInterface {
    /**
     * Get Tax
     * @summary Get Tax
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {ThrirdPartyTaxableOrder} [thrirdPartyTaxableOrder] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaxCapabilityApiInterface
     */
    getTaxRaw(requestParameters: TaxCapabilityApiGetTaxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThrirdPartyOrderTaxContext>>;

    /**
     * Get Tax
     * Get Tax
     */
    getTax(requestParameters: TaxCapabilityApiGetTaxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThrirdPartyOrderTaxContext>;

}

/**
 * 
 */
export class TaxCapabilityApi extends runtime.BaseAPI implements TaxCapabilityApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Tax
     * Get Tax
     */


    async getTaxRaw(requestParameters: TaxCapabilityApiGetTaxRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ThrirdPartyOrderTaxContext>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/tax`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.thrirdPartyTaxableOrder,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Tax
     * Get Tax
     */
    async getTax(requestParameters: TaxCapabilityApiGetTaxRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ThrirdPartyOrderTaxContext> {
        const response = await this.getTaxRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
