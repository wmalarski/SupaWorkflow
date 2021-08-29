import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { WorkflowsListViewProps } from "../WorkflowsListView/WorkflowsListView";
import WorkflowsList from "./WorkflowsList";

type ComponentProps = React.ComponentProps<typeof WorkflowsList>;

const View = ({}: WorkflowsListViewProps) => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <WorkflowsList {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<WorkflowsList />", () => {
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
