import { useMemo } from "react";
import { RegisterOptions, ResolverResult } from "react-hook-form";
import useText, { UseTextFnc } from "../translations/useText";

export const useEmailValidator = (): RegisterOptions => {
  const text = useText();
  return useMemo(
    () => ({
      required: {
        value: true,
        message: text("fieldIsRequired"),
      },
      minLength: {
        value: 3,
        message: text("errorMinLength")(3),
      },
    }),
    [text]
  );
};

export const usePasswordValidator = (): RegisterOptions => {
  const text = useText();
  return useMemo(
    () => ({
      required: {
        value: true,
        message: text("fieldIsRequired"),
      },
      minLength: {
        value: 8,
        message: text("errorMinLength")(8),
      },
    }),
    [text]
  );
};

export type UseTextValidatorOptions = {
  minLength?: number;
  maxLength?: number;
  required?: boolean;
};

export const useTextValidator = ({
  maxLength,
  minLength,
  required,
}: UseTextValidatorOptions = {}): RegisterOptions => {
  const text = useText();
  return useMemo(
    () => ({
      required: { value: required ?? false, message: text("fieldIsRequired") },
      minLength:
        minLength && Number.isInteger(maxLength)
          ? { value: minLength, message: text("errorMinLength")(minLength) }
          : undefined,
      maxLength:
        maxLength && Number.isInteger(maxLength)
          ? { value: maxLength, message: text("errorMaxLength")(maxLength) }
          : undefined,
    }),
    [text]
  );
};

export const confirmPasswordResolver = <
  TValues extends { password: string; confirmPassword: string },
  TContext extends { text: UseTextFnc }
>(
  values: TValues,
  context?: TContext
): ResolverResult<{ confirmPassword: string }> => {
  const { confirmPassword, password } = values;

  if (!context) return { values, errors: {} };

  return confirmPassword !== password
    ? {
        errors: {
          confirmPassword: {
            type: "required",
            message: context.text("fieldIsDifferent"),
          },
        },
        values: {},
      }
    : { errors: {}, values };
};
