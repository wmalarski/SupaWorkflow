import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultUser, mockAuthStorage } from "../../../../services";
import { SignInViewProps } from "../SignInView/SignInView";
import SignIn from "./SignIn";

type ComponentProps = React.ComponentProps<typeof SignIn>;

const defaultUserEmail = defaultUser.email ?? "";

const View = ({ user, error, onSubmit }: SignInViewProps) => (
  <>
    <p>{user?.email}</p>
    <p>{error?.message}</p>
    <button
      onClick={() =>
        onSubmit({
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
      <SignIn {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<SignIn />", () => {
  it("should login", async () => {
    expect.hasAssertions();

    mockAuthStorage.set([defaultUser]);

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    await waitFor(async () =>
      expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument()
    );

    expect(await screen.findByText(defaultUserEmail)).toBeInTheDocument();
  });

  it("should fail to login", async () => {
    expect.hasAssertions();
    const message = "Invalid login credentials";

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    await waitFor(async () =>
      expect(await screen.findByText(message)).toBeInTheDocument()
    );

    expect(await screen.findByText(message)).toBeInTheDocument();
  });
});
