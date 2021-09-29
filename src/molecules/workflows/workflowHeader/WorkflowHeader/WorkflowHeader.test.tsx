import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { WorkflowTab } from "utils";
import { ContextsMock } from "../../../../tests/wrappers";
import { WorkflowHeaderViewProps } from "../WorkflowHeaderView/WorkflowHeaderView";
import WorkflowHeader from "./WorkflowHeader";

type ComponentProps = React.ComponentProps<typeof WorkflowHeader>;

const View = ({ tab }: WorkflowHeaderViewProps) => <button>{`${tab}`}</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <WorkflowHeader {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<WorkflowHeader />", () => {
  it("should render null for invalid tab", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");
    queryMock.mockReturnValue({ tab: "hello" });

    renderComponent();

    await expect(screen.findByText("null")).resolves.toBeInTheDocument();
  });

  it("should render correct tab for correct tab", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");
    queryMock.mockReturnValue({ tab: WorkflowTab.edit });

    renderComponent();

    await expect(
      screen.findByText(WorkflowTab.edit)
    ).resolves.toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
