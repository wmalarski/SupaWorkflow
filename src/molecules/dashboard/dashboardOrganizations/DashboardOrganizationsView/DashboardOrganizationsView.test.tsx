import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultOrganization } from "services";
import DashboardOrganizationsView from "./DashboardOrganizationsView";

type ComponentProps = Parameters<typeof DashboardOrganizationsView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    isLoading: false,
    organizations: [
      { ...defaultOrganization, id: 1, name: "Org 1" },
      { ...defaultOrganization, id: 2, name: "Org 2" },
      { ...defaultOrganization, id: 3, name: "Org 3" },
      { ...defaultOrganization, id: 4, name: "Org 4" },
      { ...defaultOrganization, id: 5, name: "Org 5" },
    ],
  };
  return render(<DashboardOrganizationsView {...defaultProps} {...props} />);
}

describe("<DashboardOrganizationsView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });

  it("should render without organizations", async () => {
    expect.hasAssertions();

    renderComponent({ organizations: null });

    expect(true).toBeTruthy();
  });
});
