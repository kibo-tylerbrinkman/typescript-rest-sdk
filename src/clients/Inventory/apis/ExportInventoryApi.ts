/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
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
  CreateExportSettingsFTPRequest,
  CreateExportSettingsRequest,
  CreateExportSettingsS3Request,
  DeletedCountResponse,
  ExportInventoryRequest,
  ExportInventoryResponse,
  ExportSettingsResponse,
  GetExportSettingsResponse,
  UpdateExportSettingsFTPRequest,
  UpdateExportSettingsFTPResponse,
  UpdateExportSettingsRequest,
  UpdateExportSettingsResponse,
  UpdateExportSettingsS3Request,
  UpdateExportSettingsS3Response,
} from '../models';


export namespace exportInventoryApiParams { 
    export interface CreateExportSettingsOperationRequest {
        xVolTenant: number;
        createExportSettingsRequest: CreateExportSettingsRequest;
    }
    export interface CreateExportSettingsFTPOperationRequest {
        xVolTenant: number;
        createExportSettingsFTPRequest: CreateExportSettingsFTPRequest;
    }
    export interface CreateExportSettingsS3OperationRequest {
        xVolTenant: number;
        createExportSettingsS3Request: CreateExportSettingsS3Request;
    }
    export interface DeleteExportSettingsRequest {
        xVolTenant: number;
        exportSettingsName: string;
    }
    export interface DeleteExportSettingsFTPRequest {
        xVolTenant: number;
        exportSettingsName: string;
        exportSettingsFTPName?: string;
    }
    export interface DeleteExportSettingsS3Request {
        xVolTenant: number;
        exportSettingsName: string;
        exportSettingsS3Name?: string;
    }
    export interface GetExportSettingsRequest {
        xVolTenant: number;
        exportSettingsName: string;
    }
    export interface RunExportRequest {
        xVolTenant: number;
        exportInventoryRequest: ExportInventoryRequest;
    }
    export interface UpdateExportSettingsOperationRequest {
        xVolTenant: number;
        updateExportSettingsRequest: UpdateExportSettingsRequest;
    }
    export interface UpdateExportSettingsFTPOperationRequest {
        xVolTenant: number;
        updateExportSettingsFTPRequest: UpdateExportSettingsFTPRequest;
    }
    export interface UpdateExportSettingsS3OperationRequest {
        xVolTenant: number;
        updateExportSettingsS3Request: UpdateExportSettingsS3Request;
    }
}
/**
* ExportInventoryApiService - interface
* 
* @export
* @interface ExportInventoryApi
*/
export interface ExportInventoryApiService {
    /**
    * Create an Export Settings
    * @summary Create Export Settings
    * @param {number} xVolTenant Tenant ID
    * @param {CreateExportSettingsRequest} createExportSettingsRequest Request to create a new Export Settings
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    createExportSettingsRaw(requestParameters: exportInventoryApiParams.CreateExportSettingsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportSettingsResponse>>;

    /**
    * Create an Export Settings
    * Create Export Settings
    */
    createExportSettings(requestParameters: exportInventoryApiParams.CreateExportSettingsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportSettingsResponse>;

    /**
    * Create an Export Settings FTP
    * @summary Create Export Settings FTP
    * @param {number} xVolTenant Tenant ID
    * @param {CreateExportSettingsFTPRequest} createExportSettingsFTPRequest Request to create a new Export Settings FTP
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    createExportSettingsFTPRaw(requestParameters: exportInventoryApiParams.CreateExportSettingsFTPOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportSettingsResponse>>;

    /**
    * Create an Export Settings FTP
    * Create Export Settings FTP
    */
    createExportSettingsFTP(requestParameters: exportInventoryApiParams.CreateExportSettingsFTPOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportSettingsResponse>;

    /**
    * Create an Export Settings S3
    * @summary Create Export Settings S3
    * @param {number} xVolTenant Tenant ID
    * @param {CreateExportSettingsS3Request} createExportSettingsS3Request Request to create a new Export Settings S3
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    createExportSettingsS3Raw(requestParameters: exportInventoryApiParams.CreateExportSettingsS3OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportSettingsResponse>>;

    /**
    * Create an Export Settings S3
    * Create Export Settings S3
    */
    createExportSettingsS3(requestParameters: exportInventoryApiParams.CreateExportSettingsS3OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportSettingsResponse>;

    /**
    * Deletes an Export Settings
    * @summary Delete Export Settings
    * @param {number} xVolTenant Tenant ID
    * @param {string} exportSettingsName Export Settings Name
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    deleteExportSettingsRaw(requestParameters: exportInventoryApiParams.DeleteExportSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedCountResponse>>;

    /**
    * Deletes an Export Settings
    * Delete Export Settings
    */
    deleteExportSettings(requestParameters: exportInventoryApiParams.DeleteExportSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedCountResponse>;

    /**
    * Deletes an Export Settings FTP. Not specifying exportSettingsFTPID deletes ALL ftp settings for the specified export settings.
    * @summary Delete Export Settings FTP
    * @param {number} xVolTenant Tenant ID
    * @param {string} exportSettingsName Export Settings Name
    * @param {string} [exportSettingsFTPName] Export Settings FTP Name
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    deleteExportSettingsFTPRaw(requestParameters: exportInventoryApiParams.DeleteExportSettingsFTPRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedCountResponse>>;

    /**
    * Deletes an Export Settings FTP. Not specifying exportSettingsFTPID deletes ALL ftp settings for the specified export settings.
    * Delete Export Settings FTP
    */
    deleteExportSettingsFTP(requestParameters: exportInventoryApiParams.DeleteExportSettingsFTPRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedCountResponse>;

    /**
    * Deletes an Export Settings S3. Not specifying exportSettingsS3ID deletes ALL s3 settings for the specified export settings.
    * @summary Delete Export Settings S3
    * @param {number} xVolTenant Tenant ID
    * @param {string} exportSettingsName Export Settings Name
    * @param {string} [exportSettingsS3Name] Export Settings S3 Name
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    deleteExportSettingsS3Raw(requestParameters: exportInventoryApiParams.DeleteExportSettingsS3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedCountResponse>>;

    /**
    * Deletes an Export Settings S3. Not specifying exportSettingsS3ID deletes ALL s3 settings for the specified export settings.
    * Delete Export Settings S3
    */
    deleteExportSettingsS3(requestParameters: exportInventoryApiParams.DeleteExportSettingsS3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedCountResponse>;

    /**
    * Get an export settings
    * @summary Get Export Settings
    * @param {number} xVolTenant Tenant ID
    * @param {string} exportSettingsName Export Settings Name
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    getExportSettingsRaw(requestParameters: exportInventoryApiParams.GetExportSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetExportSettingsResponse>>>;

    /**
    * Get an export settings
    * Get Export Settings
    */
    getExportSettings(requestParameters: exportInventoryApiParams.GetExportSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetExportSettingsResponse>>;

    /**
    * Run Export Settings Job
    * @summary Run Export
    * @param {number} xVolTenant Tenant ID
    * @param {ExportInventoryRequest} exportInventoryRequest Request to run an inventory export
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    runExportRaw(requestParameters: exportInventoryApiParams.RunExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportInventoryResponse>>;

    /**
    * Run Export Settings Job
    * Run Export
    */
    runExport(requestParameters: exportInventoryApiParams.RunExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportInventoryResponse>;

    /**
    * Update an Export Settings
    * @summary Update Export Settings
    * @param {number} xVolTenant Tenant ID
    * @param {UpdateExportSettingsRequest} updateExportSettingsRequest Request to update an existing Export Settings
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    updateExportSettingsRaw(requestParameters: exportInventoryApiParams.UpdateExportSettingsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateExportSettingsResponse>>;

    /**
    * Update an Export Settings
    * Update Export Settings
    */
    updateExportSettings(requestParameters: exportInventoryApiParams.UpdateExportSettingsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateExportSettingsResponse>;

    /**
    * Update an Export Settings FTP
    * @summary Update Export Settings FTP
    * @param {number} xVolTenant Tenant ID
    * @param {UpdateExportSettingsFTPRequest} updateExportSettingsFTPRequest Request to update an existing Export Settings FTP
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    updateExportSettingsFTPRaw(requestParameters: exportInventoryApiParams.UpdateExportSettingsFTPOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateExportSettingsFTPResponse>>;

    /**
    * Update an Export Settings FTP
    * Update Export Settings FTP
    */
    updateExportSettingsFTP(requestParameters: exportInventoryApiParams.UpdateExportSettingsFTPOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateExportSettingsFTPResponse>;

    /**
    * Update an Export Settings S3
    * @summary Update Export Settings S3
    * @param {number} xVolTenant Tenant ID
    * @param {UpdateExportSettingsS3Request} updateExportSettingsS3Request Request to update an existing Export Settings S3
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ExportInventoryApiInterface
    */
    updateExportSettingsS3Raw(requestParameters: exportInventoryApiParams.UpdateExportSettingsS3OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateExportSettingsS3Response>>;

    /**
    * Update an Export Settings S3
    * Update Export Settings S3
    */
    updateExportSettingsS3(requestParameters: exportInventoryApiParams.UpdateExportSettingsS3OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateExportSettingsS3Response>;

}


/**
 * 
 */
export class ExportInventoryApi extends runtime.BaseAPI implements ExportInventoryApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create an Export Settings
     * Create Export Settings
     */


    async createExportSettingsRaw(requestParameters: exportInventoryApiParams.CreateExportSettingsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportSettingsResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling createExportSettings.');
        }

        if (requestParameters.createExportSettingsRequest === null || requestParameters.createExportSettingsRequest === undefined) {
            throw new runtime.RequiredError('createExportSettingsRequest','Required parameter requestParameters.createExportSettingsRequest was null or undefined when calling createExportSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createExportSettingsRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create an Export Settings
     * Create Export Settings
     */
    async createExportSettings(requestParameters: exportInventoryApiParams.CreateExportSettingsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportSettingsResponse> {
        const response = await this.createExportSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an Export Settings FTP
     * Create Export Settings FTP
     */


    async createExportSettingsFTPRaw(requestParameters: exportInventoryApiParams.CreateExportSettingsFTPOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportSettingsResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling createExportSettingsFTP.');
        }

        if (requestParameters.createExportSettingsFTPRequest === null || requestParameters.createExportSettingsFTPRequest === undefined) {
            throw new runtime.RequiredError('createExportSettingsFTPRequest','Required parameter requestParameters.createExportSettingsFTPRequest was null or undefined when calling createExportSettingsFTP.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export/ftp/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createExportSettingsFTPRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create an Export Settings FTP
     * Create Export Settings FTP
     */
    async createExportSettingsFTP(requestParameters: exportInventoryApiParams.CreateExportSettingsFTPOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportSettingsResponse> {
        const response = await this.createExportSettingsFTPRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an Export Settings S3
     * Create Export Settings S3
     */


    async createExportSettingsS3Raw(requestParameters: exportInventoryApiParams.CreateExportSettingsS3OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportSettingsResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling createExportSettingsS3.');
        }

        if (requestParameters.createExportSettingsS3Request === null || requestParameters.createExportSettingsS3Request === undefined) {
            throw new runtime.RequiredError('createExportSettingsS3Request','Required parameter requestParameters.createExportSettingsS3Request was null or undefined when calling createExportSettingsS3.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export/s3/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createExportSettingsS3Request,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create an Export Settings S3
     * Create Export Settings S3
     */
    async createExportSettingsS3(requestParameters: exportInventoryApiParams.CreateExportSettingsS3OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportSettingsResponse> {
        const response = await this.createExportSettingsS3Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an Export Settings
     * Delete Export Settings
     */


    async deleteExportSettingsRaw(requestParameters: exportInventoryApiParams.DeleteExportSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedCountResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling deleteExportSettings.');
        }

        if (requestParameters.exportSettingsName === null || requestParameters.exportSettingsName === undefined) {
            throw new runtime.RequiredError('exportSettingsName','Required parameter requestParameters.exportSettingsName was null or undefined when calling deleteExportSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.exportSettingsName !== undefined) {
            queryParameters['exportSettingsName'] = requestParameters.exportSettingsName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export/{exportSettingsName}`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes an Export Settings
     * Delete Export Settings
     */
    async deleteExportSettings(requestParameters: exportInventoryApiParams.DeleteExportSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedCountResponse> {
        const response = await this.deleteExportSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an Export Settings FTP. Not specifying exportSettingsFTPID deletes ALL ftp settings for the specified export settings.
     * Delete Export Settings FTP
     */


    async deleteExportSettingsFTPRaw(requestParameters: exportInventoryApiParams.DeleteExportSettingsFTPRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedCountResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling deleteExportSettingsFTP.');
        }

        if (requestParameters.exportSettingsName === null || requestParameters.exportSettingsName === undefined) {
            throw new runtime.RequiredError('exportSettingsName','Required parameter requestParameters.exportSettingsName was null or undefined when calling deleteExportSettingsFTP.');
        }

        const queryParameters: any = {};

        if (requestParameters.exportSettingsName !== undefined) {
            queryParameters['exportSettingsName'] = requestParameters.exportSettingsName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export/ftp/{exportSettingsName}/{exportSettingsFTPName}`.replace(`{${"exportSettingsFTPName"}}`, encodeURIComponent(String(requestParameters.exportSettingsFTPName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes an Export Settings FTP. Not specifying exportSettingsFTPID deletes ALL ftp settings for the specified export settings.
     * Delete Export Settings FTP
     */
    async deleteExportSettingsFTP(requestParameters: exportInventoryApiParams.DeleteExportSettingsFTPRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedCountResponse> {
        const response = await this.deleteExportSettingsFTPRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an Export Settings S3. Not specifying exportSettingsS3ID deletes ALL s3 settings for the specified export settings.
     * Delete Export Settings S3
     */


    async deleteExportSettingsS3Raw(requestParameters: exportInventoryApiParams.DeleteExportSettingsS3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedCountResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling deleteExportSettingsS3.');
        }

        if (requestParameters.exportSettingsName === null || requestParameters.exportSettingsName === undefined) {
            throw new runtime.RequiredError('exportSettingsName','Required parameter requestParameters.exportSettingsName was null or undefined when calling deleteExportSettingsS3.');
        }

        const queryParameters: any = {};

        if (requestParameters.exportSettingsName !== undefined) {
            queryParameters['exportSettingsName'] = requestParameters.exportSettingsName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export/s3/{exportSettingsName}/{exportSettingsS3Name}`.replace(`{${"exportSettingsS3Name"}}`, encodeURIComponent(String(requestParameters.exportSettingsS3Name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Deletes an Export Settings S3. Not specifying exportSettingsS3ID deletes ALL s3 settings for the specified export settings.
     * Delete Export Settings S3
     */
    async deleteExportSettingsS3(requestParameters: exportInventoryApiParams.DeleteExportSettingsS3Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedCountResponse> {
        const response = await this.deleteExportSettingsS3Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get an export settings
     * Get Export Settings
     */


    async getExportSettingsRaw(requestParameters: exportInventoryApiParams.GetExportSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetExportSettingsResponse>>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getExportSettings.');
        }

        if (requestParameters.exportSettingsName === null || requestParameters.exportSettingsName === undefined) {
            throw new runtime.RequiredError('exportSettingsName','Required parameter requestParameters.exportSettingsName was null or undefined when calling getExportSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.exportSettingsName !== undefined) {
            queryParameters['exportSettingsName'] = requestParameters.exportSettingsName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get an export settings
     * Get Export Settings
     */
    async getExportSettings(requestParameters: exportInventoryApiParams.GetExportSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetExportSettingsResponse>> {
        const response = await this.getExportSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Run Export Settings Job
     * Run Export
     */


    async runExportRaw(requestParameters: exportInventoryApiParams.RunExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExportInventoryResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling runExport.');
        }

        if (requestParameters.exportInventoryRequest === null || requestParameters.exportInventoryRequest === undefined) {
            throw new runtime.RequiredError('exportInventoryRequest','Required parameter requestParameters.exportInventoryRequest was null or undefined when calling runExport.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.exportInventoryRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Run Export Settings Job
     * Run Export
     */
    async runExport(requestParameters: exportInventoryApiParams.RunExportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExportInventoryResponse> {
        const response = await this.runExportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an Export Settings
     * Update Export Settings
     */


    async updateExportSettingsRaw(requestParameters: exportInventoryApiParams.UpdateExportSettingsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateExportSettingsResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling updateExportSettings.');
        }

        if (requestParameters.updateExportSettingsRequest === null || requestParameters.updateExportSettingsRequest === undefined) {
            throw new runtime.RequiredError('updateExportSettingsRequest','Required parameter requestParameters.updateExportSettingsRequest was null or undefined when calling updateExportSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateExportSettingsRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update an Export Settings
     * Update Export Settings
     */
    async updateExportSettings(requestParameters: exportInventoryApiParams.UpdateExportSettingsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateExportSettingsResponse> {
        const response = await this.updateExportSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an Export Settings FTP
     * Update Export Settings FTP
     */


    async updateExportSettingsFTPRaw(requestParameters: exportInventoryApiParams.UpdateExportSettingsFTPOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateExportSettingsFTPResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling updateExportSettingsFTP.');
        }

        if (requestParameters.updateExportSettingsFTPRequest === null || requestParameters.updateExportSettingsFTPRequest === undefined) {
            throw new runtime.RequiredError('updateExportSettingsFTPRequest','Required parameter requestParameters.updateExportSettingsFTPRequest was null or undefined when calling updateExportSettingsFTP.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export/ftp/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateExportSettingsFTPRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update an Export Settings FTP
     * Update Export Settings FTP
     */
    async updateExportSettingsFTP(requestParameters: exportInventoryApiParams.UpdateExportSettingsFTPOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateExportSettingsFTPResponse> {
        const response = await this.updateExportSettingsFTPRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an Export Settings S3
     * Update Export Settings S3
     */


    async updateExportSettingsS3Raw(requestParameters: exportInventoryApiParams.UpdateExportSettingsS3OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateExportSettingsS3Response>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling updateExportSettingsS3.');
        }

        if (requestParameters.updateExportSettingsS3Request === null || requestParameters.updateExportSettingsS3Request === undefined) {
            throw new runtime.RequiredError('updateExportSettingsS3Request','Required parameter requestParameters.updateExportSettingsS3Request was null or undefined when calling updateExportSettingsS3.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/export/s3/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateExportSettingsS3Request,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update an Export Settings S3
     * Update Export Settings S3
     */
    async updateExportSettingsS3(requestParameters: exportInventoryApiParams.UpdateExportSettingsS3OperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateExportSettingsS3Response> {
        const response = await this.updateExportSettingsS3Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
