/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
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
  EntityModelOfContact,
  UpdateContactRequest,
} from '../models';
import {
    EntityModelOfContactFromJSON,
    EntityModelOfContactToJSON,
    UpdateContactRequestFromJSON,
    UpdateContactRequestToJSON,
} from '../models';

export interface ShipmentContactApiDeleteAlternateContactUsingDELETERequest {
    shipmentNumber: number;
    ifMatch?: string;
}

export interface ShipmentContactApiGetAlternateContactUsingGETRequest {
    shipmentNumber: number;
}

export interface ShipmentContactApiGetCustomerContactUsingGETRequest {
    shipmentNumber: number;
}

export interface ShipmentContactApiGetDestinationContactUsingGETRequest {
    shipmentNumber: number;
}

export interface ShipmentContactApiUpdateAlternateContactUsingPUTRequest {
    shipmentNumber: number;
    ifMatch?: string;
    updateContactRequest?: UpdateContactRequest;
}

export interface ShipmentContactApiUpdateCustomerContactUsingPUTRequest {
    shipmentNumber: number;
    ifMatch?: string;
    updateContactRequest?: UpdateContactRequest;
}

export interface ShipmentContactApiUpdateDestinationContactUsingPUTRequest {
    shipmentNumber: number;
    ifMatch?: string;
    updateContactRequest?: UpdateContactRequest;
}

/**
 * 
 */
export class ShipmentContactApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Delete Alternate Contact
     * Delete Alternate Contact
     */


    async deleteAlternateContactUsingDELETERaw(requestParameters: ShipmentContactApiDeleteAlternateContactUsingDELETERequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling deleteAlternateContactUsingDELETE.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/alternateContact`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete Alternate Contact
     * Delete Alternate Contact
     */
    async deleteAlternateContactUsingDELETE(requestParameters: ShipmentContactApiDeleteAlternateContactUsingDELETERequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAlternateContactUsingDELETERaw(requestParameters, initOverrides);
    }

    /**
     * Get Alternate Contact
     * Get Alternate Contact
     */


    async getAlternateContactUsingGETRaw(requestParameters: ShipmentContactApiGetAlternateContactUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfContact>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling getAlternateContactUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/alternateContact`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfContactFromJSON(jsonValue));
    }

    /**
     * Get Alternate Contact
     * Get Alternate Contact
     */
    async getAlternateContactUsingGET(requestParameters: ShipmentContactApiGetAlternateContactUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfContact> {
        const response = await this.getAlternateContactUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Customer Contact
     * Get Customer Contact
     */


    async getCustomerContactUsingGETRaw(requestParameters: ShipmentContactApiGetCustomerContactUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfContact>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling getCustomerContactUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/customerContact`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfContactFromJSON(jsonValue));
    }

    /**
     * Get Customer Contact
     * Get Customer Contact
     */
    async getCustomerContactUsingGET(requestParameters: ShipmentContactApiGetCustomerContactUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfContact> {
        const response = await this.getCustomerContactUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Destination Contact
     * Get Destination Contact
     */


    async getDestinationContactUsingGETRaw(requestParameters: ShipmentContactApiGetDestinationContactUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfContact>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling getDestinationContactUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/destinationContact`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfContactFromJSON(jsonValue));
    }

    /**
     * Get Destination Contact
     * Get Destination Contact
     */
    async getDestinationContactUsingGET(requestParameters: ShipmentContactApiGetDestinationContactUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfContact> {
        const response = await this.getDestinationContactUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Alternate Contact
     * Update Alternate Contact
     */


    async updateAlternateContactUsingPUTRaw(requestParameters: ShipmentContactApiUpdateAlternateContactUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfContact>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling updateAlternateContactUsingPUT.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/alternateContact`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateContactRequestToJSON(requestParameters.updateContactRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfContactFromJSON(jsonValue));
    }

    /**
     * Update Alternate Contact
     * Update Alternate Contact
     */
    async updateAlternateContactUsingPUT(requestParameters: ShipmentContactApiUpdateAlternateContactUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfContact> {
        const response = await this.updateAlternateContactUsingPUTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Customer Contact
     * Update Customer Contact
     */


    async updateCustomerContactUsingPUTRaw(requestParameters: ShipmentContactApiUpdateCustomerContactUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfContact>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling updateCustomerContactUsingPUT.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/customerContact`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateContactRequestToJSON(requestParameters.updateContactRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfContactFromJSON(jsonValue));
    }

    /**
     * Update Customer Contact
     * Update Customer Contact
     */
    async updateCustomerContactUsingPUT(requestParameters: ShipmentContactApiUpdateCustomerContactUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfContact> {
        const response = await this.updateCustomerContactUsingPUTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Destination Contact
     * Update Destination Contact
     */


    async updateDestinationContactUsingPUTRaw(requestParameters: ShipmentContactApiUpdateDestinationContactUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfContact>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling updateDestinationContactUsingPUT.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/destinationContact`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateContactRequestToJSON(requestParameters.updateContactRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfContactFromJSON(jsonValue));
    }

    /**
     * Update Destination Contact
     * Update Destination Contact
     */
    async updateDestinationContactUsingPUT(requestParameters: ShipmentContactApiUpdateDestinationContactUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfContact> {
        const response = await this.updateDestinationContactUsingPUTRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
