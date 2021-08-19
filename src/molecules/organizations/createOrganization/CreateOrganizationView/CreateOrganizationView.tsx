import React from "react";

export type CreateOrganizationViewProps = {
  data: string;
};

const CreateOrganizationView = ({
  data,
}: CreateOrganizationViewProps): JSX.Element => {
  return (
    <div>
      {`CreateOrganizationView: `}
      {data}
    </div>
  );
};

export default CreateOrganizationView;
