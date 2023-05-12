/* tslint:disable */
/* eslint-disable */
/**
 * Kibo CommerceRuntime Service
 * OpenAPI Spec for Kibo CommerceRuntime Service
 *
 * The version of the OpenAPI document: v1
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
 * @interface FulfillmentServiceFulfillmentField
 */
export interface FulfillmentServiceFulfillmentField {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceFulfillmentField
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FulfillmentServiceFulfillmentField
     */
    required?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof FulfillmentServiceFulfillmentField
     */
    userEnteredValue?: any | null;
}

/**
 * Check if a given object implements the FulfillmentServiceFulfillmentField interface.
 */
export function instanceOfFulfillmentServiceFulfillmentField(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentServiceFulfillmentFieldFromJSON(json: any): FulfillmentServiceFulfillmentField {
    return FulfillmentServiceFulfillmentFieldFromJSONTyped(json, false);
}

export function FulfillmentServiceFulfillmentFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentServiceFulfillmentField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'userEnteredValue': !exists(json, 'userEnteredValue') ? undefined : json['userEnteredValue'],
    };
}

export function FulfillmentServiceFulfillmentFieldToJSON(value?: FulfillmentServiceFulfillmentField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'required': value.required,
        'userEnteredValue': value.userEnteredValue,
    };
}

