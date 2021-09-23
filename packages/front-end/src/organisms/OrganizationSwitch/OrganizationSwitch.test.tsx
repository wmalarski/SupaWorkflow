import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../tests/wrappers";
import { OrganizationTab } from "../../utils";
import OrganizationSwitch from "./OrganizationSwitch";

const Wrapped = (): React.ReactElement => (
  <ContextsMock>
    <OrganizationSwitch />
  </ContextsMock>
);

describe("<OrganizationSwitch />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    const { queryMock } = jest.requireMock("next/router");

    queryMock.mockReturnValue({ tab: "wrong" });
    const { rerender } = render(<Wrapped />);

    Object.values(OrganizationTab).forEach((tab) => {
      queryMock.mockReturnValue({ tab });
      rerender(<Wrapped />);
    });

    expect(true).toBeTruthy();
  });
});
