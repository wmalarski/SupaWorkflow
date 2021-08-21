import { useMemo } from "react";
import { RegisterOptions } from "react-hook-form";
import useText from "../../../../utils/translations/useText";

export type CreateOrganizationViewData = {
  name: string;
  description: string;
};

export const useCreateOrganizationViewOptions = (): Record<
  keyof CreateOrganizationViewData,
  RegisterOptions<CreateOrganizationViewData>
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
