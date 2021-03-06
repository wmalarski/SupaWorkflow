import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { mockDb } from "../../../../tests/mockDb";
import { addTeamsScenario } from "../../../../tests/mockScenarios";
import { ContextsMock } from "../../../../tests/wrappers";
import { OrganizationTeamsViewProps } from "../OrganizationTeamsView/OrganizationTeamsView";
import OrganizationTeams from "./OrganizationTeams";

type ComponentProps = React.ComponentProps<typeof OrganizationTeams>;

const View = ({ teams, onDeleteTeam }: OrganizationTeamsViewProps) => (
  <>
    {teams?.map((team) => (
      <React.Fragment key={team.id}>
        <p>{team.name}</p>
        <button
          onClick={() => onDeleteTeam(team.id)}
        >{`Delete ${team.name}`}</button>
      </React.Fragment>
    ))}
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <OrganizationTeams {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<OrganizationTeams />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    addTeamsScenario();

    renderComponent();

    await waitFor(
      async () =>
        await expect(
          screen.findByText("Team Name-0")
        ).resolves.toBeInTheDocument()
    );

    await expect(screen.findByText("Team Name-0")).resolves.toBeInTheDocument();
  });

  it("should delete", async () => {
    expect.hasAssertions();

    const teams = addTeamsScenario();

    renderComponent();

    await waitFor(
      async () =>
        await expect(
          screen.findByText("Team Name-0")
        ).resolves.toBeInTheDocument()
    );

    userEvent.click(await screen.findByText("Delete Team Name-0"));

    await waitFor(
      async () =>
        await expect(mockDb.team.count()).resolves.toStrictEqual(
          teams.length - 1
        )
    );

    expect(mockDb.team.count()).toStrictEqual(teams.length - 1);
  });

  it("should render default", async () => {
    expect.hasAssertions();

    addTeamsScenario();

    renderComponent({ View: undefined });

    await waitFor(
      async () =>
        await expect(
          screen.findByText("Team Name-0")
        ).resolves.toBeInTheDocument()
    );

    await expect(screen.findByText("Team Name-0")).resolves.toBeInTheDocument();
  });
});
