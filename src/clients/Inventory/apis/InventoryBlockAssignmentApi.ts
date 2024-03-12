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
  AllocateInventory500Response,
  BaseResponse,
  BlockAssignmentRequest,
} from '../models';

export interface BlockAssignmentOperationRequest {
    xVolTenant: number;
    blockAssignmentRequest: BlockAssignmentRequest;
    responseFields?: string;
}

/**
 * InventoryBlockAssignmentApi - interface
 * 
 * @export
 * @interface InventoryBlockAssignmentApiInterface
 */
export interface InventoryBlockAssignmentApiInterface {
    /**
     * Setting the blockAssignment flag to true for the product based on the given request
     * @summary Block Assignment
     * @param {number} xVolTenant Tenant ID
     * @param {BlockAssignmentRequest} blockAssignmentRequest Request to block assignment on the product
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryBlockAssignmentApiInterface
     */
    blockAssignmentRaw(requestParameters: BlockAssignmentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseResponse>>;

    /**
     * Setting the blockAssignment flag to true for the product based on the given request
     * Block Assignment
     */
    blockAssignment(requestParameters: BlockAssignmentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseResponse>;

}

/**
 * 
 */
export class InventoryBlockAssignmentApi extends runtime.BaseAPI implements InventoryBlockAssignmentApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Setting the blockAssignment flag to true for the product based on the given request
     * Block Assignment
     */


    async blockAssignmentRaw(requestParameters: BlockAssignmentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling blockAssignment.');
        }

        if (requestParameters.blockAssignmentRequest === null || requestParameters.blockAssignmentRequest === undefined) {
            throw new runtime.RequiredError('blockAssignmentRequest','Required parameter requestParameters.blockAssignmentRequest was null or undefined when calling blockAssignment.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v5/inventory/blockAssignment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.blockAssignmentRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Setting the blockAssignment flag to true for the product based on the given request
     * Block Assignment
     */
    async blockAssignment(requestParameters: BlockAssignmentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseResponse> {
        const response = await this.blockAssignmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
