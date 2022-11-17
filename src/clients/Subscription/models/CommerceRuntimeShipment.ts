/* tslint:disable */
/* eslint-disable */
/**
 * Kibo SubscriptionRuntime Service
 * OpenAPI Spec for Kibo SubscriptionRuntime Service
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AdminUserAuditInfo } from './AdminUserAuditInfo';
import {
    AdminUserAuditInfoFromJSON,
    AdminUserAuditInfoFromJSONTyped,
    AdminUserAuditInfoToJSON,
} from './AdminUserAuditInfo';
import type { CommerceRuntimeCanceledItem } from './CommerceRuntimeCanceledItem';
import {
    CommerceRuntimeCanceledItemFromJSON,
    CommerceRuntimeCanceledItemFromJSONTyped,
    CommerceRuntimeCanceledItemToJSON,
} from './CommerceRuntimeCanceledItem';
import type { CommerceRuntimeChangeMessage } from './CommerceRuntimeChangeMessage';
import {
    CommerceRuntimeChangeMessageFromJSON,
    CommerceRuntimeChangeMessageFromJSONTyped,
    CommerceRuntimeChangeMessageToJSON,
} from './CommerceRuntimeChangeMessage';
import type { CommerceRuntimeContact } from './CommerceRuntimeContact';
import {
    CommerceRuntimeContactFromJSON,
    CommerceRuntimeContactFromJSONTyped,
    CommerceRuntimeContactToJSON,
} from './CommerceRuntimeContact';
import type { CommerceRuntimeCustomer } from './CommerceRuntimeCustomer';
import {
    CommerceRuntimeCustomerFromJSON,
    CommerceRuntimeCustomerFromJSONTyped,
    CommerceRuntimeCustomerToJSON,
} from './CommerceRuntimeCustomer';
import type { CommerceRuntimeDestination } from './CommerceRuntimeDestination';
import {
    CommerceRuntimeDestinationFromJSON,
    CommerceRuntimeDestinationFromJSONTyped,
    CommerceRuntimeDestinationToJSON,
} from './CommerceRuntimeDestination';
import type { CommerceRuntimeFulfillmentShopperNotes } from './CommerceRuntimeFulfillmentShopperNotes';
import {
    CommerceRuntimeFulfillmentShopperNotesFromJSON,
    CommerceRuntimeFulfillmentShopperNotesFromJSONTyped,
    CommerceRuntimeFulfillmentShopperNotesToJSON,
} from './CommerceRuntimeFulfillmentShopperNotes';
import type { CommerceRuntimePackage } from './CommerceRuntimePackage';
import {
    CommerceRuntimePackageFromJSON,
    CommerceRuntimePackageFromJSONTyped,
    CommerceRuntimePackageToJSON,
} from './CommerceRuntimePackage';
import type { CommerceRuntimeShipmentNote } from './CommerceRuntimeShipmentNote';
import {
    CommerceRuntimeShipmentNoteFromJSON,
    CommerceRuntimeShipmentNoteFromJSONTyped,
    CommerceRuntimeShipmentNoteToJSON,
} from './CommerceRuntimeShipmentNote';
import type { CommerceRuntimeShipmentStatusReason } from './CommerceRuntimeShipmentStatusReason';
import {
    CommerceRuntimeShipmentStatusReasonFromJSON,
    CommerceRuntimeShipmentStatusReasonFromJSONTyped,
    CommerceRuntimeShipmentStatusReasonToJSON,
} from './CommerceRuntimeShipmentStatusReason';
import type { CommerceRuntimeWorkflowState } from './CommerceRuntimeWorkflowState';
import {
    CommerceRuntimeWorkflowStateFromJSON,
    CommerceRuntimeWorkflowStateFromJSONTyped,
    CommerceRuntimeWorkflowStateToJSON,
} from './CommerceRuntimeWorkflowState';
import type { FulfillmentAlternateContact } from './FulfillmentAlternateContact';
import {
    FulfillmentAlternateContactFromJSON,
    FulfillmentAlternateContactFromJSONTyped,
    FulfillmentAlternateContactToJSON,
} from './FulfillmentAlternateContact';
import type { ShipmentItem } from './ShipmentItem';
import {
    ShipmentItemFromJSON,
    ShipmentItemFromJSONTyped,
    ShipmentItemToJSON,
} from './ShipmentItem';

/**
 * 
 * @export
 * @interface CommerceRuntimeShipment
 */
