/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
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
  Visit,
  VisitCollection,
} from '../models';

export interface AddVisitRequest {
    responseFields?: string;
    visit?: Visit;
}

export interface GetVisitRequest {
    visitId: string;
    responseFields?: string;
}

export interface GetVisitsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
    responseFields?: string;
}

export interface UpdateVisitRequest {
    visitId: string;
    responseFields?: string;
    visit?: Visit;
}

/**
 * CustomerVisitApi - interface
 * 
 * @export
 * @interface CustomerVisitApiInterface
 */
export interface CustomerVisitApiInterface {
    /**
     * Adds visit info on the customer.
     * @summary Add Visit
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {Visit} [visit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerVisitApiInterface
     */
    addVisitRaw(requestParameters: AddVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Visit>>;

    /**
     * Adds visit info on the customer.
     * Add Visit
     */
    addVisit(requestParameters: AddVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Visit>;

    /**
     * Gets visit info specified by visit Id.
     * @summary Get Visit
     * @param {string} visitId 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerVisitApiInterface
     */
    getVisitRaw(requestParameters: GetVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Visit>>;

    /**
     * Gets visit info specified by visit Id.
     * Get Visit
     */
    getVisit(requestParameters: GetVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Visit>;

    /**
     * Gets a collection of visit info specified by filter and sort order.
     * @summary Get Visits
     * @param {number} [startIndex] 
     * @param {number} [pageSize] 
     * @param {string} [sortBy] 
     * @param {string} [filter] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerVisitApiInterface
     */
    getVisitsRaw(requestParameters: GetVisitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VisitCollection>>;

    /**
     * Gets a collection of visit info specified by filter and sort order.
     * Get Visits
     */
    getVisits(requestParameters: GetVisitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VisitCollection>;

    /**
     * Updates an existing visit on the customer.
     * @summary Updates Visit
     * @param {string} visitId 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {Visit} [visit] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomerVisitApiInterface
     */
    updateVisitRaw(requestParameters: UpdateVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Visit>>;

    /**
     * Updates an existing visit on the customer.
     * Updates Visit
     */
    updateVisit(requestParameters: UpdateVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Visit>;

}

/**
 * 
 */
export class CustomerVisitApi extends runtime.BaseAPI implements CustomerVisitApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds visit info on the customer.
     * Add Visit
     */


    async addVisitRaw(requestParameters: AddVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Visit>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/visits`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.visit,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Adds visit info on the customer.
     * Add Visit
     */
    async addVisit(requestParameters: AddVisitRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Visit> {
        const response = await this.addVisitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets visit info specified by visit Id.
     * Get Visit
     */


    async getVisitRaw(requestParameters: GetVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Visit>> {
        if (requestParameters.visitId === null || requestParameters.visitId === undefined) {
            throw new runtime.RequiredError('visitId','Required parameter requestParameters.visitId was null or undefined when calling getVisit.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/visits/{visitId}`.replace(`{${"visitId"}}`, encodeURIComponent(String(requestParameters.visitId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets visit info specified by visit Id.
     * Get Visit
     */
    async getVisit(requestParameters: GetVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Visit> {
        const response = await this.getVisitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of visit info specified by filter and sort order.
     * Get Visits
     */


    async getVisitsRaw(requestParameters: GetVisitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VisitCollection>> {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/visits`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a collection of visit info specified by filter and sort order.
     * Get Visits
     */
    async getVisits(requestParameters: GetVisitsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VisitCollection> {
        const response = await this.getVisitsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an existing visit on the customer.
     * Updates Visit
     */


    async updateVisitRaw(requestParameters: UpdateVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Visit>> {
        if (requestParameters.visitId === null || requestParameters.visitId === undefined) {
            throw new runtime.RequiredError('visitId','Required parameter requestParameters.visitId was null or undefined when calling updateVisit.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/visits/{visitId}`.replace(`{${"visitId"}}`, encodeURIComponent(String(requestParameters.visitId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.visit,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates an existing visit on the customer.
     * Updates Visit
     */
    async updateVisit(requestParameters: UpdateVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Visit> {
        const response = await this.updateVisitRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
