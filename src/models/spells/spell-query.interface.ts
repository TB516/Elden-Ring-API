import IQuery from '../query.interface';

interface ISpellQuery extends IQuery {
  fp: RegExp | undefined,
  slot: number | undefined,
}

export default ISpellQuery;
