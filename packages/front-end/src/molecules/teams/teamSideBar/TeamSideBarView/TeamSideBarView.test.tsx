import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import TeamSideBarView from "./TeamSideBarView";

type ComponentProps = Parameters<typeof TeamSideBarView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    organizationId: 1,
    teamId: 1,
  };
  return render(<TeamSideBarView {...defaultProps} {...props} />);
}

describe("<TeamSideBarView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
