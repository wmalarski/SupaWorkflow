import { GetServerSideProps } from "next";
import React from "react";
import { Debug } from "../../../../atoms";
import { CreateWorkflow } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import { supabase } from "../../../../services/supabase";
import Page from "../../../../templates/Page/Page";
import { validateParam } from "../../../../utils/routing/params";

export type OrganizationTemplatePageProps = {
  templateId: number;
  organizationId: number;
};

const OrganizationTemplatePage = ({
  templateId,
  organizationId,
}: OrganizationTemplatePageProps): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <Debug value={{ organizationId, templateId }} />
      <CreateWorkflow />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<OrganizationTemplatePageProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization, template
    const organizationId = validateParam(params?.organizationId, /\d+/);
    const templateId = validateParam(params?.templateId, /\d+/);

    return organizationId && templateId
      ? {
          props: {
            templateId: Number(templateId),
            organizationId: Number(organizationId),
          },
        }
      : { notFound: true };
  };

export default OrganizationTemplatePage;
