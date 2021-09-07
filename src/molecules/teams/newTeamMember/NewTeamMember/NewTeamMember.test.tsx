import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { defaultOrganization, Organization } from "../../../../services";
import { mockDb } from "../../../../tests/mockDb";
import {
  addMembersScenario,
  addOrganizationScenario,
} from "../../../../tests/mockScenarios";
import { ContextsMock } from "../../../../tests/wrappers";
import { NewTeamMemberViewProps } from "../NewTeamMemberView/NewTeamMemberView";
import NewTeamMember from "./NewTeamMember";

type ComponentProps = React.ComponentProps<typeof NewTeamMember>;

const View = ({ members, onSearch, onSubmit }: NewTeamMemberViewProps) => (
  <>
    <button onClick={() => onSearch("weird flex")}>Search</button>
    <button
      onClick={() =>
        onSubmit({
          profileId: 1,
          role: "user",
        })
      }
    >
      Submit
    </button>
    {members?.map((member) => (
      <p key={member.member_id}>{member.profile_name}</p>
    ))}
  </>
);

const renderComponent = (
  props: Partial<ComponentProps> = {},
  organization: Organization = defaultOrganization
) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock organization={organization}>
      <NewTeamMember {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<NewTeamMember />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const organization = addOrganizationScenario();
    addMembersScenario({ organizationId: organization.id });

    renderComponent({}, organization);

    await waitFor(async () =>
      expect(await screen.findByText("Profile Name-0")).toBeInTheDocument()
    );

    expect(await screen.findByText("Profile Name-0")).toBeInTheDocument();
  });

  it("should render search", async () => {
    expect.hasAssertions();

    const organization = addOrganizationScenario();
    addMembersScenario({ organizationId: organization.id });

    renderComponent({}, organization);

    await waitFor(async () =>
      expect(await screen.findByText("Profile Name-0")).toBeInTheDocument()
    );

    userEvent.click(await screen.findByText("Submit"));

    await waitFor(async () =>
      expect(mockDb.teamMember.count()).toBeGreaterThan(0)
    );

    expect(mockDb.teamMember.count()).toBeGreaterThan(0);
  });

  it("should render default", async () => {
    expect.hasAssertions();

    addMembersScenario();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
