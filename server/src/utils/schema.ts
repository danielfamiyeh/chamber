import { SchemaField } from '../../types';

export class Schema {
  constructor(private _fields: SchemaField[] = []) {}

  get model() {
    return Object.assign(
      {},
      ...this._fields.map(({ key, type }) => ({
        [key]:
          type.name === 'Array'
            ? type(0)
            : (<StringConstructor | NumberConstructor>type)(),
      }))
    );
  }
}
