import { defaultUser } from "@supa-workflow/services";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import SignInView from "./SignInView";

type ComponentProps = React.ComponentProps<typeof SignInView>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    error: null,
    isLoading: false,
    onSubmit: () => null,
    user: defaultUser,
  };
  return render(<SignInView {...defaultProps} {...props} />);
}

describe("<SignInView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
