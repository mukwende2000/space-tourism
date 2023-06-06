import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Root from './layouts/Root'
import Destination from './routes/Destination'
import Technology from './routes/Technology'
import Crew from './routes/Crew'

const router = createBrowserRouter([
  {
    element: <Root />,
    path: '/',
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Destination />,
        path: 'destination',
      },
      {
        element: <Crew />,
        path: 'crew',
      },
      {
        element: <Technology />,
        path: 'technology',
      },
    ],
  },
])

function App() {
  return (
    <div className="font-barlow">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
