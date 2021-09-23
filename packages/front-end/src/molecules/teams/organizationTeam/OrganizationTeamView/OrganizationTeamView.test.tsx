import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultTeamMembers } from "../../../../services";
import OrganizationTeamView from "./OrganizationTeamView";

type ComponentProps = Parameters<typeof OrganizationTeamView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    onDeleteClick: () => void 0,
    onPageChange: () => void 0,
    page: 0,
    pageSize: 10,
    count: 30,
    isLoading: false,
    teamMembers: defaultTeamMembers,
    organizationRole: "mod",
  };
  return render(<OrganizationTeamView {...defaultProps} {...props} />);
}

describe("<OrganizationTeamView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
