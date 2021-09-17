create or replace view members as 
  SELECT
    profile.id as profile_id,
    profile.name as profile_name,
    profile.user_id as profile_user_id,
    profile.avatar as profile_avatar,
    organization_member.id as member_id,
    organization_member.role as member_role,
    organization.id as organization_id,
    organization.author_id as organization_author_id,
    organization.name as organization_name,
    organization.description as organization_description,
    organization.hash as organization_hash,
    organization.avatar as organization_avatar
  FROM 
    profile
    inner join organization_member on profile.id = organization_member.profile_id 
    inner join organization on organization.id = organization_member.organization_id;

---- Organization ----
CREATE POLICY "Enable only for organization members" ON public.organization FOR
SELECT
  USING (
    exists(
      select
        1
      from
        members
      where
        (members.profile_user_id = auth.uid()
        and members.organization_id = public.organization.id)
        or members.organization_author_id = get_profile_id(auth.uid())
    )
  );

CREATE POLICY "policy_name"
ON public.organization
FOR INSERT WITH CHECK (
  auth.role() = 'authenticated'
);

CREATE POLICY "Enable update for users based on role" ON public.organization FOR
UPDATE
  USING (
    exists(
      select
        1
      from
        members
      where
        members.profile_user_id = auth.uid()
        and members.organization_id = public.organization.id
        and (
          members.member_role = 'mod'
          or members.member_role = 'owner'
        )
    )
  ) WITH CHECK (
    exists(
      select
        1
      from
        members
      where
        members.profile_user_id = auth.uid()
        and members.organization_id = public.organization.id
        and (
          members.member_role = 'mod'
          or members.member_role = 'owner'
        )
    )
  );

CREATE POLICY "Enable delete for users based on role" ON public.organization FOR DELETE USING (
  exists(
    select
      1
    from
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = public.organization.id
      and (
        members.member_role = 'mod'
        or members.member_role = 'owner'
      )
  )
);

---- assignee ----
CREATE POLICY "Select" ON public.assignee FOR SELECT USING (
  exists(
    select 
      1 
    from 
      members inner join 
      workflow on workflow.organization_id = members.organization_id 
    where 
      members.profile_user_id = auth.uid()
      and workflow.id = assignee.workflow_id
  )
);

CREATE POLICY "Insert" ON public.assignee FOR INSERT WITH CHECK (
  exists(
    select 
      1 
    from 
      members inner join 
      workflow on workflow.organization_id = members.organization_id 
    where 
      members.profile_user_id = auth.uid()
      and workflow.id = assignee.workflow_id
  )
);

CREATE POLICY "Update" ON public.assignee FOR UPDATE USING (  
  exists(
    select 
      1 
    from 
      members inner join 
      workflow on workflow.organization_id = members.organization_id 
    where 
      members.profile_user_id = auth.uid()
      and workflow.id = assignee.workflow_id
  )
) WITH CHECK (  
  exists(
    select 
      1 
    from 
      members inner join 
      workflow on workflow.organization_id = members.organization_id 
    where 
      members.profile_user_id = auth.uid()
      and workflow.id = assignee.workflow_id
  )
);

CREATE POLICY "Delete" ON public.assignee FOR DELETE USING (  
  exists(
    select 
      1 
    from 
      members inner join 
      workflow on workflow.organization_id = members.organization_id 
    where 
      members.profile_user_id = auth.uid()
      and workflow.id = assignee.workflow_id
  )
);

---- message ----
CREATE POLICY "Select" ON public.message FOR
SELECT
  USING ((role() = 'authenticated':: text));

CREATE POLICY "Insert" ON public.message FOR INSERT WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Update" ON public.message FOR
UPDATE
  USING ((role() = 'authenticated':: text)) WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Delete" ON public.message FOR DELETE USING ((role() = 'authenticated':: text));

---- profile ----
CREATE POLICY "Select" ON public.profile FOR
SELECT
  USING ((role() = 'authenticated':: text));

CREATE POLICY "Insert" ON public.profile FOR INSERT WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Update" ON public.profile FOR
UPDATE
  USING ((role() = 'authenticated':: text)) WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Delete" ON public.profile FOR DELETE USING ((role() = 'authenticated':: text));

---- replicache_client ----
CREATE POLICY "Select" ON public.replicache_client FOR
SELECT
  USING ((role() = 'authenticated':: text));

CREATE POLICY "Insert" ON public.replicache_client FOR INSERT WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Update" ON public.replicache_client FOR
UPDATE
  USING ((role() = 'authenticated':: text)) WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Delete" ON public.replicache_client FOR DELETE USING ((role() = 'authenticated':: text));

---- team ----
CREATE POLICY "Select" ON public.team FOR
SELECT
  USING ((role() = 'authenticated':: text));

CREATE POLICY "Insert" ON public.team FOR INSERT WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Update" ON public.team FOR
UPDATE
  USING ((role() = 'authenticated':: text)) WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Delete" ON public.team FOR DELETE USING ((role() = 'authenticated':: text));

---- team_member ----
CREATE POLICY "Select" ON public.team_member FOR
SELECT
  USING ((role() = 'authenticated':: text));

CREATE POLICY "Insert" ON public.team_member FOR INSERT WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Update" ON public.team_member FOR
UPDATE
  USING ((role() = 'authenticated':: text)) WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Delete" ON public.team_member FOR DELETE USING ((role() = 'authenticated':: text));

---- template ----
CREATE POLICY "Select" ON public.template FOR
SELECT
  USING ((role() = 'authenticated':: text));

CREATE POLICY "Insert" ON public.template FOR INSERT WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Update" ON public.template FOR
UPDATE
  USING ((role() = 'authenticated':: text)) WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Delete" ON public.template FOR DELETE USING ((role() = 'authenticated':: text));

---- workflow ----
CREATE POLICY "Select" ON public.workflow FOR
SELECT
  USING ((role() = 'authenticated':: text));

CREATE POLICY "Insert" ON public.workflow FOR INSERT WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Update" ON public.workflow FOR
UPDATE
  USING ((role() = 'authenticated':: text)) WITH CHECK ((role() = 'authenticated':: text));

CREATE POLICY "Delete" ON public.workflow FOR DELETE USING ((role() = 'authenticated':: text));
