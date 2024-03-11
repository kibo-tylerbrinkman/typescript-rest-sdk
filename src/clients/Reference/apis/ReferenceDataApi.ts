/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Reference Service
 * OpenAPI Spec for Kibo Reference Service
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
  AddressSchema,
  AddressSchemaCollection,
  Behavior,
  BehaviorCategory,
  BehaviorCategoryCollection,
  BehaviorCollection,
  ContentLocaleCollection,
  CountryCollection,
  CountryWithStatesCollection,
  CurrencyCollection,
  TimeZoneCollection,
  TopLevelDomainCollection,
  UnitOfMeasureCollection,
} from '../models';

export interface ReferenceDataApiGetAddressSchemaRequest {
    countryCode: string;
    responseFields?: string;
}

export interface ReferenceDataApiGetAddressSchemasRequest {
    responseFields?: string;
}

export interface ReferenceDataApiGetBehaviorRequest {
    behaviorId: number;
    responseFields?: string;
}

export interface ReferenceDataApiGetBehaviorCategoriesRequest {
    responseFields?: string;
}

export interface ReferenceDataApiGetBehaviorCategoryRequest {
    categoryId: number;
    responseFields?: string;
}

export interface ReferenceDataApiGetBehaviorsRequest {
    userType?: string;
    responseFields?: string;
}

export interface ReferenceDataApiGetContentLocalesRequest {
    responseFields?: string;
}

export interface ReferenceDataApiGetCountriesRequest {
    responseFields?: string;
}

export interface ReferenceDataApiGetCountriesWithStatesRequest {
    responseFields?: string;
}

export interface ReferenceDataApiGetCurrenciesRequest {
    responseFields?: string;
}

export interface ReferenceDataApiGetTimeZonesRequest {
    responseFields?: string;
}

export interface ReferenceDataApiGetTopLevelDomainsRequest {
    responseFields?: string;
}

export interface ReferenceDataApiGetUnitsOfMeasureRequest {
    filter?: string;
    responseFields?: string;
}

/**
 * ReferenceDataApi - interface
 * 
 * @export
 * @interface ReferenceDataApiInterface
 */
