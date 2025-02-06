import mongoose from "mongoose";
import AbstractData from "../../models/abstract-data.model.js";
import AbstractQuery from "../../models/query.model.js";
import type IRepository from "../repository.interface.js";
import type IData from "../../models/data.interface.js";
import type IQuery from "../../models/query.interface.js";

abstract class AbstractMongoRepository<T extends AbstractData, U extends IData>
  implements IRepository<T>
{
  protected _model: mongoose.Model<U>;

  constructor(model: mongoose.Model<U>) {
    this._model = model;
  }

  public abstract search(query: AbstractQuery): Promise<T[]>;

  public async findById(id: string): Promise<T | null> {
    const mongoData = await this._model
      .findById(new mongoose.Types.ObjectId(id))
      .lean<U>()
      .exec();

    return mongoData ? this.toObjectT(mongoData) : null;
  }

  public async exists(data: T): Promise<string | null> {
    const exists = await this._model.exists({ name: data.name }).exec();

    return exists ? exists._id!.toString() : null;
  }

  public async create(data: T): Promise<T | null> {
    try {
      const mongoData = this.toObjectU(data);
      return this.toObjectT(await this._model.create(mongoData));
    } catch {
      return null;
    }
  }

  public async updateById(id: string, data: T): Promise<T | null> {
    const mongoData = this.toObjectU(data);

    const result = await this._model
      .findByIdAndUpdate(new mongoose.Types.ObjectId(id), mongoData)
      .lean<U | null>()
      .exec();

    return result ? this.toObjectT(result) : null;
  }

  public async deleteById(id: string): Promise<T | null> {
    const result = await this._model
      .findByIdAndDelete(new mongoose.Types.ObjectId(id))
      .lean<U | null>()
      .exec();

    return result ? this.toObjectT(result) : null;
  }

  protected abstract toIQuery(query: AbstractQuery): IQuery;

  protected abstract toObjectU(data: T): U;

  protected abstract toObjectT(data: U): T;
}

export default AbstractMongoRepository;
