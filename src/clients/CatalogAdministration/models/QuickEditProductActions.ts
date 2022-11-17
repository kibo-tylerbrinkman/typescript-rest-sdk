/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Admin Services
 * OpenAPI Spec for Kibo Catalog Admin Services
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProductPatchAction } from './ProductPatchAction';
import {
    ProductPatchActionFromJSON,
    ProductPatchActionFromJSONTyped,
    ProductPatchActionToJSON,
} from './ProductPatchAction';

/**
 * List of Mozu.ProductAdmin.Contracts.ProductPatchActions to be applied to a list of Mozu.ProductAdmin.Contracts.Products.
 * @export
 * @interface QuickEditProductActions
 */
export interface QuickEditProductActions {
    /**
     * List of Mozu.ProductAdmin.Contracts.ProductPatchAction actions to perform
     * @type {Array<ProductPatchAction>}
     * @memberof QuickEditProductActions
     */
    actions?: Array<ProductPatchAction> | null;
}

/**
 * Check if a given object implements the QuickEditProductActions interface.
 */
export function instanceOfQuickEditProductActions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuickEditProductActionsFromJSON(json: any): QuickEditProductActions {
    return QuickEditProductActionsFromJSONTyped(json, false);
}

export function QuickEditProductActionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuickEditProductActions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actions': !exists(json, 'actions') ? undefined : (json['actions'] === null ? null : (json['actions'] as Array<any>).map(ProductPatchActionFromJSON)),
    };
}

export function QuickEditProductActionsToJSON(value?: QuickEditProductActions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actions': value.actions === undefined ? undefined : (value.actions === null ? null : (value.actions as Array<any>).map(ProductPatchActionToJSON)),
    };
}
