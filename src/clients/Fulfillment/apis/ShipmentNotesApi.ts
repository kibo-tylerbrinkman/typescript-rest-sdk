/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment API - Production Profile
 * REST API backing the Kibo Fulfiller User Interface
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
  EntityModelOfShipment,
  FulfillmentAPIProductionProfileShipmentNote,
} from '../models';


export namespace shipmentNotesApiParams { 
    export interface DeleteShipmentNoteRequest {
        noteId: string;
        shipmentNumber: number;
        xVolTenant: number;
        ifMatch?: string;
        xVolSite?: number;
    }
    export interface NewShipmentNoteRequest {
        shipmentNumber: number;
        xVolTenant: number;
        shipmentNoteDto: FulfillmentAPIProductionProfileShipmentNote;
        ifMatch?: string;
        xVolSite?: number;
    }
    export interface UpdateShipmentNoteRequest {
        noteId: string;
        shipmentNumber: number;
        xVolTenant: number;
        shipmentNoteDto: FulfillmentAPIProductionProfileShipmentNote;
        ifMatch?: string;
        xVolSite?: number;
    }
}
/**
* ShipmentNotesApiService - interface
* 
* @export
* @interface ShipmentNotesApi
*/
export interface ShipmentNotesApiService {
    /**
    * deleteShipmentNote
    * @summary deleteShipmentNote
    * @param {string} noteId noteId
    * @param {number} shipmentNumber shipmentNumber
    * @param {number} xVolTenant 
    * @param {string} [ifMatch] If-Match
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentNotesApiInterface
    */
    deleteShipmentNoteRaw(requestParameters: shipmentNotesApiParams.DeleteShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * deleteShipmentNote
    * deleteShipmentNote
    */
    deleteShipmentNote(requestParameters: shipmentNotesApiParams.DeleteShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * newShipmentNote
    * @summary newShipmentNote
    * @param {number} shipmentNumber shipmentNumber
    * @param {number} xVolTenant 
    * @param {FulfillmentAPIProductionProfileShipmentNote} shipmentNoteDto shipmentNoteDto
    * @param {string} [ifMatch] If-Match
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentNotesApiInterface
    */
    newShipmentNoteRaw(requestParameters: shipmentNotesApiParams.NewShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>>;

    /**
    * newShipmentNote
    * newShipmentNote
    */
    newShipmentNote(requestParameters: shipmentNotesApiParams.NewShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment>;

    /**
    * updateShipmentNote
    * @summary updateShipmentNote
    * @param {string} noteId noteId
    * @param {number} shipmentNumber shipmentNumber
    * @param {number} xVolTenant 
    * @param {FulfillmentAPIProductionProfileShipmentNote} shipmentNoteDto shipmentNoteDto
    * @param {string} [ifMatch] If-Match
    * @param {number} [xVolSite] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof ShipmentNotesApiInterface
    */
    updateShipmentNoteRaw(requestParameters: shipmentNotesApiParams.UpdateShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>>;

    /**
    * updateShipmentNote
    * updateShipmentNote
    */
    updateShipmentNote(requestParameters: shipmentNotesApiParams.UpdateShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment>;

}


/**
 * 
 */
export class ShipmentNotesApi extends runtime.BaseAPI implements ShipmentNotesApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * deleteShipmentNote
     * deleteShipmentNote
     */


    async deleteShipmentNoteRaw(requestParameters: shipmentNotesApiParams.DeleteShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.noteId === null || requestParameters.noteId === undefined) {
            throw new runtime.RequiredError('noteId','Required parameter requestParameters.noteId was null or undefined when calling deleteShipmentNote.');
        }

        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling deleteShipmentNote.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling deleteShipmentNote.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/notes/{noteId}`.replace(`{${"noteId"}}`, encodeURIComponent(String(requestParameters.noteId))).replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * deleteShipmentNote
     * deleteShipmentNote
     */
    async deleteShipmentNote(requestParameters: shipmentNotesApiParams.DeleteShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteShipmentNoteRaw(requestParameters, initOverrides);
    }

    /**
     * newShipmentNote
     * newShipmentNote
     */


    async newShipmentNoteRaw(requestParameters: shipmentNotesApiParams.NewShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling newShipmentNote.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling newShipmentNote.');
        }

        if (requestParameters.shipmentNoteDto === null || requestParameters.shipmentNoteDto === undefined) {
            throw new runtime.RequiredError('shipmentNoteDto','Required parameter requestParameters.shipmentNoteDto was null or undefined when calling newShipmentNote.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/notes`.replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.shipmentNoteDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * newShipmentNote
     * newShipmentNote
     */
    async newShipmentNote(requestParameters: shipmentNotesApiParams.NewShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.newShipmentNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * updateShipmentNote
     * updateShipmentNote
     */


    async updateShipmentNoteRaw(requestParameters: shipmentNotesApiParams.UpdateShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EntityModelOfShipment>> {
        if (requestParameters.noteId === null || requestParameters.noteId === undefined) {
            throw new runtime.RequiredError('noteId','Required parameter requestParameters.noteId was null or undefined when calling updateShipmentNote.');
        }

        if (requestParameters.shipmentNumber === null || requestParameters.shipmentNumber === undefined) {
            throw new runtime.RequiredError('shipmentNumber','Required parameter requestParameters.shipmentNumber was null or undefined when calling updateShipmentNote.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling updateShipmentNote.');
        }

        if (requestParameters.shipmentNoteDto === null || requestParameters.shipmentNoteDto === undefined) {
            throw new runtime.RequiredError('shipmentNoteDto','Required parameter requestParameters.shipmentNoteDto was null or undefined when calling updateShipmentNote.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.ifMatch !== undefined && requestParameters.ifMatch !== null) {
            headerParameters['If-Match'] = String(requestParameters.ifMatch);
        }

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/commerce/shipments/{shipmentNumber}/notes/{noteId}`.replace(`{${"noteId"}}`, encodeURIComponent(String(requestParameters.noteId))).replace(`{${"shipmentNumber"}}`, encodeURIComponent(String(requestParameters.shipmentNumber))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.shipmentNoteDto,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * updateShipmentNote
     * updateShipmentNote
     */
    async updateShipmentNote(requestParameters: shipmentNotesApiParams.UpdateShipmentNoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EntityModelOfShipment> {
        const response = await this.updateShipmentNoteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
