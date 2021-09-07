import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../tests/wrappers";
import { WorkflowTab } from "../../utils";
import WorkflowSwitch from "./WorkflowSwitch";

const Wrapped = (): React.ReactElement => (
  <ContextsMock>
    <WorkflowSwitch />
  </ContextsMock>
);

describe("<WorkflowSwitch />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");

    queryMock.mockReturnValue({ tab: "wrong" });
    const { rerender } = render(<Wrapped />);

    Object.values(WorkflowTab).forEach((tab) => {
      queryMock.mockReturnValue({ tab });
      rerender(<Wrapped />);
    });

    expect(true).toBeTruthy();
  });
});
