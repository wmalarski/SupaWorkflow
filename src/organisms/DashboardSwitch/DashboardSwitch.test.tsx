import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { DashboardTab } from "utils";
import { ContextsMock } from "../../tests/wrappers";
import DashboardSwitch from "./DashboardSwitch";

const Wrapped = (): React.ReactElement => (
  <ContextsMock>
    <DashboardSwitch />
  </ContextsMock>
);

describe("<DashboardSwitch />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");

    queryMock.mockReturnValue({ tab: "wrong" });
    const { rerender } = render(<Wrapped />);

    Object.values(DashboardTab).forEach((tab) => {
      queryMock.mockReturnValue({ tab });
      rerender(<Wrapped />);
    });

    expect(true).toBeTruthy();
  });
});
