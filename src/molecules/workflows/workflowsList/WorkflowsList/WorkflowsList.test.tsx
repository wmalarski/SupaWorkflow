import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { addWorkflowsScenario } from "../../../../tests/mockScenarios";
import { ContextsMock } from "../../../../tests/wrappers";
import { WorkflowsListViewProps } from "../WorkflowsListView/WorkflowsListView";
import WorkflowsList from "./WorkflowsList";

type ComponentProps = React.ComponentProps<typeof WorkflowsList>;

const View = ({ workflows }: WorkflowsListViewProps) => (
  <>
    {workflows?.map((workflow) => (
      <p key={workflow.id}>{workflow.name}</p>
    ))}
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <WorkflowsList {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<WorkflowsList />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    addWorkflowsScenario();

    renderComponent();

    await waitFor(async () =>
      expect(await screen.findByText("Workflow Name-0")).toBeInTheDocument()
    );

    expect(await screen.findByText("Workflow Name-0")).toBeInTheDocument();
  });
  it("should render default", async () => {
    expect.hasAssertions();

    addWorkflowsScenario();

    renderComponent({ View: undefined });

    await waitFor(async () =>
      expect(await screen.findByText("Workflow Name-0")).toBeInTheDocument()
    );

    expect(await screen.findByText("Workflow Name-0")).toBeInTheDocument();
  });
});
