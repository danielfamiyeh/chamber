import uuid from 'react-native-uuid';
import { SchemaField } from '../../types';

export class Schema<T> {
  constructor(private _fields: SchemaField[] = []) {}

  omit(...keys: string[]) {
    return new Schema(this._fields.filter(({ key }) => !keys.includes(key)));
  }

  get model(): T {
    return Object.assign(
      {},
      ...this._fields.map(({ key, type }) => {
        let value =
          type.name === 'Array'
            ? type(0)
            : (<StringConstructor | NumberConstructor>type)();

        if (key === 'id') {
          value = uuid.v4();
        }

        return {
          [key]: value,
        };
      })
    );
  }
}
