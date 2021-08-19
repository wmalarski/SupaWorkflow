import type { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { Debug } from "../../../atoms";
import { AnonNavigation, UserNavigation } from "../../../organisms";
import { supabase } from "../../../services/supabase";
import Page from "../../../templates/Page/Page";
import { useUserContext } from "../../../utils/auth/UserContext";
import { validateParam } from "../../../utils/routing/params";

const TemplateWorkspace = dynamic(
  () => import("../../../organisms/TemplateWorkspace/TemplateWorkspace"),
  { ssr: false }
);

export type TemplateIdPageProps = {
  templateId: number;
};

const TemplateIdPage = ({ templateId }: TemplateIdPageProps): JSX.Element => {
  const { user } = useUserContext();

  return (
    <Page header={user ? <UserNavigation /> : <AnonNavigation />}>
      <Debug value={{ templateId }} />
      <TemplateWorkspace templateId={templateId} />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<TemplateIdPageProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization, template
    const templateId = validateParam(params?.templateId, /\d+/);

    return templateId
      ? { props: { templateId: Number(templateId) } }
      : { notFound: true };
  };

export default TemplateIdPage;
