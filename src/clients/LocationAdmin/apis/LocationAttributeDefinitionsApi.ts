/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Admin Service
 * OpenAPI Spec for Kibo Location Admin Service
 *
 * The version of the OpenAPI document: v1_admin
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../../client-runtime';
import { basePathTemplate } from '../api-path';
import type {
  Attribute,
  AttributeCollection,
  AttributeVocabularyValue,
} from '../models';
import {
    AttributeFromJSON,
    AttributeToJSON,
    AttributeCollectionFromJSON,
    AttributeCollectionToJSON,
    AttributeVocabularyValueFromJSON,
    AttributeVocabularyValueToJSON,
} from '../models';

export interface LocationAttributeDefinitionsApiCreateAttributeRequest {
    attribute?: Attribute;
}

export interface LocationAttributeDefinitionsApiGetAttributeRequest {
    attributeFQN: string;
    responseGroups?: string;
}

export interface LocationAttributeDefinitionsApiGetAttributeVocabularyValuesRequest {
    attributeFQN: string;
    responseGroups?: string;
}

export interface LocationAttributeDefinitionsApiGetAttributesRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    responseGroups?: string;
    filter?: string;
}

export interface LocationAttributeDefinitionsApiUpdateAttributeRequest {
    attributeFQN: string;
    attribute?: Attribute;
}

/**
 * 
 */
export class LocationAttributeDefinitionsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create Attribute
     * Create Attribute
     */


    async createAttributeRaw(requestParameters: LocationAttributeDefinitionsApiCreateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Attribute>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





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
            path: `/commerce/admin/locations/attributedefinition/attributes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AttributeToJSON(requestParameters.attribute),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributeFromJSON(jsonValue));
    }

    /**
     * Create Attribute
     * Create Attribute
     */
    async createAttribute(requestParameters: LocationAttributeDefinitionsApiCreateAttributeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Attribute> {
        const response = await this.createAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Attribute
     * Get Attribute
     */


    async getAttributeRaw(requestParameters: LocationAttributeDefinitionsApiGetAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Attribute>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttribute.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
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
            path: `/commerce/admin/locations/attributedefinition/attributes/{attributeFQN}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributeFromJSON(jsonValue));
    }

    /**
     * Get Attribute
     * Get Attribute
     */
    async getAttribute(requestParameters: LocationAttributeDefinitionsApiGetAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Attribute> {
        const response = await this.getAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Attribute Vocabulary Values
     * Get Attribute Vocabulary Values
     */


    async getAttributeVocabularyValuesRaw(requestParameters: LocationAttributeDefinitionsApiGetAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AttributeVocabularyValue>>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling getAttributeVocabularyValues.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
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
            path: `/commerce/admin/locations/attributedefinition/attributes/{attributeFQN}/VocabularyValues`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AttributeVocabularyValueFromJSON));
    }

    /**
     * Get Attribute Vocabulary Values
     * Get Attribute Vocabulary Values
     */
    async getAttributeVocabularyValues(requestParameters: LocationAttributeDefinitionsApiGetAttributeVocabularyValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AttributeVocabularyValue>> {
        const response = await this.getAttributeVocabularyValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Attributes
     * Get Attributes
     */


    async getAttributesRaw(requestParameters: LocationAttributeDefinitionsApiGetAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttributeCollection>> {
        const queryParameters: any = {};

        if (requestParameters.startIndex !== undefined) {
            queryParameters['startIndex'] = requestParameters.startIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
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
            path: `/commerce/admin/locations/attributedefinition/attributes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributeCollectionFromJSON(jsonValue));
    }

    /**
     * Get Attributes
     * Get Attributes
     */
    async getAttributes(requestParameters: LocationAttributeDefinitionsApiGetAttributesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttributeCollection> {
        const response = await this.getAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Attribute
     * Update Attribute
     */


    async updateAttributeRaw(requestParameters: LocationAttributeDefinitionsApiUpdateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Attribute>> {
        if (requestParameters.attributeFQN === null || requestParameters.attributeFQN === undefined) {
            throw new runtime.RequiredError('attributeFQN','Required parameter requestParameters.attributeFQN was null or undefined when calling updateAttribute.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





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
            path: `/commerce/admin/locations/attributedefinition/attributes/{attributeFQN}`.replace(`{${"attributeFQN"}}`, encodeURIComponent(String(requestParameters.attributeFQN))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AttributeToJSON(requestParameters.attribute),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttributeFromJSON(jsonValue));
    }

    /**
     * Update Attribute
     * Update Attribute
     */
    async updateAttribute(requestParameters: LocationAttributeDefinitionsApiUpdateAttributeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Attribute> {
        const response = await this.updateAttributeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}