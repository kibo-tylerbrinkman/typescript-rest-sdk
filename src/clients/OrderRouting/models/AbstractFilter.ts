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
import type { UnitOfobject } from './UnitOfobject';
import {
    UnitOfobjectFromJSON,
    UnitOfobjectFromJSONTyped,
    UnitOfobjectToJSON,
} from './UnitOfobject';
import type { UserContextInformation } from './UserContextInformation';
import {
    UserContextInformationFromJSON,
    UserContextInformationFromJSONTyped,
    UserContextInformationToJSON,
} from './UserContextInformation';

/**
 * 
 * @export
 * @interface AbstractFilter
 */
export interface AbstractFilter {
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    booleanOperator?: AbstractFilterBooleanOperatorEnum;
    /**
     * 
     * @type {Date}
     * @memberof AbstractFilter
     */
    created?: Date;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    creatorUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    customAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    dataPointExtensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    dataPointExtensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    dataPointExtensibleAttributeType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    dataPointExtensibleFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    dotDelimitedPropertyName?: string;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    environmentID?: number;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    extensibleAttributeFQN?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    extensibleAttributeName?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    extensibleAttributeType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    extensibleFilter?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    filterID?: number;
    /**
     * 
     * @type {UnitOfobject}
     * @memberof AbstractFilter
     */
    filterUnit?: UnitOfobject;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    pathString?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbstractFilter
     */
    persisted?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    siteID?: number;
    /**
     * 
     * @type {number}
     * @memberof AbstractFilter
     */
    tenantID?: number;
    /**
     * 
     * @type {Date}
     * @memberof AbstractFilter
     */
    updated?: Date;
    /**
     * 
     * @type {string}
     * @memberof AbstractFilter
     */
    updaterUsername?: string;
    /**
     * 
     * @type {UserContextInformation}
     * @memberof AbstractFilter
     */
    userContext?: UserContextInformation;
}


/**
 * @export
 */
export const AbstractFilterBooleanOperatorEnum = {
    Equal: 'filter.logic.equal',
    NotEqual: 'filter.logic.not.equal',
    GreaterThan: 'filter.logic.greater.than',
    LessThan: 'filter.logic.less.than',
    GreaterOrEqual: 'filter.logic.greater.or.equal',
    LessOrEqual: 'filter.logic.less.or.equal',
    In: 'filter.logic.in',
    NotIn: 'filter.logic.not.in',
    Between: 'filter.logic.between',
    StartsWith: 'filter.logic.starts.with',
    EndsWith: 'filter.logic.ends.with',
    Contains: 'filter.logic.contains',
    Subset: 'filter.logic.subset'
} as const;
export type AbstractFilterBooleanOperatorEnum = typeof AbstractFilterBooleanOperatorEnum[keyof typeof AbstractFilterBooleanOperatorEnum];


/**
 * Check if a given object implements the AbstractFilter interface.
 */
export function instanceOfAbstractFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AbstractFilterFromJSON(json: any): AbstractFilter {
    return AbstractFilterFromJSONTyped(json, false);
}

export function AbstractFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): AbstractFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'booleanOperator': !exists(json, 'booleanOperator') ? undefined : json['booleanOperator'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'creatorUsername': !exists(json, 'creatorUsername') ? undefined : json['creatorUsername'],
        'customAttributeName': !exists(json, 'customAttributeName') ? undefined : json['customAttributeName'],
        'dataPointExtensibleAttributeFQN': !exists(json, 'dataPointExtensibleAttributeFQN') ? undefined : json['dataPointExtensibleAttributeFQN'],
        'dataPointExtensibleAttributeName': !exists(json, 'dataPointExtensibleAttributeName') ? undefined : json['dataPointExtensibleAttributeName'],
        'dataPointExtensibleAttributeType': !exists(json, 'dataPointExtensibleAttributeType') ? undefined : json['dataPointExtensibleAttributeType'],
        'dataPointExtensibleFilter': !exists(json, 'dataPointExtensibleFilter') ? undefined : json['dataPointExtensibleFilter'],
        'dotDelimitedPropertyName': !exists(json, 'dotDelimitedPropertyName') ? undefined : json['dotDelimitedPropertyName'],
        'environmentID': !exists(json, 'environmentID') ? undefined : json['environmentID'],
        'extensibleAttributeFQN': !exists(json, 'extensibleAttributeFQN') ? undefined : json['extensibleAttributeFQN'],
        'extensibleAttributeName': !exists(json, 'extensibleAttributeName') ? undefined : json['extensibleAttributeName'],
        'extensibleAttributeType': !exists(json, 'extensibleAttributeType') ? undefined : json['extensibleAttributeType'],
        'extensibleFilter': !exists(json, 'extensibleFilter') ? undefined : json['extensibleFilter'],
        'filterID': !exists(json, 'filterID') ? undefined : json['filterID'],
        'filterUnit': !exists(json, 'filterUnit') ? undefined : UnitOfobjectFromJSON(json['filterUnit']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pathString': !exists(json, 'pathString') ? undefined : json['pathString'],
        'persisted': !exists(json, 'persisted') ? undefined : json['persisted'],
        'siteID': !exists(json, 'siteID') ? undefined : json['siteID'],
        'tenantID': !exists(json, 'tenantID') ? undefined : json['tenantID'],
        'updated': !exists(json, 'updated') ? undefined : (new Date(json['updated'])),
        'updaterUsername': !exists(json, 'updaterUsername') ? undefined : json['updaterUsername'],
        'userContext': !exists(json, 'userContext') ? undefined : UserContextInformationFromJSON(json['userContext']),
    };
}

export function AbstractFilterToJSON(value?: AbstractFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'booleanOperator': value.booleanOperator,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'creatorUsername': value.creatorUsername,
        'customAttributeName': value.customAttributeName,
        'dataPointExtensibleAttributeFQN': value.dataPointExtensibleAttributeFQN,
        'dataPointExtensibleAttributeName': value.dataPointExtensibleAttributeName,
        'dataPointExtensibleAttributeType': value.dataPointExtensibleAttributeType,
        'dataPointExtensibleFilter': value.dataPointExtensibleFilter,
        'dotDelimitedPropertyName': value.dotDelimitedPropertyName,
        'environmentID': value.environmentID,
        'extensibleAttributeFQN': value.extensibleAttributeFQN,
        'extensibleAttributeName': value.extensibleAttributeName,
        'extensibleAttributeType': value.extensibleAttributeType,
        'extensibleFilter': value.extensibleFilter,
        'filterID': value.filterID,
        'filterUnit': UnitOfobjectToJSON(value.filterUnit),
        'name': value.name,
        'pathString': value.pathString,
        'persisted': value.persisted,
        'siteID': value.siteID,
        'tenantID': value.tenantID,
        'updated': value.updated === undefined ? undefined : (value.updated.toISOString()),
        'updaterUsername': value.updaterUsername,
        'userContext': UserContextInformationToJSON(value.userContext),
    };
}

