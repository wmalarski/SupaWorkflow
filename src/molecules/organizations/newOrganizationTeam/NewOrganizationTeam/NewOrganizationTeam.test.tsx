import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import { NewOrganizationTeamViewProps } from "../NewOrganizationTeamView/NewOrganizationTeamView";
import NewOrganizationTeam from "./NewOrganizationTeam";

type ComponentProps = React.ComponentProps<typeof NewOrganizationTeam>;

const View = ({ onSubmit, team }: NewOrganizationTeamViewProps) => (
  <>
    <button
      onClick={() =>
        onSubmit({
          color: "#ffeeaa",
          description: "Description",
          name: "Team Name",
        })
      }
    >
      Click
    </button>
    <p>{team?.name}</p>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <NewOrganizationTeam {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<NewOrganizationTeam />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    await waitFor(
      async () =>
        await expect(
          screen.findByText("Team Name")
        ).resolves.toBeInTheDocument()
    );

    await expect(screen.findByText("Team Name")).resolves.toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
