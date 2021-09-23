import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import LandingHeaderView from "./LandingHeaderView";

function renderComponent() {
  return render(<LandingHeaderView />);
}

describe("<LandingHeaderView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
