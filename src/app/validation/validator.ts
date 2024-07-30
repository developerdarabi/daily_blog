import { ValidationSchema } from './Schema';

function UserValidator(data: any): Array<string> {
  const userSchema = new ValidationSchema<any>([
    { name: "username", fn: (value) => typeof value.name === "string" && value.name.length > 0 },
    { name: "password", fn: (value) => typeof value.email === "string"  },
  ]);

  const errors = userSchema.validate(data);
  return errors;
}

export const Validators = {
  UserValidator
}