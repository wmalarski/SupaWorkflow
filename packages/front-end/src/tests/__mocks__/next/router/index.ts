import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/router", () => {
  const push = jest.fn();
  const replace = jest.fn();
  const queryMock = jest.fn();

  return {
    // spread out all "Router" exports
    ...jest.requireActual("next/router"),

    // shallow merge the "default" exports with...
    default: {
      // all actual "default" exports...
      ...jest.requireActual("next/router").default,

      // and overwrite push and replace to be jest functions
      push,
      replace,
    },
    useRouter: () => ({
      push,
      replace,
      query: queryMock(),
    }),
    queryMock,
  };
});

// export the mocked instance above
module.exports = jest.requireMock("next/router");
