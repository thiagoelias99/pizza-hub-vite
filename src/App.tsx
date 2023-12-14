import QueryContext from './client/rquery/QueryContext'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <main className='w-screen h-full'>
      <QueryContext>
        <AppRouter />
      </QueryContext>
    </main>
  )
}

export default App