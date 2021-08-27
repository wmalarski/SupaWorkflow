import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import CreateTemplateView from "./CreateTemplateView";

type ComponentProps = Parameters<typeof CreateTemplateView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    isLoading: false,
    onSubmit: () => void 0,
  };
  return render(<CreateTemplateView {...defaultProps} {...props} />);
}

describe("<CreateTemplateView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
