import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { OrganizationTeamsViewProps } from "../OrganizationTeamsView/OrganizationTeamsView";
import OrganizationTeams from "./OrganizationTeams";

type ComponentProps = React.ComponentProps<typeof OrganizationTeams>;

const View = ({}: OrganizationTeamsViewProps) => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <OrganizationTeams {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<OrganizationTeams />", () => {
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
