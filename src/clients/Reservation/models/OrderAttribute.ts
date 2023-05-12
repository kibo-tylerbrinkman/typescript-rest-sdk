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
/**
 * 
 * @export
 * @interface OrderAttribute
 */
export interface OrderAttribute {
    /**
     * 
     * @type {string}
     * @memberof OrderAttribute
     */
    fullyQualifiedName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof OrderAttribute
     */
    attributeDefinitionId?: number | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof OrderAttribute
     */
    values?: Array<any> | null;
}

/**
 * Check if a given object implements the OrderAttribute interface.
 */
export function instanceOfOrderAttribute(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderAttributeFromJSON(json: any): OrderAttribute {
    return OrderAttributeFromJSONTyped(json, false);
}

export function OrderAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderAttribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fullyQualifiedName': !exists(json, 'fullyQualifiedName') ? undefined : json['fullyQualifiedName'],
        'attributeDefinitionId': !exists(json, 'attributeDefinitionId') ? undefined : json['attributeDefinitionId'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function OrderAttributeToJSON(value?: OrderAttribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fullyQualifiedName': value.fullyQualifiedName,
        'attributeDefinitionId': value.attributeDefinitionId,
        'values': value.values,
    };
}

