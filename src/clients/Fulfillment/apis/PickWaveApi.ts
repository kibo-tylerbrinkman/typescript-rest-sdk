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
  ClosePickWave,
  CollectionModelOfPickWave,
  CollectionModelOfShipment,
  CreatePickWave,
  EntityModelOfPickWave,
  EntityModelOfPickWaveDetail,
  EntityModelOfstring,
} from '../models';
import {
    ClosePickWaveFromJSON,
    ClosePickWaveToJSON,
    CollectionModelOfPickWaveFromJSON,
    CollectionModelOfPickWaveToJSON,
    CollectionModelOfShipmentFromJSON,
    CollectionModelOfShipmentToJSON,
    CreatePickWaveFromJSON,
    CreatePickWaveToJSON,
    EntityModelOfPickWaveFromJSON,
    EntityModelOfPickWaveToJSON,
    EntityModelOfPickWaveDetailFromJSON,
    EntityModelOfPickWaveDetailToJSON,
    EntityModelOfstringFromJSON,
    EntityModelOfstringToJSON,
} from '../models';

export interface PickWaveApiClosePickWaveUsingPUTRequest {
    pickWaveNumber: number;
    closePickWave?: ClosePickWave;
}

export interface PickWaveApiCreatePickWaveUsingPOSTRequest {
    createPickWave?: CreatePickWave;
}

export interface PickWaveApiGetOpenPickWavesUsingGETRequest {
    fulfillmentLocationCode: string;
    shipmentType?: string;
    userId?: string;
    userDisplayName?: string;
}

export interface PickWaveApiGetPickWaveDetailsUsingGETRequest {
    pickWaveNumber: number;
    sortContentsByLocator?: string;
}

export interface PickWaveApiGetPickWaveUsingGETRequest {
    pickWaveNumber: number;
    sortContents?: string;
}

export interface PickWaveApiGetShipmentsInPickWaveUsingGETRequest {
    pickWaveNumber: number;
}

export interface PickWaveApiRenderOrderPickSheetsUsingGETRequest {
    pickWaveNumber: number;
}

export interface PickWaveApiRenderPickWaveUsingGETRequest {
    pickWaveNumber: number;
    printPickWave?: boolean;
    printPackingLists?: boolean;
    printSingleOrderSheets?: boolean;
}

/**
 * 
 */
