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
  EntityModelOfShipment,
  PagedModelOfEntityModelOfShipment,
} from '../models';

export interface StorefrontApiGetShipmentUsingGET1Request {
    shipmentNumber: number;
    xVolTenant: number;
    xVolSite?: number;
    responseFields?: string;
}

export interface StorefrontApiGetShipmentsUsingGET1Request {
    xVolTenant: number;
    bypassSearchIndex?: boolean;
    filter?: string;
    isLate?: boolean;
    page?: number;
    pageSize?: number;
    quickSearch?: string;
    sort?: string;
    workflowTaskName?: string;
    xVolSite?: number;
    responseFields?: string;
}

/**
 * StorefrontApi - interface
 * 
 * @export
 * @interface StorefrontApiInterface
 */
export interface StorefrontApiInterface {
    /**
     * getShipment
     * @summary getShipment
     * @param {number} shipmentNumber shipmentNumber
     * @param {number} xVolTenant 
     * @param {number} [xVolSite] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorefrontApiInterface
     */
    getShipmentUsingGET1Raw(requestParameters: StorefrontApiGetShipmentUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>>;

    /**
     * getShipment
     * getShipment
     */
    getShipmentUsingGET1(requestParameters: StorefrontApiGetShipmentUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment>;

    /**
     * getShipments
     * @summary getShipments
     * @param {number} xVolTenant 
     * @param {boolean} [bypassSearchIndex] 
     * @param {string} [filter] 
     * @param {boolean} [isLate] 
     * @param {number} [page] 
     * @param {number} [pageSize] 
     * @param {string} [quickSearch] 
     * @param {string} [sort] 
     * @param {string} [workflowTaskName] 
     * @param {number} [xVolSite] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StorefrontApiInterface
     */
    getShipmentsUsingGET1Raw(requestParameters: StorefrontApiGetShipmentsUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedModelOfEntityModelOfShipment>>;

    /**
     * getShipments
     * getShipments
     */
    getShipmentsUsingGET1(requestParameters: StorefrontApiGetShipmentsUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedModelOfEntityModelOfShipment>;

}

/**
 * 
 */
export class StorefrontApi extends runtime.BaseAPI implements StorefrontApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * getShipment
     * getShipment
     */


    async getShipmentUsingGET1Raw(requestParameters: StorefrontApiGetShipmentUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling getShipmentUsingGET1.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getShipmentUsingGET1.');
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
            path: `/commerce/fulfillment/storefront/shipments/{shipmentNumber}`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getShipment
     * getShipment
     */
    async getShipmentUsingGET1(requestParameters: StorefrontApiGetShipmentUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.getShipmentUsingGET1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getShipments
     * getShipments
     */


    async getShipmentsUsingGET1Raw(requestParameters: StorefrontApiGetShipmentsUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedModelOfEntityModelOfShipment>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getShipmentsUsingGET1.');
        }

        const queryParameters: any = {};

        if (requestParameters.bypassSearchIndex !== undefined) {
            queryParameters['bypassSearchIndex'] = requestParameters.bypassSearchIndex;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.isLate !== undefined) {
            queryParameters['isLate'] = requestParameters.isLate;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.quickSearch !== undefined) {
            queryParameters['quickSearch'] = requestParameters.quickSearch;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.workflowTaskName !== undefined) {
            queryParameters['workflowTaskName'] = requestParameters.workflowTaskName;
        }

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
            path: `/commerce/fulfillment/storefront/shipments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getShipments
     * getShipments
     */
    async getShipmentsUsingGET1(requestParameters: StorefrontApiGetShipmentsUsingGET1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedModelOfEntityModelOfShipment> {
        const response = await this.getShipmentsUsingGET1Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
