import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import TemplateSideBarView from "./TemplateSideBarView";

type ComponentProps = Parameters<typeof TemplateSideBarView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    data: "Hello",
  };
  return render(<TemplateSideBarView {...defaultProps} {...props} />);
}

describe("<TemplateSideBarView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
