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
import type { ProductImageGroupTag } from './ProductImageGroupTag';
import {
    ProductImageGroupTagFromJSON,
    ProductImageGroupTagFromJSONTyped,
    ProductImageGroupTagToJSON,
} from './ProductImageGroupTag';

/**
 * 
 * @export
 * @interface ProductImageGroup
 */
export interface ProductImageGroup {
    /**
     * 
     * @type {string}
     * @memberof ProductImageGroup
     */
    productImageGroupId: string;
    /**
     * 
     * @type {Array<ProductImageGroupTag>}
     * @memberof ProductImageGroup
     */
    productImageGroupTags?: Array<ProductImageGroupTag> | null;
}

/**
 * Check if a given object implements the ProductImageGroup interface.
 */
export function instanceOfProductImageGroup(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "productImageGroupId" in value;

    return isInstance;
}

export function ProductImageGroupFromJSON(json: any): ProductImageGroup {
    return ProductImageGroupFromJSONTyped(json, false);
}

export function ProductImageGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductImageGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productImageGroupId': json['productImageGroupId'],
        'productImageGroupTags': !exists(json, 'productImageGroupTags') ? undefined : (json['productImageGroupTags'] === null ? null : (json['productImageGroupTags'] as Array<any>).map(ProductImageGroupTagFromJSON)),
    };
}

export function ProductImageGroupToJSON(value?: ProductImageGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productImageGroupId': value.productImageGroupId,
        'productImageGroupTags': value.productImageGroupTags === undefined ? undefined : (value.productImageGroupTags === null ? null : (value.productImageGroupTags as Array<any>).map(ProductImageGroupTagToJSON)),
    };
}
