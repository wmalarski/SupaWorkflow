import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import { CreateTemplateViewProps } from "../CreateTemplateView/CreateTemplateView";
import CreateTemplate from "./CreateTemplate";

type ComponentProps = React.ComponentProps<typeof CreateTemplate>;

const View = ({
  isLoading,
  error,
  template,
  onSubmit,
}: CreateTemplateViewProps) => (
  <>
    <p>{`isLoading:${isLoading}`}</p>
    <p>{`error:${error?.message}`}</p>
    <p>{`organization:${template?.id}`}</p>
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
      <CreateTemplate {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<CreateTemplate />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    const { push } = jest.requireMock("next/router").default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledTimes(1);
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