export interface CommerceRuntimeShipment {
    /**
     * ID of the shipment
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    externalShipmentId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    number?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    orderId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    orderNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    customerAccountId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    readonly customerTaxId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    shipmentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    shippingMethodCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    shippingMethodName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    fulfillmentLocationCode?: string | null;
    /**
     * 
     * @type {CommerceRuntimeContact}
     * @memberof CommerceRuntimeShipment
     */
    origin?: CommerceRuntimeContact;
    /**
     * 
     * @type {CommerceRuntimeDestination}
     * @memberof CommerceRuntimeShipment
     */
    destination?: CommerceRuntimeDestination;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    shipmentStatus?: string | null;
    /**
     * 
     * @type {CommerceRuntimeShipmentStatusReason}
     * @memberof CommerceRuntimeShipment
     */
    shipmentStatusReason?: CommerceRuntimeShipmentStatusReason;
    /**
     * 
     * @type {Array<number>}
     * @memberof CommerceRuntimeShipment
     */
    transferShipmentNumbers?: Array<number> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeShipment
     */
    isTransfer?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    originalShipmentNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    parentCheckoutNumber?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    parentShipmentNumber?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    fulfillmentStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    workflowProcessId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    workflowProcessContainerId?: string | null;
    /**
     * 
     * @type {CommerceRuntimeWorkflowState}
     * @memberof CommerceRuntimeShipment
     */
    workflowState?: CommerceRuntimeWorkflowState;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    backorderCreatedDate?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof CommerceRuntimeShipment
     */
    fulfillmentDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CommerceRuntimeShipment
     */
    futureDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CommerceRuntimeShipment
     */
    orderSubmitDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    pickStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    pickType?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeChangeMessage>}
     * @memberof CommerceRuntimeShipment
     */
    changeMessages?: Array<CommerceRuntimeChangeMessage> | null;
    /**
     * 
     * @type {Array<CommerceRuntimePackage>}
     * @memberof CommerceRuntimeShipment
     */
    packages?: Array<CommerceRuntimePackage> | null;
    /**
     * 
     * @type {Array<ShipmentItem>}
     * @memberof CommerceRuntimeShipment
     */
    items?: Array<ShipmentItem> | null;
    /**
     * 
     * @type {Array<CommerceRuntimeCanceledItem>}
     * @memberof CommerceRuntimeShipment
     */
    canceledItems?: Array<CommerceRuntimeCanceledItem> | null;
    /**
     * 
     * @type {object}
     * @memberof CommerceRuntimeShipment
     */
    data?: object | null;
    /**
     * 
     * @type {object}
     * @memberof CommerceRuntimeShipment
     */
    taxData?: object | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeShipment
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shipmentAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    lineItemSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    lineItemTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    lineItemTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    lineItemTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shippingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shippingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shippingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shippingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    shippingTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    handlingAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    handlingSubtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    handlingTaxAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    handlingTaxTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    handlingTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    dutyAdjustment?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    dutyTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeShipment
     */
    cost?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeShipment
     */
    externalOrderId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeShipment
     */
    isExpress?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeShipment
     */
    readyToCapture?: boolean;
    /**
     * 
     * @type {object}
     * @memberof CommerceRuntimeShipment
     */
    pickupInfo?: object | null;
    /**
     * 
     * @type {CommerceRuntimeFulfillmentShopperNotes}
     * @memberof CommerceRuntimeShipment
     */
    shopperNotes?: CommerceRuntimeFulfillmentShopperNotes;
    /**
     * 
     * @type {CommerceRuntimeCustomer}
     * @memberof CommerceRuntimeShipment
     */
    customer?: CommerceRuntimeCustomer;
    /**
     * 
     * @type {Array<CommerceRuntimeShipmentNote>}
     * @memberof CommerceRuntimeShipment
     */
    shipmentNotes?: Array<CommerceRuntimeShipmentNote> | null;
    /**
     * 
     * @type {FulfillmentAlternateContact}
     * @memberof CommerceRuntimeShipment
     */
    alternateContact?: FulfillmentAlternateContact;
}

