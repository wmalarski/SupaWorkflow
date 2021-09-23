import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import { WorkflowDetailsViewProps } from "../WorkflowDetailsView/WorkflowDetailsView";
import WorkflowDetails from "./WorkflowDetails";

type ComponentProps = React.ComponentProps<typeof WorkflowDetails>;

const View = ({ data }: WorkflowDetailsViewProps) => (
  <>
    <button>Click</button>
    <p>{data}</p>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <WorkflowDetails {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<WorkflowDetails />", () => {
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
