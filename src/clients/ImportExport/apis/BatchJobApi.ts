/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MongoAdmin Service
 * OpenAPI Spec for Kibo MongoAdmin Service
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
  BatchJob,
  BatchJobAction,
  BatchJobCollection,
  BatchJobItemResultSet,
  BatchJobSummary,
  BatchJobSummaryCollection,
} from '../models';


export namespace batchJobApiParams { 
    export interface CreateBatchJobRequest {
        responseFields?: string;
        batchJob?: BatchJob;
    }
    export interface DeleteBatchJobRequest {
        code: string;
    }
    export interface GetAvailableActionsRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetBatchJobRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetBatchJobItemRequest {
        code: string;
        correlationId: string;
        responseFields?: string;
    }
    export interface GetBatchJobItemsRequest {
        code: string;
        pageSize?: number;
        startIndex?: number;
        includeCount?: boolean;
        processingStatus?: string;
        resourceType?: string;
        responseFields?: string;
    }
    export interface GetBatchJobsRequest {
        domain?: string;
        pageSize?: number;
        startIndex?: number;
        status?: string;
        includeCount?: boolean;
        responseFields?: string;
    }
    export interface GetBatchSummaryJobRequest {
        code: string;
        responseFields?: string;
    }
    export interface GetBatchSummaryJobsRequest {
        domain?: string;
        pageSize?: number;
        startIndex?: number;
        status?: string;
        includeCount?: boolean;
        responseFields?: string;
    }
    export interface PerformBatchActionRequest {
        code: string;
        responseFields?: string;
        batchJobAction?: BatchJobAction;
    }
    export interface UpdateBatchJobRequest {
        code: string;
        responseFields?: string;
        batchJob?: BatchJob;
    }
}
/**
* BatchJobApiService - interface
* 
* @export
* @interface BatchJobApi
*/
export interface BatchJobApiService {
    /**
    * Create Batch Job
    * @summary Create Batch Job
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {BatchJob} [batchJob] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    createBatchJobRaw(requestParameters: batchJobApiParams.CreateBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJob>>;

    /**
    * Create Batch Job
    * Create Batch Job
    */
    createBatchJob(requestParameters: batchJobApiParams.CreateBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJob>;

    /**
    * Delete Batch Job
    * @summary Delete Batch Job
    * @param {string} code 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    deleteBatchJobRaw(requestParameters: batchJobApiParams.DeleteBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJob>>;

    /**
    * Delete Batch Job
    * Delete Batch Job
    */
    deleteBatchJob(requestParameters: batchJobApiParams.DeleteBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJob>;

    /**
    * Get Available Actions
    * @summary Get Available Actions
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    getAvailableActionsRaw(requestParameters: batchJobApiParams.GetAvailableActionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>>;

    /**
    * Get Available Actions
    * Get Available Actions
    */
    getAvailableActions(requestParameters: batchJobApiParams.GetAvailableActionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>>;

    /**
    * Get Batch Job
    * @summary Get Batch Job
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    getBatchJobRaw(requestParameters: batchJobApiParams.GetBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJob>>;

    /**
    * Get Batch Job
    * Get Batch Job
    */
    getBatchJob(requestParameters: batchJobApiParams.GetBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJob>;

    /**
    * Get Batch Job Item
    * @summary Get Batch Job Item
    * @param {string} code 
    * @param {string} correlationId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    getBatchJobItemRaw(requestParameters: batchJobApiParams.GetBatchJobItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJobItemResultSet>>;

    /**
    * Get Batch Job Item
    * Get Batch Job Item
    */
    getBatchJobItem(requestParameters: batchJobApiParams.GetBatchJobItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJobItemResultSet>;

    /**
    * Get Batch Job Items
    * @summary Get Batch Job Items
    * @param {string} code 
    * @param {number} [pageSize] 
    * @param {number} [startIndex] 
    * @param {boolean} [includeCount] 
    * @param {string} [processingStatus] 
    * @param {string} [resourceType] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    getBatchJobItemsRaw(requestParameters: batchJobApiParams.GetBatchJobItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJobItemResultSet>>;

    /**
    * Get Batch Job Items
    * Get Batch Job Items
    */
    getBatchJobItems(requestParameters: batchJobApiParams.GetBatchJobItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJobItemResultSet>;

    /**
    * Get Batch Jobs
    * @summary Get Batch Jobs
    * @param {string} [domain] 
    * @param {number} [pageSize] 
    * @param {number} [startIndex] 
    * @param {string} [status] 
    * @param {boolean} [includeCount] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    getBatchJobsRaw(requestParameters: batchJobApiParams.GetBatchJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJobCollection>>;

    /**
    * Get Batch Jobs
    * Get Batch Jobs
    */
    getBatchJobs(requestParameters: batchJobApiParams.GetBatchJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJobCollection>;

    /**
    * Get Batch Summary Job
    * @summary Get Batch Summary Job
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    getBatchSummaryJobRaw(requestParameters: batchJobApiParams.GetBatchSummaryJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJobSummary>>;

    /**
    * Get Batch Summary Job
    * Get Batch Summary Job
    */
    getBatchSummaryJob(requestParameters: batchJobApiParams.GetBatchSummaryJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJobSummary>;

    /**
    * Get Batch Summary Jobs
    * @summary Get Batch Summary Jobs
    * @param {string} [domain] 
    * @param {number} [pageSize] 
    * @param {number} [startIndex] 
    * @param {string} [status] 
    * @param {boolean} [includeCount] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    getBatchSummaryJobsRaw(requestParameters: batchJobApiParams.GetBatchSummaryJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJobSummaryCollection>>;

    /**
    * Get Batch Summary Jobs
    * Get Batch Summary Jobs
    */
    getBatchSummaryJobs(requestParameters: batchJobApiParams.GetBatchSummaryJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJobSummaryCollection>;

    /**
    * Perform Batch Action
    * @summary Perform Batch Action
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {BatchJobAction} [batchJobAction] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    performBatchActionRaw(requestParameters: batchJobApiParams.PerformBatchActionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJob>>;

    /**
    * Perform Batch Action
    * Perform Batch Action
    */
    performBatchAction(requestParameters: batchJobApiParams.PerformBatchActionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJob>;

    /**
    * Update Batch Job
    * @summary Update Batch Job
    * @param {string} code 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {BatchJob} [batchJob] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof BatchJobApiInterface
    */
    updateBatchJobRaw(requestParameters: batchJobApiParams.UpdateBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJob>>;

    /**
    * Update Batch Job
    * Update Batch Job
    */
    updateBatchJob(requestParameters: batchJobApiParams.UpdateBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJob>;

}


/**
 * 
 */
export class BatchJobApi extends runtime.BaseAPI implements BatchJobApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create Batch Job
     * Create Batch Job
     */


    async createBatchJobRaw(requestParameters: batchJobApiParams.CreateBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJob>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.batchJob,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create Batch Job
     * Create Batch Job
     */
    async createBatchJob(requestParameters: batchJobApiParams.CreateBatchJobRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJob> {
        const response = await this.createBatchJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Batch Job
     * Delete Batch Job
     */


    async deleteBatchJobRaw(requestParameters: batchJobApiParams.DeleteBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJob>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteBatchJob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Delete Batch Job
     * Delete Batch Job
     */
    async deleteBatchJob(requestParameters: batchJobApiParams.DeleteBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJob> {
        const response = await this.deleteBatchJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Available Actions
     * Get Available Actions
     */


    async getAvailableActionsRaw(requestParameters: batchJobApiParams.GetAvailableActionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getAvailableActions.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob/actions/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get Available Actions
     * Get Available Actions
     */
    async getAvailableActions(requestParameters: batchJobApiParams.GetAvailableActionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.getAvailableActionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Batch Job
     * Get Batch Job
     */


    async getBatchJobRaw(requestParameters: batchJobApiParams.GetBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJob>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getBatchJob.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Batch Job
     * Get Batch Job
     */
    async getBatchJob(requestParameters: batchJobApiParams.GetBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJob> {
        const response = await this.getBatchJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Batch Job Item
     * Get Batch Job Item
     */


    async getBatchJobItemRaw(requestParameters: batchJobApiParams.GetBatchJobItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJobItemResultSet>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getBatchJobItem.');
        }

        if (requestParameters.correlationId === null || requestParameters.correlationId === undefined) {
            throw new runtime.RequiredError('correlationId','Required parameter requestParameters.correlationId was null or undefined when calling getBatchJobItem.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob/actions/{code}/items/{correlationId}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))).replace(`{${"correlationId"}}`, encodeURIComponent(String(requestParameters.correlationId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Batch Job Item
     * Get Batch Job Item
     */
    async getBatchJobItem(requestParameters: batchJobApiParams.GetBatchJobItemRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJobItemResultSet> {
        const response = await this.getBatchJobItemRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Batch Job Items
     * Get Batch Job Items
     */


    async getBatchJobItemsRaw(requestParameters: batchJobApiParams.GetBatchJobItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJobItemResultSet>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getBatchJobItems.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.includeCount !== undefined) {
            queryParameters['includeCount'] = requestParameters.includeCount;
        }

        if (requestParameters.processingStatus !== undefined) {
            queryParameters['processingStatus'] = requestParameters.processingStatus;
        }

        if (requestParameters.resourceType !== undefined) {
            queryParameters['resourceType'] = requestParameters.resourceType;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob/actions/{code}/items`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Batch Job Items
     * Get Batch Job Items
     */
    async getBatchJobItems(requestParameters: batchJobApiParams.GetBatchJobItemsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJobItemResultSet> {
        const response = await this.getBatchJobItemsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Batch Jobs
     * Get Batch Jobs
     */


    async getBatchJobsRaw(requestParameters: batchJobApiParams.GetBatchJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJobCollection>> {
        const queryParameters: any = {};

        if (requestParameters.domain !== undefined) {
            queryParameters['domain'] = requestParameters.domain;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.includeCount !== undefined) {
            queryParameters['includeCount'] = requestParameters.includeCount;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Batch Jobs
     * Get Batch Jobs
     */
    async getBatchJobs(requestParameters: batchJobApiParams.GetBatchJobsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJobCollection> {
        const response = await this.getBatchJobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Batch Summary Job
     * Get Batch Summary Job
     */


    async getBatchSummaryJobRaw(requestParameters: batchJobApiParams.GetBatchSummaryJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJobSummary>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getBatchSummaryJob.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob/actions/{code}/summary`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Batch Summary Job
     * Get Batch Summary Job
     */
    async getBatchSummaryJob(requestParameters: batchJobApiParams.GetBatchSummaryJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJobSummary> {
        const response = await this.getBatchSummaryJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Batch Summary Jobs
     * Get Batch Summary Jobs
     */


    async getBatchSummaryJobsRaw(requestParameters: batchJobApiParams.GetBatchSummaryJobsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJobSummaryCollection>> {
        const queryParameters: any = {};

        if (requestParameters.domain !== undefined) {
            queryParameters['domain'] = requestParameters.domain;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.includeCount !== undefined) {
            queryParameters['includeCount'] = requestParameters.includeCount;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob/actions/summaries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Batch Summary Jobs
     * Get Batch Summary Jobs
     */
    async getBatchSummaryJobs(requestParameters: batchJobApiParams.GetBatchSummaryJobsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJobSummaryCollection> {
        const response = await this.getBatchSummaryJobsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Perform Batch Action
     * Perform Batch Action
     */


    async performBatchActionRaw(requestParameters: batchJobApiParams.PerformBatchActionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJob>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling performBatchAction.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob/actions/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.batchJobAction,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Perform Batch Action
     * Perform Batch Action
     */
    async performBatchAction(requestParameters: batchJobApiParams.PerformBatchActionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJob> {
        const response = await this.performBatchActionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Batch Job
     * Update Batch Job
     */


    async updateBatchJobRaw(requestParameters: batchJobApiParams.UpdateBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchJob>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateBatchJob.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/data/batchJob/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.batchJob,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update Batch Job
     * Update Batch Job
     */
    async updateBatchJob(requestParameters: batchJobApiParams.UpdateBatchJobRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchJob> {
        const response = await this.updateBatchJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
