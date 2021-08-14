import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Alert from "./Alert";

type ComponentProps = Omit<React.ComponentProps<typeof Alert>, "css">;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    variant: "red",
    children: "AAA",
  };
  return render(<Alert {...defaultProps} {...props} />);
}

describe("<Alert />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
