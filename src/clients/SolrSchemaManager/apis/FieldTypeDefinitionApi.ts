/* tslint:disable */
/* eslint-disable */
/**
 * Kibo ProductRuntime Service
 * OpenAPI Spec for Kibo ProductRuntime Service
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
  FieldTypeDefinitionRepositoryEntry,
} from '../models';

export interface GetFieldTypeDefinitionsRequest {
    language: string;
    responseFields?: string;
}

/**
 * FieldTypeDefinitionApi - interface
 * 
 * @export
 * @interface FieldTypeDefinitionApiInterface
 */
export interface FieldTypeDefinitionApiInterface {
    /**
     * Get Field Type Definitions
     * @summary Get Field Type Definitions
     * @param {string} language 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FieldTypeDefinitionApiInterface
     */
    getFieldTypeDefinitionsRaw(requestParameters: GetFieldTypeDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FieldTypeDefinitionRepositoryEntry>>>;

    /**
     * Get Field Type Definitions
     * Get Field Type Definitions
     */
    getFieldTypeDefinitions(requestParameters: GetFieldTypeDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FieldTypeDefinitionRepositoryEntry>>;

}

/**
 * 
 */
export class FieldTypeDefinitionApi extends runtime.BaseAPI implements FieldTypeDefinitionApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Field Type Definitions
     * Get Field Type Definitions
     */


    async getFieldTypeDefinitionsRaw(requestParameters: GetFieldTypeDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<FieldTypeDefinitionRepositoryEntry>>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling getFieldTypeDefinitions.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/fieldTypes/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Field Type Definitions
     * Get Field Type Definitions
     */
    async getFieldTypeDefinitions(requestParameters: GetFieldTypeDefinitionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<FieldTypeDefinitionRepositoryEntry>> {
        const response = await this.getFieldTypeDefinitionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
