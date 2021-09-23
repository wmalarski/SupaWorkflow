import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import LandingTopView from "./LandingTopView";

function renderComponent() {
  return render(<LandingTopView />);
}

describe("<LandingTopView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
