import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultTemplate } from "../../../../services";
import TemplatesListView from "./TemplatesListView";

type ComponentProps = Parameters<typeof TemplatesListView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    isLoading: false,
    organizationId: 1,
    onPageChange: () => void 0,
    page: 0,
    pageSize: 10,
    count: 20,
    templates: Array(5)
      .fill(defaultTemplate)
      .map((template, index) => ({ ...template, id: index })),
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
