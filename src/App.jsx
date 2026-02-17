import './App.css'
import Layout from './components/Layout'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
let routes =  createBrowserRouter([

    {path:'',element:<Layout/>,children:
      [{index:true,element:<Home/>},
      {path:'blog',element:<Blog/>},
      {path:'about',element:<About/>},
      {path:'*',element:<NotFound/>},
    ]}

  ])

  return (
    <>
      <RouterProvider router={routes} />
     
   </>
  )
}

export default App
