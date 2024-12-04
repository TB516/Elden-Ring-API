import { Request, Response } from 'express';
import IErrorMessage from '../IErrorMessage';

const unauthorizedResponse = (_request: Request, response: Response, message: IErrorMessage) => {
  response.status(401).json(message);
};

export default unauthorizedResponse;
