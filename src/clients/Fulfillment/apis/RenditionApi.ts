/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment API - Production Profile
 * REST API backing the Kibo Fulfiller User Interface
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
  EntityModelOfRenderedContent,
} from '../models';

export interface RenderOrderSummaryUsingGETRequest {
    orderId: string;
    xVolTenant: number;
    xVolSite?: number;
    responseFields?: string;
}

export interface RenderReturnReceiptUsingGETRequest {
    returnId: string;
    xVolTenant: number;
    xVolSite?: number;
    responseFields?: string;
}

/**
 * RenditionApi - interface
 * 
 * @export
 * @interface RenditionApiInterface
 */
export interface RenditionApiInterface {
    /**
     * renderOrderSummary
     * @summary renderOrderSummary
     * @param {string} orderId orderId
     * @param {number} xVolTenant 
     * @param {number} [xVolSite] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RenditionApiInterface
     */
    renderOrderSummaryUsingGETRaw(requestParameters: RenderOrderSummaryUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfRenderedContent>>;

    /**
     * renderOrderSummary
     * renderOrderSummary
     */
    renderOrderSummaryUsingGET(requestParameters: RenderOrderSummaryUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfRenderedContent>;

    /**
     * renderReturnReceipt
     * @summary renderReturnReceipt
     * @param {string} returnId returnId
     * @param {number} xVolTenant 
     * @param {number} [xVolSite] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RenditionApiInterface
     */
    renderReturnReceiptUsingGETRaw(requestParameters: RenderReturnReceiptUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfRenderedContent>>;

    /**
     * renderReturnReceipt
     * renderReturnReceipt
     */
    renderReturnReceiptUsingGET(requestParameters: RenderReturnReceiptUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfRenderedContent>;

}

/**
 * 
 */
export class RenditionApi extends runtime.BaseAPI implements RenditionApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * renderOrderSummary
     * renderOrderSummary
     */


    async renderOrderSummaryUsingGETRaw(requestParameters: RenderOrderSummaryUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfRenderedContent>> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling renderOrderSummaryUsingGET.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling renderOrderSummaryUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/orders/{orderId}/summary/html`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * renderOrderSummary
     * renderOrderSummary
     */
    async renderOrderSummaryUsingGET(requestParameters: RenderOrderSummaryUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfRenderedContent> {
        const response = await this.renderOrderSummaryUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * renderReturnReceipt
     * renderReturnReceipt
     */


    async renderReturnReceiptUsingGETRaw(requestParameters: RenderReturnReceiptUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfRenderedContent>> {
        if (requestParameters.returnId === null || requestParameters.returnId === undefined) {
            throw new runtime.RequiredError('returnId','Required parameter requestParameters.returnId was null or undefined when calling renderReturnReceiptUsingGET.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling renderReturnReceiptUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/fulfillment/returns/{returnId}/receipt/html`.replace(`{${"returnId"}}`, encodeURIComponent(String(requestParameters.returnId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * renderReturnReceipt
     * renderReturnReceipt
     */
    async renderReturnReceiptUsingGET(requestParameters: RenderReturnReceiptUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfRenderedContent> {
        const response = await this.renderReturnReceiptUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
