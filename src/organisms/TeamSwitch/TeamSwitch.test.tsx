import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { ContextsMock } from "../../tests/wrappers";
import TeamSwitch from "./TeamSwitch";

const Wrapped = (): React.ReactElement => (
  <ContextsMock>
    <TeamSwitch />
  </ContextsMock>
);

describe("<TeamSwitch />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    render(<Wrapped />);

    expect(true).toBeTruthy();
  });
});
