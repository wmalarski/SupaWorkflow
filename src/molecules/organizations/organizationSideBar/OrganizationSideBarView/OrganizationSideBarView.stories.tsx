import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  defaultOrganization,
  defaultOrganizationMember,
  defaultProfile,
} from "../../../../services";
import { OrganizationContextProvider } from "../../../../utils";
import OrganizationSideBarView from "./OrganizationSideBarView";

export default {
  title: "Molecules/Organizations/OrganizationSideBarView",
  component: OrganizationSideBarView,
} as ComponentMeta<typeof OrganizationSideBarView>;

const Template: ComponentStory<typeof OrganizationSideBarView> = (args) => (
  <QueryClientProvider client={new QueryClient()}>
    <OrganizationContextProvider
      member={{ ...defaultOrganizationMember, role: "mod" }}
      organization={defaultOrganization}
      profile={defaultProfile}
      enabled={false}
    >
      <OrganizationSideBarView {...args} />
    </OrganizationContextProvider>
  </QueryClientProvider>
);

export const Playground = Template.bind({});
