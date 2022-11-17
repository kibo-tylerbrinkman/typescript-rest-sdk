/* tslint:disable */
/* eslint-disable */
/**
 * Kibo MZDB Service
 * OpenAPI Spec for Kibo MZDB Service
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
  EntityContainer,
  EntityContainerCollection,
} from '../models';
import {
    EntityContainerFromJSON,
    EntityContainerToJSON,
    EntityContainerCollectionFromJSON,
    EntityContainerCollectionToJSON,
} from '../models';

export interface EntityContainersApiGetEntityContainerRequest {
    entityListFullName: string;
    id: string;
}

export interface EntityContainersApiGetEntityContainersRequest {
    entityListFullName: string;
    pageSize?: number;
    startIndex?: number;
    filter?: string;
    sortBy?: string;
}

export interface EntityContainersApiGetViewEntityContainerRequest {
    entityListFullName: string;
    viewName: string;
    entityId: string;
}

export interface EntityContainersApiGetViewEntityContainersRequest {
    entityListFullName: string;
    viewName: string;
    pageSize?: number;
    startIndex?: number;
    filter?: string;
}

/**
 * 
 */
export class EntityContainersApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get a specific Entity Container from an  EntityList instance
     * Get Entity Container
     */


    async getEntityContainerRaw(requestParameters: EntityContainersApiGetEntityContainerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityContainer>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getEntityContainer.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getEntityContainer.');
        }

        const queryParameters: any = {};

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
            path: `/platform/entitylists/{entityListFullName}/entityContainers/{id}`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityContainerFromJSON(jsonValue));
    }

    /**
     * Get a specific Entity Container from an  EntityList instance
     * Get Entity Container
     */
    async getEntityContainer(requestParameters: EntityContainersApiGetEntityContainerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityContainer> {
        const response = await this.getEntityContainerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a filtered collection of Entity Containers from an Entity List instance
     * Get Entity Containers
     */


    async getEntityContainersRaw(requestParameters: EntityContainersApiGetEntityContainersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityContainerCollection>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getEntityContainers.');
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
            path: `/platform/entitylists/{entityListFullName}/entityContainers`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityContainerCollectionFromJSON(jsonValue));
    }

    /**
     * Get a filtered collection of Entity Containers from an Entity List instance
     * Get Entity Containers
     */
    async getEntityContainers(requestParameters: EntityContainersApiGetEntityContainersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityContainerCollection> {
        const response = await this.getEntityContainersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get an Entity Container for a specific Entity in a ListView on an EntityList
     * Get  Entity View Container
     */


    async getViewEntityContainerRaw(requestParameters: EntityContainersApiGetViewEntityContainerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityContainer>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getViewEntityContainer.');
        }

        if (requestParameters.viewName === null || requestParameters.viewName === undefined) {
            throw new runtime.RequiredError('viewName','Required parameter requestParameters.viewName was null or undefined when calling getViewEntityContainer.');
        }

        if (requestParameters.entityId === null || requestParameters.entityId === undefined) {
            throw new runtime.RequiredError('entityId','Required parameter requestParameters.entityId was null or undefined when calling getViewEntityContainer.');
        }

        const queryParameters: any = {};

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
            path: `/platform/entitylists/{entityListFullName}/views/{viewName}/entityContainers/{entityId}`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"viewName"}}`, encodeURIComponent(String(requestParameters.viewName))).replace(`{${"entityId"}}`, encodeURIComponent(String(requestParameters.entityId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityContainerFromJSON(jsonValue));
    }

    /**
     * Get an Entity Container for a specific Entity in a ListView on an EntityList
     * Get  Entity View Container
     */
    async getViewEntityContainer(requestParameters: EntityContainersApiGetViewEntityContainerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityContainer> {
        const response = await this.getViewEntityContainerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a filtered collection of Entity Containers for a ListView on an EntityList
     * Get Entity View Containers
     */


    async getViewEntityContainersRaw(requestParameters: EntityContainersApiGetViewEntityContainersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityContainerCollection>> {
        if (requestParameters.entityListFullName === null || requestParameters.entityListFullName === undefined) {
            throw new runtime.RequiredError('entityListFullName','Required parameter requestParameters.entityListFullName was null or undefined when calling getViewEntityContainers.');
        }

        if (requestParameters.viewName === null || requestParameters.viewName === undefined) {
            throw new runtime.RequiredError('viewName','Required parameter requestParameters.viewName was null or undefined when calling getViewEntityContainers.');
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
            path: `/platform/entitylists/{entityListFullName}/views/{viewName}/entityContainers`.replace(`{${"entityListFullName"}}`, encodeURIComponent(String(requestParameters.entityListFullName))).replace(`{${"viewName"}}`, encodeURIComponent(String(requestParameters.viewName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityContainerCollectionFromJSON(jsonValue));
    }

    /**
     * Get a filtered collection of Entity Containers for a ListView on an EntityList
     * Get Entity View Containers
     */
    async getViewEntityContainers(requestParameters: EntityContainersApiGetViewEntityContainersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityContainerCollection> {
        const response = await this.getViewEntityContainersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}