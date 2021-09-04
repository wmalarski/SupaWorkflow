import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { addTeamsScenario } from "../../../../tests/mockScenarios";
import { ContextsMock } from "../../../../tests/wrappers";
import { OrganizationTeamsViewProps } from "../OrganizationTeamsView/OrganizationTeamsView";
import OrganizationTeams from "./OrganizationTeams";

type ComponentProps = React.ComponentProps<typeof OrganizationTeams>;

const View = ({ teams }: OrganizationTeamsViewProps) => (
  <>
    {teams?.map((team) => (
      <React.Fragment key={team.id}>
        <p>{team.name}</p>
        <button>{`Delete ${team.name}`}</button>
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

    await waitFor(async () =>
      expect(await screen.findByText("Team Name-0")).toBeInTheDocument()
    );

    expect(await screen.findByText("Team Name-0")).toBeInTheDocument();
  });

  it("should delete", async () => {
    expect.hasAssertions();

    addTeamsScenario();

    renderComponent();

    await waitFor(async () =>
      expect(await screen.findByText("Team Name-0")).toBeInTheDocument()
    );

    userEvent.click(await screen.findByText("Delete Team Name-0"));

    await waitFor(async () =>
      expect(screen.queryByText("Team Name-0")).toBeNull()
    );

    expect(screen.queryByText("Team Name-0")).toBeNull();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    addTeamsScenario();

    renderComponent({ View: undefined });

    await waitFor(async () =>
      expect(await screen.findByText("Team Name-0")).toBeInTheDocument()
    );

    expect(await screen.findByText("Team Name-0")).toBeInTheDocument();
  });
});
