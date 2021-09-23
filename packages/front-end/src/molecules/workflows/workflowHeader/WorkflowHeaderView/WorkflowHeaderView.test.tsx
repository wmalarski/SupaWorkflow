import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import WorkflowHeaderView from "./WorkflowHeaderView";

type ComponentProps = Parameters<typeof WorkflowHeaderView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    organizationId: 1,
    tab: null,
    workflowId: 1,
  };
  return render(<WorkflowHeaderView {...defaultProps} {...props} />);
}

describe("<WorkflowHeaderView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
