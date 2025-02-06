import mongoose from "mongoose";
import { container } from "tsyringe";
import Spell from "../models/spells/spell.model.js";
import SpellRepository from "../repositories/mongo/spell.repository.js";
import Sorceries from "../db/mongo/spells/sorceries.mongo-model.js";
import Incantations from "../db/mongo/spells/incantations.mongo-model.js";
import type IRepository from "../repositories/repository.interface.js";

const init = async () => {
  await mongoose.connect(process.env.MONGODB_URI!);

  container.registerInstance<IRepository<Spell>>(
    "SorceriesRepo",
    new SpellRepository(Sorceries)
  );
  container.registerInstance<IRepository<Spell>>(
    "IncantationsRepo",
    new SpellRepository(Incantations)
  );
};

export default init;
