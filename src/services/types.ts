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
  version: number;
};

export type MessageVersion = {
  max_version: number;
};

export type Client = {
  id: string;
  last_mutation_id: number;
};

export type TableMapping = {
  message: Message;
  client: Client;
  messageVersion: MessageVersion;
};

export type ResponseError = {
  error: string;
  error_description: string;
};
