/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
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
  AddOrDeletePublishItem,
  DocumentDraftSummaryPagedCollection,
  PublishSetSummaryPagedCollection,
} from '../models';

export interface DocumentPublishSetApiAddPublishSetItemsRequest {
    code: string;
    responseFields?: string;
    addOrDeletePublishItem?: Array<AddOrDeletePublishItem>;
}

export interface DocumentPublishSetApiDeletePublishSetRequest {
    code: string;
    shouldDiscard?: boolean;
    responseFields?: string;
}

export interface DocumentPublishSetApiGetPublishSetItemsRequest {
    code: string;
    pageSize?: number;
    startIndex?: number;
    sortBy?: string;
    filter?: string;
    responseFields?: string;
}

export interface DocumentPublishSetApiGetPublishSetsRequest {
    pageSize?: number;
    startIndex?: number;
    responseFields?: string;
}

/**
 * DocumentPublishSetApi - interface
 * 
 * @export
 * @interface DocumentPublishSetApiInterface
 */
export interface DocumentPublishSetApiInterface {
    /**
     * Adds a set of documents by id to a publish set.
     * @summary Add Publish Set Items
     * @param {string} code code of the publish set.  Use UNASSIGNED or ALL to denote those special cases
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {Array<AddOrDeletePublishItem>} [addOrDeletePublishItem] documentId/doclist pairs to add to the publish set
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentPublishSetApiInterface
     */
    addPublishSetItemsRaw(requestParameters: DocumentPublishSetApiAddPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Adds a set of documents by id to a publish set.
     * Add Publish Set Items
     */
    addPublishSetItems(requestParameters: DocumentPublishSetApiAddPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Adds a set of documents by id to a publish set.
     * @summary Delete Publish Set
     * @param {string} code code of the publish set.  Use UNASSIGNED or ALL to denote those special cases
     * @param {boolean} [shouldDiscard] should trash the drafts in the publish set as well
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentPublishSetApiInterface
     */
    deletePublishSetRaw(requestParameters: DocumentPublishSetApiDeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Adds a set of documents by id to a publish set.
     * Delete Publish Set
     */
    deletePublishSet(requestParameters: DocumentPublishSetApiDeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Retrieve a paged collection of publish set Items.
     * @summary Get Publish Set Items
     * @param {string} code code of the publish set.  Use UNASSIGNED or ALL to denote those special cases
     * @param {number} [pageSize] maximum number of items to return
     * @param {number} [startIndex] start index
     * @param {string} [sortBy] 
     * @param {string} [filter] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentPublishSetApiInterface
     */
    getPublishSetItemsRaw(requestParameters: DocumentPublishSetApiGetPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentDraftSummaryPagedCollection>>;

    /**
     * Retrieve a paged collection of publish set Items.
     * Get Publish Set Items
     */
    getPublishSetItems(requestParameters: DocumentPublishSetApiGetPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentDraftSummaryPagedCollection>;

    /**
     * Returns a List of current Publishing sets with counts of drafts in each.
     * @summary Get Publish Set
     * @param {number} [pageSize] maximum number of items to return
     * @param {number} [startIndex] start index
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentPublishSetApiInterface
     */
    getPublishSetsRaw(requestParameters: DocumentPublishSetApiGetPublishSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSetSummaryPagedCollection>>;

    /**
     * Returns a List of current Publishing sets with counts of drafts in each.
     * Get Publish Set
     */
    getPublishSets(requestParameters: DocumentPublishSetApiGetPublishSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSetSummaryPagedCollection>;

}

/**
 * 
 */
export class DocumentPublishSetApi extends runtime.BaseAPI implements DocumentPublishSetApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds a set of documents by id to a publish set.
     * Add Publish Set Items
     */


    async addPublishSetItemsRaw(requestParameters: DocumentPublishSetApiAddPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling addPublishSetItems.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/publishsets/{code}/items`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.addOrDeletePublishItem,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds a set of documents by id to a publish set.
     * Add Publish Set Items
     */
    async addPublishSetItems(requestParameters: DocumentPublishSetApiAddPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addPublishSetItemsRaw(requestParameters, initOverrides);
    }

    /**
     * Adds a set of documents by id to a publish set.
     * Delete Publish Set
     */


    async deletePublishSetRaw(requestParameters: DocumentPublishSetApiDeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deletePublishSet.');
        }

        const queryParameters: any = {};

        if (requestParameters.shouldDiscard !== undefined) {
            queryParameters['shouldDiscard'] = requestParameters.shouldDiscard;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/publishsets/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds a set of documents by id to a publish set.
     * Delete Publish Set
     */
    async deletePublishSet(requestParameters: DocumentPublishSetApiDeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePublishSetRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve a paged collection of publish set Items.
     * Get Publish Set Items
     */


    async getPublishSetItemsRaw(requestParameters: DocumentPublishSetApiGetPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentDraftSummaryPagedCollection>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getPublishSetItems.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
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
            path: `/content/publishsets/{code}/items`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieve a paged collection of publish set Items.
     * Get Publish Set Items
     */
    async getPublishSetItems(requestParameters: DocumentPublishSetApiGetPublishSetItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentDraftSummaryPagedCollection> {
        const response = await this.getPublishSetItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a List of current Publishing sets with counts of drafts in each.
     * Get Publish Set
     */


    async getPublishSetsRaw(requestParameters: DocumentPublishSetApiGetPublishSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSetSummaryPagedCollection>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/publishsets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Returns a List of current Publishing sets with counts of drafts in each.
     * Get Publish Set
     */
    async getPublishSets(requestParameters: DocumentPublishSetApiGetPublishSetsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSetSummaryPagedCollection> {
        const response = await this.getPublishSetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
