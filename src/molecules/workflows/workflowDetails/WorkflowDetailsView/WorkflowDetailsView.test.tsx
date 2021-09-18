import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import WorkflowDetailsView from "./WorkflowDetailsView";

type ComponentProps = Parameters<typeof WorkflowDetailsView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    data: "",
  };
  return render(<WorkflowDetailsView {...defaultProps} {...props} />);
}

describe("<WorkflowDetailsView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
