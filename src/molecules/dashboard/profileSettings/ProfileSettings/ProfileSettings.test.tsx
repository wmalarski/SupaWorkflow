import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { defaultProfile, Profile } from "services";
import { addProfileScenario } from "../../../../tests/mockScenarios";
import { ContextsMock } from "../../../../tests/wrappers";
import { ProfileSettingsViewProps } from "../ProfileSettingsView/ProfileSettingsView";
import ProfileSettings from "./ProfileSettings";

type ComponentProps = React.ComponentProps<typeof ProfileSettings>;

const View = ({ onSubmit, updatedProfile }: ProfileSettingsViewProps) => (
  <>
    <button
      onClick={() =>
        onSubmit({
          name: "New Name",
        })
      }
    >
      Click
    </button>
    <p>{updatedProfile?.name}</p>
  </>
);

const renderComponent = (
  props: Partial<ComponentProps> = {},
  profile: Profile = defaultProfile
) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock profile={profile}>
      <ProfileSettings {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<ProfileSettings />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const profile = addProfileScenario();

    renderComponent({}, profile);

    userEvent.click(await screen.findByText("Click"));

    await waitFor(
      async () =>
        await expect(screen.findByText("New Name")).resolves.toBeInTheDocument()
    );

    await expect(screen.findByText("New Name")).resolves.toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
