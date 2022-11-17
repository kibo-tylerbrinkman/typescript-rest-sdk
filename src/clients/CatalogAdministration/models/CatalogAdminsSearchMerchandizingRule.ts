/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
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
import type { CatalogAdminsSearchMerchandizingRuleContext } from './CatalogAdminsSearchMerchandizingRuleContext';
import {
    CatalogAdminsSearchMerchandizingRuleContextFromJSON,
    CatalogAdminsSearchMerchandizingRuleContextFromJSONTyped,
    CatalogAdminsSearchMerchandizingRuleContextToJSON,
} from './CatalogAdminsSearchMerchandizingRuleContext';
import type { SearchMerchandizingRuleImpact } from './SearchMerchandizingRuleImpact';
import {
    SearchMerchandizingRuleImpactFromJSON,
    SearchMerchandizingRuleImpactFromJSONTyped,
    SearchMerchandizingRuleImpactToJSON,
} from './SearchMerchandizingRuleImpact';

/**
 * Search Merchandizing Rule
 * @export
 * @interface CatalogAdminsSearchMerchandizingRule
 */
export interface CatalogAdminsSearchMerchandizingRule {
    /**
     * Unique identifier. Will be generated if not provided.
     * @type {string}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    description?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {CatalogAdminsSearchMerchandizingRuleContext}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    context?: CatalogAdminsSearchMerchandizingRuleContext;
    /**
     * 
     * @type {SearchMerchandizingRuleImpact}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    ruleImpact?: SearchMerchandizingRuleImpact;
    /**
     * 
     * @type {AdminUserAuditInfo}
     * @memberof CatalogAdminsSearchMerchandizingRule
     */
    auditInfo?: AdminUserAuditInfo;
}

/**
 * Check if a given object implements the CatalogAdminsSearchMerchandizingRule interface.
 */
export function instanceOfCatalogAdminsSearchMerchandizingRule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogAdminsSearchMerchandizingRuleFromJSON(json: any): CatalogAdminsSearchMerchandizingRule {
    return CatalogAdminsSearchMerchandizingRuleFromJSONTyped(json, false);
}

export function CatalogAdminsSearchMerchandizingRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogAdminsSearchMerchandizingRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'context': !exists(json, 'context') ? undefined : CatalogAdminsSearchMerchandizingRuleContextFromJSON(json['context']),
        'ruleImpact': !exists(json, 'ruleImpact') ? undefined : SearchMerchandizingRuleImpactFromJSON(json['ruleImpact']),
        'auditInfo': !exists(json, 'auditInfo') ? undefined : AdminUserAuditInfoFromJSON(json['auditInfo']),
    };
}

export function CatalogAdminsSearchMerchandizingRuleToJSON(value?: CatalogAdminsSearchMerchandizingRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'context': CatalogAdminsSearchMerchandizingRuleContextToJSON(value.context),
        'ruleImpact': SearchMerchandizingRuleImpactToJSON(value.ruleImpact),
        'auditInfo': AdminUserAuditInfoToJSON(value.auditInfo),
    };
}
