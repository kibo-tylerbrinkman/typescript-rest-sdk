/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
  PublishSet,
  PublishSetCollection,
  PublishingScope,
} from '../models';

export interface AssignProductsToPublishSetRequest {
    responseFields?: string;
    publishSet?: PublishSet;
}

export interface DeletePublishSetRequest {
    publishSetCode: string;
    discardDrafts?: boolean;
}

export interface DiscardDraftsRequest {
    responseFields?: string;
    publishingScope?: PublishingScope;
}

export interface GetPublishSetRequest {
    publishSetCode: string;
    responseFields?: string;
}

export interface GetPublishSetsRequest {
    responseFields?: string;
}

export interface PublishDraftsRequest {
    responseFields?: string;
    publishingScope?: PublishingScope;
}

/**
 * ProductPublishingApi - interface
 * 
 * @export
 * @interface ProductPublishingApiInterface
 */
export interface ProductPublishingApiInterface {
    /**
     * 
     * @summary Assign products to publish set
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {PublishSet} [publishSet] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductPublishingApiInterface
     */
    assignProductsToPublishSetRaw(requestParameters: AssignProductsToPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSet>>;

    /**
     * 
     * Assign products to publish set
     */
    assignProductsToPublishSet(requestParameters: AssignProductsToPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSet>;

    /**
     * Removes all details about a PublishSet from the product service.          If the discardDrafts param is true, it also deletes the product drafts.
     * @summary Delete publish set
     * @param {string} publishSetCode The code of the PublishSet to delete
     * @param {boolean} [discardDrafts] Whether to also discard the drafts for this publish set.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductPublishingApiInterface
     */
    deletePublishSetRaw(requestParameters: DeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Removes all details about a PublishSet from the product service.          If the discardDrafts param is true, it also deletes the product drafts.
     * Delete publish set
     */
    deletePublishSet(requestParameters: DeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Discard draft products
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {PublishingScope} [publishingScope] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductPublishingApiInterface
     */
    discardDraftsRaw(requestParameters: DiscardDraftsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * 
     * Discard draft products
     */
    discardDrafts(requestParameters: DiscardDraftsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Retrieves the details of a single PublishSet.
     * @summary Get publish set
     * @param {string} publishSetCode 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductPublishingApiInterface
     */
    getPublishSetRaw(requestParameters: GetPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSet>>;

    /**
     * Retrieves the details of a single PublishSet.
     * Get publish set
     */
    getPublishSet(requestParameters: GetPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSet>;

    /**
     * Retrieves a list of PublishSets including the product counts.
     * @summary Get publish sets
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductPublishingApiInterface
     */
    getPublishSetsRaw(requestParameters: GetPublishSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSetCollection>>;

    /**
     * Retrieves a list of PublishSets including the product counts.
     * Get publish sets
     */
    getPublishSets(requestParameters: GetPublishSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSetCollection>;

    /**
     * 
     * @summary Publish draft products
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {PublishingScope} [publishingScope] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductPublishingApiInterface
     */
    publishDraftsRaw(requestParameters: PublishDraftsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * 
     * Publish draft products
     */
    publishDrafts(requestParameters: PublishDraftsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class ProductPublishingApi extends runtime.BaseAPI implements ProductPublishingApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * 
     * Assign products to publish set
     */


    async assignProductsToPublishSetRaw(requestParameters: AssignProductsToPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSet>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/publishsets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.publishSet,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Assign products to publish set
     */
    async assignProductsToPublishSet(requestParameters: AssignProductsToPublishSetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSet> {
        const response = await this.assignProductsToPublishSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes all details about a PublishSet from the product service.          If the discardDrafts param is true, it also deletes the product drafts.
     * Delete publish set
     */


    async deletePublishSetRaw(requestParameters: DeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.publishSetCode === null || requestParameters.publishSetCode === undefined) {
            throw new runtime.RequiredError('publishSetCode','Required parameter requestParameters.publishSetCode was null or undefined when calling deletePublishSet.');
        }

        const queryParameters: any = {};

        if (requestParameters.discardDrafts !== undefined) {
            queryParameters['discardDrafts'] = requestParameters.discardDrafts;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/publishsets/{publishSetCode}`.replace(`{${"publishSetCode"}}`, encodeURIComponent(String(requestParameters.publishSetCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes all details about a PublishSet from the product service.          If the discardDrafts param is true, it also deletes the product drafts.
     * Delete publish set
     */
    async deletePublishSet(requestParameters: DeletePublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePublishSetRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Discard draft products
     */


    async discardDraftsRaw(requestParameters: DiscardDraftsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/discarddrafts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.publishingScope,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Discard draft products
     */
    async discardDrafts(requestParameters: DiscardDraftsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.discardDraftsRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves the details of a single PublishSet.
     * Get publish set
     */


    async getPublishSetRaw(requestParameters: GetPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSet>> {
        if (requestParameters.publishSetCode === null || requestParameters.publishSetCode === undefined) {
            throw new runtime.RequiredError('publishSetCode','Required parameter requestParameters.publishSetCode was null or undefined when calling getPublishSet.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/publishsets/{publishSetCode}`.replace(`{${"publishSetCode"}}`, encodeURIComponent(String(requestParameters.publishSetCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves the details of a single PublishSet.
     * Get publish set
     */
    async getPublishSet(requestParameters: GetPublishSetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSet> {
        const response = await this.getPublishSetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of PublishSets including the product counts.
     * Get publish sets
     */


    async getPublishSetsRaw(requestParameters: GetPublishSetsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PublishSetCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/publishsets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves a list of PublishSets including the product counts.
     * Get publish sets
     */
    async getPublishSets(requestParameters: GetPublishSetsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PublishSetCollection> {
        const response = await this.getPublishSetsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Publish draft products
     */


    async publishDraftsRaw(requestParameters: PublishDraftsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/publishing/publishdrafts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.publishingScope,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Publish draft products
     */
    async publishDrafts(requestParameters: PublishDraftsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.publishDraftsRaw(requestParameters, initOverrides);
    }

}
