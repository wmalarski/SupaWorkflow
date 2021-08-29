import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import MessageListItem from "./MessageListItem";

type ComponentProps = Parameters<typeof MessageListItem>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    message: {
      data: { kind: "test", name: "Hello" },
      deleted: false,
      id: "s",
      template_id: 1,
      updated_at: "",
      workflow_id: 1,
    },
    onDeleteClick: () => void 0,
    onMessageChange: () => void 0,
  };
  return render(<MessageListItem {...defaultProps} {...props} />);
}

describe("<MessageListItem />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
