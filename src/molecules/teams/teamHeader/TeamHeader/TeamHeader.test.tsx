import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { defaultOrganization, defaultTeam } from "services";
import { ContextsMock } from "../../../../tests/wrappers";
import { TeamHeaderViewProps } from "../TeamHeaderView/TeamHeaderView";
import TeamHeader from "./TeamHeader";

type ComponentProps = React.ComponentProps<typeof TeamHeader>;

const View = ({ teamId, organizationId }: TeamHeaderViewProps) => (
  <>
    <p>{`Team:${teamId}`}</p>
    <p>{`Organization:${organizationId}`}</p>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <TeamHeader {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<TeamHeader />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    await expect(
      screen.findByText(`Team:${defaultTeam.id}`)
    ).resolves.toBeInTheDocument();
    await expect(
      screen.findByText(`Organization:${defaultOrganization.id}`)
    ).resolves.toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
