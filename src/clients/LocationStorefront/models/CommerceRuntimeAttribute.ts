/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Location Storefront Service
 * OpenAPI Spec for Kibo Location Storefront Service
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
import type { CommerceRuntimeAttributeLocalizedContent } from './CommerceRuntimeAttributeLocalizedContent';
import {
    CommerceRuntimeAttributeLocalizedContentFromJSON,
    CommerceRuntimeAttributeLocalizedContentFromJSONTyped,
    CommerceRuntimeAttributeLocalizedContentToJSON,
} from './CommerceRuntimeAttributeLocalizedContent';
import type { CommerceRuntimeAttributeMetadataItem } from './CommerceRuntimeAttributeMetadataItem';
import {
    CommerceRuntimeAttributeMetadataItemFromJSON,
    CommerceRuntimeAttributeMetadataItemFromJSONTyped,
    CommerceRuntimeAttributeMetadataItemToJSON,
} from './CommerceRuntimeAttributeMetadataItem';
import type { CommerceRuntimeAttributeValidation } from './CommerceRuntimeAttributeValidation';
import {
    CommerceRuntimeAttributeValidationFromJSON,
    CommerceRuntimeAttributeValidationFromJSONTyped,
    CommerceRuntimeAttributeValidationToJSON,
} from './CommerceRuntimeAttributeValidation';
import type { CommerceRuntimeAttributeVocabularyValue } from './CommerceRuntimeAttributeVocabularyValue';
import {
    CommerceRuntimeAttributeVocabularyValueFromJSON,
    CommerceRuntimeAttributeVocabularyValueFromJSONTyped,
    CommerceRuntimeAttributeVocabularyValueToJSON,
} from './CommerceRuntimeAttributeVocabularyValue';

/**
 * 
 * @export
 * @interface CommerceRuntimeAttribute
 */
export interface CommerceRuntimeAttribute {
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttribute
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    adminName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    namespace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    attributeCode: string;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    inputType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    valueType: string;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    dataType?: string | null;
    /**
     * 
     * @type {Array<CommerceRuntimeAttributeMetadataItem>}
     * @memberof CommerceRuntimeAttribute
     */
    attributeMetadata?: Array<CommerceRuntimeAttributeMetadataItem> | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    attributeFQN?: string | null;
    /**
     * 
     * @type {CommerceRuntimeAttributeLocalizedContent}
     * @memberof CommerceRuntimeAttribute
     */
    content?: CommerceRuntimeAttributeLocalizedContent;
    /**
     * 
     * @type {CommerceRuntimeAttributeValidation}
     * @memberof CommerceRuntimeAttribute
     */
    validation?: CommerceRuntimeAttributeValidation;
    /**
     * 
     * @type {Array<CommerceRuntimeAttributeVocabularyValue>}
     * @memberof CommerceRuntimeAttribute
     */
    vocabularyValues?: Array<CommerceRuntimeAttributeVocabularyValue> | null;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CommerceRuntimeAttribute
     */
    auditInfo?: AdminUserAuditInfo;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isActive?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isRequired?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isReadOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isMultiValued?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CommerceRuntimeAttribute
     */
    isVisible?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CommerceRuntimeAttribute
     */
    order?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CommerceRuntimeAttribute
     */
    displayGroup: string;
}

/**
 * Check if a given object implements the CommerceRuntimeAttribute interface.
 */
export function instanceOfCommerceRuntimeAttribute(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attributeCode" in value;
    isInstance = isInstance && "valueType" in value;
    isInstance = isInstance && "displayGroup" in value;

    return isInstance;
}

export function CommerceRuntimeAttributeFromJSON(json: any): CommerceRuntimeAttribute {
    return CommerceRuntimeAttributeFromJSONTyped(json, false);
}

export function CommerceRuntimeAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommerceRuntimeAttribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'adminName': !exists(json, 'adminName') ? undefined : json['adminName'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'attributeCode': json['attributeCode'],
        'inputType': !exists(json, 'inputType') ? undefined : json['inputType'],
        'valueType': json['valueType'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'attributeMetadata': !exists(json, 'attributeMetadata') ? undefined : (json['attributeMetadata'] === null ? null : (json['attributeMetadata'] as Array<any>).map(CommerceRuntimeAttributeMetadataItemFromJSON)),
        'attributeFQN': !exists(json, 'attributeFQN') ? undefined : json['attributeFQN'],
        'content': !exists(json, 'content') ? undefined : CommerceRuntimeAttributeLocalizedContentFromJSON(json['content']),
        'validation': !exists(json, 'validation') ? undefined : CommerceRuntimeAttributeValidationFromJSON(json['validation']),
        'vocabularyValues': !exists(json, 'vocabularyValues') ? undefined : (json['vocabularyValues'] === null ? null : (json['vocabularyValues'] as Array<any>).map(CommerceRuntimeAttributeVocabularyValueFromJSON)),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AdminUserAuditInfoFromJSON(json['auditInfo']),
        'isActive': !exists(json, 'isActive') ? undefined : json['isActive'],
        'isRequired': !exists(json, 'isRequired') ? undefined : json['isRequired'],
        'isReadOnly': !exists(json, 'isReadOnly') ? undefined : json['isReadOnly'],
        'isMultiValued': !exists(json, 'isMultiValued') ? undefined : json['isMultiValued'],
        'isVisible': !exists(json, 'isVisible') ? undefined : json['isVisible'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'displayGroup': json['displayGroup'],
    };
}

export function CommerceRuntimeAttributeToJSON(value?: CommerceRuntimeAttribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'adminName': value.adminName,
        'namespace': value.namespace,
        'attributeCode': value.attributeCode,
        'inputType': value.inputType,
        'valueType': value.valueType,
        'dataType': value.dataType,
        'attributeMetadata': value.attributeMetadata === undefined ? undefined : (value.attributeMetadata === null ? null : (value.attributeMetadata as Array<any>).map(CommerceRuntimeAttributeMetadataItemToJSON)),
        'attributeFQN': value.attributeFQN,
        'content': CommerceRuntimeAttributeLocalizedContentToJSON(value.content),
        'validation': CommerceRuntimeAttributeValidationToJSON(value.validation),
        'vocabularyValues': value.vocabularyValues === undefined ? undefined : (value.vocabularyValues === null ? null : (value.vocabularyValues as Array<any>).map(CommerceRuntimeAttributeVocabularyValueToJSON)),
        'auditInfo': AdminUserAuditInfoToJSON(value.auditInfo),
        'isActive': value.isActive,
        'isRequired': value.isRequired,
        'isReadOnly': value.isReadOnly,
        'isMultiValued': value.isMultiValued,
        'isVisible': value.isVisible,
        'order': value.order,
        'displayGroup': value.displayGroup,
    };
}
