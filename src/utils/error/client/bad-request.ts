import { Request, Response } from "express";
import type IErrorMessage from "../error-message.interface.js";

/**
 * Responds with a bad request status and the entered message
 * @param _request request object
 * @param response response object
 * @param message message for response body
 */
const badRequestResponse = (
  _request: Request,
  response: Response,
  message: IErrorMessage
) => {
  response.status(400).json(message);
};

export default badRequestResponse;
