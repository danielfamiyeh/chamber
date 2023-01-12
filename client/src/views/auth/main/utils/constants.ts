import { FormModel, FormValidator } from '../../../../../types';

export const authForm: Record<
  AuthMethod,
  {
    model: FormModel;
    validate: FormValidator;
    fieldProps?: Record<string, object>;
  }
> = {
  signIn: {
    model: {
      username: '',
      password: '',
    },
    validate(model: FormModel) {
      if (!model.username) {
        throw new Error('Username field cannot be left blank');
      }
      if (
        String(model.password).length < 6 ||
        String(model.password).length > 42
      ) {
        throw new Error('Password must be between 6 and 42 characters');
      }
    },
    fieldProps: {
      password: {
        secureTextEntry: true,
        autoComplete: 'password',
        textContentType: 'password',
      },
    },
  },
  signUp: {
    model: {
      username: '',
      password: '',
      confirmPassword: '',
    },

    validate(model: FormModel) {
      if (!model.username) {
        throw new Error('Username field cannot be left blank');
      }
      if (
        String(model.password).length < 6 ||
        String(model.password).length > 42
      ) {
        throw new Error('Password must be between 6 and 42 characters');
      }

      if (model.password !== this.model.confirmPassword) {
        throw new Error('Password and confirmation fields must match');
      }
    },

    fieldProps: {
      password: {
        secureTextEntry: true,
        autoComplete: 'password-new',
        textContentType: 'newPassword',
      },
      confirmPassword: {
        secureTextEntry: true,
      },
    },
  },
};

export type AuthMethod = 'signIn' | 'signUp';
