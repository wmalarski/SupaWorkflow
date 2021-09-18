import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import DashboardCornerView from "./DashboardCornerView";

function renderComponent() {
  return render(<DashboardCornerView />);
}

describe("<DashboardCornerView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
