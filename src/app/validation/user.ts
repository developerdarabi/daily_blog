import { ValidationSchema } from './Schema';

function LoginValidator(data: any): Array<string> {
  const userSchema = new ValidationSchema<any>([
    { name: "username", fn: (value) => typeof value.username === "string" && value.username.length > 0 },
    { name: "password", fn: (value) => typeof value.password === "string"  },
  ]);

  const errors = userSchema.validate(data);
  return errors;
}

export const userValidators = {
  LoginValidator
}