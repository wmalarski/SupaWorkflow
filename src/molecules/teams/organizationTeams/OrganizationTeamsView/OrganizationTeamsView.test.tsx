import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import OrganizationTeamsView from "./OrganizationTeamsView";

type ComponentProps = Parameters<typeof OrganizationTeamsView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    data: "Hello",
  };
  return render(<OrganizationTeamsView {...defaultProps} {...props} />);
}

describe("<OrganizationTeamsView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
