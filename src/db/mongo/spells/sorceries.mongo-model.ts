import { model } from "mongoose";
import spellSchema from "./spell.schema";
import { ISpell } from "../../../models/spells";

const Sorceries = model<ISpell>("Sorceries", spellSchema);

export default Sorceries;
