import { defaultProfile } from "@supa-workflow/services";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import ProfileSettingsView from "./ProfileSettingsView";

type ComponentProps = Parameters<typeof ProfileSettingsView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    isLoading: false,
    onSubmit: () => void 0,
    profile: defaultProfile,
  };
  return render(<ProfileSettingsView {...defaultProps} {...props} />);
}

describe("<ProfileSettingsView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
