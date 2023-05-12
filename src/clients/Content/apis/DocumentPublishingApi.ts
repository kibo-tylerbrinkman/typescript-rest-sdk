/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
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
  DocumentDraftSummaryPagedCollection,
} from '../models';
import {
    DocumentDraftSummaryPagedCollectionFromJSON,
    DocumentDraftSummaryPagedCollectionToJSON,
} from '../models';

export interface DocumentPublishingApiDeleteDocumentDraftsRequest {
    documentLists?: string;
    requestBody?: Array<string>;
}

export interface DocumentPublishingApiListDocumentDraftSummariesRequest {
    pageSize?: number;
    startIndex?: number;
    documentLists?: string;
}

export interface DocumentPublishingApiPublishDocumentsRequest {
    documentLists?: string;
    requestBody?: Array<string>;
}

/**
 * 
 */
export class DocumentPublishingApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Remove draft of each Document associated with te id in documentIds. Send empty body to remove all drafts
     * Delete Document Drafts
     */


    async deleteDocumentDraftsRaw(requestParameters: DocumentPublishingApiDeleteDocumentDraftsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.documentLists !== undefined) {
            queryParameters['documentLists'] = requestParameters.documentLists;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/documentpublishing/draft`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove draft of each Document associated with te id in documentIds. Send empty body to remove all drafts
     * Delete Document Drafts
     */
    async deleteDocumentDrafts(requestParameters: DocumentPublishingApiDeleteDocumentDraftsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteDocumentDraftsRaw(requestParameters, initOverrides);
    }

    /**
     * Get Document Draft Summaries
     * Get Document Draft Summaries
     */


    async listDocumentDraftSummariesRaw(requestParameters: DocumentPublishingApiListDocumentDraftSummariesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentDraftSummaryPagedCollection>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.documentLists !== undefined) {
            queryParameters['documentLists'] = requestParameters.documentLists;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/documentpublishing/draft`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentDraftSummaryPagedCollectionFromJSON(jsonValue));
    }

    /**
     * Get Document Draft Summaries
     * Get Document Draft Summaries
     */
    async listDocumentDraftSummaries(requestParameters: DocumentPublishingApiListDocumentDraftSummariesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentDraftSummaryPagedCollection> {
        const response = await this.listDocumentDraftSummariesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Publishes draft of each Document associated with the id in documentIds. Send empty body to publish all drafts
     * Publish Documents
     */


    async publishDocumentsRaw(requestParameters: DocumentPublishingApiPublishDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.documentLists !== undefined) {
            queryParameters['documentLists'] = requestParameters.documentLists;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/content/documentpublishing/active`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.requestBody,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Publishes draft of each Document associated with the id in documentIds. Send empty body to publish all drafts
     * Publish Documents
     */
    async publishDocuments(requestParameters: DocumentPublishingApiPublishDocumentsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.publishDocumentsRaw(requestParameters, initOverrides);
    }

}
