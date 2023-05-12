/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Reservation Web API
 * OpenAPI Spec for Kibo Reservation Web API
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PackageMeasurements } from './PackageMeasurements';
import {
    PackageMeasurementsFromJSON,
    PackageMeasurementsFromJSONTyped,
    PackageMeasurementsToJSON,
} from './PackageMeasurements';

/**
 * 
 * @export
 * @interface BundledProdu
 */
export interface BundledProdu {
    /**
     * 
     * @type {string}
     * @memberof BundledProdu
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BundledProdu
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BundledProdu
     */
    goodsType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BundledProdu
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof BundledProdu
     */
    optionAttributeFQN?: string | null;
    /**
     * 
     * @type {any}
     * @memberof BundledProdu
     */
    optionValue?: any | null;
    /**
     * 
     * @type {PackageMeasurements}
     * @memberof BundledProdu
     */
    measurements?: PackageMeasurements;
}

/**
 * Check if a given object implements the BundledProdu interface.
 */
export function instanceOfBundledProdu(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BundledProduFromJSON(json: any): BundledProdu {
    return BundledProduFromJSONTyped(json, false);
}

export function BundledProduFromJSONTyped(json: any, ignoreDiscriminator: boolean): BundledProdu {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'goodsType': !exists(json, 'goodsType') ? undefined : json['goodsType'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'optionAttributeFQN': !exists(json, 'optionAttributeFQN') ? undefined : json['optionAttributeFQN'],
        'optionValue': !exists(json, 'optionValue') ? undefined : json['optionValue'],
        'measurements': !exists(json, 'measurements') ? undefined : PackageMeasurementsFromJSON(json['measurements']),
    };
}

export function BundledProduToJSON(value?: BundledProdu | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'name': value.name,
        'goodsType': value.goodsType,
        'quantity': value.quantity,
        'optionAttributeFQN': value.optionAttributeFQN,
        'optionValue': value.optionValue,
        'measurements': PackageMeasurementsToJSON(value.measurements),
    };
}

