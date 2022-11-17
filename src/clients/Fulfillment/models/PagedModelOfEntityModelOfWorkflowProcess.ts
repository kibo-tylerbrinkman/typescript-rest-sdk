/* tslint:disable */
/* eslint-disable */
/**
 * Kibo Fulfillment Service
 * OpenAPI Spec for Kibo Fulfillment Service
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EntityModelOfWorkflowProcess } from './EntityModelOfWorkflowProcess';
import {
    EntityModelOfWorkflowProcessFromJSON,
    EntityModelOfWorkflowProcessFromJSONTyped,
    EntityModelOfWorkflowProcessToJSON,
} from './EntityModelOfWorkflowProcess';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { PageMetadata } from './PageMetadata';
import {
    PageMetadataFromJSON,
    PageMetadataFromJSONTyped,
    PageMetadataToJSON,
} from './PageMetadata';

/**
 * 
 * @export
 * @interface PagedModelOfEntityModelOfWorkflowProcess
 */
export interface PagedModelOfEntityModelOfWorkflowProcess {
    /**
     * 
     * @type {{ [key: string]: Array<EntityModelOfWorkflowProcess>; }}
     * @memberof PagedModelOfEntityModelOfWorkflowProcess
     */
    embedded?: { [key: string]: Array<EntityModelOfWorkflowProcess>; };
    /**
     * 
     * @type {Links}
     * @memberof PagedModelOfEntityModelOfWorkflowProcess
     */
    links?: Links;
    /**
     * 
     * @type {PageMetadata}
     * @memberof PagedModelOfEntityModelOfWorkflowProcess
     */
    page?: PageMetadata;
}

/**
 * Check if a given object implements the PagedModelOfEntityModelOfWorkflowProcess interface.
 */
export function instanceOfPagedModelOfEntityModelOfWorkflowProcess(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PagedModelOfEntityModelOfWorkflowProcessFromJSON(json: any): PagedModelOfEntityModelOfWorkflowProcess {
    return PagedModelOfEntityModelOfWorkflowProcessFromJSONTyped(json, false);
}

export function PagedModelOfEntityModelOfWorkflowProcessFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedModelOfEntityModelOfWorkflowProcess {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : json['_embedded'],
        'links': !exists(json, '_links') ? undefined : LinksFromJSON(json['_links']),
        'page': !exists(json, 'page') ? undefined : PageMetadataFromJSON(json['page']),
    };
}

export function PagedModelOfEntityModelOfWorkflowProcessToJSON(value?: PagedModelOfEntityModelOfWorkflowProcess | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': value.embedded,
        '_links': LinksToJSON(value.links),
        'page': PageMetadataToJSON(value.page),
    };
}
