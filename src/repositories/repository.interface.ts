/* eslint-disable no-unused-vars */
import AbstractData from '../models/abstract-data.model';
import AbstractQuery from '../models/query.model';

interface IRepository<T extends AbstractData> {
  search(query: AbstractQuery): Promise<T[]>;

  findById(id: string): Promise<T | null>;

  exists(data: T): Promise<string | null>;

  create(data: T): Promise<T | null>;

  updateById(id: string, data: T): Promise<T | null>;

  deleteById(id: string): Promise<T | null>;
}

export default IRepository;
