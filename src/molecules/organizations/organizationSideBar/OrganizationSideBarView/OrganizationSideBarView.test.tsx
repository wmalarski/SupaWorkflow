import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import OrganizationSideBarView from "./OrganizationSideBarView";

type ComponentProps = Parameters<typeof OrganizationSideBarView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    organizationRole: "mod",
    organizationId: 1,
    tab: null,
  };
  return render(<OrganizationSideBarView {...defaultProps} {...props} />);
}

describe("<OrganizationSideBarView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
