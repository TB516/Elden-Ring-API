import { Request, Response, Router } from "express";
import { container } from "tsyringe";
import * as clientErrors from "../utils/error/client/index.js";
import SpellController from "../controllers/spell.controller.js";
import hasAuth from "../middleware/has-auth.js";

const incantationRoutes = Router();

const getIncantations = (request: Request, response: Response) => {
  const controller = container.resolve<SpellController>(
    "IncantationsController"
  );
  controller.getMany(request, response);
};
const getIncantation = (request: Request, response: Response) => {
  const controller = container.resolve<SpellController>(
    "IncantationsController"
  );
  controller.getSingle(request, response);
};
const postIncantation = (request: Request, response: Response) => {
  const controller = container.resolve<SpellController>(
    "IncantationsController"
  );
  controller.post(request, response);
};
const deleteIncantation = (request: Request, response: Response) => {
  const controller = container.resolve<SpellController>(
    "IncantationsController"
  );
  controller.delete(request, response);
};
const notAllowedIncantations = (request: Request, response: Response) => {
  clientErrors.methodNotAllowedResponse(
    request,
    response,
    {
      id: "methodNotAllowed",
      message: `${request.method} requests not supported at this endpoint.`,
    },
    ["HEAD", "GET", "POST", "DELETE"]
  );
};

incantationRoutes.get("/", getIncantations);
incantationRoutes.get("/:name", getIncantation);
incantationRoutes.post("/", hasAuth, postIncantation);
incantationRoutes.delete("/:name", hasAuth, deleteIncantation);
incantationRoutes.all("/:route", clientErrors.endpointNotFoundResponse);
incantationRoutes.all("*", notAllowedIncantations);

export default incantationRoutes;
