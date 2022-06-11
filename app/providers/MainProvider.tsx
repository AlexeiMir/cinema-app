import { Layout } from '@/components/layout';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
})

const MainProvider: FC = ({children}) => (
    <QueryClientProvider client={queryClient}>
        <Layout>
        {children}
        </Layout>
 </QueryClientProvider>
);

export default MainProvider;