export interface ReferenceDataApiInterface {
    /**
     * Get Address Schema
     * @summary Get Address Schema
     * @param {string} countryCode 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getAddressSchemaRaw(requestParameters: ReferenceDataApiGetAddressSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressSchema>>;

    /**
     * Get Address Schema
     * Get Address Schema
     */
    getAddressSchema(requestParameters: ReferenceDataApiGetAddressSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressSchema>;

    /**
     * Get Address Schemas
     * @summary Get Address Schemas
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getAddressSchemasRaw(requestParameters: ReferenceDataApiGetAddressSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressSchemaCollection>>;

    /**
     * Get Address Schemas
     * Get Address Schemas
     */
    getAddressSchemas(requestParameters: ReferenceDataApiGetAddressSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressSchemaCollection>;

    /**
     * 
     * @summary Retrieves the details of a behavior specified by its behavior ID
     * @param {number} behaviorId Unique identifier of the behavior for which you want details.
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getBehaviorRaw(requestParameters: ReferenceDataApiGetBehaviorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Behavior>>;

    /**
     * 
     * Retrieves the details of a behavior specified by its behavior ID
     */
    getBehavior(requestParameters: ReferenceDataApiGetBehaviorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Behavior>;

    /**
     * 
     * @summary Retrieves a list of all behavior categories
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getBehaviorCategoriesRaw(requestParameters: ReferenceDataApiGetBehaviorCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BehaviorCategoryCollection>>;

    /**
     * 
     * Retrieves a list of all behavior categories
     */
    getBehaviorCategories(requestParameters: ReferenceDataApiGetBehaviorCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BehaviorCategoryCollection>;

    /**
     * 
     * @summary Retrieves the details of a behavior specified by its behavior ID
     * @param {number} categoryId Unique identifier of the behavior category for which you want details.
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getBehaviorCategoryRaw(requestParameters: ReferenceDataApiGetBehaviorCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BehaviorCategory>>;

    /**
     * 
     * Retrieves the details of a behavior specified by its behavior ID
     */
    getBehaviorCategory(requestParameters: ReferenceDataApiGetBehaviorCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BehaviorCategory>;

    /**
     * 
     * @summary Retrieves a list of all behaviors
     * @param {string} [userType] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getBehaviorsRaw(requestParameters: ReferenceDataApiGetBehaviorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BehaviorCollection>>;

    /**
     * 
     * Retrieves a list of all behaviors
     */
    getBehaviors(requestParameters: ReferenceDataApiGetBehaviorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BehaviorCollection>;

    /**
     * Get the full list of Content Locales supported by the system
     * @summary Get the full list of Content Locales supported by the system
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getContentLocalesRaw(requestParameters: ReferenceDataApiGetContentLocalesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContentLocaleCollection>>;

    /**
     * Get the full list of Content Locales supported by the system
     * Get the full list of Content Locales supported by the system
     */
    getContentLocales(requestParameters: ReferenceDataApiGetContentLocalesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContentLocaleCollection>;

    /**
     * Get the full list of Countries supported by the system
     * @summary Get the full list of Countries supported by the system
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getCountriesRaw(requestParameters: ReferenceDataApiGetCountriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountryCollection>>;

    /**
     * Get the full list of Countries supported by the system
     * Get the full list of Countries supported by the system
     */
    getCountries(requestParameters: ReferenceDataApiGetCountriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountryCollection>;

    /**
     * Get the full list of Countries supported by the system
     * @summary Get the full list of Countries supported by the system
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getCountriesWithStatesRaw(requestParameters: ReferenceDataApiGetCountriesWithStatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountryWithStatesCollection>>;

    /**
     * Get the full list of Countries supported by the system
     * Get the full list of Countries supported by the system
     */
    getCountriesWithStates(requestParameters: ReferenceDataApiGetCountriesWithStatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountryWithStatesCollection>;

    /**
     * Get the full list of Currencies supported by the system
     * @summary Get the full list of Currencies supported by the system
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getCurrenciesRaw(requestParameters: ReferenceDataApiGetCurrenciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyCollection>>;

    /**
     * Get the full list of Currencies supported by the system
     * Get the full list of Currencies supported by the system
     */
    getCurrencies(requestParameters: ReferenceDataApiGetCurrenciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyCollection>;

    /**
     * Get the full list of TimeZones supported by the system
     * @summary Get the full list of TimeZones supported by the system
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getTimeZonesRaw(requestParameters: ReferenceDataApiGetTimeZonesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimeZoneCollection>>;

    /**
     * Get the full list of TimeZones supported by the system
     * Get the full list of TimeZones supported by the system
     */
    getTimeZones(requestParameters: ReferenceDataApiGetTimeZonesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimeZoneCollection>;

    /**
     * Get a full list of the supported top level domains
     * @summary Get a full list of the supported top level domains
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getTopLevelDomainsRaw(requestParameters: ReferenceDataApiGetTopLevelDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TopLevelDomainCollection>>;

    /**
     * Get a full list of the supported top level domains
     * Get a full list of the supported top level domains
     */
    getTopLevelDomains(requestParameters: ReferenceDataApiGetTopLevelDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TopLevelDomainCollection>;

    /**
     * Get a full list of the units of measure
     * @summary Get a full list of the units of measure
     * @param {string} [filter] 
     * @param {string} [responseFields] limits which fields are returned in the response body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferenceDataApiInterface
     */
    getUnitsOfMeasureRaw(requestParameters: ReferenceDataApiGetUnitsOfMeasureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnitOfMeasureCollection>>;

    /**
     * Get a full list of the units of measure
     * Get a full list of the units of measure
     */
    getUnitsOfMeasure(requestParameters: ReferenceDataApiGetUnitsOfMeasureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnitOfMeasureCollection>;

}

/**
 * 
 */
export class ReferenceDataApi extends runtime.BaseAPI implements ReferenceDataApiInterface {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Get Address Schema
     * Get Address Schema
     */


    async getAddressSchemaRaw(requestParameters: ReferenceDataApiGetAddressSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressSchema>> {
        if (requestParameters.countryCode === null || requestParameters.countryCode === undefined) {
            throw new runtime.RequiredError('countryCode','Required parameter requestParameters.countryCode was null or undefined when calling getAddressSchema.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/addressschema/{countryCode}`.replace(`{${"countryCode"}}`, encodeURIComponent(String(requestParameters.countryCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Address Schema
     * Get Address Schema
     */
    async getAddressSchema(requestParameters: ReferenceDataApiGetAddressSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressSchema> {
        const response = await this.getAddressSchemaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Address Schemas
     * Get Address Schemas
     */


    async getAddressSchemasRaw(requestParameters: ReferenceDataApiGetAddressSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressSchemaCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/addressschemas`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get Address Schemas
     * Get Address Schemas
     */
    async getAddressSchemas(requestParameters: ReferenceDataApiGetAddressSchemasRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressSchemaCollection> {
        const response = await this.getAddressSchemasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Retrieves the details of a behavior specified by its behavior ID
     */


    async getBehaviorRaw(requestParameters: ReferenceDataApiGetBehaviorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Behavior>> {
        if (requestParameters.behaviorId === null || requestParameters.behaviorId === undefined) {
            throw new runtime.RequiredError('behaviorId','Required parameter requestParameters.behaviorId was null or undefined when calling getBehavior.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/behaviors/{behaviorId}`.replace(`{${"behaviorId"}}`, encodeURIComponent(String(requestParameters.behaviorId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Retrieves the details of a behavior specified by its behavior ID
     */
    async getBehavior(requestParameters: ReferenceDataApiGetBehaviorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Behavior> {
        const response = await this.getBehaviorRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Retrieves a list of all behavior categories
     */


    async getBehaviorCategoriesRaw(requestParameters: ReferenceDataApiGetBehaviorCategoriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BehaviorCategoryCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/behaviors/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Retrieves a list of all behavior categories
     */
    async getBehaviorCategories(requestParameters: ReferenceDataApiGetBehaviorCategoriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BehaviorCategoryCollection> {
        const response = await this.getBehaviorCategoriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Retrieves the details of a behavior specified by its behavior ID
     */


    async getBehaviorCategoryRaw(requestParameters: ReferenceDataApiGetBehaviorCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BehaviorCategory>> {
        if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
            throw new runtime.RequiredError('categoryId','Required parameter requestParameters.categoryId was null or undefined when calling getBehaviorCategory.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/behaviors/categories/{categoryId}`.replace(`{${"categoryId"}}`, encodeURIComponent(String(requestParameters.categoryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Retrieves the details of a behavior specified by its behavior ID
     */
    async getBehaviorCategory(requestParameters: ReferenceDataApiGetBehaviorCategoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BehaviorCategory> {
        const response = await this.getBehaviorCategoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Retrieves a list of all behaviors
     */


    async getBehaviorsRaw(requestParameters: ReferenceDataApiGetBehaviorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BehaviorCollection>> {
        const queryParameters: any = {};

        if (requestParameters.userType !== undefined) {
            queryParameters['userType'] = requestParameters.userType;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/behaviors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Retrieves a list of all behaviors
     */
    async getBehaviors(requestParameters: ReferenceDataApiGetBehaviorsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BehaviorCollection> {
        const response = await this.getBehaviorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the full list of Content Locales supported by the system
     * Get the full list of Content Locales supported by the system
     */


    async getContentLocalesRaw(requestParameters: ReferenceDataApiGetContentLocalesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContentLocaleCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/contentLocales`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the full list of Content Locales supported by the system
     * Get the full list of Content Locales supported by the system
     */
    async getContentLocales(requestParameters: ReferenceDataApiGetContentLocalesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContentLocaleCollection> {
        const response = await this.getContentLocalesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the full list of Countries supported by the system
     * Get the full list of Countries supported by the system
     */


    async getCountriesRaw(requestParameters: ReferenceDataApiGetCountriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountryCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/countries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the full list of Countries supported by the system
     * Get the full list of Countries supported by the system
     */
    async getCountries(requestParameters: ReferenceDataApiGetCountriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountryCollection> {
        const response = await this.getCountriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the full list of Countries supported by the system
     * Get the full list of Countries supported by the system
     */


    async getCountriesWithStatesRaw(requestParameters: ReferenceDataApiGetCountriesWithStatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CountryWithStatesCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/countrieswithstates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the full list of Countries supported by the system
     * Get the full list of Countries supported by the system
     */
    async getCountriesWithStates(requestParameters: ReferenceDataApiGetCountriesWithStatesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CountryWithStatesCollection> {
        const response = await this.getCountriesWithStatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the full list of Currencies supported by the system
     * Get the full list of Currencies supported by the system
     */


    async getCurrenciesRaw(requestParameters: ReferenceDataApiGetCurrenciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CurrencyCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/currencies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the full list of Currencies supported by the system
     * Get the full list of Currencies supported by the system
     */
    async getCurrencies(requestParameters: ReferenceDataApiGetCurrenciesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CurrencyCollection> {
        const response = await this.getCurrenciesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the full list of TimeZones supported by the system
     * Get the full list of TimeZones supported by the system
     */


    async getTimeZonesRaw(requestParameters: ReferenceDataApiGetTimeZonesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimeZoneCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/timezones`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get the full list of TimeZones supported by the system
     * Get the full list of TimeZones supported by the system
     */
    async getTimeZones(requestParameters: ReferenceDataApiGetTimeZonesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimeZoneCollection> {
        const response = await this.getTimeZonesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a full list of the supported top level domains
     * Get a full list of the supported top level domains
     */


    async getTopLevelDomainsRaw(requestParameters: ReferenceDataApiGetTopLevelDomainsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TopLevelDomainCollection>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/topleveldomains`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a full list of the supported top level domains
     * Get a full list of the supported top level domains
     */
    async getTopLevelDomains(requestParameters: ReferenceDataApiGetTopLevelDomainsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TopLevelDomainCollection> {
        const response = await this.getTopLevelDomainsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a full list of the units of measure
     * Get a full list of the units of measure
     */


    async getUnitsOfMeasureRaw(requestParameters: ReferenceDataApiGetUnitsOfMeasureRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UnitOfMeasureCollection>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/reference/unitsofmeasure`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a full list of the units of measure
     * Get a full list of the units of measure
     */
    async getUnitsOfMeasure(requestParameters: ReferenceDataApiGetUnitsOfMeasureRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UnitOfMeasureCollection> {
        const response = await this.getUnitsOfMeasureRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
