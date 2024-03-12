/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MZDB Service
 * OpenAPI Spec for Kibo MZDB Service
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
  AppDevHttpRequestMessage,
  EntityCollection,
} from '../models';


export namespace entitiesApiParams { 
    export interface DeleteEntityRequest {
        entityListFullName: string;
        id: string;
    }
    export interface GetEntitiesRequest {
        entityListFullName: string;
        pageSize?: number;
        startIndex?: number;
        filter?: string;
        sortBy?: string;
        responseFields?: string;
    }
    export interface GetEntityRequest {
        entityListFullName: string;
        id: string;
        responseFields?: string;
    }
    export interface GetViewEntitiesRequest {
        entityListFullName: string;
        viewName: string;
        pageSize?: number;
        startIndex?: number;
        filter?: string;
        responseFields?: string;
    }
    export interface GetViewEntityRequest {
        entityListFullName: string;
        viewName: string;
        entityId: string;
        responseFields?: string;
    }
    export interface InsertEntityRequest {
        entityListFullName: string;
        responseFields?: string;
        appDevHttpRequestMessage?: AppDevHttpRequestMessage;
    }
    export interface UpdateEntityRequest {
        entityListFullName: string;
        id: string;
        responseFields?: string;
        appDevHttpRequestMessage?: AppDevHttpRequestMessage;
    }
}
/**
* EntitiesApiService - interface
* 
* @export
* @interface EntitiesApi
*/
export interface EntitiesApiService {
    /**
    * Delete an existing Entity from an EntityList instance
    * @summary Delete Entity
    * @param {string} entityListFullName The full name of the EntityList including namespace in name@nameSpace format
    * @param {string} id The unique id of the Entity
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof EntitiesApiInterface
    */
    deleteEntityRaw(requestParameters: entitiesApiParams.DeleteEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Delete an existing Entity from an EntityList instance
    * Delete Entity
    */
    deleteEntity(requestParameters: entitiesApiParams.DeleteEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get a filtered collection of Entities from an EntityList instance
    * @summary Get Entities
    * @param {string} entityListFullName The full name of the EntityList including namespace in name@nameSpace format
    * @param {number} [pageSize] 
    * @param {number} [startIndex] 
    * @param {string} [filter] 
    * @param {string} [sortBy] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof EntitiesApiInterface
    */
    getEntitiesRaw(requestParameters: entitiesApiParams.GetEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityCollection>>;

    /**
    * Get a filtered collection of Entities from an EntityList instance
    * Get Entities
    */
    getEntities(requestParameters: entitiesApiParams.GetEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityCollection>;

    /**
    * Get a specific Entity from an EntityList instance
    * @summary Get Entity
    * @param {string} entityListFullName The full name of the EntityList including namespace in name@nameSpace format
    * @param {string} id The unique id of the Entity
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof EntitiesApiInterface
    */
    getEntityRaw(requestParameters: entitiesApiParams.GetEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
    * Get a specific Entity from an EntityList instance
    * Get Entity
    */
    getEntity(requestParameters: entitiesApiParams.GetEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
    * Get a filtered collection of Entities for a ListView on an EntityList
    * @summary Get View Entities
    * @param {string} entityListFullName The full name of the EntityList including namespace in name@nameSpace format
    * @param {string} viewName The name of the ListView
    * @param {number} [pageSize] 
    * @param {number} [startIndex] 
    * @param {string} [filter] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof EntitiesApiInterface
    */
    getViewEntitiesRaw(requestParameters: entitiesApiParams.GetViewEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityCollection>>;

    /**
    * Get a filtered collection of Entities for a ListView on an EntityList
    * Get View Entities
    */
    getViewEntities(requestParameters: entitiesApiParams.GetViewEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityCollection>;

    /**
    * Get a specific Entity in a ListView on an EntityList
    * @summary Get View Entity
    * @param {string} entityListFullName The full name of the EntityList including namespace in name@nameSpace format
    * @param {string} viewName The name of the ListView
    * @param {string} entityId The unique Entity id
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof EntitiesApiInterface
    */
    getViewEntityRaw(requestParameters: entitiesApiParams.GetViewEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
    * Get a specific Entity in a ListView on an EntityList
    * Get View Entity
    */
    getViewEntity(requestParameters: entitiesApiParams.GetViewEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
    * Insert an Entity into an EntityList instance
    * @summary Add Entity
    * @param {string} entityListFullName The full name of the EntityList including namespace in name@nameSpace format
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {AppDevHttpRequestMessage} [appDevHttpRequestMessage] The Entity in json format
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof EntitiesApiInterface
    */
    insertEntityRaw(requestParameters: entitiesApiParams.InsertEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
    * Insert an Entity into an EntityList instance
    * Add Entity
    */
    insertEntity(requestParameters: entitiesApiParams.InsertEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
    * Update an existing Entity in an EntityList instance
    * @summary Update Entity
    * @param {string} entityListFullName The full name of the EntityList including namespace in name@nameSpace format
    * @param {string} id The unique id of the Entity
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {AppDevHttpRequestMessage} [appDevHttpRequestMessage] The Entity in json format
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof EntitiesApiInterface
    */
    updateEntityRaw(requestParameters: entitiesApiParams.UpdateEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
    * Update an existing Entity in an EntityList instance
    * Update Entity
    */
    updateEntity(requestParameters: entitiesApiParams.UpdateEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

}


/**
 * 
 */
export class EntitiesApi extends runtime.BaseAPI implements EntitiesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Delete an existing Entity from an EntityList instance
     * Delete Entity
     */


    async deleteEntityRaw(requestParameters: entitiesApiParams.DeleteEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling deleteEntity.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteEntity.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/entitylists/{entityListFullName}/entities/{id}`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing Entity from an EntityList instance
     * Delete Entity
     */
    async deleteEntity(requestParameters: entitiesApiParams.DeleteEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteEntityRaw(requestParameters, initOverrides);
    }

    /**
     * Get a filtered collection of Entities from an EntityList instance
     * Get Entities
     */


    async getEntitiesRaw(requestParameters: entitiesApiParams.GetEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityCollection>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getEntities.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/entitylists/{entityListFullName}/entities`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a filtered collection of Entities from an EntityList instance
     * Get Entities
     */
    async getEntities(requestParameters: entitiesApiParams.GetEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityCollection> {
        const response = await this.getEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific Entity from an EntityList instance
     * Get Entity
     */


    async getEntityRaw(requestParameters: entitiesApiParams.GetEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getEntity.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getEntity.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/entitylists/{entityListFullName}/entities/{id}`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get a specific Entity from an EntityList instance
     * Get Entity
     */
    async getEntity(requestParameters: entitiesApiParams.GetEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getEntityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a filtered collection of Entities for a ListView on an EntityList
     * Get View Entities
     */


    async getViewEntitiesRaw(requestParameters: entitiesApiParams.GetViewEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityCollection>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getViewEntities.');
        }

        if (requestParameters.viewName === null || requestParameters.viewName === undefined) {
            throw new runtime.RequiredError('viewName','Required parameter requestParameters.viewName was null or undefined when calling getViewEntities.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
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
            path: `/platform/entitylists/{entityListFullName}/views/{viewName}/entities`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"viewName"}}`, encodeURIComponent(String(requestParameters.viewName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a filtered collection of Entities for a ListView on an EntityList
     * Get View Entities
     */
    async getViewEntities(requestParameters: entitiesApiParams.GetViewEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityCollection> {
        const response = await this.getViewEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific Entity in a ListView on an EntityList
     * Get View Entity
     */


    async getViewEntityRaw(requestParameters: entitiesApiParams.GetViewEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getViewEntity.');
        }

        if (requestParameters.viewName === null || requestParameters.viewName === undefined) {
            throw new runtime.RequiredError('viewName','Required parameter requestParameters.viewName was null or undefined when calling getViewEntity.');
        }

        if (requestParameters.entityId === null || requestParameters.entityId === undefined) {
            throw new runtime.RequiredError('entityId','Required parameter requestParameters.entityId was null or undefined when calling getViewEntity.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/entitylists/{entityListFullName}/views/{viewName}/entities/{entityId}`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"viewName"}}`, encodeURIComponent(String(requestParameters.viewName))).replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters.entityId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get a specific Entity in a ListView on an EntityList
     * Get View Entity
     */
    async getViewEntity(requestParameters: entitiesApiParams.GetViewEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getViewEntityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Insert an Entity into an EntityList instance
     * Add Entity
     */


    async insertEntityRaw(requestParameters: entitiesApiParams.InsertEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling insertEntity.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/entitylists/{entityListFullName}/entities`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.appDevHttpRequestMessage,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Insert an Entity into an EntityList instance
     * Add Entity
     */
    async insertEntity(requestParameters: entitiesApiParams.InsertEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.insertEntityRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing Entity in an EntityList instance
     * Update Entity
     */


    async updateEntityRaw(requestParameters: entitiesApiParams.UpdateEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling updateEntity.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateEntity.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/entitylists/{entityListFullName}/entities/{id}`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.appDevHttpRequestMessage,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Update an existing Entity in an EntityList instance
     * Update Entity
     */
    async updateEntity(requestParameters: entitiesApiParams.UpdateEntityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateEntityRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
