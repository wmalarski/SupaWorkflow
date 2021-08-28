import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { DashboardOrganizationsViewProps } from "../DashboardOrganizationsView/DashboardOrganizationsView";
import DashboardOrganizations from "./DashboardOrganizations";

type ComponentProps = React.ComponentProps<typeof DashboardOrganizations>;

const View = ({}: DashboardOrganizationsViewProps) => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <DashboardOrganizations {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<DashboardOrganizations />", () => {
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
