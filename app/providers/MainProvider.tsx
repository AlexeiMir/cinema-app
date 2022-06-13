import { Layout } from '@/components/layout';
import { ReduxToastr } from '@/components/ui/redux-toastr/ReduxToastr';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';
import { store } from 'store/store'
import HeaderProvider from './HeaderProvider/HeaderProvider';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
})

const MainProvider: FC = ({ children }) => (
    <HeaderProvider>
        <Provider store={store}>
        <QueryClientProvider client={queryClient}>
        <ReduxToastr />
        <Layout>
        {children}
        </Layout>
        </QueryClientProvider>
        </Provider>
        </HeaderProvider>
);

export default MainProvider;