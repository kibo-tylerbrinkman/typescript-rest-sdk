/* tslint:disable */
/* eslint-disable */
/**
 * Inventory
 * Swagger JSON for inventory apis
 *
 * The version of the OpenAPI document: 5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LocationResponseAllOf
 */
export interface LocationResponseAllOf {
    /**
     * Internal Location ID
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    locationID?: number;
    /**
     * Tenant ID
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    tenantID?: number;
    /**
     * Location Code
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    locationCode?: string;
    /**
     * Flag for whether the location is express enabled or not
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    express?: boolean;
    /**
     * Flag for whether the location is to be included in location exports
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    includeInLocationExport?: boolean;
    /**
     * Flag for whether the location is to be included in aggregate exports
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    includeInAggregate?: boolean;
    /**
     * Flag for whether the location is active
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    active?: boolean;
    /**
     * Flag for whether the location allows Direct Ship (STH) orders
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    directShip?: boolean;
    /**
     * Flag for whether the location allows Pickup (BOPIS) orders
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    pickup?: boolean;
    /**
     * Flag for whether the location allows Transfer orders
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    transferEnabled?: boolean;
    /**
     * Postal Code
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    postalCode?: string;
    /**
     * Country Code
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    countryCode?: string;
    /**
     * Latitude
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    latitude?: number;
    /**
     * Longitude
     * @type {number}
     * @memberof LocationResponseAllOf
     */
    longitude?: number;
    /**
     * Location Name
     * @type {string}
     * @memberof LocationResponseAllOf
     */
    locationName?: string;
    /**
     * Flag for whether the location is WMS Enabled
     * @type {boolean}
     * @memberof LocationResponseAllOf
     */
    wmsEnabled?: boolean;
}

/**
 * Check if a given object implements the LocationResponseAllOf interface.
 */
export function instanceOfLocationResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocationResponseAllOfFromJSON(json: any): LocationResponseAllOf {
    return LocationResponseAllOfFromJSONTyped(json, false);
}

export function LocationResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocationResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locationID': !exists(json, 'locationID') ? undefined : json['locationID'],
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'express': !exists(json, 'express') ? undefined : json['express'],
        'includeInLocationExport': !exists(json, 'includeInLocationExport') ? undefined : json['includeInLocationExport'],
        'includeInAggregate': !exists(json, 'includeInAggregate') ? undefined : json['includeInAggregate'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'directShip': !exists(json, 'directShip') ? undefined : json['directShip'],
        'pickup': !exists(json, 'pickup') ? undefined : json['pickup'],
        'transferEnabled': !exists(json, 'transferEnabled') ? undefined : json['transferEnabled'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'locationName': !exists(json, 'locationName') ? undefined : json['locationName'],
        'wmsEnabled': !exists(json, 'wmsEnabled') ? undefined : json['wmsEnabled'],
    };
}

export function LocationResponseAllOfToJSON(value?: LocationResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locationID': value.locationID,
        'tenantID': value.tenantID,
        'locationCode': value.locationCode,
        'express': value.express,
        'includeInLocationExport': value.includeInLocationExport,
        'includeInAggregate': value.includeInAggregate,
        'active': value.active,
        'directShip': value.directShip,
        'pickup': value.pickup,
        'transferEnabled': value.transferEnabled,
        'postalCode': value.postalCode,
        'countryCode': value.countryCode,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'locationName': value.locationName,
        'wmsEnabled': value.wmsEnabled,
    };
}
