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
        {children}
 </QueryClientProvider>
);

export default MainProvider;