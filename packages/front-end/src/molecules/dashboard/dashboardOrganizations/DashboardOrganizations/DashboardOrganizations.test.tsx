import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  addOrganizationsScenario,
  addProfileScenario,
} from "../../../../tests/mockScenarios";
import { DashboardOrganizationsViewProps } from "../DashboardOrganizationsView/DashboardOrganizationsView";
import DashboardOrganizations from "./DashboardOrganizations";

type ComponentProps = React.ComponentProps<typeof DashboardOrganizations>;

const View = ({
  organizations,
  isLoading,
}: DashboardOrganizationsViewProps) => (
  <>
    <p>{`isLoading:${isLoading}`}</p>
    {organizations?.map((organization) => (
      <p key={organization.id}>{organization.name}</p>
    ))}
  </>
);

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

    const profile = addProfileScenario();
    const organizations = addOrganizationsScenario(profile.id);

    renderComponent();

    await waitFor(async () =>
      expect(await screen.findByText(organizations[0].name)).toBeInTheDocument()
    );

    expect(await screen.findByText(organizations[0].name)).toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
