import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import OrganizationDashboardView from "./OrganizationDashboardView";

type ComponentProps = Parameters<typeof OrganizationDashboardView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    data: "Hello",
  };
  return render(<OrganizationDashboardView {...defaultProps} {...props} />);
}

describe("<OrganizationDashboardView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
