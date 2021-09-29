import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { addTemplatesScenario } from "../../../../tests/mockScenarios";
import { ContextsMock } from "../../../../tests/wrappers";
import { TemplatesListViewProps } from "../TemplatesListView/TemplatesListView";
import TemplatesList from "./TemplatesList";

type ComponentProps = React.ComponentProps<typeof TemplatesList>;

const View = ({ templates }: TemplatesListViewProps) => (
  <>
    {templates?.map((template) => (
      <p key={template.id}>{template.name}</p>
    ))}
  </>
);

const renderComponent = (props: Partial<ComponentProps> = {}) => {
  const defaultProps: ComponentProps = {
    View,
  };
  return render(
    <ContextsMock>
      <TemplatesList {...defaultProps} {...props} />
    </ContextsMock>
  );
};

describe("<TemplatesList />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    addTemplatesScenario();

    renderComponent();

    await waitFor(
      async () =>
        await expect(
          screen.findByText("Template Name-0")
        ).resolves.toBeInTheDocument()
    );

    await expect(
      screen.findByText("Template Name-0")
    ).resolves.toBeInTheDocument();
  });
  it("should render default", async () => {
    expect.hasAssertions();

    addTemplatesScenario();

    renderComponent({ View: undefined });

    await waitFor(
      async () =>
        await expect(
          screen.findByText("Template Name-0")
        ).resolves.toBeInTheDocument()
    );

    await expect(
      screen.findByText("Template Name-0")
    ).resolves.toBeInTheDocument();
  });
});
