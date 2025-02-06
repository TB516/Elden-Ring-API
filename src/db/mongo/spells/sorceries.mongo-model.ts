import { model } from "mongoose";
import spellSchema from "./spell.schema.js";
import type ISpell from "../../../models/spells/spell.interface.js";

const Sorceries = model<ISpell>("Sorceries", spellSchema);

export default Sorceries;
