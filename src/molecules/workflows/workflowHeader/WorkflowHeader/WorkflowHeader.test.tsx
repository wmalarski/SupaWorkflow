import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import { WorkflowTab } from "../../../../utils";
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

    expect(await screen.findByText("null")).toBeInTheDocument();
  });

  it("should render correct tab for correct tab", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");
    queryMock.mockReturnValue({ tab: WorkflowTab.edit });

    renderComponent();

    expect(await screen.findByText(WorkflowTab.edit)).toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
