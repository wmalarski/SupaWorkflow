import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import { OrganizationTeamViewProps } from "../OrganizationTeamView/OrganizationTeamView";
import OrganizationTeam from "./OrganizationTeam";

type ComponentProps = React.ComponentProps<typeof OrganizationTeam>;

const View = ({ teamMembers, onDeleteClick }: OrganizationTeamViewProps) => (
  <>
    {teamMembers?.map((teamMember) => (
      <p key={teamMember.id}>{teamMember.id}</p>
    ))}
    <button onClick={() => onDeleteClick(0)}>Delete</button>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <OrganizationTeam {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<OrganizationTeam />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });

  it("should render undefined", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
