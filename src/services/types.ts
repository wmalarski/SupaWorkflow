export type NodeMeta = {
  id: string;
  name: string;
  description: string;
};

export type Message = {
  id: string;
  sender: string;
  content: string;
  ord: number;
};

export type Client = {
  id: string;
  last_mutation_id: number;
};

export type TableMapping = {
  message: Message;
  client: Client;
};

export type ResponseError = {
  error: string;
  error_description: string;
};
