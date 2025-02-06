import type IData from "../data.interface.js";

interface ISpell extends IData {
  image: string | undefined;
  description: string;
  effect: string;
  fp: string;
  slot: number;
  int: number;
  faith: number;
  arc: number;
  bonus: string | undefined;
  location: string | undefined;
  stamina: number;
}

export default ISpell;
