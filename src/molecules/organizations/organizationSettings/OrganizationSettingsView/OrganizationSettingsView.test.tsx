import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultOrganization } from "services";
import OrganizationSettingsView from "./OrganizationSettingsView";

type ComponentProps = Parameters<typeof OrganizationSettingsView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    organization: defaultOrganization,
    isLoading: false,
    isSuccess: false,
    onDeleteSubmit: () => void 0,
    onUpdateSubmit: () => void 0,
  };
  return render(<OrganizationSettingsView {...defaultProps} {...props} />);
}

describe("<OrganizationSettingsView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
