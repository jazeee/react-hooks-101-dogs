import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => fetch(queryKey).then((res) => res.json()),
      refetchOnWindowFocus: false,
    },
  },
});

interface Props {
  children: ReactNode;
}
export const QueryProvider = (props: Props) => {
  const { children } = props;
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
