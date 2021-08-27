import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import NewOrganizationTeamView from "./NewOrganizationTeamView";

type ComponentProps = Parameters<typeof NewOrganizationTeamView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    isLoading: false,
    onSubmit: () => void 0,
  };
  return render(<NewOrganizationTeamView {...defaultProps} {...props} />);
}

describe("<NewOrganizationTeamView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
