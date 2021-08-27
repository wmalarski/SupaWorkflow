import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import OrganizationTeamView from "./OrganizationTeamView";

type ComponentProps = Parameters<typeof OrganizationTeamView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    data: "Hello",
  };
  return render(<OrganizationTeamView {...defaultProps} {...props} />);
}

describe("<OrganizationTeamView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
