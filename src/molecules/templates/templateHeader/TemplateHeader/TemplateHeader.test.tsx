import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import { TemplateTab } from "utils";
import { ContextsMock } from "../../../../tests/wrappers";
import { TemplateHeaderViewProps } from "../TemplateHeaderView/TemplateHeaderView";
import TemplateHeader from "./TemplateHeader";

type ComponentProps = React.ComponentProps<typeof TemplateHeader>;

const View = ({ tab }: TemplateHeaderViewProps) => <button>{`${tab}`}</button>;

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <TemplateHeader {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<TemplateHeader />", () => {
  it("should render null for invalid tab", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");
    queryMock.mockReturnValue({ tab: "hello" });

    renderComponent();

    await expect(screen.findByText("null")).resolves.toBeInTheDocument();
  });

  it("should render correct tab for correct tab", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");
    queryMock.mockReturnValue({ tab: TemplateTab.edit });

    renderComponent();

    await expect(
      screen.findByText(TemplateTab.edit)
    ).resolves.toBeInTheDocument();
  });

  it("should render default", async () => {
    expect.hasAssertions();

    renderComponent({ View: undefined });

    expect(true).toBeTruthy();
  });
});
