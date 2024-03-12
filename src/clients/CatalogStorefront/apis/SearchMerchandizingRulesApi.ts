/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
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
  SearchMerchandizingRuleParameters,
} from '../models';


export namespace searchMerchandizingRulesApiParams { 
    export interface PreviewSearchMerchandizingRuleRequest {
        responseFields?: string;
        searchMerchandizingRuleParameters?: SearchMerchandizingRuleParameters;
    }
}
/**
* SearchMerchandizingRulesApiService - interface
* 
* @export
* @interface SearchMerchandizingRulesApi
*/
export interface SearchMerchandizingRulesApiService {
    /**
    * Preview search results with given SearchMerchandizingRule object
    * @summary Preview search merchandizing rule
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {SearchMerchandizingRuleParameters} [searchMerchandizingRuleParameters] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof SearchMerchandizingRulesApiInterface
    */
    previewSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRulesApiParams.PreviewSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>>;

    /**
    * Preview search results with given SearchMerchandizingRule object
    * Preview search merchandizing rule
    */
    previewSearchMerchandizingRule(requestParameters: searchMerchandizingRulesApiParams.PreviewSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object>;

}


/**
 * 
 */
export class SearchMerchandizingRulesApi extends runtime.BaseAPI implements SearchMerchandizingRulesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Preview search results with given SearchMerchandizingRule object
     * Preview search merchandizing rule
     */


    async previewSearchMerchandizingRuleRaw(requestParameters: searchMerchandizingRulesApiParams.PreviewSearchMerchandizingRuleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/storefront/searchmerchandizingrules/previewsearchmerchandizingrule`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.searchMerchandizingRuleParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Preview search results with given SearchMerchandizingRule object
     * Preview search merchandizing rule
     */
    async previewSearchMerchandizingRule(requestParameters: searchMerchandizingRulesApiParams.PreviewSearchMerchandizingRuleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.previewSearchMerchandizingRuleRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
