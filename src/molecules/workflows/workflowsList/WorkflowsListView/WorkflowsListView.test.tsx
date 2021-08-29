import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import WorkflowsListView from "./WorkflowsListView";

type ComponentProps = Parameters<typeof WorkflowsListView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {};
  return render(<WorkflowsListView {...defaultProps} {...props} />);
}

describe("<WorkflowsListView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
