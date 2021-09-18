import { Replicache } from "replicache";
import mutators from "./mutations";

export type Mutations = {
  [key in keyof typeof mutators]: {
    id: number;
    name: key;
    args: Parameters<typeof mutators[key]>[1];
  };
};

export type Mutation = Mutations[keyof Mutations];

export type MutationArgs = {
  [key in keyof Mutations]: Mutations[key]["args"];
};

export type MutationPush = {
  clientID: string;
  mutations: Mutation[];
};

export type MessageReplicache = Replicache<typeof mutators>;
