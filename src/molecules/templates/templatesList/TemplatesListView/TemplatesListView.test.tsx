import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import TemplatesListView from "./TemplatesListView";

type ComponentProps = Parameters<typeof TemplatesListView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    isLoading: false,
    organizationId: 1,
  };
  return render(<TemplatesListView {...defaultProps} {...props} />);
}

describe("<TemplatesListView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
