/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment API - Production Profile
 * REST API backing the Kibo Fulfiller User Interface
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
  EntityModelOfWorkflowProcess,
  PagedModelOfEntityModelOfWorkflowProcess,
} from '../models';


export namespace workflowProcessApiParams { 
    export interface GetDefinitionImageRequest {
        containerIdOrAlias: string;
        processId: string;
        xVolTenant: number;
        xVolSite?: number;
    }
    export interface GetWorkflowProcessRequest {
        containerIdOrAlias: string;
        processId: string;
        xVolTenant: number;
        xVolSite?: number;
    }
    export interface GetWorkflowProcessByShipmentTypeRequest {
        shipmentType: string;
        xVolTenant: number;
        xVolSite?: number;
    }
    export interface GetWorkflowProcessByShipmentTypeLocationCodeRequest {
        locationCode: string;
        shipmentType: string;
        xVolTenant: number;
        xVolSite?: number;
    }
    export interface GetWorkflowProcessByShipmentTypeLocationGroupCodeRequest {
        locationGroupCode: string;
        shipmentType: string;
        xVolTenant: number;
        xVolSite?: number;
    }
    export interface GetWorkflowProcessesRequest {
        xVolTenant: number;
        page?: number;
        pageSize?: number;
        sort?: string;
        xVolSite?: number;
    }
}
/**
* WorkflowProcessApiService - interface
* 
* @export
* @interface WorkflowProcessApi
*/
export interface WorkflowProcessApiService {
    /**
    * getDefinitionImage
    * @summary getDefinitionImage
    * @param {string} containerIdOrAlias containerIdOrAlias
    * @param {string} processId processId
    * @param {number} xVolTenant 
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof WorkflowProcessApiInterface
    */
    getDefinitionImageRaw(requestParameters: workflowProcessApiParams.GetDefinitionImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
    * getDefinitionImage
    * getDefinitionImage
    */
    getDefinitionImage(requestParameters: workflowProcessApiParams.GetDefinitionImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
    * getWorkflowProcess
    * @summary getWorkflowProcess
    * @param {string} containerIdOrAlias containerIdOrAlias
    * @param {string} processId processId
    * @param {number} xVolTenant 
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof WorkflowProcessApiInterface
    */
    getWorkflowProcessRaw(requestParameters: workflowProcessApiParams.GetWorkflowProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>>;

    /**
    * getWorkflowProcess
    * getWorkflowProcess
    */
    getWorkflowProcess(requestParameters: workflowProcessApiParams.GetWorkflowProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess>;

    /**
    * getWorkflowProcessByShipmentType
    * @summary getWorkflowProcessByShipmentType
    * @param {string} shipmentType shipmentType
    * @param {number} xVolTenant 
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @deprecated
    * @throws {RequiredError}
    * @memberof WorkflowProcessApiInterface
    */
    getWorkflowProcessByShipmentTypeRaw(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>>;

    /**
    * getWorkflowProcessByShipmentType
    * getWorkflowProcessByShipmentType
    */
    getWorkflowProcessByShipmentType(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess>;

    /**
    * getWorkflowProcessByShipmentTypeLocationCode
    * @summary getWorkflowProcessByShipmentTypeLocationCode
    * @param {string} locationCode locationCode
    * @param {string} shipmentType shipmentType
    * @param {number} xVolTenant 
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof WorkflowProcessApiInterface
    */
    getWorkflowProcessByShipmentTypeLocationCodeRaw(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeLocationCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>>;

    /**
    * getWorkflowProcessByShipmentTypeLocationCode
    * getWorkflowProcessByShipmentTypeLocationCode
    */
    getWorkflowProcessByShipmentTypeLocationCode(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeLocationCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess>;

    /**
    * getWorkflowProcessByShipmentTypeLocationGroupCode
    * @summary getWorkflowProcessByShipmentTypeLocationGroupCode
    * @param {string} locationGroupCode locationGroupCode
    * @param {string} shipmentType shipmentType
    * @param {number} xVolTenant 
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof WorkflowProcessApiInterface
    */
    getWorkflowProcessByShipmentTypeLocationGroupCodeRaw(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeLocationGroupCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>>;

    /**
    * getWorkflowProcessByShipmentTypeLocationGroupCode
    * getWorkflowProcessByShipmentTypeLocationGroupCode
    */
    getWorkflowProcessByShipmentTypeLocationGroupCode(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeLocationGroupCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess>;

    /**
    * getWorkflowProcesses
    * @summary getWorkflowProcesses
    * @param {number} xVolTenant 
    * @param {number} [page] 
    * @param {number} [pageSize] 
    * @param {string} [sort] 
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof WorkflowProcessApiInterface
    */
    getWorkflowProcessesRaw(requestParameters: workflowProcessApiParams.GetWorkflowProcessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedModelOfEntityModelOfWorkflowProcess>>;

    /**
    * getWorkflowProcesses
    * getWorkflowProcesses
    */
    getWorkflowProcesses(requestParameters: workflowProcessApiParams.GetWorkflowProcessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedModelOfEntityModelOfWorkflowProcess>;

}


/**
 * 
 */
export class WorkflowProcessApi extends runtime.BaseAPI implements WorkflowProcessApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * getDefinitionImage
     * getDefinitionImage
     */


    async getDefinitionImageRaw(requestParameters: workflowProcessApiParams.GetDefinitionImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.containerIdOrAlias === null || requestParameters.containerIdOrAlias === undefined) {
            throw new runtime.RequiredError('containerIdOrAlias','Required parameter requestParameters.containerIdOrAlias was null or undefined when calling getDefinitionImage.');
        }

        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling getDefinitionImage.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getDefinitionImage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/definitionImage/{containerIdOrAlias}/{processId}`.replace(`{${"containerIdOrAlias"}}`, encodeURIComponent(String(requestParameters.containerIdOrAlias))).replace(`{${"processId"}}`, encodeURIComponent(String(requestParameters.processId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * getDefinitionImage
     * getDefinitionImage
     */
    async getDefinitionImage(requestParameters: workflowProcessApiParams.GetDefinitionImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getDefinitionImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getWorkflowProcess
     * getWorkflowProcess
     */


    async getWorkflowProcessRaw(requestParameters: workflowProcessApiParams.GetWorkflowProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>> {
        if (requestParameters.containerIdOrAlias === null || requestParameters.containerIdOrAlias === undefined) {
            throw new runtime.RequiredError('containerIdOrAlias','Required parameter requestParameters.containerIdOrAlias was null or undefined when calling getWorkflowProcess.');
        }

        if (requestParameters.processId === null || requestParameters.processId === undefined) {
            throw new runtime.RequiredError('processId','Required parameter requestParameters.processId was null or undefined when calling getWorkflowProcess.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getWorkflowProcess.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/definitions/{containerIdOrAlias}/{processId}`.replace(`{${"containerIdOrAlias"}}`, encodeURIComponent(String(requestParameters.containerIdOrAlias))).replace(`{${"processId"}}`, encodeURIComponent(String(requestParameters.processId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getWorkflowProcess
     * getWorkflowProcess
     */
    async getWorkflowProcess(requestParameters: workflowProcessApiParams.GetWorkflowProcessRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess> {
        const response = await this.getWorkflowProcessRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getWorkflowProcessByShipmentType
     * getWorkflowProcessByShipmentType
     */


    async getWorkflowProcessByShipmentTypeRaw(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>> {
        if (requestParameters.shipmentType === null || requestParameters.shipmentType === undefined) {
            throw new runtime.RequiredError('shipmentType','Required parameter requestParameters.shipmentType was null or undefined when calling getWorkflowProcessByShipmentType.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getWorkflowProcessByShipmentType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/shipmentType/{shipmentType}`.replace(`{${"shipmentType"}}`, encodeURIComponent(String(requestParameters.shipmentType))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getWorkflowProcessByShipmentType
     * getWorkflowProcessByShipmentType
     */
    async getWorkflowProcessByShipmentType(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess> {
        const response = await this.getWorkflowProcessByShipmentTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getWorkflowProcessByShipmentTypeLocationCode
     * getWorkflowProcessByShipmentTypeLocationCode
     */


    async getWorkflowProcessByShipmentTypeLocationCodeRaw(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeLocationCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>> {
        if (requestParameters.locationCode === null || requestParameters.locationCode === undefined) {
            throw new runtime.RequiredError('locationCode','Required parameter requestParameters.locationCode was null or undefined when calling getWorkflowProcessByShipmentTypeLocationCode.');
        }

        if (requestParameters.shipmentType === null || requestParameters.shipmentType === undefined) {
            throw new runtime.RequiredError('shipmentType','Required parameter requestParameters.shipmentType was null or undefined when calling getWorkflowProcessByShipmentTypeLocationCode.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getWorkflowProcessByShipmentTypeLocationCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/shipmentType/{shipmentType}/location/{locationCode}`.replace(`{${"locationCode"}}`, encodeURIComponent(String(requestParameters.locationCode))).replace(`{${"shipmentType"}}`, encodeURIComponent(String(requestParameters.shipmentType))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getWorkflowProcessByShipmentTypeLocationCode
     * getWorkflowProcessByShipmentTypeLocationCode
     */
    async getWorkflowProcessByShipmentTypeLocationCode(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeLocationCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess> {
        const response = await this.getWorkflowProcessByShipmentTypeLocationCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getWorkflowProcessByShipmentTypeLocationGroupCode
     * getWorkflowProcessByShipmentTypeLocationGroupCode
     */


    async getWorkflowProcessByShipmentTypeLocationGroupCodeRaw(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeLocationGroupCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfWorkflowProcess>> {
        if (requestParameters.locationGroupCode === null || requestParameters.locationGroupCode === undefined) {
            throw new runtime.RequiredError('locationGroupCode','Required parameter requestParameters.locationGroupCode was null or undefined when calling getWorkflowProcessByShipmentTypeLocationGroupCode.');
        }

        if (requestParameters.shipmentType === null || requestParameters.shipmentType === undefined) {
            throw new runtime.RequiredError('shipmentType','Required parameter requestParameters.shipmentType was null or undefined when calling getWorkflowProcessByShipmentTypeLocationGroupCode.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getWorkflowProcessByShipmentTypeLocationGroupCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/shipmentType/{shipmentType}/locationGroup/{locationGroupCode}`.replace(`{${"locationGroupCode"}}`, encodeURIComponent(String(requestParameters.locationGroupCode))).replace(`{${"shipmentType"}}`, encodeURIComponent(String(requestParameters.shipmentType))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getWorkflowProcessByShipmentTypeLocationGroupCode
     * getWorkflowProcessByShipmentTypeLocationGroupCode
     */
    async getWorkflowProcessByShipmentTypeLocationGroupCode(requestParameters: workflowProcessApiParams.GetWorkflowProcessByShipmentTypeLocationGroupCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfWorkflowProcess> {
        const response = await this.getWorkflowProcessByShipmentTypeLocationGroupCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * getWorkflowProcesses
     * getWorkflowProcesses
     */


    async getWorkflowProcessesRaw(requestParameters: workflowProcessApiParams.GetWorkflowProcessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedModelOfEntityModelOfWorkflowProcess>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getWorkflowProcesses.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/processes/definitions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * getWorkflowProcesses
     * getWorkflowProcesses
     */
    async getWorkflowProcesses(requestParameters: workflowProcessApiParams.GetWorkflowProcessesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedModelOfEntityModelOfWorkflowProcess> {
        const response = await this.getWorkflowProcessesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
