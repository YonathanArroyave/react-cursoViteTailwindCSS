import { useRoutes, BrowserRouter } from 'react-router-dom' //npm install react-router-dom
import { ShippingCartProvider } from '../../Components/Context'
import Home from '../Home'
import MyAcount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Signin from '../Signin'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-count', element: <MyAcount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <Signin /> },
    { path: '/*', element: <NotFound /> },


  ])
  return routes
}

const App = () => {


  return (
    <ShippingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShippingCartProvider>
  )
}

export default App
