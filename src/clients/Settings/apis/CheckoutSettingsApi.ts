/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SiteSettings Service
 * OpenAPI Spec for Kibo SiteSettings Service
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
  CheckoutSettings,
  CustomerCheckoutSettings,
  ExternalPaymentWorkflowDefinition,
} from '../models';


export namespace checkoutSettingsApiParams { 
    export interface AddThirdPartyPaymentWorkflowRequest {
        responseFields?: string;
        externalPaymentWorkflowDefinition?: ExternalPaymentWorkflowDefinition;
    }
    export interface DeleteThirdPartyPaymentWorkflowRequest {
        fullyQualifiedName: string;
    }
    export interface GetCheckoutSettingsRequest {
        responseFields?: string;
    }
    export interface GetCustomerCheckoutSettingsRequest {
        responseFields?: string;
    }
    export interface GetThirdPartyPaymentWorkflowWithValuesRequest {
        fullyQualifiedName: string;
        responseFields?: string;
    }
    export interface GetThirdPartyPaymentWorkflowsRequest {
        responseFields?: string;
    }
    export interface UpdateCustomerCheckoutSettingsRequest {
        responseFields?: string;
        customerCheckoutSettings?: CustomerCheckoutSettings;
    }
}
/**
* CheckoutSettingsApiService - interface
* 
* @export
* @interface CheckoutSettingsApi
*/
export interface CheckoutSettingsApiService {
    /**
    * Adds a third party payment workflow definition in the context of a site
    * @summary Add Third Party Payment Workflow
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {ExternalPaymentWorkflowDefinition} [externalPaymentWorkflowDefinition] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CheckoutSettingsApiInterface
    */
    addThirdPartyPaymentWorkflowRaw(requestParameters: checkoutSettingsApiParams.AddThirdPartyPaymentWorkflowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Adds a third party payment workflow definition in the context of a site
    * Add Third Party Payment Workflow
    */
    addThirdPartyPaymentWorkflow(requestParameters: checkoutSettingsApiParams.AddThirdPartyPaymentWorkflowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Deletes a third party payment workflow definition defined for the site
    * @summary Delete Third Party Payment Workflow
    * @param {string} fullyQualifiedName 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CheckoutSettingsApiInterface
    */
    deleteThirdPartyPaymentWorkflowRaw(requestParameters: checkoutSettingsApiParams.DeleteThirdPartyPaymentWorkflowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Deletes a third party payment workflow definition defined for the site
    * Delete Third Party Payment Workflow
    */
    deleteThirdPartyPaymentWorkflow(requestParameters: checkoutSettingsApiParams.DeleteThirdPartyPaymentWorkflowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Retrieves all checkout settings defined for the site: Payment settings, such as the payment gateway ID and credentials,   supported credit cards, and more; Customer Checkout settings, such as whether login is required, and any   custom attributes; and Order Processing settings, such as when payment is authorized and captured, and any custom attributes.
    * @summary Get Checkout Settings
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CheckoutSettingsApiInterface
    */
    getCheckoutSettingsRaw(requestParameters: checkoutSettingsApiParams.GetCheckoutSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckoutSettings>>;

    /**
    * Retrieves all checkout settings defined for the site: Payment settings, such as the payment gateway ID and credentials,   supported credit cards, and more; Customer Checkout settings, such as whether login is required, and any   custom attributes; and Order Processing settings, such as when payment is authorized and captured, and any custom attributes.
    * Get Checkout Settings
    */
    getCheckoutSettings(requestParameters: checkoutSettingsApiParams.GetCheckoutSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckoutSettings>;

    /**
    * Retrieves existing customer checkout settings including the checkout type, which determines whether the   customer must be logged in when placing an order. Also lists any custom customer checkout attributes.
    * @summary Get Customer Checkout Settings
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CheckoutSettingsApiInterface
    */
    getCustomerCheckoutSettingsRaw(requestParameters: checkoutSettingsApiParams.GetCustomerCheckoutSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCheckoutSettings>>;

    /**
    * Retrieves existing customer checkout settings including the checkout type, which determines whether the   customer must be logged in when placing an order. Also lists any custom customer checkout attributes.
    * Get Customer Checkout Settings
    */
    getCustomerCheckoutSettings(requestParameters: checkoutSettingsApiParams.GetCustomerCheckoutSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCheckoutSettings>;

    /**
    * Gets a third party payment workflow specified by workflow definition which includes credential values
    * @summary Get Third Party Payment Workflow With Values
    * @param {string} fullyQualifiedName 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CheckoutSettingsApiInterface
    */
    getThirdPartyPaymentWorkflowWithValuesRaw(requestParameters: checkoutSettingsApiParams.GetThirdPartyPaymentWorkflowWithValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExternalPaymentWorkflowDefinition>>;

    /**
    * Gets a third party payment workflow specified by workflow definition which includes credential values
    * Get Third Party Payment Workflow With Values
    */
    getThirdPartyPaymentWorkflowWithValues(requestParameters: checkoutSettingsApiParams.GetThirdPartyPaymentWorkflowWithValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExternalPaymentWorkflowDefinition>;

    /**
    * Retrieves list of external payment workflow definitions.
    * @summary Get Third Party Payment Workflows
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CheckoutSettingsApiInterface
    */
    getThirdPartyPaymentWorkflowsRaw(requestParameters: checkoutSettingsApiParams.GetThirdPartyPaymentWorkflowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ExternalPaymentWorkflowDefinition>>>;

    /**
    * Retrieves list of external payment workflow definitions.
    * Get Third Party Payment Workflows
    */
    getThirdPartyPaymentWorkflows(requestParameters: checkoutSettingsApiParams.GetThirdPartyPaymentWorkflowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ExternalPaymentWorkflowDefinition>>;

    /**
    * Modifies existing customer checkout settings. When a shopper starts the process of checking out,   the Checkout Service checks these settings to render the checkout page.   This is where you can specify whether shoppers must be logged in \"LoginRequired\"  or not \"LoginOptional\" to checkout. You can also update your own customer checkout requirements, for example, to add a tracking code.
    * @summary Update Customer Checkout Settings
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {CustomerCheckoutSettings} [customerCheckoutSettings] Properties of the customer checkout settings to update.
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof CheckoutSettingsApiInterface
    */
    updateCustomerCheckoutSettingsRaw(requestParameters: checkoutSettingsApiParams.UpdateCustomerCheckoutSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCheckoutSettings>>;

    /**
    * Modifies existing customer checkout settings. When a shopper starts the process of checking out,   the Checkout Service checks these settings to render the checkout page.   This is where you can specify whether shoppers must be logged in \"LoginRequired\"  or not \"LoginOptional\" to checkout. You can also update your own customer checkout requirements, for example, to add a tracking code.
    * Update Customer Checkout Settings
    */
    updateCustomerCheckoutSettings(requestParameters: checkoutSettingsApiParams.UpdateCustomerCheckoutSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCheckoutSettings>;

}


/**
 * 
 */
export class CheckoutSettingsApi extends runtime.BaseAPI implements CheckoutSettingsApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Adds a third party payment workflow definition in the context of a site
     * Add Third Party Payment Workflow
     */


    async addThirdPartyPaymentWorkflowRaw(requestParameters: checkoutSettingsApiParams.AddThirdPartyPaymentWorkflowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/checkout/paymentsettings/thirdpartyworkflows`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.externalPaymentWorkflowDefinition,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds a third party payment workflow definition in the context of a site
     * Add Third Party Payment Workflow
     */
    async addThirdPartyPaymentWorkflow(requestParameters: checkoutSettingsApiParams.AddThirdPartyPaymentWorkflowRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addThirdPartyPaymentWorkflowRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a third party payment workflow definition defined for the site
     * Delete Third Party Payment Workflow
     */


    async deleteThirdPartyPaymentWorkflowRaw(requestParameters: checkoutSettingsApiParams.DeleteThirdPartyPaymentWorkflowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.fullyQualifiedName === null || requestParameters.fullyQualifiedName === undefined) {
            throw new runtime.RequiredError('fullyQualifiedName','Required parameter requestParameters.fullyQualifiedName was null or undefined when calling deleteThirdPartyPaymentWorkflow.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/checkout/paymentsettings/thirdpartyworkflows/{fullyQualifiedName}`.replace(`{${"fullyQualifiedName"}}`, encodeURIComponent(String(requestParameters.fullyQualifiedName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a third party payment workflow definition defined for the site
     * Delete Third Party Payment Workflow
     */
    async deleteThirdPartyPaymentWorkflow(requestParameters: checkoutSettingsApiParams.DeleteThirdPartyPaymentWorkflowRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteThirdPartyPaymentWorkflowRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieves all checkout settings defined for the site: Payment settings, such as the payment gateway ID and credentials,   supported credit cards, and more; Customer Checkout settings, such as whether login is required, and any   custom attributes; and Order Processing settings, such as when payment is authorized and captured, and any custom attributes.
     * Get Checkout Settings
     */


    async getCheckoutSettingsRaw(requestParameters: checkoutSettingsApiParams.GetCheckoutSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckoutSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/checkout`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves all checkout settings defined for the site: Payment settings, such as the payment gateway ID and credentials,   supported credit cards, and more; Customer Checkout settings, such as whether login is required, and any   custom attributes; and Order Processing settings, such as when payment is authorized and captured, and any custom attributes.
     * Get Checkout Settings
     */
    async getCheckoutSettings(requestParameters: checkoutSettingsApiParams.GetCheckoutSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckoutSettings> {
        const response = await this.getCheckoutSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves existing customer checkout settings including the checkout type, which determines whether the   customer must be logged in when placing an order. Also lists any custom customer checkout attributes.
     * Get Customer Checkout Settings
     */


    async getCustomerCheckoutSettingsRaw(requestParameters: checkoutSettingsApiParams.GetCustomerCheckoutSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCheckoutSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/checkout/customercheckoutsettings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves existing customer checkout settings including the checkout type, which determines whether the   customer must be logged in when placing an order. Also lists any custom customer checkout attributes.
     * Get Customer Checkout Settings
     */
    async getCustomerCheckoutSettings(requestParameters: checkoutSettingsApiParams.GetCustomerCheckoutSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCheckoutSettings> {
        const response = await this.getCustomerCheckoutSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a third party payment workflow specified by workflow definition which includes credential values
     * Get Third Party Payment Workflow With Values
     */


    async getThirdPartyPaymentWorkflowWithValuesRaw(requestParameters: checkoutSettingsApiParams.GetThirdPartyPaymentWorkflowWithValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExternalPaymentWorkflowDefinition>> {
        if (requestParameters.fullyQualifiedName === null || requestParameters.fullyQualifiedName === undefined) {
            throw new runtime.RequiredError('fullyQualifiedName','Required parameter requestParameters.fullyQualifiedName was null or undefined when calling getThirdPartyPaymentWorkflowWithValues.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/checkout/paymentsettings/thirdpartyworkflow/{fullyQualifiedName}`.replace(`{${"fullyQualifiedName"}}`, encodeURIComponent(String(requestParameters.fullyQualifiedName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Gets a third party payment workflow specified by workflow definition which includes credential values
     * Get Third Party Payment Workflow With Values
     */
    async getThirdPartyPaymentWorkflowWithValues(requestParameters: checkoutSettingsApiParams.GetThirdPartyPaymentWorkflowWithValuesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExternalPaymentWorkflowDefinition> {
        const response = await this.getThirdPartyPaymentWorkflowWithValuesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves list of external payment workflow definitions.
     * Get Third Party Payment Workflows
     */


    async getThirdPartyPaymentWorkflowsRaw(requestParameters: checkoutSettingsApiParams.GetThirdPartyPaymentWorkflowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ExternalPaymentWorkflowDefinition>>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/checkout/paymentsettings/thirdpartyworkflows`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Retrieves list of external payment workflow definitions.
     * Get Third Party Payment Workflows
     */
    async getThirdPartyPaymentWorkflows(requestParameters: checkoutSettingsApiParams.GetThirdPartyPaymentWorkflowsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ExternalPaymentWorkflowDefinition>> {
        const response = await this.getThirdPartyPaymentWorkflowsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modifies existing customer checkout settings. When a shopper starts the process of checking out,   the Checkout Service checks these settings to render the checkout page.   This is where you can specify whether shoppers must be logged in \"LoginRequired\"  or not \"LoginOptional\" to checkout. You can also update your own customer checkout requirements, for example, to add a tracking code.
     * Update Customer Checkout Settings
     */


    async updateCustomerCheckoutSettingsRaw(requestParameters: checkoutSettingsApiParams.UpdateCustomerCheckoutSettingsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerCheckoutSettings>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/settings/checkout/customercheckoutsettings`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.customerCheckoutSettings,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Modifies existing customer checkout settings. When a shopper starts the process of checking out,   the Checkout Service checks these settings to render the checkout page.   This is where you can specify whether shoppers must be logged in \"LoginRequired\"  or not \"LoginOptional\" to checkout. You can also update your own customer checkout requirements, for example, to add a tracking code.
     * Update Customer Checkout Settings
     */
    async updateCustomerCheckoutSettings(requestParameters: checkoutSettingsApiParams.UpdateCustomerCheckoutSettingsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerCheckoutSettings> {
        const response = await this.updateCustomerCheckoutSettingsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
