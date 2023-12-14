import { QueryClient, QueryClientProvider } from "react-query";

interface QueryContextProps {
    children: React.ReactNode
}

const QueryContext = ({ children }: QueryContextProps) => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default QueryContext