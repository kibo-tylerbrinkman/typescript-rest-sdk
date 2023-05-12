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
 * @interface FulfillmentServiceProductOption
 */
export interface FulfillmentServiceProductOption {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceProductOption
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof FulfillmentServiceProductOption
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceProductOption
     */
    dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceProductOption
     */
    name?: string | null;
    /**
     * 
     * @type {any}
     * @memberof FulfillmentServiceProductOption
     */
    shopperEnteredValue?: any | null;
    /**
     * 
     * @type {string}
     * @memberof FulfillmentServiceProductOption
     */
    stringValue?: string | null;
    /**
     * 
     * @type {any}
     * @memberof FulfillmentServiceProductOption
     */
    value?: any | null;
}

/**
 * Check if a given object implements the FulfillmentServiceProductOption interface.
 */
export function instanceOfFulfillmentServiceProductOption(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentServiceProductOptionFromJSON(json: any): FulfillmentServiceProductOption {
    return FulfillmentServiceProductOptionFromJSONTyped(json, false);
}

export function FulfillmentServiceProductOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentServiceProductOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeFQN': !exists(json, 'attributeFQN') ? undefined : json['attributeFQN'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'shopperEnteredValue': !exists(json, 'shopperEnteredValue') ? undefined : json['shopperEnteredValue'],
        'stringValue': !exists(json, 'stringValue') ? undefined : json['stringValue'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function FulfillmentServiceProductOptionToJSON(value?: FulfillmentServiceProductOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributeFQN': value.attributeFQN,
        'attributes': value.attributes,
        'dataType': value.dataType,
        'name': value.name,
        'shopperEnteredValue': value.shopperEnteredValue,
        'stringValue': value.stringValue,
        'value': value.value,
    };
}

