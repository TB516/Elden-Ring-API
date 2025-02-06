import AbstractMongoRepository from "./abstract-mongo.repository.js";
import Spell from "../../models/spells/spell.model.js";
import SpellQuery from "../../models/spells/spell-query.model.js";
import type ISpell from "../../models/spells/spell.interface.js";
import type ISpellQuery from "../../models/spells/spell-query.interface.js";

export default class SpellRepository extends AbstractMongoRepository<
  Spell,
  ISpell
> {
  public async search(query: SpellQuery): Promise<Spell[]> {
    const mongoQuery = this.toIQuery(query);

    const mongoObjects = await this._model
      .find(mongoQuery)
      .lean<ISpell[]>()
      .exec();

    return mongoObjects.map((s) => this.toObjectT(s));
  }

  protected toIQuery(query: SpellQuery): ISpellQuery {
    const formattedQuery = {} as ISpellQuery;

    if (query.name) {
      formattedQuery.name = query.name;
    }
    if (query.fp) {
      formattedQuery.fp = query.fp;
    }
    if (query.slot) {
      formattedQuery.slot = query.slot;
    }

    return formattedQuery;
  }

  protected toObjectU(data: Spell): ISpell {
    return {
      _id: data._id,
      name: data.name,
      image: data.image,
      description: data.description,
      effect: data.effect,
      fp: data.fp,
      slot: data.slot,
      int: data.int,
      faith: data.faith,
      arc: data.arc,
      bonus: data.bonus,
      location: data.location,
      stamina: data.stamina,
    } as ISpell;
  }

  protected toObjectT(data: ISpell): Spell {
    return new Spell(
      data._id?.toString(),
      data.name,
      data.image,
      data.description,
      data.effect,
      data.fp,
      data.slot,
      data.int,
      data.faith,
      data.arc,
      data.bonus,
      data.location,
      data.stamina
    );
  }
}
