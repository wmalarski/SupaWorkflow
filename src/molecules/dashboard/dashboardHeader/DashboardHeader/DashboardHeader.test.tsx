import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { DashboardTab } from "utils";
import { DashboardHeaderViewProps } from "../DashboardHeaderView/DashboardHeaderView";
import DashboardHeader from "./DashboardHeader";

type ComponentProps = React.ComponentProps<typeof DashboardHeader>;

const View = ({ tab }: DashboardHeaderViewProps) => <button>{`${tab}`}</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <DashboardHeader {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<DashboardHeader />", () => {
  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });

  it("should render null for invalid tab", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");
    queryMock.mockReturnValue({ tab: "hello" });

    renderComponent();

    expect(await screen.findByText("null")).toBeInTheDocument();
  });

  it("should render correct tab for correct tab", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");
    queryMock.mockReturnValue({ tab: DashboardTab.new });

    renderComponent();

    expect(await screen.findByText(DashboardTab.new)).toBeInTheDocument();
  });
});