/**
 * Check if a given object implements the CommerceRuntimeShipment interface.
 */
export function instanceOfCommerceRuntimeShipment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommerceRuntimeShipmentFromJSON(json: any): CommerceRuntimeShipment {
    return CommerceRuntimeShipmentFromJSONTyped(json, false);
}

export function CommerceRuntimeShipmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeShipment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'externalShipmentId': !exists(json, 'externalShipmentId') ? undefined : json['externalShipmentId'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'orderId': !exists(json, 'orderId') ? undefined : json['orderId'],
        'orderNumber': !exists(json, 'orderNumber') ? undefined : json['orderNumber'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'customerAccountId': !exists(json, 'customerAccountId') ? undefined : json['customerAccountId'],
        'customerTaxId': !exists(json, 'customerTaxId') ? undefined : json['customerTaxId'],
        'shipmentType': !exists(json, 'shipmentType') ? undefined : json['shipmentType'],
        'shippingMethodCode': !exists(json, 'shippingMethodCode') ? undefined : json['shippingMethodCode'],
        'shippingMethodName': !exists(json, 'shippingMethodName') ? undefined : json['shippingMethodName'],
        'fulfillmentLocationCode': !exists(json, 'fulfillmentLocationCode') ? undefined : json['fulfillmentLocationCode'],
        'origin': !exists(json, 'origin') ? undefined : CommerceRuntimeContactFromJSON(json['origin']),
        'destination': !exists(json, 'destination') ? undefined : CommerceRuntimeDestinationFromJSON(json['destination']),
        'shipmentStatus': !exists(json, 'shipmentStatus') ? undefined : json['shipmentStatus'],
        'shipmentStatusReason': !exists(json, 'shipmentStatusReason') ? undefined : CommerceRuntimeShipmentStatusReasonFromJSON(json['shipmentStatusReason']),
        'transferShipmentNumbers': !exists(json, 'transferShipmentNumbers') ? undefined : json['transferShipmentNumbers'],
        'isTransfer': !exists(json, 'isTransfer') ? undefined : json['isTransfer'],
        'originalShipmentNumber': !exists(json, 'originalShipmentNumber') ? undefined : json['originalShipmentNumber'],
        'parentCheckoutNumber': !exists(json, 'parentCheckoutNumber') ? undefined : json['parentCheckoutNumber'],
        'parentShipmentNumber': !exists(json, 'parentShipmentNumber') ? undefined : json['parentShipmentNumber'],
        'fulfillmentStatus': !exists(json, 'fulfillmentStatus') ? undefined : json['fulfillmentStatus'],
        'workflowProcessId': !exists(json, 'workflowProcessId') ? undefined : json['workflowProcessId'],
        'workflowProcessContainerId': !exists(json, 'workflowProcessContainerId') ? undefined : json['workflowProcessContainerId'],
        'workflowState': !exists(json, 'workflowState') ? undefined : CommerceRuntimeWorkflowStateFromJSON(json['workflowState']),
        'backorderCreatedDate': !exists(json, 'backorderCreatedDate') ? undefined : json['backorderCreatedDate'],
        'fulfillmentDate': !exists(json, 'fulfillmentDate') ? undefined : (json['fulfillmentDate'] === null ? null : new Date(json['fulfillmentDate'])),
        'futureDate': !exists(json, 'futureDate') ? undefined : (json['futureDate'] === null ? null : new Date(json['futureDate'])),
        'orderSubmitDate': !exists(json, 'orderSubmitDate') ? undefined : (json['orderSubmitDate'] === null ? null : new Date(json['orderSubmitDate'])),
        'pickStatus': !exists(json, 'pickStatus') ? undefined : json['pickStatus'],
        'pickType': !exists(json, 'pickType') ? undefined : json['pickType'],
        'changeMessages': !exists(json, 'changeMessages') ? undefined : (json['changeMessages'] === null ? null : (json['changeMessages'] as Array<any>).map(CommerceRuntimeChangeMessageFromJSON)),
        'packages': !exists(json, 'packages') ? undefined : (json['packages'] === null ? null : (json['packages'] as Array<any>).map(CommerceRuntimePackageFromJSON)),
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(ShipmentItemFromJSON)),
        'canceledItems': !exists(json, 'canceledItems') ? undefined : (json['canceledItems'] === null ? null : (json['canceledItems'] as Array<any>).map(CommerceRuntimeCanceledItemFromJSON)),
        'data': !exists(json, 'data') ? undefined : json['data'],
        'taxData': !exists(json, 'taxData') ? undefined : json['taxData'],
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AdminUserAuditInfoFromJSON(json['auditInfo']),
        'shipmentAdjustment': !exists(json, 'shipmentAdjustment') ? undefined : json['shipmentAdjustment'],
        'lineItemSubtotal': !exists(json, 'lineItemSubtotal') ? undefined : json['lineItemSubtotal'],
        'lineItemTaxAdjustment': !exists(json, 'lineItemTaxAdjustment') ? undefined : json['lineItemTaxAdjustment'],
        'lineItemTaxTotal': !exists(json, 'lineItemTaxTotal') ? undefined : json['lineItemTaxTotal'],
        'lineItemTotal': !exists(json, 'lineItemTotal') ? undefined : json['lineItemTotal'],
        'shippingAdjustment': !exists(json, 'shippingAdjustment') ? undefined : json['shippingAdjustment'],
        'shippingSubtotal': !exists(json, 'shippingSubtotal') ? undefined : json['shippingSubtotal'],
        'shippingTaxAdjustment': !exists(json, 'shippingTaxAdjustment') ? undefined : json['shippingTaxAdjustment'],
        'shippingTaxTotal': !exists(json, 'shippingTaxTotal') ? undefined : json['shippingTaxTotal'],
        'shippingTotal': !exists(json, 'shippingTotal') ? undefined : json['shippingTotal'],
        'handlingAdjustment': !exists(json, 'handlingAdjustment') ? undefined : json['handlingAdjustment'],
        'handlingSubtotal': !exists(json, 'handlingSubtotal') ? undefined : json['handlingSubtotal'],
        'handlingTaxAdjustment': !exists(json, 'handlingTaxAdjustment') ? undefined : json['handlingTaxAdjustment'],
        'handlingTaxTotal': !exists(json, 'handlingTaxTotal') ? undefined : json['handlingTaxTotal'],
        'handlingTotal': !exists(json, 'handlingTotal') ? undefined : json['handlingTotal'],
        'dutyAdjustment': !exists(json, 'dutyAdjustment') ? undefined : json['dutyAdjustment'],
        'dutyTotal': !exists(json, 'dutyTotal') ? undefined : json['dutyTotal'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
        'externalOrderId': !exists(json, 'externalOrderId') ? undefined : json['externalOrderId'],
        'isExpress': !exists(json, 'isExpress') ? undefined : json['isExpress'],
        'readyToCapture': !exists(json, 'readyToCapture') ? undefined : json['readyToCapture'],
        'pickupInfo': !exists(json, 'pickupInfo') ? undefined : json['pickupInfo'],
        'shopperNotes': !exists(json, 'shopperNotes') ? undefined : CommerceRuntimeFulfillmentShopperNotesFromJSON(json['shopperNotes']),
        'customer': !exists(json, 'customer') ? undefined : CommerceRuntimeCustomerFromJSON(json['customer']),
        'shipmentNotes': !exists(json, 'shipmentNotes') ? undefined : (json['shipmentNotes'] === null ? null : (json['shipmentNotes'] as Array<any>).map(CommerceRuntimeShipmentNoteFromJSON)),
        'alternateContact': !exists(json, 'alternateContact') ? undefined : FulfillmentAlternateContactFromJSON(json['alternateContact']),
    };
}

