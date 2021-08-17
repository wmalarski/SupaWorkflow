const repKeys = {
  message: (id: string): string => `message/${id}`,
  messages: (): string => "message/",
};

export default repKeys;
