import { Request, Response, Router } from "express";
import { container } from "tsyringe";
import * as clientErrors from "../utils/error/client/index.js";
import SpellController from "../controllers/spell.controller.js";
import hasAuth from "../middleware/has-auth.js";

const sorceryRoutes = Router();

const getSorceries = (request: Request, response: Response) => {
  const controller = container.resolve<SpellController>("SorceriesController");
  controller.getMany(request, response);
};
const getSorcery = (request: Request, response: Response) => {
  const controller = container.resolve<SpellController>("SorceriesController");
  controller.getSingle(request, response);
};
const postSorceries = (request: Request, response: Response) => {
  const controller = container.resolve<SpellController>("SorceriesController");
  controller.post(request, response);
};
const deleteSorceries = (request: Request, response: Response) => {
  const controller = container.resolve<SpellController>("SorceriesController");
  controller.delete(request, response);
};
const notAllowedSorceries = (request: Request, response: Response) => {
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

sorceryRoutes.get("/", getSorceries);
sorceryRoutes.get("/:name", getSorcery);
sorceryRoutes.post("/", hasAuth, postSorceries);
sorceryRoutes.delete("/:name", hasAuth, deleteSorceries);
sorceryRoutes.all("/:route", clientErrors.endpointNotFoundResponse);
sorceryRoutes.all("*", notAllowedSorceries);

export default sorceryRoutes;
