import { model } from "mongoose";
import spellSchema from "./spell.schema";
import { ISpell } from "../../../models/spells";

const Incantations = model<ISpell>("Incantations", spellSchema);

export default Incantations;
