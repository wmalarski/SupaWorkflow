-- Add author as member to organization
CREATE
OR REPLACE FUNCTION invite_to_organization(
  organization_id BIGINT,
  input_email TEXT,
  input_role TEXT
)  RETURNS void language plpgsql SECURITY DEFINER as $$

begin

INSERT INTO
  organization_member (profile_id, role, organization_id)
select
  public.profile.id as profile_id,
  input_role,
  organization_id
from
  auth.users
  inner join public.profile on auth.users.id = public.profile.user_id
where
  auth.users.email = input_email;

end;
$$;

-- Add author as member to organization
CREATE OR REPLACE FUNCTION get_profile_id(profile_user_id UUID)  
RETURNS BIGINT 
language plpgsql as 
$$
DECLARE passed BIGINT;
begin

select id into passed from public.profile where public.profile.user_id = profile_user_id;

return passed;

end;
$$;