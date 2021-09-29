import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultUser } from "services";
import { mockDb } from "../../../../tests/mockDb";
import { SignUpViewProps } from "../SignUpView/SignUpView";
import SignUp from "./SignUp";

type ComponentProps = React.ComponentProps<typeof SignUp>;

const defaultUserEmail = defaultUser.email ?? "";

const View = ({ onSubmit, user, error }: SignUpViewProps) => (
  <>
    <p>{user?.email}</p>
    <p>{error?.message}</p>
    <button
      onClick={() =>
        onSubmit({
          confirmPassword: "Passw0rd",
          email: defaultUserEmail,
          password: "Passw0rd",
        })
      }
    >
      Click
    </button>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <SignUp {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<SignUp />", () => {
  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });

  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    await waitFor(async () =>
      expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument()
    );

    expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument();
    expect(mockDb.profile.getAll()).toHaveLength(1);
  });
});
