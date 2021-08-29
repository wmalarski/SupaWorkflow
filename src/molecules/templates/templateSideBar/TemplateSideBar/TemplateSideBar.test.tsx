import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { TemplateSideBarViewProps } from "../TemplateSideBarView/TemplateSideBarView";
import TemplateSideBar from "./TemplateSideBar";

type ComponentProps = React.ComponentProps<typeof TemplateSideBar>;

const View = ({}: TemplateSideBarViewProps) => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <TemplateSideBar {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<TemplateSideBar />", () => {
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
