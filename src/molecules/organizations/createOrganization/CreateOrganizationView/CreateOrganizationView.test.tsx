import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import CreateOrganizationView from "./CreateOrganizationView";

type ComponentProps = Parameters<typeof CreateOrganizationView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    isLoading: false,
    onSubmit: () => void 0,
  };
  return render(<CreateOrganizationView {...defaultProps} {...props} />);
}

describe("<CreateOrganizationView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
