import type IQuery from "../query.interface.js";

interface ISpellQuery extends IQuery {
  fp: RegExp | undefined;
  slot: number | undefined;
}

export default ISpellQuery;
