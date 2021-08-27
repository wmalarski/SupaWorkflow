import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import WorkflowEditorView from "./WorkflowEditorView";

type ComponentProps = Parameters<typeof WorkflowEditorView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    data: "Hello",
  };
  return render(<WorkflowEditorView {...defaultProps} {...props} />);
}

describe("<WorkflowEditorView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
