import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import TeamHeaderView from "./TeamHeaderView";

type ComponentProps = Parameters<typeof TeamHeaderView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    organizationId: 1,
    teamId: 1,
  };
  return render(<TeamHeaderView {...defaultProps} {...props} />);
}

describe("<TeamHeaderView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
