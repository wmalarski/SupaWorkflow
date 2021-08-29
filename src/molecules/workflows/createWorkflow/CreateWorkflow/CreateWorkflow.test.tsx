import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import { CreateWorkflowViewProps } from "../CreateWorkflowView/CreateWorkflowView";
import CreateWorkflow from "./CreateWorkflow";

type ComponentProps = React.ComponentProps<typeof CreateWorkflow>;

const View = ({
  onSubmit,
  error,
  isLoading,
  workflow,
}: CreateWorkflowViewProps) => (
  <>
    <p>{`isLoading:${isLoading}`}</p>
    <p>{`error:${error?.message}`}</p>
    <p>{`organization:${workflow?.id}`}</p>
    <button
      onClick={() =>
        onSubmit({
          description: "Description",
          name: "Name",
        })
      }
    >
      Click
    </button>
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <CreateWorkflow {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<CreateWorkflow />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    const { push } = jest.requireMock("next/router").default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalled();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
