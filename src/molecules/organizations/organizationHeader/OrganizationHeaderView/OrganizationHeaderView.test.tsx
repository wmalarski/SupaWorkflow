import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { OrganizationTab } from "../../../../utils";
import OrganizationHeaderView from "./OrganizationHeaderView";

type ComponentProps = Parameters<typeof OrganizationHeaderView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    organizationId: 1,
    tab: OrganizationTab.members,
  };
  return render(<OrganizationHeaderView {...defaultProps} {...props} />);
}

describe("<OrganizationHeaderView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
