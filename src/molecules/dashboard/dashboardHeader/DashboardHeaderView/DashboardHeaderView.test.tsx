import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { DashboardTab } from "../../../../utils";
import DashboardHeaderView from "./DashboardHeaderView";

type ComponentProps = Parameters<typeof DashboardHeaderView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    tab: DashboardTab.new,
  };
  return render(<DashboardHeaderView {...defaultProps} {...props} />);
}

describe("<DashboardHeaderView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
