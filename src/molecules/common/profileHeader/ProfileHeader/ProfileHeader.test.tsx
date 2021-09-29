import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { paths } from "utils";
import { ProfileHeaderViewProps } from "../ProfileHeaderView/ProfileHeaderView";
import ProfileHeader from "./ProfileHeader";

type ComponentProps = React.ComponentProps<typeof ProfileHeader>;

const View = ({ onSignOutClicked }: ProfileHeaderViewProps) => (
  <button onClick={onSignOutClicked}>Click</button>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <ProfileHeader {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<ProfileHeader />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    userEvent.click(await screen.findByText("Click"));

    const { push } = jest.requireMock("next/router").default;

    await waitFor(async () => expect(push).toHaveBeenCalledTimes(1));

    expect(push).toHaveBeenCalledWith(paths.home);
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
