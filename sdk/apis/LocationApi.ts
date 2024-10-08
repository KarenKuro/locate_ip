/* tslint:disable */
/* eslint-disable */
/**
 * Locate by IP API
 * Location determination by ip
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: kkarenk888@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  LocationResponseDTO,
} from '../models/index';
import {
    LocationResponseDTOFromJSON,
    LocationResponseDTOToJSON,
} from '../models/index';

export interface LocationControllerGetLocationRequest {
    ip: string;
}

/**
 * 
 */
export class LocationApi extends runtime.BaseAPI {

    /**
     * Location determination by ip
     */
    async locationControllerGetLocationRaw(requestParameters: LocationControllerGetLocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationResponseDTO>> {
        if (requestParameters['ip'] == null) {
            throw new runtime.RequiredError(
                'ip',
                'Required parameter "ip" was null or undefined when calling locationControllerGetLocation().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['ip'] != null) {
            queryParameters['ip'] = requestParameters['ip'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationResponseDTOFromJSON(jsonValue));
    }

    /**
     * Location determination by ip
     */
    async locationControllerGetLocation(requestParameters: LocationControllerGetLocationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationResponseDTO> {
        const response = await this.locationControllerGetLocationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
