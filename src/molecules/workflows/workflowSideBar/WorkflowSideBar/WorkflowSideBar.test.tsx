import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import { WorkflowSideBarViewProps } from "../WorkflowSideBarView/WorkflowSideBarView";
import WorkflowSideBar from "./WorkflowSideBar";

type ComponentProps = React.ComponentProps<typeof WorkflowSideBar>;

const View = (props: WorkflowSideBarViewProps) => (
  <button>{JSON.stringify(props, null, 2)}</button>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <WorkflowSideBar {...defaultProps} {...props} />
    </ContextsMock>
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
