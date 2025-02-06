import badRequestResponse from "./bad-request.js";
import resourceNotFoundResponse, {
  endpointNotFoundResponse,
} from "./resource-not-found.js";
import methodNotAllowedResponse from "./method-not-allowed.js";
import unsupportedTypeResponse, {
  postTypeUnsupportedResponse,
} from "./unsuported-type.js";
import unauthorizedResponse from "./unauthorized.js";

export {
  badRequestResponse,
  endpointNotFoundResponse,
  resourceNotFoundResponse,
  methodNotAllowedResponse,
  unsupportedTypeResponse,
  postTypeUnsupportedResponse,
  unauthorizedResponse,
};
