/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
  Discount,
  DiscountCollection,
  DiscountLocalizedContent,
  DiscountTag,
  DiscountTagCollection,
  DiscountTarget,
  TagCollection,
} from '../models';
import {
    DiscountFromJSON,
    DiscountToJSON,
    DiscountCollectionFromJSON,
    DiscountCollectionToJSON,
    DiscountLocalizedContentFromJSON,
    DiscountLocalizedContentToJSON,
    DiscountTagFromJSON,
    DiscountTagToJSON,
    DiscountTagCollectionFromJSON,
    DiscountTagCollectionToJSON,
    DiscountTargetFromJSON,
    DiscountTargetToJSON,
    TagCollectionFromJSON,
    TagCollectionToJSON,
} from '../models';

export interface DiscountsApiCreateDiscountRequest {
    tagCode?: string;
    discount?: Discount;
}

export interface DiscountsApiDeleteDiscountRequest {
    discountId: number;
}

export interface DiscountsApiGetDiscountRequest {
    discountId: number;
}

export interface DiscountsApiGetDiscountContentRequest {
    discountId: number;
}

export interface DiscountsApiGetDiscountTargetRequest {
    discountId: number;
}

export interface DiscountsApiGetDiscountsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
    responseGroups?: string;
}

export interface DiscountsApiGetTagsRequest {
    discountId: number;
}

export interface DiscountsApiUpdateDiscountRequest {
    discountId: number;
    discount?: Discount;
}

export interface DiscountsApiUpdateDiscountContentRequest {
    discountId: number;
    discountLocalizedContent?: DiscountLocalizedContent;
}

export interface DiscountsApiUpdateDiscountTagsRequest {
    discountTag?: Array<DiscountTag>;
}

export interface DiscountsApiUpdateDiscountTargetRequest {
    discountId: number;
    discountTarget?: DiscountTarget;
}

/**
 * 
 */
