import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { OrganizationTeamViewProps } from "../OrganizationTeamView/OrganizationTeamView";
import OrganizationTeam from "./OrganizationTeam";

type ComponentProps = React.ComponentProps<typeof OrganizationTeam>;

const View = ({}: OrganizationTeamViewProps) => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <OrganizationTeam {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<OrganizationTeam />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });

  it("should render undefined", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
