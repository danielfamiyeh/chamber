import { v4 as uuid } from 'uuid';
import { SchemaField } from '../../types';

export class Schema<T> {
  constructor(private _fields: SchemaField[] = []) {}

  get model(): T {
    return Object.assign(
      {},
      ...this._fields.map(({ key, type }) => {
        let value =
          type.name === 'Array'
            ? type(0)
            : (<StringConstructor | NumberConstructor>type)();

        if (key === 'id') {
          value = uuid();
        }

        return {
          [key]: value,
        };
      })
    );
  }
}
