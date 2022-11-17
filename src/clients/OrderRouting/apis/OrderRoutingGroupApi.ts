/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../../client-runtime';
import { basePathTemplate } from '../api-path';
import type {
  LocationGroup,
  LocationGroupModel,
  LocationSort,
} from '../models';
import {
    LocationGroupFromJSON,
    LocationGroupToJSON,
    LocationGroupModelFromJSON,
    LocationGroupModelToJSON,
    LocationSortFromJSON,
    LocationSortToJSON,
} from '../models';

export interface OrderRoutingGroupApiDeleteGroupUsingDELETERequest {
    groupID: number;
    xVolSite: number;
    xVolTenant: number;
}

export interface OrderRoutingGroupApiGetGroupUsingGETRequest {
    groupID: number;
    xVolSite: number;
    xVolTenant: number;
}

export interface OrderRoutingGroupApiSaveGroupUsingPOSTRequest {
    xVolSite: number;
    xVolTenant: number;
    loc: LocationGroupModel;
}

export interface OrderRoutingGroupApiSetGroupFiltersUsingPOSTRequest {
    groupID: number;
    xVolSite: number;
    xVolTenant: number;
    filterIDs: Array<number>;
}

export interface OrderRoutingGroupApiSetGroupSortsUsingPOSTRequest {
    groupID: number;
    xVolSite: number;
    xVolTenant: number;
    sorts: Array<LocationSort>;
}

export interface OrderRoutingGroupApiTestGroupUsingGETRequest {
    xVolSite: number;
    xVolTenant: number;
}

/**
 * 
 */
export class OrderRoutingGroupApi extends runtime.BaseAPI {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * deleteGroup
     * deleteGroup
     */


