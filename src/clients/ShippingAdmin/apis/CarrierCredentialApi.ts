/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Shipping Admin Service
 * OpenAPI Spec for Kibo Shipping Admin Service
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
  CarrierCredential,
  CarrierCredentialCollection,
} from '../models';
import {
    CarrierCredentialFromJSON,
    CarrierCredentialToJSON,
    CarrierCredentialCollectionFromJSON,
    CarrierCredentialCollectionToJSON,
} from '../models';

export interface CarrierCredentialApiCreateCarrierCredentialRequest {
    carrierId: string;
    carrierCredential?: CarrierCredential;
}

export interface CarrierCredentialApiDeleteCarrierCredentialRequest {
    carrierId: string;
    siteId?: number;
    locationGroupCode?: string;
    locationCode?: string;
}

export interface CarrierCredentialApiGetCarrierCredentialRequest {
    carrierId: string;
    siteId?: number;
    locationGroupCode?: string;
    locationCode?: string;
}

export interface CarrierCredentialApiGetCarrierCredentialsRequest {
    startIndex?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
}

export interface CarrierCredentialApiUpdateCarrierCredentialRequest {
    carrierId: string;
    siteId?: number;
    locationGroupCode?: string;
    locationCode?: string;
    carrierCredential?: CarrierCredential;
}

/**
 * 
 */
export class CarrierCredentialApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * hippingAdmin.Contracts.Carriers.CarrierCredential.
     * Creates a Mozu
     */


    async createCarrierCredentialRaw(requestParameters: CarrierCredentialApiCreateCarrierCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CarrierCredential>> {
        if (requestParameters.carrierId === null || requestParameters.carrierId === undefined) {
            throw new runtime.RequiredError('carrierId','Required parameter requestParameters.carrierId was null or undefined when calling createCarrierCredential.');
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
            path: `/commerce/shipping/admin/carriers/credentials/{carrierId}`.replace(`{${"carrierId"}}`, encodeURIComponent(String(requestParameters.carrierId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CarrierCredentialToJSON(requestParameters.carrierCredential),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CarrierCredentialFromJSON(jsonValue));
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierCredential.
     * Creates a Mozu
     */
    async createCarrierCredential(requestParameters: CarrierCredentialApiCreateCarrierCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CarrierCredential> {
        const response = await this.createCarrierCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierCredential with the specified configuration.
     * Deletes a Mozu
     */


    async deleteCarrierCredentialRaw(requestParameters: CarrierCredentialApiDeleteCarrierCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.carrierId === null || requestParameters.carrierId === undefined) {
            throw new runtime.RequiredError('carrierId','Required parameter requestParameters.carrierId was null or undefined when calling deleteCarrierCredential.');
        }

        const queryParameters: any = {};

        if (requestParameters.siteId !== undefined) {
            queryParameters['siteId'] = requestParameters.siteId;
        }

        if (requestParameters.locationGroupCode !== undefined) {
            queryParameters['locationGroupCode'] = requestParameters.locationGroupCode;
        }

        if (requestParameters.locationCode !== undefined) {
            queryParameters['locationCode'] = requestParameters.locationCode;
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
            path: `/commerce/shipping/admin/carriers/credentials/{carrierId}`.replace(`{${"carrierId"}}`, encodeURIComponent(String(requestParameters.carrierId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierCredential with the specified configuration.
     * Deletes a Mozu
     */
    async deleteCarrierCredential(requestParameters: CarrierCredentialApiDeleteCarrierCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCarrierCredentialRaw(requestParameters, initOverrides);
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierCredential with the specified configuration.
     * Gets a Mozu
     */


    async getCarrierCredentialRaw(requestParameters: CarrierCredentialApiGetCarrierCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CarrierCredential>> {
        if (requestParameters.carrierId === null || requestParameters.carrierId === undefined) {
            throw new runtime.RequiredError('carrierId','Required parameter requestParameters.carrierId was null or undefined when calling getCarrierCredential.');
        }

        const queryParameters: any = {};

        if (requestParameters.siteId !== undefined) {
            queryParameters['siteId'] = requestParameters.siteId;
        }

        if (requestParameters.locationGroupCode !== undefined) {
            queryParameters['locationGroupCode'] = requestParameters.locationGroupCode;
        }

        if (requestParameters.locationCode !== undefined) {
            queryParameters['locationCode'] = requestParameters.locationCode;
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
            path: `/commerce/shipping/admin/carriers/credentials/{carrierId}`.replace(`{${"carrierId"}}`, encodeURIComponent(String(requestParameters.carrierId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CarrierCredentialFromJSON(jsonValue));
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierCredential with the specified configuration.
     * Gets a Mozu
     */
    async getCarrierCredential(requestParameters: CarrierCredentialApiGetCarrierCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CarrierCredential> {
        const response = await this.getCarrierCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierCredentialCollection\">collection</see> of <see cref=\"T:Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredential\">carrier credential</see> with the specified filters and options.
     * Returns a <see cref=\"T:Mozu
     */


    async getCarrierCredentialsRaw(requestParameters: CarrierCredentialApiGetCarrierCredentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CarrierCredentialCollection>> {
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
            path: `/commerce/shipping/admin/carriers/credentials`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CarrierCredentialCollectionFromJSON(jsonValue));
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierCredentialCollection\">collection</see> of <see cref=\"T:Mozu.ShippingAdmin.Contracts.Carriers.CarrierCredential\">carrier credential</see> with the specified filters and options.
     * Returns a <see cref=\"T:Mozu
     */
    async getCarrierCredentials(requestParameters: CarrierCredentialApiGetCarrierCredentialsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CarrierCredentialCollection> {
        const response = await this.getCarrierCredentialsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierCredential with the specified configuration.
     * Updates a Mozu
     */


    async updateCarrierCredentialRaw(requestParameters: CarrierCredentialApiUpdateCarrierCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CarrierCredential>> {
        if (requestParameters.carrierId === null || requestParameters.carrierId === undefined) {
            throw new runtime.RequiredError('carrierId','Required parameter requestParameters.carrierId was null or undefined when calling updateCarrierCredential.');
        }

        const queryParameters: any = {};

        if (requestParameters.siteId !== undefined) {
            queryParameters['siteId'] = requestParameters.siteId;
        }

        if (requestParameters.locationGroupCode !== undefined) {
            queryParameters['locationGroupCode'] = requestParameters.locationGroupCode;
        }

        if (requestParameters.locationCode !== undefined) {
            queryParameters['locationCode'] = requestParameters.locationCode;
        }

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
            path: `/commerce/shipping/admin/carriers/credentials/{carrierId}`.replace(`{${"carrierId"}}`, encodeURIComponent(String(requestParameters.carrierId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CarrierCredentialToJSON(requestParameters.carrierCredential),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CarrierCredentialFromJSON(jsonValue));
    }

    /**
     * hippingAdmin.Contracts.Carriers.CarrierCredential with the specified configuration.
     * Updates a Mozu
     */
    async updateCarrierCredential(requestParameters: CarrierCredentialApiUpdateCarrierCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CarrierCredential> {
        const response = await this.updateCarrierCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

}