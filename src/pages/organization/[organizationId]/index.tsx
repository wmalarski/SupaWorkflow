import { GetServerSideProps } from "next";
import React from "react";
import { Debug } from "../../../atoms";
import { OrganizationDashboard } from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import { supabase } from "../../../services/supabase";
import Page from "../../../templates/Page/Page";
import { validateParam } from "../../../utils/routing/params";

export type OrganizationIdPageProps = {
  organizationId: number;
};

const OrganizationIdPage = ({
  organizationId,
}: OrganizationIdPageProps): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <Debug value={{ organizationId }} />
      <OrganizationDashboard />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<OrganizationIdPageProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization
    const organizationId = validateParam(params?.organizationId, /\d+/);

    return organizationId
      ? { props: { organizationId: Number(organizationId) } }
      : { notFound: true };
  };

export default OrganizationIdPage;
