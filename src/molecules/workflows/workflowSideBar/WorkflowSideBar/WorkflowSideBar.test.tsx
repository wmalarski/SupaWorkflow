import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { WorkflowSideBarViewProps } from "../WorkflowSideBarView/WorkflowSideBarView";
import WorkflowSideBar from "./WorkflowSideBar";

type ComponentProps = React.ComponentProps<typeof WorkflowSideBar>;

const View = ({}: WorkflowSideBarViewProps) => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <WorkflowSideBar {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<WorkflowSideBar />", () => {
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
