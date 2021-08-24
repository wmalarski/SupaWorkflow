import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  defaultOrganization,
  defaultOrganizationMember,
} from "../../../../services";
import OrganizationContext from "../../../../utils/contexts/OrganizationContext";
import OrganizationSideBarView from "./OrganizationSideBarView";

export default {
  title: "Molecules/Organizations/OrganizationSideBarView",
  component: OrganizationSideBarView,
} as ComponentMeta<typeof OrganizationSideBarView>;

const Template: ComponentStory<typeof OrganizationSideBarView> = (args) => (
  <QueryClientProvider client={new QueryClient()}>
    <OrganizationContext.Provider
      value={{
        member: { ...defaultOrganizationMember, role: "mod" },
        organization: defaultOrganization,
      }}
    >
      <OrganizationSideBarView {...args} />
    </OrganizationContext.Provider>
  </QueryClientProvider>
);

export const Playground = Template.bind({});
