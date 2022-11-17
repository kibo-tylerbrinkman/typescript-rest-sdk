/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Catalog Runtime Services
 * OpenAPI Spec for Kibo Catalog Runtime Services
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CatalogRuntimesProductCollectionInfo
 */
export interface CatalogRuntimesProductCollectionInfo {
    /**
     * Product Code of the collection
     * @type {string}
     * @memberof CatalogRuntimesProductCollectionInfo
     */
    productCode?: string | null;
    /**
     * True if the collection is the primary collection for the containing product.
     * @type {boolean}
     * @memberof CatalogRuntimesProductCollectionInfo
     */
    isPrimary?: boolean;
}

/**
 * Check if a given object implements the CatalogRuntimesProductCollectionInfo interface.
 */
export function instanceOfCatalogRuntimesProductCollectionInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CatalogRuntimesProductCollectionInfoFromJSON(json: any): CatalogRuntimesProductCollectionInfo {
    return CatalogRuntimesProductCollectionInfoFromJSONTyped(json, false);
}

export function CatalogRuntimesProductCollectionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogRuntimesProductCollectionInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'isPrimary': !exists(json, 'isPrimary') ? undefined : json['isPrimary'],
    };
}

export function CatalogRuntimesProductCollectionInfoToJSON(value?: CatalogRuntimesProductCollectionInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'productCode': value.productCode,
        'isPrimary': value.isPrimary,
    };
}
