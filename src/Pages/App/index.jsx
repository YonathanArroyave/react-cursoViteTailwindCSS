import Home from '../Home'
import MyAcount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Signin from '../Signin'
import NotFound from '../NotFound'


import './App.css'

function App() {

  return (
    <>
      <div className='bg-red-100'>
       <MyAcount/>
       <MyOrder/>
       <MyOrders/>
       <NotFound/>
       <Signin/>
       
      </div>
     
    </>
  )
}

export default App
