import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  addOrganizationsScenario,
  addProfileScenario,
} from "../../../../tests/mockScenarios";
import { DashboardSideBarViewProps } from "../DashboardSideBarView/DashboardSideBarView";
import DashboardSideBar from "./DashboardSideBar";

type ComponentProps = React.ComponentProps<typeof DashboardSideBar>;

const View = ({ organizations, isLoading }: DashboardSideBarViewProps) => (
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
      <DashboardSideBar {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<DashboardSideBar />", () => {
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
