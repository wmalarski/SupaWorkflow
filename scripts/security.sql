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
CREATE POLICY "Enable only for organization members" ON public.organization FOR SELECT USING (
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

CREATE POLICY "policy_name" ON public.organization FOR INSERT WITH CHECK (
  auth.role() = 'authenticated'
);

CREATE POLICY "Enable update for users based on role" ON public.organization FOR UPDATE USING (
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
CREATE POLICY "All" ON public.assignee FOR ALL USING (
  EXISTS (
    SELECT
      1
    FROM
      members
      JOIN workflow ON (
        (workflow.organization_id = members.organization_id)
      )
    WHERE
      (members.profile_user_id = uid())
      AND (workflow.id = assignee.workflow_id)
  )
) WITH CHECK (
  EXISTS (
    SELECT
      1
    FROM
      members
      JOIN workflow ON (
        (workflow.organization_id = members.organization_id)
      )
    WHERE
      (members.profile_user_id = uid())
      AND (workflow.id = assignee.workflow_id)
  )
);
---- message ----
CREATE POLICY "All" ON public.message FOR ALL USING (
  exists(
    select
      1
    from
      members
      inner join template on template.organization_id = members.organization_id
    where
      members.profile_user_id = auth.uid()
      and template.id = message.template_id
  )
) WITH CHECK (
  exists(
    select
      1
    from
      members
      inner join template on template.organization_id = members.organization_id
    where
      members.profile_user_id = auth.uid()
      and template.id = message.template_id
  )
);

---- organization members
CREATE POLICY "Enable only for organization members" ON public.organization_member FOR SELECT USING (
  exists(
    select 
      1
    from 
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = organization_member.organization_id
  )
);

CREATE POLICY "policy_name" ON public.organization_member FOR INSERT WITH CHECK (
  exists(
    select 
      1
    from 
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = organization_member.organization_id
      and (
        members.member_role = 'mod'
        or members.member_role = 'owner'
      )
  )
);

CREATE POLICY "Enable update for users based on role" ON public.organization_member FOR UPDATE USING (
  exists(
    select 
      1
    from 
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = organization_member.organization_id
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
      and members.organization_id = organization_member.organization_id
      and (
        members.member_role = 'mod'
        or members.member_role = 'owner'
      )
  )
);

CREATE POLICY "Enable delete for users based on role" ON public.organization_member FOR DELETE USING (
  exists(
    select 
      1
    from 
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = organization_member.organization_id
      and (
        members.member_role = 'mod'
        or members.member_role = 'owner'
      )
  )
);

---- profile ----
CREATE POLICY "Select" ON public.profile FOR SELECT USING (
  role() = 'authenticated':: text
);

CREATE POLICY "Insert" ON public.profile FOR INSERT WITH CHECK (
  false
);

CREATE POLICY "Update" ON public.profile FOR UPDATE USING (
  profile.user_id = auth.uid()
) WITH CHECK (
  profile.user_id = auth.uid()
);

CREATE POLICY "Delete" ON public.profile FOR DELETE USING (
  profile.user_id = auth.uid()
);

---- replicache_client ----
CREATE POLICY "Select" ON public.replicache_client FOR SELECT USING (
  role() = 'authenticated':: text
);

CREATE POLICY "Insert" ON public.replicache_client FOR INSERT WITH CHECK (
  role() = 'authenticated':: text
);

CREATE POLICY "Update" ON public.replicache_client FOR UPDATE USING (
  role() = 'authenticated':: text
) WITH CHECK (
  role() = 'authenticated':: text
);

CREATE POLICY "Delete" ON public.replicache_client FOR DELETE USING (
  role() = 'authenticated':: text
);

---- team ----
CREATE POLICY "Select" ON public.team FOR SELECT USING (
  exists(
    select 
      1
    from 
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = team.organization_id
  )
);

CREATE POLICY "Insert" ON public.team FOR INSERT WITH CHECK (
  exists(
    select 
      1
    from 
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = team.organization_id
      and (
        members.member_role = 'mod'
        or members.member_role = 'owner'
      )
  )
);

CREATE POLICY "Update" ON public.team FOR UPDATE USING (
  exists(
    select 
      1
    from 
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = team.organization_id
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
      and members.organization_id = team.organization_id
      and (
        members.member_role = 'mod'
        or members.member_role = 'owner'
      )
  )
);

CREATE POLICY "Delete" ON public.team FOR DELETE USING (
  exists(
    select 
      1
    from 
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = team.organization_id
      and (
        members.member_role = 'mod'
        or members.member_role = 'owner'
      )
  )
);

---- team_member ----
CREATE POLICY "Select" ON public.team_member FOR SELECT USING (
  exists(
    select 
      1
    from 
      members
      inner join team on team.organization_id = members.organization_id
    where
      members.profile_user_id = auth.uid()
      and team.id = team_member.team_id
  )
);

CREATE POLICY "Insert" ON public.team_member FOR INSERT WITH CHECK (
  exists(
    select 
      1
    from 
      members
      inner join team on team.organization_id = members.organization_id
    where
      members.profile_user_id = auth.uid()
      and team.id = team_member.team_id
      and (
        members.member_role = 'mod'
        or members.member_role = 'owner'
      )
  )
);

CREATE POLICY "Update" ON public.team_member FOR UPDATE USING (
  exists(
    select 
      1
    from 
      members
      inner join team on team.organization_id = members.organization_id
    where
      members.profile_user_id = auth.uid()
      and team.id = team_member.team_id
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
      inner join team on team.organization_id = members.organization_id
    where
      members.profile_user_id = auth.uid()
      and team.id = team_member.team_id
      and (
        members.member_role = 'mod'
        or members.member_role = 'owner'
      )
  )
);

CREATE POLICY "Delete" ON public.team_member FOR DELETE USING (
  exists(
    select 
      1
    from 
      members
      inner join team on team.organization_id = members.organization_id
    where
      members.profile_user_id = auth.uid()
      and team.id = team_member.team_id
      and (
        members.member_role = 'mod'
        or members.member_role = 'owner'
      )
  )
);

---- template ----
CREATE POLICY "All" ON public.template FOR ALL USING (
  exists(
    select
      1
    from
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = template.organization_id
  )
) WITH CHECK (
  exists(
    select
      1
    from
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = template.organization_id
  )
);

---- workflow ----
CREATE POLICY "All" ON public.workflow FOR ALL USING (
  exists(
    select
      1
    from
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = workflow.organization_id
  )
) WITH CHECK (
  exists(
    select
      1
    from
      members
    where
      members.profile_user_id = auth.uid()
      and members.organization_id = workflow.organization_id
  )
);