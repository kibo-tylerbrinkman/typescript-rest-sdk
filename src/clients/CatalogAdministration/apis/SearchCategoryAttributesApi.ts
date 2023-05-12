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
  CategoryPagedCollection,
} from '../models';
import {
    CategoryPagedCollectionFromJSON,
    CategoryPagedCollectionToJSON,
} from '../models';

export interface SearchCategoryAttributesApiSearchCategoryAttributesRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
    includeAttributes?: boolean;
    responseGroups?: string;
}

/**
 * 
 */
export class SearchCategoryAttributesApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Retrieves a list of categories according to any specified filter criteria and sort options for attributes.
     * Search Category Attributes
     */


    async searchCategoryAttributesRaw(requestParameters: SearchCategoryAttributesApiSearchCategoryAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CategoryPagedCollection>> {
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

        if (requestParameters.includeAttributes !== undefined) {
            queryParameters['includeAttributes'] = requestParameters.includeAttributes;
        }

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/categories/searchCategoryAttributes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryPagedCollectionFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of categories according to any specified filter criteria and sort options for attributes.
     * Search Category Attributes
     */
    async searchCategoryAttributes(requestParameters: SearchCategoryAttributesApiSearchCategoryAttributesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CategoryPagedCollection> {
        const response = await this.searchCategoryAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
