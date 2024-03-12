/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Shipping Admin Service
 * OpenAPI Spec for Kibo Shipping Admin Service
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
  TargetRule,
  TargetRuleCollection,
} from '../models';

export interface CreateTargetRuleRequest {
    responseFields?: string;
    targetRule?: TargetRule;
}

export interface DeleteTargetRuleRequest {
    code: string;
}

export interface GetTargetRuleRequest {
    code: string;
    responseFields?: string;
}

export interface GetTargetRulesRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
    responseFields?: string;
}

export interface UpdateTargetRuleRequest {
    code: string;
    responseFields?: string;
    targetRule?: TargetRule;
}

export interface ValidateTargetRuleRequest {
    responseFields?: string;
    targetRule?: TargetRule;
}

/**
 * TargetRulesApi - interface
 * 
 * @export
 * @interface TargetRulesApiInterface
 */
export interface TargetRulesApiInterface {
    /**
     * Create Target Rule
     * @summary Create Target Rule
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {TargetRule} [targetRule] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TargetRulesApiInterface
     */
    createTargetRuleRaw(requestParameters: CreateTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TargetRule>>;

    /**
     * Create Target Rule
     * Create Target Rule
     */
    createTargetRule(requestParameters: CreateTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TargetRule>;

    /**
     * Delete Target Rule
     * @summary Delete Target Rule
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TargetRulesApiInterface
     */
    deleteTargetRuleRaw(requestParameters: DeleteTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Delete Target Rule
     * Delete Target Rule
     */
    deleteTargetRule(requestParameters: DeleteTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Get Target Rule
     * @summary Get Target Rule
     * @param {string} code 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TargetRulesApiInterface
     */
    getTargetRuleRaw(requestParameters: GetTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TargetRule>>;

    /**
     * Get Target Rule
     * Get Target Rule
     */
    getTargetRule(requestParameters: GetTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TargetRule>;

    /**
     * 
     * @summary Retrieves a list of TargetRules according to any specified filter criteria and sort options
     * @param {number} [startIndex] Used to page results from a query. Indicates the zero-based offset in the complete result set where the returned entities begin. The default value is 0.
     * @param {number} [pageSize] Used to page results from a query. Indicates the maximum number of entities to return from a query. The default value is 20 and the maximum value is 200.
     * @param {string} [sortBy] The element to sort the results by and the order in which the results appear. Either ascending (a-z) or descending (z-a) order.
     * @param {string} [filter] A set of filter expressions representing the search parameters for a query: eq&#x3D;equals, ne&#x3D;not equals, gt&#x3D;greater than, lt &#x3D; less than or equals, gt &#x3D; greater than or equals, lt &#x3D; less than or equals, sw &#x3D; starts with, or cont &#x3D; contains. Optional.
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TargetRulesApiInterface
     */
    getTargetRulesRaw(requestParameters: GetTargetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TargetRuleCollection>>;

    /**
     * 
     * Retrieves a list of TargetRules according to any specified filter criteria and sort options
     */
    getTargetRules(requestParameters: GetTargetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TargetRuleCollection>;

    /**
     * Update Target Rule
     * @summary Update Target Rule
     * @param {string} code 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {TargetRule} [targetRule] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TargetRulesApiInterface
     */
    updateTargetRuleRaw(requestParameters: UpdateTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TargetRule>>;

    /**
     * Update Target Rule
     * Update Target Rule
     */
    updateTargetRule(requestParameters: UpdateTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TargetRule>;

    /**
     * Validate Target Rule
     * @summary Validate Target Rule
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {TargetRule} [targetRule] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TargetRulesApiInterface
     */
    validateTargetRuleRaw(requestParameters: ValidateTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Validate Target Rule
     * Validate Target Rule
     */
    validateTargetRule(requestParameters: ValidateTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class TargetRulesApi extends runtime.BaseAPI implements TargetRulesApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Create Target Rule
     * Create Target Rule
     */


    async createTargetRuleRaw(requestParameters: CreateTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TargetRule>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/targetrules`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.targetRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Create Target Rule
     * Create Target Rule
     */
    async createTargetRule(requestParameters: CreateTargetRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TargetRule> {
        const response = await this.createTargetRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Target Rule
     * Delete Target Rule
     */


    async deleteTargetRuleRaw(requestParameters: DeleteTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteTargetRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/targetrules/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Target Rule
     * Delete Target Rule
     */
    async deleteTargetRule(requestParameters: DeleteTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTargetRuleRaw(requestParameters, initOverrides);
    }

    /**
     * Get Target Rule
     * Get Target Rule
     */


    async getTargetRuleRaw(requestParameters: GetTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TargetRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getTargetRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/targetrules/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Target Rule
     * Get Target Rule
     */
    async getTargetRule(requestParameters: GetTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TargetRule> {
        const response = await this.getTargetRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Retrieves a list of TargetRules according to any specified filter criteria and sort options
     */


    async getTargetRulesRaw(requestParameters: GetTargetRulesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TargetRuleCollection>> {
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

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/targetrules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Retrieves a list of TargetRules according to any specified filter criteria and sort options
     */
    async getTargetRules(requestParameters: GetTargetRulesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TargetRuleCollection> {
        const response = await this.getTargetRulesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Target Rule
     * Update Target Rule
     */


    async updateTargetRuleRaw(requestParameters: UpdateTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TargetRule>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling updateTargetRule.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/targetrules/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.targetRule,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Update Target Rule
     * Update Target Rule
     */
    async updateTargetRule(requestParameters: UpdateTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TargetRule> {
        const response = await this.updateTargetRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Validate Target Rule
     * Validate Target Rule
     */


    async validateTargetRuleRaw(requestParameters: ValidateTargetRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/targetrules/validate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.targetRule,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Validate Target Rule
     * Validate Target Rule
     */
    async validateTargetRule(requestParameters: ValidateTargetRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.validateTargetRuleRaw(requestParameters, initOverrides);
    }

}
