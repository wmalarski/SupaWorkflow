import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Button from "./Button";

type ComponentProps = React.ComponentProps<typeof Button>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    children: "AAA",
  };
  return render(<Button {...defaultProps} {...props} />);
}

describe("<Button />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
