import badRequestResponse from './bad-request';
import resourceNotFoundResponse, { endpointNotFoundResponse } from './resource-not-found';
import methodNotAllowedResponse from './method-not-allowed';
import unsupportedTypeResponse, { postTypeUnsupportedResponse } from './unsuported-type';
import unauthorizedResponse from './unauthorized';

export {
  badRequestResponse,
  endpointNotFoundResponse,
  resourceNotFoundResponse,
  methodNotAllowedResponse,
  unsupportedTypeResponse,
  postTypeUnsupportedResponse,
  unauthorizedResponse,
};
