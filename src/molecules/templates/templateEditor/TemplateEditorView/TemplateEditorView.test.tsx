import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import TemplateEditorView from "./TemplateEditorView";

type ComponentProps = Parameters<typeof TemplateEditorView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    messages: [],
    onDeleteClick: () => void 0,
    onMessageChange: () => void 0,
    templateId: 1,
  };
  return render(<TemplateEditorView {...defaultProps} {...props} />);
}

describe("<TemplateEditorView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
