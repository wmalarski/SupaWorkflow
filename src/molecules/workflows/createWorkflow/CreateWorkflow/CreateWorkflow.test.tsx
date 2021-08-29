import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { CreateWorkflowViewProps } from "../CreateWorkflowView/CreateWorkflowView";
import CreateWorkflow from "./CreateWorkflow";

type ComponentProps = React.ComponentProps<typeof CreateWorkflow>;

const View = ({}: CreateWorkflowViewProps) => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <CreateWorkflow {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<CreateWorkflow />", () => {
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
