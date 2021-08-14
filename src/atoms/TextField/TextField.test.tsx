import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import TextField from "./TextField";

type ComponentProps = React.ComponentProps<typeof TextField>;

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {};
  return render(<TextField {...defaultProps} {...props} />);
}

describe("<TextField />", () => {
  it("should have textbox role", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByRole("textbox")).toBeInTheDocument();
  });
});
