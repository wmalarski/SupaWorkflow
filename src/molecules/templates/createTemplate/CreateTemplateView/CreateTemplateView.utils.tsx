import { useMemo } from "react";
import { RegisterOptions } from "react-hook-form";
import { useText } from "../../../../utils";

export type CreateTemplateViewData = {
  name: string;
  description: string;
};

export const useCreateTemplateViewOptions = (): Record<
  keyof CreateTemplateViewData,
  RegisterOptions<CreateTemplateViewData>
> => {
  const text = useText();
  return useMemo(
    () => ({
      name: {
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
          message: text("errorMaxLength")(32),
        },
      },
      description: {},
    }),
    [text]
  );
};
