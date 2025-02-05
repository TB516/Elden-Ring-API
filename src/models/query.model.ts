import IQuery from './query.interface';

abstract class AbstractQuery implements IQuery {
  protected m_name: RegExp | undefined;

  constructor(name?: string) {
    this.m_name = name ? new RegExp(name, 'i') : undefined;
  }

  public get name() : RegExp | undefined {
    return this.m_name;
  }
}

export default AbstractQuery;
