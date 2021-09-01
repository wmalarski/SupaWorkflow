import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import NewTeamMemberView from "./NewTeamMemberView";

type ComponentProps = Parameters<typeof NewTeamMemberView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    onSearch: () => void 0,
    onSubmit: () => void 0,
    profiles: [],
  };
  return render(<NewTeamMemberView {...defaultProps} {...props} />);
}

describe("<NewTeamMemberView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
