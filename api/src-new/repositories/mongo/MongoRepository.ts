/* eslint-disable no-unused-vars */
import mongoose from 'mongoose';
import IRepository from '../IRepository';
import Data from '../../models/Data';
import Query from '../../models/Query';

abstract class MongoRepository<T extends Data> implements IRepository<T> {
  protected _model: mongoose.Model<T>;

  constructor(model: mongoose.Model<T>) {
    this._model = model;
  }

  abstract search(query: Query): Promise<T[]>;

  abstract findById(id: string): Promise<T | null>;

  abstract exists(data: T): Promise<boolean>;

  abstract create(data: T): Promise<T | null>;

  abstract updateById(id: string, data: T): Promise<T | null>;

  abstract deleteById(id: string): Promise<T | null>;

  protected abstract toData(data: T): T;
}

export default MongoRepository;
