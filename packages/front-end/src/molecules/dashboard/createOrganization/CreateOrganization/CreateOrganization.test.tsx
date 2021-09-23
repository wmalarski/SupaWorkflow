import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { addProfileScenario } from "../../../../tests/mockScenarios";
import { ContextsMock, ContextsMockProps } from "../../../../tests/wrappers";
import { CreateOrganizationViewProps } from "../CreateOrganizationView/CreateOrganizationView";
import CreateOrganization from "./CreateOrganization";

type ComponentProps = React.ComponentProps<typeof CreateOrganization>;

const View = ({
  isLoading,
  onSubmit,
  error,
  organization,
}: CreateOrganizationViewProps) => (
  <>
    <p>{`isLoading:${isLoading}`}</p>
    <p>{`error:${error?.message}`}</p>
    <p>{`organization:${organization?.id}`}</p>
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

const renderComponent = ({
  props,
  contexts,
}: {
  props?: Partial<ComponentProps>;
  contexts?: Partial<ContextsMockProps>;
} = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock {...contexts}>
      <CreateOrganization {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<CreateOrganization />", () => {
  it("should render and success", async () => {
    expect.hasAssertions();

    const profile = addProfileScenario();

    renderComponent({ contexts: { profile } });

    userEvent.click(await screen.findByText("Click"));

    const { push } = jest.requireMock("next/router").default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledTimes(1);
  });

  it("should render and fail - no profile", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    await waitFor(async () =>
      expect(await screen.findByText("error:Wrong author")).toBeInTheDocument()
    );

    expect(await screen.findByText("error:Wrong author")).toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ props: { View: undefined } });

    expect(true).toBeTruthy();
  });
});
