import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { addTeamsScenario } from "../../../../tests/mockScenarios";
import { ContextsMock } from "../../../../tests/wrappers";
import { OrganizationTeamsViewProps } from "../OrganizationTeamsView/OrganizationTeamsView";
import OrganizationTeams from "./OrganizationTeams";

type ComponentProps = React.ComponentProps<typeof OrganizationTeams>;

const View = ({ teams }: OrganizationTeamsViewProps) => (
  <>
    {teams?.map((team) => (
      <p key={team.id}>{team.name}</p>
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
