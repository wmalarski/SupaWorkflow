import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultWorkflows } from "services";
import WorkflowsListView from "./WorkflowsListView";

type ComponentProps = Parameters<typeof WorkflowsListView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    onPageChange: () => void 0,
    page: 0,
    pageSize: 10,
    count: 5,
    isLoading: false,
    workflows: defaultWorkflows,
  };
  return render(<WorkflowsListView {...defaultProps} {...props} />);
}

describe("<WorkflowsListView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
