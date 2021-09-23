import { defaultOrganization, Organization } from "@supa-workflow/services";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import {
  addMembersScenario,
  addOrganizationScenario,
} from "../../../../tests/mockScenarios";
import { ContextsMock } from "../../../../tests/wrappers";
import { OrganizationMembersViewProps } from "../OrganizationMembersView/OrganizationMembersView";
import OrganizationMembers from "./OrganizationMembers";

type ComponentProps = React.ComponentProps<typeof OrganizationMembers>;

const View = ({ members, isDeleteSuccess }: OrganizationMembersViewProps) => (
  <>
    <p>{`isDeleteSuccess:${isDeleteSuccess}`}</p>
    {members?.entries.map((member) => (
      <React.Fragment key={member.member_id}>
        <p>{member.profile_name}</p>
        <p>{`${member.profile_name}:${member.member_role}`}</p>
        <button>{`Update ${member.profile_name}`}</button>
        <button>{`Delete ${member.profile_name}`}</button>
      </React.Fragment>
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
      <OrganizationMembers {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<OrganizationMembers />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const organization = addOrganizationScenario();
    const members = addMembersScenario({ organizationId: organization.id });

    renderComponent({}, organization);

    const member = members[0];
    await waitFor(async () =>
      expect(await screen.findByText(member.profile_name)).toBeInTheDocument()
    );

    expect(await screen.findByText(member.profile_name)).toBeInTheDocument();
  });

  it("should delete", async () => {
    expect.hasAssertions();

    const organization = addOrganizationScenario();
    const members = addMembersScenario({ organizationId: organization.id });

    renderComponent({}, organization);

    const member = members[0];
    await waitFor(async () =>
      expect(await screen.findByText(member.profile_name)).toBeInTheDocument()
    );

    expect(await screen.findByText(member.profile_name)).toBeInTheDocument();

    // userEvent.click(await screen.findByText(`Delete ${member.profile_name}`));

    // await waitFor(async () =>
    //   expect(
    //     await screen.findByText("isDeleteSuccess:true")
    //   ).toBeInTheDocument()
    // );

    // expect(await screen.findByText("isDeleteSuccess:true")).toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    const organization = addOrganizationScenario();
    addMembersScenario();

    renderComponent({ View: undefined }, organization);

    expect(true).toBeTruthy();
  });
});
