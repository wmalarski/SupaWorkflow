import { useMemo } from "react";
import { RegisterOptions, Resolver } from "react-hook-form";
import useText, { UseTextFnc } from "../../../../utils/translations/useText";

export type SignUpViewData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUpViewContext = {
  text: UseTextFnc;
};

export const useSignUpViewOptions = (): Record<
  keyof SignUpViewData,
  RegisterOptions<SignUpViewData>
> => {
  const text = useText();
  return useMemo(
    () => ({
      email: {
        required: {
          value: true,
          message: text("fieldIsRequired"),
        },
        minLength: {
          value: 3,
          message: text("errorMinLength")(3),
        },
        maxLength: {
          value: 32,
          message: text("errorMaxLength")(3),
        },
      },
      password: {
        required: {
          value: true,
          message: text("fieldIsRequired"),
        },
        minLength: {
          value: 8,
          message: text("errorMinLength")(8),
        },
      },
      confirmPassword: {
        required: {
          value: true,
          message: text("fieldIsRequired"),
        },
        minLength: {
          value: 8,
          message: text("errorMinLength")(8),
        },
      },
    }),
    [text]
  );
};

export const signUpViewResolver: Resolver<SignUpViewData, SignUpViewContext> = (
  values,
  context
) => {
  const { confirmPassword, password } = values;

  if (!context) return { values, errors: {} };

  return {
    errors: {
      ...(confirmPassword !== password
        ? {
            confirmPassword: {
              type: "required",
              message: context.text("fieldIsDifferent"),
              types: [],
            },
          }
        : {}),
    },
    values,
  };
};
