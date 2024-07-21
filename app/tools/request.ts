interface requestArgs {
  apiPath: string;
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT';
  body?: Object;
}

export const sendRequest = async (args: requestArgs) => {
  return await fetch(`${import.meta.env.VITE_API_URL}${args.apiPath}`, {
    method: args.method,
    body: new ReadableStream(args.body),
  });
};
