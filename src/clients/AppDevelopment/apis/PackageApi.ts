/* tslint:disable */
/* eslint-disable */
/**
 * Kibo AppDev Service
 * OpenAPI Spec for Kibo AppDev Service
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
  AppDevPackage,
  ApplicationSummary,
  ApplicationSummaryCollection,
  PackageCollection,
  PackageRequest,
  PackageSummaryCollection,
} from '../models';


export namespace packageApiParams { 
    export interface ClonePackageRequest {
        applicationKey: string;
        packageName: string;
        responseFields?: string;
    }
    export interface CreateNewCorePackageRequest {
        responseFields?: string;
        packageRequest?: PackageRequest;
    }
    export interface CreatePackageRequest {
        projectId?: number;
        responseFields?: string;
        appDevPackage?: AppDevPackage;
    }
    export interface DeletePackageRequest {
        applicationKey: string;
    }
    export interface GetAllPackagesRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface GetApplicationSummaryChildrenRequest {
        appId: string;
        responseFields?: string;
    }
    export interface GetApplicationSummaryParentsRequest {
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface GetPackageRequest {
        applicationKey: string;
        includeChildren?: boolean;
        skipDevAccountCheck?: boolean;
        responseFields?: string;
    }
    export interface GetPackagesRequest {
        applicationKey: string;
        startIndex?: number;
        pageSize?: number;
        sortBy?: string;
        filter?: string;
        responseFields?: string;
    }
    export interface UpdatePackageRequest {
        applicationKey: string;
        responseFields?: string;
        appDevPackage?: AppDevPackage;
    }
}
/**
* PackageApiService - interface
* 
* @export
* @interface PackageApi
*/
export interface PackageApiService {
    /**
    * Use this operation to clone an existing package.
    * @summary Clone Package
    * @param {string} applicationKey 
    * @param {string} packageName 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PackageApiInterface
    */
    clonePackageRaw(requestParameters: packageApiParams.ClonePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDevPackage>>;

    /**
    * Use this operation to clone an existing package.
    * Clone Package
    */
    clonePackage(requestParameters: packageApiParams.ClonePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDevPackage>;

    /**
    * Save as new version of the application core with only a release package included.
    * @summary Create New Core Package
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {PackageRequest} [packageRequest] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PackageApiInterface
    */
    createNewCorePackageRaw(requestParameters: packageApiParams.CreateNewCorePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDevPackage>>;

    /**
    * Save as new version of the application core with only a release package included.
    * Create New Core Package
    */
    createNewCorePackage(requestParameters: packageApiParams.CreateNewCorePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDevPackage>;

    /**
    * 
    * @summary Create Package
    * @param {number} [projectId] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {AppDevPackage} [appDevPackage] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PackageApiInterface
    */
    createPackageRaw(requestParameters: packageApiParams.CreatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDevPackage>>;

    /**
    * 
    * Create Package
    */
    createPackage(requestParameters: packageApiParams.CreatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDevPackage>;

    /**
    * Use thi operatin to logically delete a package.
    * @summary Delete Package
    * @param {string} applicationKey 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PackageApiInterface
    */
    deletePackageRaw(requestParameters: packageApiParams.DeletePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
    * Use thi operatin to logically delete a package.
    * Delete Package
    */
    deletePackage(requestParameters: packageApiParams.DeletePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
    * Get all packages for a given Developer Account.
    * @summary Get All Packages
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PackageApiInterface
    */
    getAllPackagesRaw(requestParameters: packageApiParams.GetAllPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PackageSummaryCollection>>;

    /**
    * Get all packages for a given Developer Account.
    * Get All Packages
    */
    getAllPackages(requestParameters: packageApiParams.GetAllPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PackageSummaryCollection>;

    /**
    * 
    * @summary Get Application Summary Children
    * @param {string} appId 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PackageApiInterface
    */
    getApplicationSummaryChildrenRaw(requestParameters: packageApiParams.GetApplicationSummaryChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationSummary>>>;

    /**
    * 
    * Get Application Summary Children
    */
    getApplicationSummaryChildren(requestParameters: packageApiParams.GetApplicationSummaryChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationSummary>>;

    /**
    * 
    * @summary Get Application Summary Parents
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PackageApiInterface
    */
    getApplicationSummaryParentsRaw(requestParameters: packageApiParams.GetApplicationSummaryParentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationSummaryCollection>>;

    /**
    * 
    * Get Application Summary Parents
    */
    getApplicationSummaryParents(requestParameters: packageApiParams.GetApplicationSummaryParentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationSummaryCollection>;

    /**
    * Use this operation to retrieve the package for the requested  package and its associated application core information.
    * @summary Get Package
    * @param {string} applicationKey 
    * @param {boolean} [includeChildren] 
    * @param {boolean} [skipDevAccountCheck] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PackageApiInterface
    */
    getPackageRaw(requestParameters: packageApiParams.GetPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDevPackage>>;

    /**
    * Use this operation to retrieve the package for the requested  package and its associated application core information.
    * Get Package
    */
    getPackage(requestParameters: packageApiParams.GetPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDevPackage>;

    /**
    * Use this operation to retieve all packages for a given applicationKey.
    * @summary Get Packages
    * @param {string} applicationKey 
    * @param {number} [startIndex] 
    * @param {number} [pageSize] 
    * @param {string} [sortBy] 
    * @param {string} [filter] 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PackageApiInterface
    */
    getPackagesRaw(requestParameters: packageApiParams.GetPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PackageCollection>>;

    /**
    * Use this operation to retieve all packages for a given applicationKey.
    * Get Packages
    */
    getPackages(requestParameters: packageApiParams.GetPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PackageCollection>;

    /**
    * 
    * @summary Update Package
    * @param {string} applicationKey 
    * @param {string} [responseFields] limits which fields are returned in the response body
    * @param {AppDevPackage} [appDevPackage] 
    * @param {*} [options] Override http request option.
    * @throws {RequiredError}
    * @memberof PackageApiInterface
    */
    updatePackageRaw(requestParameters: packageApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDevPackage>>;

    /**
    * 
    * Update Package
    */
    updatePackage(requestParameters: packageApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDevPackage>;

}


/**
 * 
 */
export class PackageApi extends runtime.BaseAPI implements PackageApiService {
    constructor(configuration?) {
        super(configuration)
        this.basePathTemplate = basePathTemplate
    }
    /**
     * Use this operation to clone an existing package.
     * Clone Package
     */


    async clonePackageRaw(requestParameters: packageApiParams.ClonePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDevPackage>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling clonePackage.');
        }

        if (requestParameters.packageName === null || requestParameters.packageName === undefined) {
            throw new runtime.RequiredError('packageName','Required parameter requestParameters.packageName was null or undefined when calling clonePackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/apppackages/{applicationKey}/clone/{packageName}`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))).replace(`{${"packageName"}}`, encodeURIComponent(String(requestParameters.packageName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Use this operation to clone an existing package.
     * Clone Package
     */
    async clonePackage(requestParameters: packageApiParams.ClonePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDevPackage> {
        const response = await this.clonePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save as new version of the application core with only a release package included.
     * Create New Core Package
     */


    async createNewCorePackageRaw(requestParameters: packageApiParams.CreateNewCorePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDevPackage>> {
        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/apppackages/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.packageRequest,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Save as new version of the application core with only a release package included.
     * Create New Core Package
     */
    async createNewCorePackage(requestParameters: packageApiParams.CreateNewCorePackageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDevPackage> {
        const response = await this.createNewCorePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Create Package
     */


    async createPackageRaw(requestParameters: packageApiParams.CreatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDevPackage>> {
        const queryParameters: any = {};

        if (requestParameters.projectId !== undefined) {
            queryParameters['projectId'] = requestParameters.projectId;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/apppackages/project`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.appDevPackage,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Create Package
     */
    async createPackage(requestParameters: packageApiParams.CreatePackageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDevPackage> {
        const response = await this.createPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use thi operatin to logically delete a package.
     * Delete Package
     */


    async deletePackageRaw(requestParameters: packageApiParams.DeletePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling deletePackage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/apppackages/{applicationKey}`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Use thi operatin to logically delete a package.
     * Delete Package
     */
    async deletePackage(requestParameters: packageApiParams.DeletePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePackageRaw(requestParameters, initOverrides);
    }

    /**
     * Get all packages for a given Developer Account.
     * Get All Packages
     */


    async getAllPackagesRaw(requestParameters: packageApiParams.GetAllPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PackageSummaryCollection>> {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/apppackages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get all packages for a given Developer Account.
     * Get All Packages
     */
    async getAllPackages(requestParameters: packageApiParams.GetAllPackagesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PackageSummaryCollection> {
        const response = await this.getAllPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get Application Summary Children
     */


    async getApplicationSummaryChildrenRaw(requestParameters: packageApiParams.GetApplicationSummaryChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationSummary>>> {
        if (requestParameters.appId === null || requestParameters.appId === undefined) {
            throw new runtime.RequiredError('appId','Required parameter requestParameters.appId was null or undefined when calling getApplicationSummaryChildren.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/apppackages/apps/{appId}`.replace(`{${"appId"}}`, encodeURIComponent(String(requestParameters.appId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Get Application Summary Children
     */
    async getApplicationSummaryChildren(requestParameters: packageApiParams.GetApplicationSummaryChildrenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationSummary>> {
        const response = await this.getApplicationSummaryChildrenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Get Application Summary Parents
     */


    async getApplicationSummaryParentsRaw(requestParameters: packageApiParams.GetApplicationSummaryParentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApplicationSummaryCollection>> {
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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/apppackages/collection`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Get Application Summary Parents
     */
    async getApplicationSummaryParents(requestParameters: packageApiParams.GetApplicationSummaryParentsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApplicationSummaryCollection> {
        const response = await this.getApplicationSummaryParentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this operation to retrieve the package for the requested  package and its associated application core information.
     * Get Package
     */


    async getPackageRaw(requestParameters: packageApiParams.GetPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDevPackage>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling getPackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.includeChildren !== undefined) {
            queryParameters['includeChildren'] = requestParameters.includeChildren;
        }

        if (requestParameters.skipDevAccountCheck !== undefined) {
            queryParameters['skipDevAccountCheck'] = requestParameters.skipDevAccountCheck;
        }

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/apppackages/{applicationKey}`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Use this operation to retrieve the package for the requested  package and its associated application core information.
     * Get Package
     */
    async getPackage(requestParameters: packageApiParams.GetPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDevPackage> {
        const response = await this.getPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this operation to retieve all packages for a given applicationKey.
     * Get Packages
     */


    async getPackagesRaw(requestParameters: packageApiParams.GetPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PackageCollection>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling getPackages.');
        }

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

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/apppackages/applications/{applicationKey}/packages`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Use this operation to retieve all packages for a given applicationKey.
     * Get Packages
     */
    async getPackages(requestParameters: packageApiParams.GetPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PackageCollection> {
        const response = await this.getPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Update Package
     */


    async updatePackageRaw(requestParameters: packageApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppDevPackage>> {
        if (requestParameters.applicationKey === null || requestParameters.applicationKey === undefined) {
            throw new runtime.RequiredError('applicationKey','Required parameter requestParameters.applicationKey was null or undefined when calling updatePackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseFields !== undefined) {
            queryParameters['responseFields'] = requestParameters.responseFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';





        await this.addAuthorizationHeaders(headerParameters)
        
        const response = await this.request({
            path: `/platform/appdev/apppackages/{applicationKey}`.replace(`{${"applicationKey"}}`, encodeURIComponent(String(requestParameters.applicationKey))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.appDevPackage,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 
     * Update Package
     */
    async updatePackage(requestParameters: packageApiParams.UpdatePackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppDevPackage> {
        const response = await this.updatePackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
