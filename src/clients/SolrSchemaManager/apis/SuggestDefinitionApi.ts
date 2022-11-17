/* tslint:disable */
/* eslint-disable */
/**
 * Kibo ProductRuntime Service
 * OpenAPI Spec for Kibo ProductRuntime Service
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
  Suggester,
} from '../models';
import {
    SuggesterFromJSON,
    SuggesterToJSON,
} from '../models';

export interface SuggestDefinitionApiDownLoadSuggestRequest {
    language: string;
}

export interface SuggestDefinitionApiGetSuggestSettingsRequest {
    language: string;
}

export interface SuggestDefinitionApiUpdateSuggestSettingsRequest {
    language: string;
    suggester?: Suggester;
}

export interface SuggestDefinitionApiUploadSuggestRequest {
    language: string;
}

/**
 * 
 */
export class SuggestDefinitionApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Downloads the suggest file for the site
     * Downloads the suggest file for the site
     */


    async downLoadSuggestRaw(requestParameters: SuggestDefinitionApiDownLoadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling downLoadSuggest.');
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
    async downLoadSuggest(requestParameters: SuggestDefinitionApiDownLoadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downLoadSuggestRaw(requestParameters, initOverrides);
    }

    /**
     * Gets the suggester settings for the site
     * Gets the suggester settings for the site
     */


    async getSuggestSettingsRaw(requestParameters: SuggestDefinitionApiGetSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggester>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling getSuggestSettings.');
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
            path: `/commerce/catalog/admin/searchSchema/suggest/settings/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuggesterFromJSON(jsonValue));
    }

    /**
     * Gets the suggester settings for the site
     * Gets the suggester settings for the site
     */
    async getSuggestSettings(requestParameters: SuggestDefinitionApiGetSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggester> {
        const response = await this.getSuggestSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the suggester settings for the site
     * Updates the suggester settings for the site
     */


    async updateSuggestSettingsRaw(requestParameters: SuggestDefinitionApiUpdateSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Suggester>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling updateSuggestSettings.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';





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
            path: `/commerce/catalog/admin/searchSchema/suggest/settings/{language}`.replace(`{${"language"}}`, encodeURIComponent(String(requestParameters.language))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SuggesterToJSON(requestParameters.suggester),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuggesterFromJSON(jsonValue));
    }

    /**
     * Updates the suggester settings for the site
     * Updates the suggester settings for the site
     */
    async updateSuggestSettings(requestParameters: SuggestDefinitionApiUpdateSuggestSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Suggester> {
        const response = await this.updateSuggestSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Uploads a suggest file for the site in tab seperated format)
     * Uploads a suggest file for the site in tab seperated format)
     */


    async uploadSuggestRaw(requestParameters: SuggestDefinitionApiUploadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.language === null || requestParameters.language === undefined) {
            throw new runtime.RequiredError('language','Required parameter requestParameters.language was null or undefined when calling uploadSuggest.');
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
    async uploadSuggest(requestParameters: SuggestDefinitionApiUploadSuggestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.uploadSuggestRaw(requestParameters, initOverrides);
        return await response.value();
    }

}