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
  Suggester,
} from '../models';


export namespace suggestDefinitionApiParams { 
    export interface DownLoadSuggestRequest {
        language: string;
        responseFields?: string;
    }
    export interface GetSuggestSettingsRequest {
        language: string;
        responseFields?: string;
    }
    export interface UpdateSuggestSettingsRequest {
        language: string;
        responseFields?: string;
        suggester?: Suggester;
    }
    export interface UploadSuggestRequest {
        language: string;
        responseFields?: string;
    }
}
/**
* SuggestDefinitionApiService - interface
* 
* @export
* @interface SuggestDefinitionApi
*/
export interface SuggestDefinitionApiService {
    /**
    * Downloads the suggest file for the site
    * @summary Downloads the suggest file for the site
    * @param {string} language langage code used by the site (en, es, fr)
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SuggestDefinitionApiInterface
    */
    downLoadSuggestRaw(requestParameters: suggestDefinitionApiParams.DownLoadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Downloads the suggest file for the site
    * Downloads the suggest file for the site
    */
    downLoadSuggest(requestParameters: suggestDefinitionApiParams.DownLoadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Gets the suggester settings for the site
    * @summary Gets the suggester settings for the site
    * @param {string} language language code use by the site (en, es, fr)
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SuggestDefinitionApiInterface
    */
    getSuggestSettingsRaw(requestParameters: suggestDefinitionApiParams.GetSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggester>>;

    /**
    * Gets the suggester settings for the site
    * Gets the suggester settings for the site
    */
    getSuggestSettings(requestParameters: suggestDefinitionApiParams.GetSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggester>;

    /**
    * Updates the suggester settings for the site
    * @summary Updates the suggester settings for the site
    * @param {string} language language code use by the site (en, es, fr)
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {Suggester} [suggester] suggset definition in
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SuggestDefinitionApiInterface
    */
    updateSuggestSettingsRaw(requestParameters: suggestDefinitionApiParams.UpdateSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggester>>;

    /**
    * Updates the suggester settings for the site
    * Updates the suggester settings for the site
    */
    updateSuggestSettings(requestParameters: suggestDefinitionApiParams.UpdateSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggester>;

    /**
    * Uploads a suggest file for the site in tab seperated format)
    * @summary Uploads a suggest file for the site in tab seperated format)
    * @param {string} language language code use by the site (en, es, fr)
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SuggestDefinitionApiInterface
    */
    uploadSuggestRaw(requestParameters: suggestDefinitionApiParams.UploadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>>;

    /**
    * Uploads a suggest file for the site in tab seperated format)
    * Uploads a suggest file for the site in tab seperated format)
    */
    uploadSuggest(requestParameters: suggestDefinitionApiParams.UploadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>>;

}


/**
 * 
 */
export class SuggestDefinitionApi extends runtime.BaseAPI implements SuggestDefinitionApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Downloads the suggest file for the site
     * Downloads the suggest file for the site
     */


    async downLoadSuggestRaw(requestParameters: suggestDefinitionApiParams.DownLoadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling downLoadSuggest.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/suggest/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Downloads the suggest file for the site
     * Downloads the suggest file for the site
     */
    async downLoadSuggest(requestParameters: suggestDefinitionApiParams.DownLoadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downLoadSuggestRaw(requestParameters, initOverrides);
    }

    /**
     * Gets the suggester settings for the site
     * Gets the suggester settings for the site
     */


    async getSuggestSettingsRaw(requestParameters: suggestDefinitionApiParams.GetSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggester>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling getSuggestSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/suggest/settings/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets the suggester settings for the site
     * Gets the suggester settings for the site
     */
    async getSuggestSettings(requestParameters: suggestDefinitionApiParams.GetSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggester> {
        const response = await this.getSuggestSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the suggester settings for the site
     * Updates the suggester settings for the site
     */


    async updateSuggestSettingsRaw(requestParameters: suggestDefinitionApiParams.UpdateSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggester>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling updateSuggestSettings.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/suggest/settings/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.suggester,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Updates the suggester settings for the site
     * Updates the suggester settings for the site
     */
    async updateSuggestSettings(requestParameters: suggestDefinitionApiParams.UpdateSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggester> {
        const response = await this.updateSuggestSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Uploads a suggest file for the site in tab seperated format)
     * Uploads a suggest file for the site in tab seperated format)
     */


    async uploadSuggestRaw(requestParameters: suggestDefinitionApiParams.UploadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling uploadSuggest.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/searchSchema/suggest/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Uploads a suggest file for the site in tab seperated format)
     * Uploads a suggest file for the site in tab seperated format)
     */
    async uploadSuggest(requestParameters: suggestDefinitionApiParams.UploadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.uploadSuggestRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
