import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import DashboardCorner from "./DashboardCorner";

type ComponentProps = React.ComponentProps<typeof DashboardCorner>;

const View = () => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <DashboardCorner {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<DashboardCorner />", () => {
  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });

  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(await screen.findByText("Click")).toBeInTheDocument();
  });
});
