import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultTeamMember } from "../../../../services";
import { ContextsMock } from "../../../../tests/wrappers";
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
    teamMembers: Array(5)
      .fill(defaultTeamMember)
      .map((team, index) => ({ ...team, id: index })),
  };
  return render(
    <ContextsMock>
      <OrganizationTeamView {...defaultProps} {...props} />
    </ContextsMock>
  );
}

describe("<OrganizationTeamView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
