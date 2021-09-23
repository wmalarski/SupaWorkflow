import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { defaultOrganization } from "../../../../services";
import { ContextsMock } from "../../../../tests/wrappers";
import { OrganizationSideBarViewProps } from "../OrganizationSideBarView/OrganizationSideBarView";
import OrganizationSideBar from "./OrganizationSideBar";

type ComponentProps = React.ComponentProps<typeof OrganizationSideBar>;

const View = ({ organizationId }: OrganizationSideBarViewProps) => (
  <button>{`Org:${organizationId}`}</button>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <OrganizationSideBar {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<OrganizationSideBar />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(
      await screen.findByText(`Org:${defaultOrganization.id}`)
    ).toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
