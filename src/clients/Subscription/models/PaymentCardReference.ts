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
 * @interface PaymentCardReference
 */
export interface PaymentCardReference {
    /**
     * Card type such as Visa, MasterCard, American Express, or Discover.
     * @type {string}
     * @memberof PaymentCardReference
     */
    paymentOrCardType?: string | null;
    /**
     * The visible part of the card number that the merchant uses to refer to 
     * payment information, for example, the last for digits of the card number.
     * @type {string}
     * @memberof PaymentCardReference
     */
    cardNumberPartOrMask?: string | null;
    /**
     * Month when the card expires.
     * @type {number}
     * @memberof PaymentCardReference
     */
    expireMonth?: number;
    /**
     * Year when the card expires.
     * @type {number}
     * @memberof PaymentCardReference
     */
    expireYear?: number;
    /**
     * Year when the card expires.
     * @type {string}
     * @memberof PaymentCardReference
     */
    bin?: string | null;
}

/**
 * Check if a given object implements the PaymentCardReference interface.
 */
export function instanceOfPaymentCardReference(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaymentCardReferenceFromJSON(json: any): PaymentCardReference {
    return PaymentCardReferenceFromJSONTyped(json, false);
}

export function PaymentCardReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentCardReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentOrCardType': !exists(json, 'paymentOrCardType') ? undefined : json['paymentOrCardType'],
        'cardNumberPartOrMask': !exists(json, 'cardNumberPartOrMask') ? undefined : json['cardNumberPartOrMask'],
        'expireMonth': !exists(json, 'expireMonth') ? undefined : json['expireMonth'],
        'expireYear': !exists(json, 'expireYear') ? undefined : json['expireYear'],
        'bin': !exists(json, 'bin') ? undefined : json['bin'],
    };
}

export function PaymentCardReferenceToJSON(value?: PaymentCardReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paymentOrCardType': value.paymentOrCardType,
        'cardNumberPartOrMask': value.cardNumberPartOrMask,
        'expireMonth': value.expireMonth,
        'expireYear': value.expireYear,
        'bin': value.bin,
    };
}