export class PickWaveApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Close Pick Wave
     * Close Pick Wave
     */


    async closePickWaveUsingPUTRaw(requestParameters: PickWaveApiClosePickWaveUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWave>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling closePickWaveUsingPUT.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}/closed`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ClosePickWaveToJSON(requestParameters.closePickWave),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfPickWaveFromJSON(jsonValue));
    }

    /**
     * Close Pick Wave
     * Close Pick Wave
     */
    async closePickWaveUsingPUT(requestParameters: PickWaveApiClosePickWaveUsingPUTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWave> {
        const response = await this.closePickWaveUsingPUTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Pick Wave
     * Create Pick Wave
     */


    async createPickWaveUsingPOSTRaw(requestParameters: PickWaveApiCreatePickWaveUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWave>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePickWaveToJSON(requestParameters.createPickWave),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfPickWaveFromJSON(jsonValue));
    }

    /**
     * Create Pick Wave
     * Create Pick Wave
     */
    async createPickWaveUsingPOST(requestParameters: PickWaveApiCreatePickWaveUsingPOSTRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWave> {
        const response = await this.createPickWaveUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Open Pick Waves
     * Get Open Pick Waves
     */


    async getOpenPickWavesUsingGETRaw(requestParameters: PickWaveApiGetOpenPickWavesUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelOfPickWave>> {
        if (requestParameters.fulfillmentLocationCode === null || requestParameters.fulfillmentLocationCode === undefined) {
            throw new runtime.RequiredError('fulfillmentLocationCode','Required parameter requestParameters.fulfillmentLocationCode was null or undefined when calling getOpenPickWavesUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.shipmentType !== undefined) {
            queryParameters['shipmentType'] = requestParameters.shipmentType;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['userId'] = requestParameters.userId;
        }

        if (requestParameters.userDisplayName !== undefined) {
            queryParameters['userDisplayName'] = requestParameters.userDisplayName;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/open/{fulfillmentLocationCode}`.replace(`{${"fulfillmentLocationCode"}}`, encodeURIComponent(String(requestParameters.fulfillmentLocationCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionModelOfPickWaveFromJSON(jsonValue));
    }

    /**
     * Get Open Pick Waves
     * Get Open Pick Waves
     */
    async getOpenPickWavesUsingGET(requestParameters: PickWaveApiGetOpenPickWavesUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelOfPickWave> {
        const response = await this.getOpenPickWavesUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Pick Wave Details
     * Get Pick Wave Details
     */


    async getPickWaveDetailsUsingGETRaw(requestParameters: PickWaveApiGetPickWaveDetailsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWaveDetail>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling getPickWaveDetailsUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.sortContentsByLocator !== undefined) {
            queryParameters['sortContentsByLocator'] = requestParameters.sortContentsByLocator;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}/pickWaveDetails`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfPickWaveDetailFromJSON(jsonValue));
    }

    /**
     * Get Pick Wave Details
     * Get Pick Wave Details
     */
    async getPickWaveDetailsUsingGET(requestParameters: PickWaveApiGetPickWaveDetailsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWaveDetail> {
        const response = await this.getPickWaveDetailsUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Pick Wave
     * Get Pick Wave
     */


    async getPickWaveUsingGETRaw(requestParameters: PickWaveApiGetPickWaveUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfPickWave>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling getPickWaveUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.sortContents !== undefined) {
            queryParameters['sortContents'] = requestParameters.sortContents;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfPickWaveFromJSON(jsonValue));
    }

    /**
     * Get Pick Wave
     * Get Pick Wave
     */
    async getPickWaveUsingGET(requestParameters: PickWaveApiGetPickWaveUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfPickWave> {
        const response = await this.getPickWaveUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Shipments in Pick Wave
     * Get Shipments in Pick Wave
     */


    async getShipmentsInPickWaveUsingGETRaw(requestParameters: PickWaveApiGetShipmentsInPickWaveUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CollectionModelOfShipment>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling getShipmentsInPickWaveUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}/shipments`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CollectionModelOfShipmentFromJSON(jsonValue));
    }

    /**
     * Get Shipments in Pick Wave
     * Get Shipments in Pick Wave
     */
    async getShipmentsInPickWaveUsingGET(requestParameters: PickWaveApiGetShipmentsInPickWaveUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CollectionModelOfShipment> {
        const response = await this.getShipmentsInPickWaveUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Render pick wave order pick sheets in HTML format for printing
     * Render Pick Wave Order Sheets
     */


    async renderOrderPickSheetsUsingGETRaw(requestParameters: PickWaveApiRenderOrderPickSheetsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfstring>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling renderOrderPickSheetsUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}/order-pick-sheets/html`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfstringFromJSON(jsonValue));
    }

    /**
     * Render pick wave order pick sheets in HTML format for printing
     * Render Pick Wave Order Sheets
     */
    async renderOrderPickSheetsUsingGET(requestParameters: PickWaveApiRenderOrderPickSheetsUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfstring> {
        const response = await this.renderOrderPickSheetsUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Render pick wave in HTML format for printing
     * Render Pick Wave
     */


    async renderPickWaveUsingGETRaw(requestParameters: PickWaveApiRenderPickWaveUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfstring>> {
        if (requestParameters.pickWaveNumber === null || requestParameters.pickWaveNumber === undefined) {
            throw new runtime.RequiredError('pickWaveNumber','Required parameter requestParameters.pickWaveNumber was null or undefined when calling renderPickWaveUsingGET.');
        }

        const queryParameters: any = {};

        if (requestParameters.printPickWave !== undefined) {
            queryParameters['printPickWave'] = requestParameters.printPickWave;
        }

        if (requestParameters.printPackingLists !== undefined) {
            queryParameters['printPackingLists'] = requestParameters.printPackingLists;
        }

        if (requestParameters.printSingleOrderSheets !== undefined) {
            queryParameters['printSingleOrderSheets'] = requestParameters.printSingleOrderSheets;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/pickwaves/{pickWaveNumber}/rendition/html`.replace(`{${"pickWaveNumber"}}`, encodeURIComponent(String(requestParameters.pickWaveNumber))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EntityModelOfstringFromJSON(jsonValue));
    }

    /**
     * Render pick wave in HTML format for printing
     * Render Pick Wave
     */
    async renderPickWaveUsingGET(requestParameters: PickWaveApiRenderPickWaveUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfstring> {
        const response = await this.renderPickWaveUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
