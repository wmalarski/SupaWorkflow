import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultTeam } from "services";
import OrganizationTeamsView from "./OrganizationTeamsView";

type ComponentProps = Parameters<typeof OrganizationTeamsView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    isLoading: false,
    organizationId: 1,
    organizationRole: "mod",
    onPageChange: () => void 0,
    onDeleteTeam: () => void 0,
    page: 0,
    pageSize: 10,
    count: 20,
    teams: Array(5)
      .fill(defaultTeam)
      .map((team, index) => ({ ...team, id: index })),
  };
  return render(<OrganizationTeamsView {...defaultProps} {...props} />);
}

describe("<OrganizationTeamsView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