export function CommerceRuntimeShipmentToJSON(value?: CommerceRuntimeShipment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'externalShipmentId': value.externalShipmentId,
        'number': value.number,
        'orderId': value.orderId,
        'orderNumber': value.orderNumber,
        'email': value.email,
        'currencyCode': value.currencyCode,
        'customerAccountId': value.customerAccountId,
        'shipmentType': value.shipmentType,
        'shippingMethodCode': value.shippingMethodCode,
        'shippingMethodName': value.shippingMethodName,
        'fulfillmentLocationCode': value.fulfillmentLocationCode,
        'origin': CommerceRuntimeContactToJSON(value.origin),
        'destination': CommerceRuntimeDestinationToJSON(value.destination),
        'shipmentStatus': value.shipmentStatus,
        'shipmentStatusReason': CommerceRuntimeShipmentStatusReasonToJSON(value.shipmentStatusReason),
        'transferShipmentNumbers': value.transferShipmentNumbers,
        'isTransfer': value.isTransfer,
        'originalShipmentNumber': value.originalShipmentNumber,
        'parentCheckoutNumber': value.parentCheckoutNumber,
        'parentShipmentNumber': value.parentShipmentNumber,
        'fulfillmentStatus': value.fulfillmentStatus,
        'workflowProcessId': value.workflowProcessId,
        'workflowProcessContainerId': value.workflowProcessContainerId,
        'workflowState': CommerceRuntimeWorkflowStateToJSON(value.workflowState),
        'backorderCreatedDate': value.backorderCreatedDate,
        'fulfillmentDate': value.fulfillmentDate === undefined ? undefined : (value.fulfillmentDate === null ? null : value.fulfillmentDate.toISOString()),
        'futureDate': value.futureDate === undefined ? undefined : (value.futureDate === null ? null : value.futureDate.toISOString()),
        'orderSubmitDate': value.orderSubmitDate === undefined ? undefined : (value.orderSubmitDate === null ? null : value.orderSubmitDate.toISOString()),
        'pickStatus': value.pickStatus,
        'pickType': value.pickType,
        'changeMessages': value.changeMessages === undefined ? undefined : (value.changeMessages === null ? null : (value.changeMessages as Array<any>).map(CommerceRuntimeChangeMessageToJSON)),
        'packages': value.packages === undefined ? undefined : (value.packages === null ? null : (value.packages as Array<any>).map(CommerceRuntimePackageToJSON)),
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(ShipmentItemToJSON)),
        'canceledItems': value.canceledItems === undefined ? undefined : (value.canceledItems === null ? null : (value.canceledItems as Array<any>).map(CommerceRuntimeCanceledItemToJSON)),
        'data': value.data,
        'taxData': value.taxData,
        'auditInfo': AdminUserAuditInfoToJSON(value.auditInfo),
        'shipmentAdjustment': value.shipmentAdjustment,
        'lineItemSubtotal': value.lineItemSubtotal,
        'lineItemTaxAdjustment': value.lineItemTaxAdjustment,
        'lineItemTaxTotal': value.lineItemTaxTotal,
        'lineItemTotal': value.lineItemTotal,
        'shippingAdjustment': value.shippingAdjustment,
        'shippingSubtotal': value.shippingSubtotal,
        'shippingTaxAdjustment': value.shippingTaxAdjustment,
        'shippingTaxTotal': value.shippingTaxTotal,
        'shippingTotal': value.shippingTotal,
        'handlingAdjustment': value.handlingAdjustment,
        'handlingSubtotal': value.handlingSubtotal,
        'handlingTaxAdjustment': value.handlingTaxAdjustment,
        'handlingTaxTotal': value.handlingTaxTotal,
        'handlingTotal': value.handlingTotal,
        'dutyAdjustment': value.dutyAdjustment,
        'dutyTotal': value.dutyTotal,
        'total': value.total,
        'cost': value.cost,
        'externalOrderId': value.externalOrderId,
        'isExpress': value.isExpress,
        'readyToCapture': value.readyToCapture,
        'pickupInfo': value.pickupInfo,
        'shopperNotes': CommerceRuntimeFulfillmentShopperNotesToJSON(value.shopperNotes),
        'customer': CommerceRuntimeCustomerToJSON(value.customer),
        'shipmentNotes': value.shipmentNotes === undefined ? undefined : (value.shipmentNotes === null ? null : (value.shipmentNotes as Array<any>).map(CommerceRuntimeShipmentNoteToJSON)),
        'alternateContact': FulfillmentAlternateContactToJSON(value.alternateContact),
    };
}