export class DiscountsApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Creates a discount.
     * Create discount
     */


    async createDiscountRaw(requestParameters: DiscountsApiCreateDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Discount>> {
        const queryParameters: any = {};

        if (requestParameters.tagCode !== undefined) {
            queryParameters['tagCode'] = requestParameters.tagCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DiscountToJSON(requestParameters.discount),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountFromJSON(jsonValue));
    }

    /**
     * Creates a discount.
     * Create discount
     */
    async createDiscount(requestParameters: DiscountsApiCreateDiscountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Discount> {
        const response = await this.createDiscountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a discount specified by its discount ID.
     * Delete discount
     */


    async deleteDiscountRaw(requestParameters: DiscountsApiDeleteDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling deleteDiscount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a discount specified by its discount ID.
     * Delete discount
     */
    async deleteDiscount(requestParameters: DiscountsApiDeleteDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteDiscountRaw(requestParameters, initOverrides);
    }

    /**
     * Generates a random code for a coupon.
     * Generate a random coupon
     */


    async generateRandomCouponRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/generate-random-coupon`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Generates a random code for a coupon.
     * Generate a random coupon
     */
    async generateRandomCoupon(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.generateRandomCouponRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the details of a single discount.
     * Get discount
     */


    async getDiscountRaw(requestParameters: DiscountsApiGetDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Discount>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling getDiscount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountFromJSON(jsonValue));
    }

    /**
     * Retrieves the details of a single discount.
     * Get discount
     */
    async getDiscount(requestParameters: DiscountsApiGetDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Discount> {
        const response = await this.getDiscountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the localized content specified for the specified discount.
     * Get discount content
     */


    async getDiscountContentRaw(requestParameters: DiscountsApiGetDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountLocalizedContent>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling getDiscountContent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}/content`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountLocalizedContentFromJSON(jsonValue));
    }

    /**
     * Retrieves the localized content specified for the specified discount.
     * Get discount content
     */
    async getDiscountContent(requestParameters: DiscountsApiGetDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountLocalizedContent> {
        const response = await this.getDiscountContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the discount target, that is which products, categories, or shipping methods are eligible for the discount.
     * Get discount target
     */


    async getDiscountTargetRaw(requestParameters: DiscountsApiGetDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountTarget>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling getDiscountTarget.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}/target`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountTargetFromJSON(jsonValue));
    }

    /**
     * Retrieves the discount target, that is which products, categories, or shipping methods are eligible for the discount.
     * Get discount target
     */
    async getDiscountTarget(requestParameters: DiscountsApiGetDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountTarget> {
        const response = await this.getDiscountTargetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a list of discounts according to any specified filter criteria and sort options.
     * Get discounts
     */


    async getDiscountsRaw(requestParameters: DiscountsApiGetDiscountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountCollection>> {
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

        if (requestParameters.responseGroups !== undefined) {
            queryParameters['responseGroups'] = requestParameters.responseGroups;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountCollectionFromJSON(jsonValue));
    }

    /**
     * Retrieves a list of discounts according to any specified filter criteria and sort options.
     * Get discounts
     */
    async getDiscounts(requestParameters: DiscountsApiGetDiscountsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountCollection> {
        const response = await this.getDiscountsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves all tags associated to a discount
     * Get tags for a discount
     */


    async getTagsRaw(requestParameters: DiscountsApiGetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagCollection>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling getTags.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}/tags`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagCollectionFromJSON(jsonValue));
    }

    /**
     * Retrieves all tags associated to a discount
     * Get tags for a discount
     */
    async getTags(requestParameters: DiscountsApiGetTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagCollection> {
        const response = await this.getTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies a discount.
     * Update discount
     */


    async updateDiscountRaw(requestParameters: DiscountsApiUpdateDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Discount>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling updateDiscount.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DiscountToJSON(requestParameters.discount),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountFromJSON(jsonValue));
    }

    /**
     * Modifies a discount.
     * Update discount
     */
    async updateDiscount(requestParameters: DiscountsApiUpdateDiscountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Discount> {
        const response = await this.updateDiscountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies the localized content for the specified discount. Allows you to rename the discount without modifying any other discount properties.
     * Update discount content
     */


    async updateDiscountContentRaw(requestParameters: DiscountsApiUpdateDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountLocalizedContent>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling updateDiscountContent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}/content`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DiscountLocalizedContentToJSON(requestParameters.discountLocalizedContent),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountLocalizedContentFromJSON(jsonValue));
    }

    /**
     * Modifies the localized content for the specified discount. Allows you to rename the discount without modifying any other discount properties.
     * Update discount content
     */
    async updateDiscountContent(requestParameters: DiscountsApiUpdateDiscountContentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountLocalizedContent> {
        const response = await this.updateDiscountContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies tags of the discount. The original tags are overwritten.
     * Update discount tags
     */


    async updateDiscountTagsRaw(requestParameters: DiscountsApiUpdateDiscountTagsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountTagCollection>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/tags`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.discountTag.map(DiscountTagToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountTagCollectionFromJSON(jsonValue));
    }

    /**
     * Modifies tags of the discount. The original tags are overwritten.
     * Update discount tags
     */
    async updateDiscountTags(requestParameters: DiscountsApiUpdateDiscountTagsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountTagCollection> {
        const response = await this.updateDiscountTagsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies properties of the discount target, for example, the dollar amount, or precentage off the price.
     * Update discount target
     */


    async updateDiscountTargetRaw(requestParameters: DiscountsApiUpdateDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DiscountTarget>> {
        if (requestParameters.discountId === null || requestParameters.discountId === undefined) {
            throw new runtime.RequiredError('discountId','Required parameter requestParameters.discountId was null or undefined when calling updateDiscountTarget.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/catalog/admin/discounts/{discountId}/target`.replace(`{${"discountId"}}`, encodeURIComponent(String(requestParameters.discountId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DiscountTargetToJSON(requestParameters.discountTarget),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DiscountTargetFromJSON(jsonValue));
    }

    /**
     * Modifies properties of the discount target, for example, the dollar amount, or precentage off the price.
     * Update discount target
     */
    async updateDiscountTarget(requestParameters: DiscountsApiUpdateDiscountTargetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DiscountTarget> {
        const response = await this.updateDiscountTargetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
