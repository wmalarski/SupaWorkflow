import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { mockDb } from "../../../../tests/mockDb";
import {
  addOrganizationScenario,
  addProfileScenario,
} from "../../../../tests/mockScenarios";
import { ContextsMock, ContextsMockProps } from "../../../../tests/wrappers";
import { AddOrganizationMemberViewProps } from "../AddOrganizationMemberView/AddOrganizationMemberView";
import AddOrganizationMember from "./AddOrganizationMember";

type ComponentProps = React.ComponentProps<typeof AddOrganizationMember>;

const View = ({
  onSubmit,
  error,
  isLoading,
}: AddOrganizationMemberViewProps) => (
  <>
    <p>{`error:${error?.message}`}</p>
    <p>{`isLoading:${isLoading}`}</p>
    <button
      onClick={() => onSubmit({ email: "mail@example.com", role: "mod" })}
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
    <ContextsMock>
      <AddOrganizationMember {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<AddOrganizationMember />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const profile = addProfileScenario();
    const organization = addOrganizationScenario();

    renderComponent({ contexts: { profile, organization } });

    userEvent.click(await screen.findByText("Click"));

    await waitFor(async () =>
      expect(await screen.findByText("isLoading:false")).toBeInTheDocument()
    );

    expect(mockDb.organizationMembers.count()).toEqual(1);
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ props: { View: undefined } });

    expect(true).toBeTruthy();
  });
});
