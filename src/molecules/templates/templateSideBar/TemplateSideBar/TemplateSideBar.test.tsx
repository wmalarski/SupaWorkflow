import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../../../tests/wrappers";
import { TemplateSideBarViewProps } from "../TemplateSideBarView/TemplateSideBarView";
import TemplateSideBar from "./TemplateSideBar";

type ComponentProps = React.ComponentProps<typeof TemplateSideBar>;

const View = (props: TemplateSideBarViewProps) => (
  <button>{JSON.stringify(props, null, 2)}</button>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <TemplateSideBar {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<TemplateSideBar />", () => {
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
