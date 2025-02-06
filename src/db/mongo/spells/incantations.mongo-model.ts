import { model } from "mongoose";
import spellSchema from "./spell.schema.js";
import type ISpell from "../../../models/spells/spell.interface.js";

const Incantations = model<ISpell>("Incantations", spellSchema);

export default Incantations;
