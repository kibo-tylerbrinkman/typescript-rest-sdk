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
  DocumentCollection,
} from '../models';
import {
    DocumentCollectionFromJSON,
    DocumentCollectionToJSON,
} from '../models';

export interface ViewsApiGetViewDocumentsRequest {
    documentListName: string;
    viewName: string;
    filter?: string;
    sortBy?: string;
    pageSize?: number;
    startIndex?: number;
    includeInactive?: boolean;
}

/**
 * 
 */
export class ViewsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get View Documents
     * Get View Documents
     */


    async getViewDocumentsRaw(requestParameters: ViewsApiGetViewDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocumentCollection>> {
        if (requestParameters.documentListName === null || requestParameters.documentListName === undefined) {
            throw new runtime.RequiredError('documentListName','Required parameter requestParameters.documentListName was null or undefined when calling getViewDocuments.');
        }

        if (requestParameters.viewName === null || requestParameters.viewName === undefined) {
            throw new runtime.RequiredError('viewName','Required parameter requestParameters.viewName was null or undefined when calling getViewDocuments.');
        }

        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.includeInactive !== undefined) {
            queryParameters['includeInactive'] = requestParameters.includeInactive;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        if (this.configuration && (this.configuration.accessToken || this.configuration.clientId && this.configuration.sharedSecret)) {
            const token = await this.configuration.accessToken;
            const tokenString = await token();
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        
        if (this.configuration && this.configuration.jwt) {
            const token = this.configuration.jwt;
            const tokenString = await token();

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/content/documentlists/{documentListName}/views/{viewName}/documents`.replace(`{${"documentListName"}}`, encodeURIComponent(String(requestParameters.documentListName))).replace(`{${"viewName"}}`, encodeURIComponent(String(requestParameters.viewName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentCollectionFromJSON(jsonValue));
    }

    /**
     * Get View Documents
     * Get View Documents
     */
    async getViewDocuments(requestParameters: ViewsApiGetViewDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocumentCollection> {
        const response = await this.getViewDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}