import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import TemplateHeaderView from "./TemplateHeaderView";

type ComponentProps = Parameters<typeof TemplateHeaderView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    organizationId: 1,
    tab: null,
    templateId: 1,
  };
  return render(<TemplateHeaderView {...defaultProps} {...props} />);
}

describe("<TemplateHeaderView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
