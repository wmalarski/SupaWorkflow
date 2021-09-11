import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { defaultOrganization, Organization } from "../../../../services";
import { addOrganizationScenario } from "../../../../tests/mockScenarios";
import { ContextsMock } from "../../../../tests/wrappers";
import { OrganizationSettingsViewProps } from "../OrganizationSettingsView/OrganizationSettingsView";
import OrganizationSettings from "./OrganizationSettings";

type ComponentProps = React.ComponentProps<typeof OrganizationSettings>;

const View = ({
  updatedOrganization,
  onUpdateSubmit,
  onDeleteSubmit,
}: OrganizationSettingsViewProps) => (
  <>
    <button
      onClick={() =>
        onUpdateSubmit({
          name: "New Name",
          description: "New description",
        })
      }
    >
      Click
    </button>
    <button onClick={onDeleteSubmit}>Delete</button>
    <p>{updatedOrganization?.name}</p>
  </>
);

const renderComponent = (
  props: Partial<ComponentProps> = {},
  organization: Organization = defaultOrganization
) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock organization={organization}>
      <OrganizationSettings {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<OrganizationSettings />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const organization = addOrganizationScenario();

    renderComponent({}, organization);

    userEvent.click(await screen.findByText("Click"));

    await waitFor(async () =>
      expect(await screen.findByText("New Name")).toBeInTheDocument()
    );

    expect(await screen.findByText("New Name")).toBeInTheDocument();
  });

  it("should change route after delete", async () => {
    expect.hasAssertions();

    const organization = addOrganizationScenario();

    renderComponent({}, organization);

    userEvent.click(await screen.findByText("Delete"));

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
