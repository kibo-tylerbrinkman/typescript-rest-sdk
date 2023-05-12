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
  ExtendedCustomerContactCollection,
} from '../models';
import {
    ExtendedCustomerContactCollectionFromJSON,
    ExtendedCustomerContactCollectionToJSON,
} from '../models';

export interface B2BContactApiGetB2BContactsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
    q?: string;
    qLimit?: number;
}

/**
 * 
 */
export class B2BContactApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Retrieves a list of B2B contacts according to any specified filter criteria and sort options.
     * Get B2B Contacts
     */


    async getB2BContactsRaw(requestParameters: B2BContactApiGetB2BContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExtendedCustomerContactCollection>> {
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

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.qLimit !== undefined) {
            queryParameters['qLimit'] = requestParameters.qLimit;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/customer/b2bcontacts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExtendedCustomerContactCollectionFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of B2B contacts according to any specified filter criteria and sort options.
     * Get B2B Contacts
     */
    async getB2BContacts(requestParameters: B2BContactApiGetB2BContactsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExtendedCustomerContactCollection> {
        const response = await this.getB2BContactsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
