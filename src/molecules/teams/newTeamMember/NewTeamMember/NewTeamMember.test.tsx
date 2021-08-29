import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NewTeamMemberViewProps } from "../NewTeamMemberView/NewTeamMemberView";
import NewTeamMember from "./NewTeamMember";

type ComponentProps = React.ComponentProps<typeof NewTeamMember>;

const View = ({}: NewTeamMemberViewProps) => <button>Click</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <NewTeamMember {...defaultProps} {...props} />
    </QueryClientProvider>
  );
};

describe("<NewTeamMember />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });

  it("should render", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
