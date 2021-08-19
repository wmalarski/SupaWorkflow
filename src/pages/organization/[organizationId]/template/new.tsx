import { GetServerSideProps } from "next";
import React from "react";
import { Debug } from "../../../../atoms";
import { CreateTemplate } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import { supabase } from "../../../../services/supabase";
import Page from "../../../../templates/Page/Page";
import { validateParam } from "../../../../utils/routing/params";

export type OrganizationNewTemplateProps = {
  organizationId: number;
};

const OrganizationNewTemplate = ({
  organizationId,
}: OrganizationNewTemplateProps): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <Debug value={{ organizationId }} />
      <CreateTemplate />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<OrganizationNewTemplateProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization, template
    const organizationId = validateParam(params?.organizationId, /\d+/);

    return organizationId
      ? {
          props: {
            organizationId: Number(organizationId),
          },
        }
      : { notFound: true };
  };

export default OrganizationNewTemplate;
