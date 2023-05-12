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
import type { FulfillmentServiceAppeasementReason } from './FulfillmentServiceAppeasementReason';
import {
    FulfillmentServiceAppeasementReasonFromJSON,
    FulfillmentServiceAppeasementReasonFromJSONTyped,
    FulfillmentServiceAppeasementReasonToJSON,
} from './FulfillmentServiceAppeasementReason';
import type { FulfillmentServiceAuditInfo } from './FulfillmentServiceAuditInfo';
import {
    FulfillmentServiceAuditInfoFromJSON,
    FulfillmentServiceAuditInfoFromJSONTyped,
    FulfillmentServiceAuditInfoToJSON,
} from './FulfillmentServiceAuditInfo';
import type { FulfillmentServiceFulfillmentField } from './FulfillmentServiceFulfillmentField';
import {
    FulfillmentServiceFulfillmentFieldFromJSON,
    FulfillmentServiceFulfillmentFieldFromJSONTyped,
    FulfillmentServiceFulfillmentFieldToJSON,
} from './FulfillmentServiceFulfillmentField';
import type { FulfillmentServiceGiftCard } from './FulfillmentServiceGiftCard';
import {
    FulfillmentServiceGiftCardFromJSON,
    FulfillmentServiceGiftCardFromJSONTyped,
    FulfillmentServiceGiftCardToJSON,
} from './FulfillmentServiceGiftCard';
import type { FulfillmentServiceInventoryTag } from './FulfillmentServiceInventoryTag';
import {
    FulfillmentServiceInventoryTagFromJSON,
    FulfillmentServiceInventoryTagFromJSONTyped,
    FulfillmentServiceInventoryTagToJSON,
} from './FulfillmentServiceInventoryTag';
import type { FulfillmentServiceProductOption } from './FulfillmentServiceProductOption';
import {
    FulfillmentServiceProductOptionFromJSON,
    FulfillmentServiceProductOptionFromJSONTyped,
    FulfillmentServiceProductOptionToJSON,
} from './FulfillmentServiceProductOption';
import type { FulfillmentServiceSubstituteReason } from './FulfillmentServiceSubstituteReason';
import {
    FulfillmentServiceSubstituteReasonFromJSON,
    FulfillmentServiceSubstituteReasonFromJSONTyped,
    FulfillmentServiceSubstituteReasonToJSON,
} from './FulfillmentServiceSubstituteReason';

/**
 * 
 * @export
 * @interface SubstitutedItem
 */
export interface SubstitutedItem {
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    actualPrice?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    allocatedQuantity?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    allowsBackOrder?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    allowsFutureAllocate?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    allowsSubstitution?: boolean | null;
    /**
     * 
     * @type {FulfillmentServiceAppeasementReason}
     * @memberof SubstitutedItem
     */
    appeasementReason?: FulfillmentServiceAppeasementReason;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SubstitutedItem
     */
    attributes?: { [key: string]: any; } | null;
    /**
     * 
     * @type {FulfillmentServiceAuditInfo}
     * @memberof SubstitutedItem
     */
    auditInfo?: FulfillmentServiceAuditInfo;
    /**
     * 
     * @type {Date}
     * @memberof SubstitutedItem
     */
    backorderReleaseDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    cartItemId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof SubstitutedItem
     */
    childItemIds?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    creditCurrencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    creditValue?: number | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SubstitutedItem
     */
    data?: { [key: string]: any; } | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    duty?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof SubstitutedItem
     */
    expectedDeliveryDate?: Date | null;
    /**
     * 
     * @type {Array<FulfillmentServiceFulfillmentField>}
     * @memberof SubstitutedItem
     */
    fulfillmentFields?: Array<FulfillmentServiceFulfillmentField> | null;
    /**
     * 
     * @type {Array<FulfillmentServiceGiftCard>}
     * @memberof SubstitutedItem
     */
    giftCards?: Array<FulfillmentServiceGiftCard> | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    goodsType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    handling?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    handlingDiscount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    handlingTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    height?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    imageUrl?: string | null;
    /**
     * 
     * @type {Array<FulfillmentServiceInventoryTag>}
     * @memberof SubstitutedItem
     */
    inventoryTags?: Array<FulfillmentServiceInventoryTag> | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    isAssemblyRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    isPackagedStandAlone?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    isReservedInventory?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    isTaxable?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    itemDiscount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    itemTax?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    length?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    lineId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    lineItemAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    lineItemCost?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    locatorName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SubstitutedItem
     */
    manageStock?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    optionAttributeFQN?: string | null;
    /**
     * 
     * @type {Array<FulfillmentServiceProductOption>}
     * @memberof SubstitutedItem
     */
    options?: Array<FulfillmentServiceProductOption> | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    originalLineId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    originalOrderItemId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    originalQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    overridePrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    parentItemId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    partNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    productCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    quantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    readyForPickupQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    shipping?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    shippingDiscount?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    shippingTax?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    sku?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof SubstitutedItem
     */
    substituteItemLineIds?: Array<number> | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    substituteQuantity?: number | null;
    /**
     * 
     * @type {FulfillmentServiceSubstituteReason}
     * @memberof SubstitutedItem
     */
    substituteReason?: FulfillmentServiceSubstituteReason;
    /**
     * 
     * @type {any}
     * @memberof SubstitutedItem
     */
    taxData?: any | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    taxableHandling?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    taxableLineItemCost?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    taxableShipping?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    transferQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    trueTransferQuantity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    unitPrice?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    upc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    variationProductCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weight?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubstitutedItem
     */
    weightUnit?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedDutyAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedHandlingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedHandlingTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedLineItemTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedShipmentAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedShippingAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    weightedShippingTaxAdjustment?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubstitutedItem
     */
    width?: number | null;
}