    async deleteGroupUsingDELETERaw(requestParameters: OrderRoutingGroupApiDeleteGroupUsingDELETERequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.groupID === null || requestParameters.groupID === undefined) {
            throw new runtime.RequiredError('groupID','Required parameter requestParameters.groupID was null or undefined when calling deleteGroupUsingDELETE.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling deleteGroupUsingDELETE.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling deleteGroupUsingDELETE.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/group/delete/{groupID}`.replace(`{${"groupID"}}`, encodeURIComponent(String(requestParameters.groupID))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * deleteGroup
     * deleteGroup
     */
    async deleteGroupUsingDELETE(requestParameters: OrderRoutingGroupApiDeleteGroupUsingDELETERequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteGroupUsingDELETERaw(requestParameters, initOverrides);
    }

    /**
     * getGroup
     * getGroup
     */


    async getGroupUsingGETRaw(requestParameters: OrderRoutingGroupApiGetGroupUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroup>> {
        if (requestParameters.groupID === null || requestParameters.groupID === undefined) {
            throw new runtime.RequiredError('groupID','Required parameter requestParameters.groupID was null or undefined when calling getGroupUsingGET.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling getGroupUsingGET.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling getGroupUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/group/{groupID}`.replace(`{${"groupID"}}`, encodeURIComponent(String(requestParameters.groupID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationGroupFromJSON(jsonValue));
    }

    /**
     * getGroup
     * getGroup
     */
    async getGroupUsingGET(requestParameters: OrderRoutingGroupApiGetGroupUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroup> {
        const response = await this.getGroupUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * saveGroup
     * saveGroup
     */


    async saveGroupUsingPOSTRaw(requestParameters: OrderRoutingGroupApiSaveGroupUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroup>> {
        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling saveGroupUsingPOST.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling saveGroupUsingPOST.');
        }

        if (requestParameters.loc === null || requestParameters.loc === undefined) {
            throw new runtime.RequiredError('loc','Required parameter requestParameters.loc was null or undefined when calling saveGroupUsingPOST.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/group`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LocationGroupModelToJSON(requestParameters.loc),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationGroupFromJSON(jsonValue));
    }

    /**
     * saveGroup
     * saveGroup
     */
    async saveGroupUsingPOST(requestParameters: OrderRoutingGroupApiSaveGroupUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroup> {
        const response = await this.saveGroupUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * setGroupFilters
     * setGroupFilters
     */


    async setGroupFiltersUsingPOSTRaw(requestParameters: OrderRoutingGroupApiSetGroupFiltersUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroup>> {
        if (requestParameters.groupID === null || requestParameters.groupID === undefined) {
            throw new runtime.RequiredError('groupID','Required parameter requestParameters.groupID was null or undefined when calling setGroupFiltersUsingPOST.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling setGroupFiltersUsingPOST.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling setGroupFiltersUsingPOST.');
        }

        if (requestParameters.filterIDs === null || requestParameters.filterIDs === undefined) {
            throw new runtime.RequiredError('filterIDs','Required parameter requestParameters.filterIDs was null or undefined when calling setGroupFiltersUsingPOST.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/group/{groupID}/setFilters`.replace(`{${"groupID"}}`, encodeURIComponent(String(requestParameters.groupID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.filterIDs,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationGroupFromJSON(jsonValue));
    }

    /**
     * setGroupFilters
     * setGroupFilters
     */
    async setGroupFiltersUsingPOST(requestParameters: OrderRoutingGroupApiSetGroupFiltersUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroup> {
        const response = await this.setGroupFiltersUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * setGroupSorts
     * setGroupSorts
     */


    async setGroupSortsUsingPOSTRaw(requestParameters: OrderRoutingGroupApiSetGroupSortsUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroup>> {
        if (requestParameters.groupID === null || requestParameters.groupID === undefined) {
            throw new runtime.RequiredError('groupID','Required parameter requestParameters.groupID was null or undefined when calling setGroupSortsUsingPOST.');
        }

        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling setGroupSortsUsingPOST.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling setGroupSortsUsingPOST.');
        }

        if (requestParameters.sorts === null || requestParameters.sorts === undefined) {
            throw new runtime.RequiredError('sorts','Required parameter requestParameters.sorts was null or undefined when calling setGroupSortsUsingPOST.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/group/{groupID}/setSorts`.replace(`{${"groupID"}}`, encodeURIComponent(String(requestParameters.groupID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.sorts.map(LocationSortToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationGroupFromJSON(jsonValue));
    }

    /**
     * setGroupSorts
     * setGroupSorts
     */
    async setGroupSortsUsingPOST(requestParameters: OrderRoutingGroupApiSetGroupSortsUsingPOSTRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroup> {
        const response = await this.setGroupSortsUsingPOSTRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * testGroup
     * testGroup
     */


    async testGroupUsingGETRaw(requestParameters: OrderRoutingGroupApiTestGroupUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationGroup>> {
        if (requestParameters.xVolSite === null || requestParameters.xVolSite === undefined) {
            throw new runtime.RequiredError('xVolSite','Required parameter requestParameters.xVolSite was null or undefined when calling testGroupUsingGET.');
        }

        if (requestParameters.xVolTenant === null || requestParameters.xVolTenant === undefined) {
            throw new runtime.RequiredError('xVolTenant','Required parameter requestParameters.xVolTenant was null or undefined when calling testGroupUsingGET.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xVolSite !== undefined && requestParameters.xVolSite !== null) {
            headerParameters['x-vol-site'] = String(requestParameters.xVolSite);
        }

        if (requestParameters.xVolTenant !== undefined && requestParameters.xVolTenant !== null) {
            headerParameters['x-vol-tenant'] = String(requestParameters.xVolTenant);
        }


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
            path: `/commerce/orderrouting/api/v1/group/test`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationGroupFromJSON(jsonValue));
    }

    /**
     * testGroup
     * testGroup
     */
    async testGroupUsingGET(requestParameters: OrderRoutingGroupApiTestGroupUsingGETRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationGroup> {
        const response = await this.testGroupUsingGETRaw(requestParameters, initOverrides);
        return await response.value();
    }

}