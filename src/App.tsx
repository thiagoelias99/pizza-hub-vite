import QueryContext from './client/rquery/QueryContext'
import DialogContainer from './components/Dialogs/DialogContainer'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <main className='w-screen h-full'>
      <QueryContext>
        <AppRouter />
        <DialogContainer />
      </QueryContext>
    </main>
  )
}

export default App