/**
 * Check if a given object implements the SubstitutedItem interface.
 */
export function instanceOfSubstitutedItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubstitutedItemFromJSON(json: any): SubstitutedItem {
    return SubstitutedItemFromJSONTyped(json, false);
}

export function SubstitutedItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubstitutedItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actualPrice': !exists(json, 'actualPrice') ? undefined : json['actualPrice'],
        'allocatedQuantity': !exists(json, 'allocatedQuantity') ? undefined : json['allocatedQuantity'],
        'allowsBackOrder': !exists(json, 'allowsBackOrder') ? undefined : json['allowsBackOrder'],
        'allowsFutureAllocate': !exists(json, 'allowsFutureAllocate') ? undefined : json['allowsFutureAllocate'],
        'allowsSubstitution': !exists(json, 'allowsSubstitution') ? undefined : json['allowsSubstitution'],
        'appeasementReason': !exists(json, 'appeasementReason') ? undefined : FulfillmentServiceAppeasementReasonFromJSON(json['appeasementReason']),
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : FulfillmentServiceAuditInfoFromJSON(json['auditInfo']),
        'backorderReleaseDate': !exists(json, 'backorderReleaseDate') ? undefined : (json['backorderReleaseDate'] === null ? null : new Date(json['backorderReleaseDate'])),
        'cartItemId': !exists(json, 'cartItemId') ? undefined : json['cartItemId'],
        'childItemIds': !exists(json, 'childItemIds') ? undefined : json['childItemIds'],
        'creditCurrencyCode': !exists(json, 'creditCurrencyCode') ? undefined : json['creditCurrencyCode'],
        'creditValue': !exists(json, 'creditValue') ? undefined : json['creditValue'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'duty': !exists(json, 'duty') ? undefined : json['duty'],
        'expectedDeliveryDate': !exists(json, 'expectedDeliveryDate') ? undefined : (json['expectedDeliveryDate'] === null ? null : new Date(json['expectedDeliveryDate'])),
        'fulfillmentFields': !exists(json, 'fulfillmentFields') ? undefined : (json['fulfillmentFields'] === null ? null : (json['fulfillmentFields'] as Array<any>).map(FulfillmentServiceFulfillmentFieldFromJSON)),
        'giftCards': !exists(json, 'giftCards') ? undefined : (json['giftCards'] === null ? null : (json['giftCards'] as Array<any>).map(FulfillmentServiceGiftCardFromJSON)),
        'goodsType': !exists(json, 'goodsType') ? undefined : json['goodsType'],
        'handling': !exists(json, 'handling') ? undefined : json['handling'],
        'handlingDiscount': !exists(json, 'handlingDiscount') ? undefined : json['handlingDiscount'],
        'handlingTax': !exists(json, 'handlingTax') ? undefined : json['handlingTax'],
        'height': !exists(json, 'height') ? undefined : json['height'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'inventoryTags': !exists(json, 'inventoryTags') ? undefined : (json['inventoryTags'] === null ? null : (json['inventoryTags'] as Array<any>).map(FulfillmentServiceInventoryTagFromJSON)),
        'isAssemblyRequired': !exists(json, 'isAssemblyRequired') ? undefined : json['isAssemblyRequired'],
        'isPackagedStandAlone': !exists(json, 'isPackagedStandAlone') ? undefined : json['isPackagedStandAlone'],
        'isReservedInventory': !exists(json, 'isReservedInventory') ? undefined : json['isReservedInventory'],
        'isTaxable': !exists(json, 'isTaxable') ? undefined : json['isTaxable'],
        'itemDiscount': !exists(json, 'itemDiscount') ? undefined : json['itemDiscount'],
        'itemTax': !exists(json, 'itemTax') ? undefined : json['itemTax'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'lineId': !exists(json, 'lineId') ? undefined : json['lineId'],
        'lineItemAdjustment': !exists(json, 'lineItemAdjustment') ? undefined : json['lineItemAdjustment'],
        'lineItemCost': !exists(json, 'lineItemCost') ? undefined : json['lineItemCost'],
        'locatorName': !exists(json, 'locatorName') ? undefined : json['locatorName'],
        'manageStock': !exists(json, 'manageStock') ? undefined : json['manageStock'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'optionAttributeFQN': !exists(json, 'optionAttributeFQN') ? undefined : json['optionAttributeFQN'],
        'options': !exists(json, 'options') ? undefined : (json['options'] === null ? null : (json['options'] as Array<any>).map(FulfillmentServiceProductOptionFromJSON)),
        'originalLineId': !exists(json, 'originalLineId') ? undefined : json['originalLineId'],
        'originalOrderItemId': !exists(json, 'originalOrderItemId') ? undefined : json['originalOrderItemId'],
        'originalQuantity': !exists(json, 'originalQuantity') ? undefined : json['originalQuantity'],
        'overridePrice': !exists(json, 'overridePrice') ? undefined : json['overridePrice'],
        'parentItemId': !exists(json, 'parentItemId') ? undefined : json['parentItemId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'readyForPickupQuantity': !exists(json, 'readyForPickupQuantity') ? undefined : json['readyForPickupQuantity'],
        'shipping': !exists(json, 'shipping') ? undefined : json['shipping'],
        'shippingDiscount': !exists(json, 'shippingDiscount') ? undefined : json['shippingDiscount'],
        'shippingTax': !exists(json, 'shippingTax') ? undefined : json['shippingTax'],
        'sku': !exists(json, 'sku') ? undefined : json['sku'],
        'substituteItemLineIds': !exists(json, 'substituteItemLineIds') ? undefined : json['substituteItemLineIds'],
        'substituteQuantity': !exists(json, 'substituteQuantity') ? undefined : json['substituteQuantity'],
        'substituteReason': !exists(json, 'substituteReason') ? undefined : FulfillmentServiceSubstituteReasonFromJSON(json['substituteReason']),
        'taxData': !exists(json, 'taxData') ? undefined : json['taxData'],
        'taxableHandling': !exists(json, 'taxableHandling') ? undefined : json['taxableHandling'],
        'taxableLineItemCost': !exists(json, 'taxableLineItemCost') ? undefined : json['taxableLineItemCost'],
        'taxableShipping': !exists(json, 'taxableShipping') ? undefined : json['taxableShipping'],
        'transferQuantity': !exists(json, 'transferQuantity') ? undefined : json['transferQuantity'],
        'trueTransferQuantity': !exists(json, 'trueTransferQuantity') ? undefined : json['trueTransferQuantity'],
        'unitPrice': !exists(json, 'unitPrice') ? undefined : json['unitPrice'],
        'upc': !exists(json, 'upc') ? undefined : json['upc'],
        'variationProductCode': !exists(json, 'variationProductCode') ? undefined : json['variationProductCode'],
        'weight': !exists(json, 'weight') ? undefined : json['weight'],
        'weightUnit': !exists(json, 'weightUnit') ? undefined : json['weightUnit'],
        'weightedDutyAdjustment': !exists(json, 'weightedDutyAdjustment') ? undefined : json['weightedDutyAdjustment'],
        'weightedHandlingAdjustment': !exists(json, 'weightedHandlingAdjustment') ? undefined : json['weightedHandlingAdjustment'],
        'weightedHandlingTaxAdjustment': !exists(json, 'weightedHandlingTaxAdjustment') ? undefined : json['weightedHandlingTaxAdjustment'],
        'weightedLineItemTaxAdjustment': !exists(json, 'weightedLineItemTaxAdjustment') ? undefined : json['weightedLineItemTaxAdjustment'],
        'weightedShipmentAdjustment': !exists(json, 'weightedShipmentAdjustment') ? undefined : json['weightedShipmentAdjustment'],
        'weightedShippingAdjustment': !exists(json, 'weightedShippingAdjustment') ? undefined : json['weightedShippingAdjustment'],
        'weightedShippingTaxAdjustment': !exists(json, 'weightedShippingTaxAdjustment') ? undefined : json['weightedShippingTaxAdjustment'],
        'width': !exists(json, 'width') ? undefined : json['width'],
    };
}

export function SubstitutedItemToJSON(value?: SubstitutedItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actualPrice': value.actualPrice,
        'allocatedQuantity': value.allocatedQuantity,
        'allowsBackOrder': value.allowsBackOrder,
        'allowsFutureAllocate': value.allowsFutureAllocate,
        'allowsSubstitution': value.allowsSubstitution,
        'appeasementReason': FulfillmentServiceAppeasementReasonToJSON(value.appeasementReason),
        'attributes': value.attributes,
        'auditInfo': FulfillmentServiceAuditInfoToJSON(value.auditInfo),
        'backorderReleaseDate': value.backorderReleaseDate === undefined ? undefined : (value.backorderReleaseDate === null ? null : value.backorderReleaseDate.toISOString()),
        'cartItemId': value.cartItemId,
        'childItemIds': value.childItemIds,
        'creditCurrencyCode': value.creditCurrencyCode,
        'creditValue': value.creditValue,
        'data': value.data,
        'duty': value.duty,
        'expectedDeliveryDate': value.expectedDeliveryDate === undefined ? undefined : (value.expectedDeliveryDate === null ? null : value.expectedDeliveryDate.toISOString()),
        'fulfillmentFields': value.fulfillmentFields === undefined ? undefined : (value.fulfillmentFields === null ? null : (value.fulfillmentFields as Array<any>).map(FulfillmentServiceFulfillmentFieldToJSON)),
        'giftCards': value.giftCards === undefined ? undefined : (value.giftCards === null ? null : (value.giftCards as Array<any>).map(FulfillmentServiceGiftCardToJSON)),
        'goodsType': value.goodsType,
        'handling': value.handling,
        'handlingDiscount': value.handlingDiscount,
        'handlingTax': value.handlingTax,
        'height': value.height,
        'imageUrl': value.imageUrl,
        'inventoryTags': value.inventoryTags === undefined ? undefined : (value.inventoryTags === null ? null : (value.inventoryTags as Array<any>).map(FulfillmentServiceInventoryTagToJSON)),
        'isAssemblyRequired': value.isAssemblyRequired,
        'isPackagedStandAlone': value.isPackagedStandAlone,
        'isReservedInventory': value.isReservedInventory,
        'isTaxable': value.isTaxable,
        'itemDiscount': value.itemDiscount,
        'itemTax': value.itemTax,
        'length': value.length,
        'lineId': value.lineId,
        'lineItemAdjustment': value.lineItemAdjustment,
        'lineItemCost': value.lineItemCost,
        'locatorName': value.locatorName,
        'manageStock': value.manageStock,
        'name': value.name,
        'optionAttributeFQN': value.optionAttributeFQN,
        'options': value.options === undefined ? undefined : (value.options === null ? null : (value.options as Array<any>).map(FulfillmentServiceProductOptionToJSON)),
        'originalLineId': value.originalLineId,
        'originalOrderItemId': value.originalOrderItemId,
        'originalQuantity': value.originalQuantity,
        'overridePrice': value.overridePrice,
        'parentItemId': value.parentItemId,
        'partNumber': value.partNumber,
        'productCode': value.productCode,
        'quantity': value.quantity,
        'readyForPickupQuantity': value.readyForPickupQuantity,
        'shipping': value.shipping,
        'shippingDiscount': value.shippingDiscount,
        'shippingTax': value.shippingTax,
        'sku': value.sku,
        'substituteItemLineIds': value.substituteItemLineIds,
        'substituteQuantity': value.substituteQuantity,
        'substituteReason': FulfillmentServiceSubstituteReasonToJSON(value.substituteReason),
        'taxData': value.taxData,
        'taxableHandling': value.taxableHandling,
        'taxableLineItemCost': value.taxableLineItemCost,
        'taxableShipping': value.taxableShipping,
        'transferQuantity': value.transferQuantity,
        'trueTransferQuantity': value.trueTransferQuantity,
        'unitPrice': value.unitPrice,
        'upc': value.upc,
        'variationProductCode': value.variationProductCode,
        'weight': value.weight,
        'weightUnit': value.weightUnit,
        'weightedDutyAdjustment': value.weightedDutyAdjustment,
        'weightedHandlingAdjustment': value.weightedHandlingAdjustment,
        'weightedHandlingTaxAdjustment': value.weightedHandlingTaxAdjustment,
        'weightedLineItemTaxAdjustment': value.weightedLineItemTaxAdjustment,
        'weightedShipmentAdjustment': value.weightedShipmentAdjustment,
        'weightedShippingAdjustment': value.weightedShippingAdjustment,
        'weightedShippingTaxAdjustment': value.weightedShippingTaxAdjustment,
        'width': value.width,
    };
}

