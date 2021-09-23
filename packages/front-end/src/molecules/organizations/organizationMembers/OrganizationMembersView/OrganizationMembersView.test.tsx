import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { defaultMember, defaultOrganizationMember } from "../../../../services";
import OrganizationMembersView from "./OrganizationMembersView";

type ComponentProps = Parameters<typeof OrganizationMembersView>[0];

function renderComponent(props: Partial<ComponentProps> = {}) {
  const defaultProps: ComponentProps = {
    page: 0,
    pageSize: 10,
    authorId: 1,
    isLoading: false,
    isUpdateLoading: false,
    isDeleteSuccess: false,
    currentMember: defaultOrganizationMember,
    members: {
      count: 4,
      entries: new Array(10).fill(0).map((_, index) => ({
        ...defaultMember,
        member_id: index,
      })),
    },
    onDeleteClick: () => void 0,
    onPageChange: () => void 0,
    onUpdateClick: () => void 0,
  };
  return render(<OrganizationMembersView {...defaultProps} {...props} />);
}

describe("<OrganizationMembersView />", () => {
  it("should render", async () => {
    expect.hasAssertions();

    renderComponent();

    expect(true).toBeTruthy();
  });
});
