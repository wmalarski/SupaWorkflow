import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import NewTeamMemberView from "./NewTeamMemberView";

type ComponentProps = Parameters<typeof NewTeamMemberView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    data: "hello",
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
