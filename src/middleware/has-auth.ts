import { Request, Response, NextFunction } from "express";
import pkg from "jsonwebtoken";
const { verify } = pkg;
import * as errors from "../utils/error/client/index.js";

const hasAuth = (request: Request, response: Response, next: NextFunction) => {
  try {
    const token = request.headers.authorization
      ? request.headers.authorization.replace("Bearer", "").trim()
      : "";

    verify(token, process.env.AUTH_SECRET!);

    next();
  } catch {
    errors.unauthorizedResponse(request, response);
  }
};

export default hasAuth;
