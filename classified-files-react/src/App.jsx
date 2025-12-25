import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GameProvider } from '@contexts/GameContext'
import AppRouter from '@routes/index'
import './App.css'

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameProvider>
        <div className="app">
          <AppRouter />
        </div>
      </GameProvider>
    </QueryClientProvider>
  )
}

export default App
