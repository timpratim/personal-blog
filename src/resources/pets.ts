// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Pets extends APIResource {
  /**
   * Get all pets
   */
  list(options?: Core.RequestOptions): Core.APIPromise<PetListResponse> {
    return this._client.get('/pets', options);
  }
}

export type PetListResponse = Array<PetListResponse.PetListResponseItem>;

export namespace PetListResponse {
  export interface PetListResponseItem {
    id?: string;

    ability?: string;

    happiness?: number;

    name?: string;

    species?: string;
  }
}

export declare namespace Pets {
  export { type PetListResponse as PetListResponse };
}
