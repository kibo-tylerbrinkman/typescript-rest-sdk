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

import { exists, mapValues } from '../runtime';
import type { ExclusionListEntryLocationCode } from './ExclusionListEntryLocationCode';
import {
    ExclusionListEntryLocationCodeFromJSON,
    ExclusionListEntryLocationCodeFromJSONTyped,
    ExclusionListEntryLocationCodeToJSON,
} from './ExclusionListEntryLocationCode';
import type { ExtendedCustomerInfo } from './ExtendedCustomerInfo';
import {
    ExtendedCustomerInfoFromJSON,
    ExtendedCustomerInfoFromJSONTyped,
    ExtendedCustomerInfoToJSON,
} from './ExtendedCustomerInfo';
import type { ExtendedOrderInfo } from './ExtendedOrderInfo';
import {
    ExtendedOrderInfoFromJSON,
    ExtendedOrderInfoFromJSONTyped,
    ExtendedOrderInfoToJSON,
} from './ExtendedOrderInfo';
import type { OrderItem } from './OrderItem';
import {
    OrderItemFromJSON,
    OrderItemFromJSONTyped,
    OrderItemToJSON,
} from './OrderItem';
import type { ShippingAddress } from './ShippingAddress';
import {
    ShippingAddressFromJSON,
    ShippingAddressFromJSONTyped,
    ShippingAddressToJSON,
} from './ShippingAddress';

/**
 * 
 * @export
 * @interface CandidateSuggestionsRequest
 */
export interface CandidateSuggestionsRequest {
    /**
     * 
     * @type {number}
     * @memberof CandidateSuggestionsRequest
     */
    environmentID?: number;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof CandidateSuggestionsRequest
     */
    exclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
    /**
     * 
     * @type {ExtendedCustomerInfo}
     * @memberof CandidateSuggestionsRequest
     */
    extendedCustomerInfo?: ExtendedCustomerInfo;
    /**
     * 
     * @type {ExtendedOrderInfo}
     * @memberof CandidateSuggestionsRequest
     */
    extendedOrderInfo?: ExtendedOrderInfo;
    /**
     * 
     * @type {Date}
     * @memberof CandidateSuggestionsRequest
     */
    futureDateLimit?: Date;
    /**
     * 
     * @type {Array<ExclusionListEntryLocationCode>}
     * @memberof CandidateSuggestionsRequest
     */
    futureExclusionListLocationCode?: Array<ExclusionListEntryLocationCode>;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    inventoryRequestType?: CandidateSuggestionsRequestInventoryRequestTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CandidateSuggestionsRequest
     */
    isExpress?: boolean;
    /**
     * 
     * @type {Array<OrderItem>}
     * @memberof CandidateSuggestionsRequest
     */
    items?: Array<OrderItem>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CandidateSuggestionsRequest
     */
    locationCodeWhiteList?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    orderType?: CandidateSuggestionsRequestOrderTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof CandidateSuggestionsRequest
     */
    pickupLocationCode?: string;
    /**
     * 
     * @type {ShippingAddress}
     * @memberof CandidateSuggestionsRequest
     */
    shippingAddress?: ShippingAddress;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CandidateSuggestionsRequest
     */
    tags?: { [key: string]: string; };
}


/**
 * @export
 */
export const CandidateSuggestionsRequestInventoryRequestTypeEnum = {
    All: 'ALL',
    Partial: 'PARTIAL',
    Any: 'ANY',
    AllStores: 'ALL_STORES'
} as const;
export type CandidateSuggestionsRequestInventoryRequestTypeEnum = typeof CandidateSuggestionsRequestInventoryRequestTypeEnum[keyof typeof CandidateSuggestionsRequestInventoryRequestTypeEnum];

/**
 * @export
 */
export const CandidateSuggestionsRequestOrderTypeEnum = {
    Directship: 'DIRECTSHIP',
    Transfer: 'TRANSFER',
    SthConsolidated: 'STH_CONSOLIDATED'
} as const;
export type CandidateSuggestionsRequestOrderTypeEnum = typeof CandidateSuggestionsRequestOrderTypeEnum[keyof typeof CandidateSuggestionsRequestOrderTypeEnum];


/**
 * Check if a given object implements the CandidateSuggestionsRequest interface.
 */
export function instanceOfCandidateSuggestionsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CandidateSuggestionsRequestFromJSON(json: any): CandidateSuggestionsRequest {
    return CandidateSuggestionsRequestFromJSONTyped(json, false);
}

export function CandidateSuggestionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CandidateSuggestionsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'environmentID': !exists(json, 'environmentID') ? undefined : json['environmentID'],
        'exclusionListLocationCode': !exists(json, 'exclusionListLocationCode') ? undefined : ((json['exclusionListLocationCode'] as Array<any>).map(ExclusionListEntryLocationCodeFromJSON)),
        'extendedCustomerInfo': !exists(json, 'extendedCustomerInfo') ? undefined : ExtendedCustomerInfoFromJSON(json['extendedCustomerInfo']),
        'extendedOrderInfo': !exists(json, 'extendedOrderInfo') ? undefined : ExtendedOrderInfoFromJSON(json['extendedOrderInfo']),
        'futureDateLimit': !exists(json, 'futureDateLimit') ? undefined : (new Date(json['futureDateLimit'])),
        'futureExclusionListLocationCode': !exists(json, 'futureExclusionListLocationCode') ? undefined : ((json['futureExclusionListLocationCode'] as Array<any>).map(ExclusionListEntryLocationCodeFromJSON)),
        'inventoryRequestType': !exists(json, 'inventoryRequestType') ? undefined : json['inventoryRequestType'],
        'isExpress': !exists(json, 'isExpress') ? undefined : json['isExpress'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(OrderItemFromJSON)),
        'locationCodeWhiteList': !exists(json, 'locationCodeWhiteList') ? undefined : json['locationCodeWhiteList'],
        'orderType': !exists(json, 'orderType') ? undefined : json['orderType'],
        'pickupLocationCode': !exists(json, 'pickupLocationCode') ? undefined : json['pickupLocationCode'],
        'shippingAddress': !exists(json, 'shippingAddress') ? undefined : ShippingAddressFromJSON(json['shippingAddress']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function CandidateSuggestionsRequestToJSON(value?: CandidateSuggestionsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'environmentID': value.environmentID,
        'exclusionListLocationCode': value.exclusionListLocationCode === undefined ? undefined : ((value.exclusionListLocationCode as Array<any>).map(ExclusionListEntryLocationCodeToJSON)),
        'extendedCustomerInfo': ExtendedCustomerInfoToJSON(value.extendedCustomerInfo),
        'extendedOrderInfo': ExtendedOrderInfoToJSON(value.extendedOrderInfo),
        'futureDateLimit': value.futureDateLimit === undefined ? undefined : (value.futureDateLimit.toISOString()),
        'futureExclusionListLocationCode': value.futureExclusionListLocationCode === undefined ? undefined : ((value.futureExclusionListLocationCode as Array<any>).map(ExclusionListEntryLocationCodeToJSON)),
        'inventoryRequestType': value.inventoryRequestType,
        'isExpress': value.isExpress,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(OrderItemToJSON)),
        'locationCodeWhiteList': value.locationCodeWhiteList,
        'orderType': value.orderType,
        'pickupLocationCode': value.pickupLocationCode,
        'shippingAddress': ShippingAddressToJSON(value.shippingAddress),
        'tags': value.tags,
    };
}

