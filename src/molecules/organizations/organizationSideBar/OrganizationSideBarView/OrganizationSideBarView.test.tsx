import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import OrganizationSideBarView from "./OrganizationSideBarView";

type ComponentProps = Parameters<typeof OrganizationSideBarView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    organizationId: 1,
  };
  return render(
    <ContextsMock>
      <OrganizationSideBarView {...defaultProps} {...props} />
    </ContextsMock>
  );
}

describe("<OrganizationSideBarView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
