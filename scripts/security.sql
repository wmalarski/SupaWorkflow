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
        members.profile_user_id = auth.uid()
        and members.organization_id = public.organization.id
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
