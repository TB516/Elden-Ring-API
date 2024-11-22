import { model, Schema } from 'mongoose';
import ISpell from './ISpell';

const spellSchema = new Schema<ISpell>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    effect: {
      type: String,
      required: true,
    },
    fp: {
      type: String,
      required: true,
    },
    slot: {
      type: Number,
      required: true,
    },
    int: {
      type: Number,
      required: true,
    },
    faith: {
      type: Number,
      required: true,
    },
    arc: {
      type: Number,
      required: true,
    },
    bonus: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    stamina: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

const Incantations = model<ISpell>('Incantations', spellSchema);
const Sorceries = model<ISpell>('Sorceries', spellSchema);

export { Incantations, Sorceries };
