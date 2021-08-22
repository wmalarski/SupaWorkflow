import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import Pagination from "./Pagination";

export default {
  title: "Atoms/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [page, setPage] = useState(0);

  return <Pagination {...args} page={page} onPageChange={setPage} />;
};

export const Playground = Template.bind({});
Playground.args = {
  page: 0,
  maxPage: 3,
};
