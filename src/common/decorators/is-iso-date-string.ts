// is-iso-date-string.ts
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsISODateString(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isISODateString',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
          if (typeof value !== 'string') return false;
          if (!isoDateRegex.test(value)) return false;

          const date = new Date(value);
          const dateString = date.toISOString().slice(0, 10);
          return dateString === value;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be a valid ISO date string (yyyy-mm-dd)`;
        },
      },
    });
  };
}
