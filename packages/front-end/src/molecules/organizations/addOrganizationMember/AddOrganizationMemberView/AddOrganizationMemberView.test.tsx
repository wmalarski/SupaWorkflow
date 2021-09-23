import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import AddOrganizationMemberView from "./AddOrganizationMemberView";

type ComponentProps = Parameters<typeof AddOrganizationMemberView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    isLoading: false,
    onSubmit: () => void 0,
  };
  return render(<AddOrganizationMemberView {...defaultProps} {...props} />);
}

describe("<AddOrganizationMemberView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
