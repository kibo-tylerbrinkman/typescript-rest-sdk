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
  BaseResponse,
  DeletedCountResponse,
  InventoryTag,
} from '../models';

export interface CreateTagRequest {
    xVolTenant: number;
    tagCategoryName: string;
    inventoryTag: InventoryTag;
    responseFields?: string;
}

export interface DeleteTagRequest {
    xVolTenant: number;
    tagCategoryName: string;
    tagValue: string;
}

export interface GetTagRequest {
    xVolTenant: number;
    tagCategoryName: string;
    tagValue: string;
    responseFields?: string;
}

export interface UpdateTagRequest {
    xVolTenant: number;
    tagCategoryName: string;
    tagValue: string;
    inventoryTag: InventoryTag;
    responseFields?: string;
}

/**
 * InventoryTagApi - interface
 * 
 * @export
 * @interface InventoryTagApiInterface
 */
export interface InventoryTagApiInterface {
    /**
     * Create a tag
     * @summary Create Tag
     * @param {number} xVolTenant Tenant ID
     * @param {string} tagCategoryName Tag Category Name
     * @param {InventoryTag} inventoryTag Request create or modify Tag
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryTagApiInterface
     */
    createTagRaw(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryTag>>;

    /**
     * Create a tag
     * Create Tag
     */
    createTag(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryTag>;

    /**
     * Delete a Tag
     * @summary Delete Tag
     * @param {number} xVolTenant Tenant ID
     * @param {string} tagCategoryName Tag Category Name
     * @param {string} tagValue Tag Value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryTagApiInterface
     */
    deleteTagRaw(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedCountResponse>>;

    /**
     * Delete a Tag
     * Delete Tag
     */
    deleteTag(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedCountResponse>;

    /**
     * Get a tag
     * @summary Get Tag
     * @param {number} xVolTenant Tenant ID
     * @param {string} tagCategoryName Tag Category Name
     * @param {string} tagValue Tag Value
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryTagApiInterface
     */
    getTagRaw(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryTag>>;

    /**
     * Get a tag
     * Get Tag
     */
    getTag(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryTag>;

    /**
     * Update the designated tag
     * @summary Update Tag
     * @param {number} xVolTenant Tenant ID
     * @param {string} tagCategoryName Tag Category Name
     * @param {string} tagValue Tag Value
     * @param {InventoryTag} inventoryTag Request create or modify Tag
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InventoryTagApiInterface
     */
    updateTagRaw(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryTag>>;

    /**
     * Update the designated tag
     * Update Tag
     */
    updateTag(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryTag>;

}

/**
 * 
 */
export class InventoryTagApi extends runtime.BaseAPI implements InventoryTagApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create a tag
     * Create Tag
     */


    async createTagRaw(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryTag>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling createTag.');
        }

        if (requestParameters.tagCategoryName === null || requestParameters.tagCategoryName === undefined) {
            throw new runtime.RequiredError('tagCategoryName','Required parameter requestParameters.tagCategoryName was null or undefined when calling createTag.');
        }

        if (requestParameters.inventoryTag === null || requestParameters.inventoryTag === undefined) {
            throw new runtime.RequiredError('inventoryTag','Required parameter requestParameters.inventoryTag was null or undefined when calling createTag.');
        }

        const queryParameters: any = {};

        if (requestParameters.tagCategoryName !== undefined) {
            queryParameters['tagCategoryName'] = requestParameters.tagCategoryName;
        }

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
            path: `/commerce/inventory/v1/tagCategory/{tag_category_name}/tag`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.inventoryTag,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create a tag
     * Create Tag
     */
    async createTag(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryTag> {
        const response = await this.createTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a Tag
     * Delete Tag
     */


    async deleteTagRaw(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DeletedCountResponse>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling deleteTag.');
        }

        if (requestParameters.tagCategoryName === null || requestParameters.tagCategoryName === undefined) {
            throw new runtime.RequiredError('tagCategoryName','Required parameter requestParameters.tagCategoryName was null or undefined when calling deleteTag.');
        }

        if (requestParameters.tagValue === null || requestParameters.tagValue === undefined) {
            throw new runtime.RequiredError('tagValue','Required parameter requestParameters.tagValue was null or undefined when calling deleteTag.');
        }

        const queryParameters: any = {};

        if (requestParameters.tagCategoryName !== undefined) {
            queryParameters['tagCategoryName'] = requestParameters.tagCategoryName;
        }

        if (requestParameters.tagValue !== undefined) {
            queryParameters['tagValue'] = requestParameters.tagValue;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/tagCategory/{tag_category_name}/tag/{tag_value}`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Delete a Tag
     * Delete Tag
     */
    async deleteTag(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DeletedCountResponse> {
        const response = await this.deleteTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a tag
     * Get Tag
     */


    async getTagRaw(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryTag>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getTag.');
        }

        if (requestParameters.tagCategoryName === null || requestParameters.tagCategoryName === undefined) {
            throw new runtime.RequiredError('tagCategoryName','Required parameter requestParameters.tagCategoryName was null or undefined when calling getTag.');
        }

        if (requestParameters.tagValue === null || requestParameters.tagValue === undefined) {
            throw new runtime.RequiredError('tagValue','Required parameter requestParameters.tagValue was null or undefined when calling getTag.');
        }

        const queryParameters: any = {};

        if (requestParameters.tagCategoryName !== undefined) {
            queryParameters['tagCategoryName'] = requestParameters.tagCategoryName;
        }

        if (requestParameters.tagValue !== undefined) {
            queryParameters['tagValue'] = requestParameters.tagValue;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/inventory/v1/tagCategory/{tag_category_name}/tag/{tag_value}`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a tag
     * Get Tag
     */
    async getTag(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryTag> {
        const response = await this.getTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the designated tag
     * Update Tag
     */


    async updateTagRaw(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryTag>> {
        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling updateTag.');
        }

        if (requestParameters.tagCategoryName === null || requestParameters.tagCategoryName === undefined) {
            throw new runtime.RequiredError('tagCategoryName','Required parameter requestParameters.tagCategoryName was null or undefined when calling updateTag.');
        }

        if (requestParameters.tagValue === null || requestParameters.tagValue === undefined) {
            throw new runtime.RequiredError('tagValue','Required parameter requestParameters.tagValue was null or undefined when calling updateTag.');
        }

        if (requestParameters.inventoryTag === null || requestParameters.inventoryTag === undefined) {
            throw new runtime.RequiredError('inventoryTag','Required parameter requestParameters.inventoryTag was null or undefined when calling updateTag.');
        }

        const queryParameters: any = {};

        if (requestParameters.tagCategoryName !== undefined) {
            queryParameters['tagCategoryName'] = requestParameters.tagCategoryName;
        }

        if (requestParameters.tagValue !== undefined) {
            queryParameters['tagValue'] = requestParameters.tagValue;
        }

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
            path: `/commerce/inventory/v1/tagCategory/{tag_category_name}/tag/{tag_value}`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.inventoryTag,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update the designated tag
     * Update Tag
     */
    async updateTag(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryTag> {
        const response = await this.updateTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
