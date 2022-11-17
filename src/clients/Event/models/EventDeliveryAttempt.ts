/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Event Service
 * OpenAPI Spec for Kibo Event Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HttpStatus } from './HttpStatus';
import {
    HttpStatusFromJSON,
    HttpStatusFromJSONTyped,
    HttpStatusToJSON,
} from './HttpStatus';

/**
 * The external/public Event entity used specifically in PULL/POLL event scenarios
 * @export
 * @interface EventDeliveryAttempt
 */
export interface EventDeliveryAttempt {
    /**
     * Status of the delivery process (EventDeliveryStatusType). System-supplied and read-only.
     * @type {string}
     * @memberof EventDeliveryAttempt
     */
    deliveryStatus?: string | null;
    /**
     * Type of error that occurred, if the delivery was unsuccessful
     * @type {string}
     * @memberof EventDeliveryAttempt
     */
    errorType?: string | null;
    /**
     * 
     * @type {HttpStatus}
     * @memberof EventDeliveryAttempt
     */
    httpStatus?: HttpStatus;
    /**
     * HTTP message returned by the remote endpoint
     * @type {string}
     * @memberof EventDeliveryAttempt
     */
    message?: string | null;
    /**
     * The date that the delivery was attempted
     * @type {Date}
     * @memberof EventDeliveryAttempt
     */
    executionDate?: Date | null;
}

/**
 * Check if a given object implements the EventDeliveryAttempt interface.
 */
export function instanceOfEventDeliveryAttempt(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventDeliveryAttemptFromJSON(json: any): EventDeliveryAttempt {
    return EventDeliveryAttemptFromJSONTyped(json, false);
}

export function EventDeliveryAttemptFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventDeliveryAttempt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deliveryStatus': !exists(json, 'deliveryStatus') ? undefined : json['deliveryStatus'],
        'errorType': !exists(json, 'errorType') ? undefined : json['errorType'],
        'httpStatus': !exists(json, 'httpStatus') ? undefined : HttpStatusFromJSON(json['httpStatus']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'executionDate': !exists(json, 'executionDate') ? undefined : (json['executionDate'] === null ? null : new Date(json['executionDate'])),
    };
}

export function EventDeliveryAttemptToJSON(value?: EventDeliveryAttempt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deliveryStatus': value.deliveryStatus,
        'errorType': value.errorType,
        'httpStatus': HttpStatusToJSON(value.httpStatus),
        'message': value.message,
        'executionDate': value.executionDate === undefined ? undefined : (value.executionDate === null ? null : value.executionDate.toISOString()),
    };
}
