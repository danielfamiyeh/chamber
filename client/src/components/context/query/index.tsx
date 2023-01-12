import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const QueryProvider = (props: any) => (
  <QueryClientProvider client={queryClient} {...props} />
);
