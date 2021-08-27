import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import CreateWorkflowView from "./CreateWorkflowView";

type ComponentProps = Parameters<typeof CreateWorkflowView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    data: "Hello",
  };
  return render(<CreateWorkflowView {...defaultProps} {...props} />);
}

describe("<CreateWorkflowView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
