import { defaultOrganization, defaultTeam } from "@supa-workflow/services";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
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

    expect(
      await screen.findByText(`Team:${defaultTeam.id}`)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(`Organization:${defaultOrganization.id}`)
    ).toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
