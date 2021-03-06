import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import { OrganizationDashboardViewProps } from "../OrganizationDashboardView/OrganizationDashboardView";
import OrganizationDashboard from "./OrganizationDashboard";

type ComponentProps = React.ComponentProps<typeof OrganizationDashboard>;

const View = ({ data }: OrganizationDashboardViewProps) => (
  <button>{JSON.stringify(data, null, 2)}</button>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <OrganizationDashboard {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<OrganizationDashboard />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
