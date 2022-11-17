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
/**
 * 
 * @export
 * @interface Expression
 */
export interface Expression {
    /**
     * Container or Predicate
     * @type {string}
     * @memberof Expression
     */
    type?: string | null;
    /**
     * And or Or (if Container with More than one Node)
     * @type {string}
     * @memberof Expression
     */
    logicalOperator?: string | null;
    /**
     * 
     * @type {Array<Expression>}
     * @memberof Expression
     */
    nodes?: Array<Expression> | null;
    /**
     * The field target of a predicate
     * @type {string}
     * @memberof Expression
     */
    left?: string | null;
    /**
     * The operator of a predicate
     * @type {string}
     * @memberof Expression
     */
    operator?: string | null;
    /**
     * The literal values of a predicate
     * @type {any}
     * @memberof Expression
     */
    right?: any | null;
}

/**
 * Check if a given object implements the Expression interface.
 */
export function instanceOfExpression(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExpressionFromJSON(json: any): Expression {
    return ExpressionFromJSONTyped(json, false);
}

export function ExpressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Expression {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'logicalOperator': !exists(json, 'logicalOperator') ? undefined : json['logicalOperator'],
        'nodes': !exists(json, 'nodes') ? undefined : (json['nodes'] === null ? null : (json['nodes'] as Array<any>).map(ExpressionFromJSON)),
        'left': !exists(json, 'left') ? undefined : json['left'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'right': !exists(json, 'right') ? undefined : json['right'],
    };
}

export function ExpressionToJSON(value?: Expression | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'logicalOperator': value.logicalOperator,
        'nodes': value.nodes === undefined ? undefined : (value.nodes === null ? null : (value.nodes as Array<any>).map(ExpressionToJSON)),
        'left': value.left,
        'operator': value.operator,
        'right': value.right,
    };
}
