import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home.page'
import ViewPage from './pages/view.page'
import AddPage from './pages/add.page'
import EditPage from './pages/edit.page'
import DeletePage from './pages/delete.page'
import { Toaster } from 'react-hot-toast'


const routers = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/:id',
    element: <ViewPage />
  },
  {
    path: '/add',
    element: <AddPage />
  },
  {
    path: '/delete/:id',
    element: <DeletePage />
  },
  {
    path: '/edit/:id',
    element: <EditPage />
  },
])




function App() {

  return (
    <>
      <RouterProvider router={routers} />
      <Toaster />

    </>
  )
}

export default App
