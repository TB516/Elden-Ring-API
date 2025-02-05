/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import AbstractData from '../models/abstract-data.model';
import IRepository from '../repositories/repository.interface';

abstract class AbstractController<T extends AbstractData> {
  protected m_repository: IRepository<T>;

  constructor(repository: IRepository<T>) {
    this.m_repository = repository;
  }

  abstract getSingle(request: Request, response: Response): Promise<void>;

  abstract getMany(request: Request, response: Response): Promise<void>;

  abstract post(request: Request, response: Response): Promise<void>;

  abstract delete(request: Request, response: Response): Promise<void>;

  protected abstract add(request: Request, response: Response, data: T): Promise<void>;

  protected abstract update(request: Request, response: Response, data: T): Promise<void>;
}

export default AbstractController;
