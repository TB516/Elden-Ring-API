import mongoose, { model } from 'mongoose';
import { container } from 'tsyringe';
import { Spell } from '../models/spells';
import SpellRepository from '../repositories/mongo/spell.repository';
import IRepository from '../repositories/repository.interface';
import Sorceries from '../db/mongo/spells/sorceries.mongo-model';
import Incantations from '../db/mongo/spells/incantations.mongo-model';

const init = async () => {
  await mongoose.connect(process.env.MONGODB_URI!);

  container.registerInstance<IRepository<Spell>>('SorceriesRepo', new SpellRepository(Sorceries));
  container.registerInstance<IRepository<Spell>>('IncantationsRepo', new SpellRepository(Incantations));
};

export default init;
