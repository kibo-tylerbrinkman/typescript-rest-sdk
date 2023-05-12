/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Customer Service
 * OpenAPI Spec for Kibo Customer Service
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
  Visit,
  VisitCollection,
} from '../models';
import {
    VisitFromJSON,
    VisitToJSON,
    VisitCollectionFromJSON,
    VisitCollectionToJSON,
} from '../models';

export interface CustomerVisitApiAddVisitRequest {
    visit?: Visit;
}

export interface CustomerVisitApiGetVisitRequest {
    visitId: string;
}

export interface CustomerVisitApiGetVisitsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
}

export interface CustomerVisitApiUpdateVisitRequest {
    visitId: string;
    visit?: Visit;
}

/**
 * 
 */
export class CustomerVisitApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds visit info on the customer.
     * Add Visit
     */


    async addVisitRaw(requestParameters: CustomerVisitApiAddVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Visit>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/visits`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VisitToJSON(requestParameters.visit),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VisitFromJSON(jsonValue));
    }

    /**
     * Adds visit info on the customer.
     * Add Visit
     */
    async addVisit(requestParameters: CustomerVisitApiAddVisitRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Visit> {
        const response = await this.addVisitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets visit info specified by visit Id.
     * Get Visit
     */


    async getVisitRaw(requestParameters: CustomerVisitApiGetVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Visit>> {
        if (requestParameters.visitId === null || requestParameters.visitId === undefined) {
            throw new runtime.RequiredError('visitId','Required parameter requestParameters.visitId was null or undefined when calling getVisit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/visits/{visitId}`.replace(`{${"visitId"}}`, encodeURIComponent(String(requestParameters.visitId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VisitFromJSON(jsonValue));
    }

    /**
     * Gets visit info specified by visit Id.
     * Get Visit
     */
    async getVisit(requestParameters: CustomerVisitApiGetVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Visit> {
        const response = await this.getVisitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of visit info specified by filter and sort order.
     * Get Visits
     */


    async getVisitsRaw(requestParameters: CustomerVisitApiGetVisitsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VisitCollection>> {
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

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/visits`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VisitCollectionFromJSON(jsonValue));
    }

    /**
     * Gets a collection of visit info specified by filter and sort order.
     * Get Visits
     */
    async getVisits(requestParameters: CustomerVisitApiGetVisitsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VisitCollection> {
        const response = await this.getVisitsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates an existing visit on the customer.
     * Updates Visit
     */


    async updateVisitRaw(requestParameters: CustomerVisitApiUpdateVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Visit>> {
        if (requestParameters.visitId === null || requestParameters.visitId === undefined) {
            throw new runtime.RequiredError('visitId','Required parameter requestParameters.visitId was null or undefined when calling updateVisit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/visits/{visitId}`.replace(`{${"visitId"}}`, encodeURIComponent(String(requestParameters.visitId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: VisitToJSON(requestParameters.visit),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VisitFromJSON(jsonValue));
    }

    /**
     * Updates an existing visit on the customer.
     * Updates Visit
     */
    async updateVisit(requestParameters: CustomerVisitApiUpdateVisitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Visit> {
        const response = await this.updateVisitRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
