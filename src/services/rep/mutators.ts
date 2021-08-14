import { createTodo, removeTodo } from "./todos/mutations";

const mutators = {
  createTodo,
  removeTodo,
};

export type Mutations = {
  [key in keyof typeof mutators]: {
    id: number;
    name: key;
    args: Parameters<typeof mutators[key]>[1];
  };
};

export type Mutation = Mutations[keyof Mutations];

export default mutators;
