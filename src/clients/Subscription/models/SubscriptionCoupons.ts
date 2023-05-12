/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
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
 * @interface SubscriptionCoupons
 */
export interface SubscriptionCoupons {
    /**
     * 
     * @type {Array<string>}
     * @memberof SubscriptionCoupons
     */
    couponCodes?: Array<string> | null;
}

/**
 * Check if a given object implements the SubscriptionCoupons interface.
 */
export function instanceOfSubscriptionCoupons(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionCouponsFromJSON(json: any): SubscriptionCoupons {
    return SubscriptionCouponsFromJSONTyped(json, false);
}

export function SubscriptionCouponsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionCoupons {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'couponCodes': !exists(json, 'couponCodes') ? undefined : json['couponCodes'],
    };
}

export function SubscriptionCouponsToJSON(value?: SubscriptionCoupons | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'couponCodes': value.couponCodes,
    };
}
