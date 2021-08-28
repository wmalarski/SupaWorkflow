import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import { OrganizationTab } from "../../../../utils";
import { OrganizationHeaderViewProps } from "../OrganizationHeaderView/OrganizationHeaderView";
import OrganizationHeader from "./OrganizationHeader";

type ComponentProps = React.ComponentProps<typeof OrganizationHeader>;

const View = ({ tab }: OrganizationHeaderViewProps) => (
  <button>{`${tab}`}</button>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <OrganizationHeader {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<OrganizationHeader />", () => {
  it("should render null for invalid tab", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");
    queryMock.mockReturnValue({ tab: "hello" });

    renderComponent();

    expect(await screen.findByText("null")).toBeInTheDocument();
  });

  it("should render correct tab for correct tab", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");
    queryMock.mockReturnValue({ tab: OrganizationTab.members });

    renderComponent();

    expect(
      await screen.findByText(OrganizationTab.members)
    ).toBeInTheDocument();
  });
});
