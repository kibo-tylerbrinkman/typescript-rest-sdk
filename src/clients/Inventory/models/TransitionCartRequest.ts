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
import type { TransitionCartItem } from './TransitionCartItem';
import {
    TransitionCartItemFromJSON,
    TransitionCartItemFromJSONTyped,
    TransitionCartItemToJSON,
} from './TransitionCartItem';

/**
 * Request needed for transitioning cart allocations to order/shipment allocations
 * @export
 * @interface TransitionCartRequest
 */
export interface TransitionCartRequest {
    /**
     * list of TransitionCartItem
     * @type {Array<TransitionCartItem>}
     * @memberof TransitionCartRequest
     */
    items: Array<TransitionCartItem>;
    /**
     * Cart ID that we are transitioning the allocation from
     * @type {string}
     * @memberof TransitionCartRequest
     */
    cartID: string;
    /**
     * Order ID for the cart to transition to
     * @type {number}
     * @memberof TransitionCartRequest
     */
    orderID: number;
    /**
     * Location Code
     * @type {string}
     * @memberof TransitionCartRequest
     */
    locationCode?: string;
    /**
     * user id
     * @type {number}
     * @memberof TransitionCartRequest
     */
    userID?: number;
    /**
     * how many results to show per page
     * @type {number}
     * @memberof TransitionCartRequest
     */
    pageSize?: number;
    /**
     * which page to show
     * @type {number}
     * @memberof TransitionCartRequest
     */
    pageNum?: number;
    /**
     * index to sort results by
     * @type {string}
     * @memberof TransitionCartRequest
     */
    sortBy?: string;
}

/**
 * Check if a given object implements the TransitionCartRequest interface.
 */
export function instanceOfTransitionCartRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "cartID" in value;
    isInstance = isInstance && "orderID" in value;

    return isInstance;
}

export function TransitionCartRequestFromJSON(json: any): TransitionCartRequest {
    return TransitionCartRequestFromJSONTyped(json, false);
}

export function TransitionCartRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransitionCartRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(TransitionCartItemFromJSON)),
        'cartID': json['cartID'],
        'orderID': json['orderID'],
        'locationCode': !exists(json, 'locationCode') ? undefined : json['locationCode'],
        'userID': !exists(json, 'userID') ? undefined : json['userID'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageNum': !exists(json, 'pageNum') ? undefined : json['pageNum'],
        'sortBy': !exists(json, 'sortBy') ? undefined : json['sortBy'],
    };
}

export function TransitionCartRequestToJSON(value?: TransitionCartRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(TransitionCartItemToJSON)),
        'cartID': value.cartID,
        'orderID': value.orderID,
        'locationCode': value.locationCode,
        'userID': value.userID,
        'pageSize': value.pageSize,
        'pageNum': value.pageNum,
        'sortBy': value.sortBy,
    };
}

