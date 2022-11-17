/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Content Service
 * OpenAPI Spec for Kibo Content Service
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
 * Summary information of documents in a publishing set
 * @export
 * @interface PublishSetSummary
 */
export interface PublishSetSummary {
    /**
     * the code of the associated publish set
     * @type {string}
     * @memberof PublishSetSummary
     */
    publishSetCode?: string | null;
    /**
     * the count of documents in the associated publish set
     * @type {number}
     * @memberof PublishSetSummary
     */
    count?: number;
}

/**
 * Check if a given object implements the PublishSetSummary interface.
 */
export function instanceOfPublishSetSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublishSetSummaryFromJSON(json: any): PublishSetSummary {
    return PublishSetSummaryFromJSONTyped(json, false);
}

export function PublishSetSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishSetSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'publishSetCode': !exists(json, 'publishSetCode') ? undefined : json['publishSetCode'],
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function PublishSetSummaryToJSON(value?: PublishSetSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'publishSetCode': value.publishSetCode,
        'count': value.count,
    };
}
