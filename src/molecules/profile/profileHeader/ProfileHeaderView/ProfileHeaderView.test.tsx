import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import ProfileHeaderView from "./ProfileHeaderView";

type ComponentProps = Parameters<typeof ProfileHeaderView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    onSignOutClicked: () => void 0,
  };
  return render(<ProfileHeaderView {...defaultProps} {...props} />);
}

describe("<ProfileHeaderView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
