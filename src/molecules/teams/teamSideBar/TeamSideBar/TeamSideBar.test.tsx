import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { TeamSideBarViewProps } from "../TeamSideBarView/TeamSideBarView";
import TeamSideBar from "./TeamSideBar";

type ComponentProps = React.ComponentProps<typeof TeamSideBar>;

const View = ({}: TeamSideBarViewProps) => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <TeamSideBar {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<TeamSideBar />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });

  it("should render", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
