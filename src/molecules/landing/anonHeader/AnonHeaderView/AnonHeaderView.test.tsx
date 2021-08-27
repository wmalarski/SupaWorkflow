import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import AnonHeaderView from "./AnonHeaderView";

function renderComponent() {
  return render(<AnonHeaderView />);
}

describe("<AnonHeaderView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
