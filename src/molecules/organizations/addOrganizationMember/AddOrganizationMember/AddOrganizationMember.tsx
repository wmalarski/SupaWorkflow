import React from "react";
import { useSignIn } from "../../../../services";
import AddOrganizationMemberView from "../AddOrganizationMemberView/AddOrganizationMemberView";

type ViewProps = React.ComponentProps<typeof AddOrganizationMemberView>;

export type AddOrganizationMemberProps = {
  View?: React.ComponentType<ViewProps>;
};

const AddOrganizationMember = ({
  View = AddOrganizationMemberView,
}: AddOrganizationMemberProps): JSX.Element => {
  const {
    mutate: signIn,
    error: signInError,
    isLoading: isSignInLoading,
  } = useSignIn({
    onSuccess: (user) => {
      console.log({ user });
    },
    onError: (error) => {
      console.log({ error });
    },
  });

  return (
    <View
      error={signInError}
      isLoading={isSignInLoading}
      onSubmit={(data) =>
        signIn({
          email: data.email,
        })
      }
    />
  );
};

export default React.memo(AddOrganizationMember);
