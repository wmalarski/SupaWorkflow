import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  defaultOrganization,
  defaultOrganizationMember,
} from "../../../../services";
import OrganizationContext from "../../../../utils/contexts/OrganizationContext";
import OrganizationSideBarView from "./OrganizationSideBarView";

type ComponentProps = Parameters<typeof OrganizationSideBarView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    organizationId: 1,
  };
  return render(
    <QueryClientProvider client={new QueryClient()}>
      <OrganizationContext.Provider
        value={{
          isInitialized: true,
          value: {
            member: { ...defaultOrganizationMember, role: "mod" },
            organization: defaultOrganization,
          },
        }}
      >
        <OrganizationSideBarView {...defaultProps} {...props} />
      </OrganizationContext.Provider>
    </QueryClientProvider>
  );
}

describe("<OrganizationSideBarView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
