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
  TenantSiloConfigModel,
  UpdateTenantSiloConfigRequest,
} from '../models';


export namespace inventorySiloApiParams { 
    export interface UpdateTenantSiloConfigOperationRequest {
        xVolTenant: number;
        updateTenantSiloConfigRequest: UpdateTenantSiloConfigRequest;
    }
}
/**
* InventorySiloApiService - interface
* 
* @export
* @interface InventorySiloApi
*/
export interface InventorySiloApiService {
    /**
    * Updates tenant silo config
    * @summary Update Tenant Silo Config
    * @param {number} xVolTenant Tenant ID
    * @param {UpdateTenantSiloConfigRequest} updateTenantSiloConfigRequest Request to create tenant silo config
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof InventorySiloApiInterface
    */
    updateTenantSiloConfigRaw(requestParameters: inventorySiloApiParams.UpdateTenantSiloConfigOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TenantSiloConfigModel>>;

    /**
    * Updates tenant silo config
    * Update Tenant Silo Config
    */
    updateTenantSiloConfig(requestParameters: inventorySiloApiParams.UpdateTenantSiloConfigOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TenantSiloConfigModel>;

}


/**
 * 
 */
export class InventorySiloApi extends runtime.BaseAPI implements InventorySiloApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Updates tenant silo config
     * Update Tenant Silo Config
     */


    async updateTenantSiloConfigRaw(requestParameters: inventorySiloApiParams.UpdateTenantSiloConfigOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TenantSiloConfigModel>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling updateTenantSiloConfig.');
        }

        if (requestParameters.updateTenantSiloConfigRequest === null || requestParameters.updateTenantSiloConfigRequest === undefined) {
            throw new runtime.RequiredError('updateTenantSiloConfigRequest','Required parameter requestParameters.updateTenantSiloConfigRequest was null or undefined when calling updateTenantSiloConfig.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/silo/siloConfig`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateTenantSiloConfigRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates tenant silo config
     * Update Tenant Silo Config
     */
    async updateTenantSiloConfig(requestParameters: inventorySiloApiParams.UpdateTenantSiloConfigOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TenantSiloConfigModel> {
        const response = await this.updateTenantSiloConfigRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
