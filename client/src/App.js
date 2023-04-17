
import './App.css';
import './responsive.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeScreen, SingleProduct, Login, Register, CartScreen, ShippingScreen, ProfileScreen,PaymentScreen, PlaceOrderScreen, OrderScreen, NotFound } from './screens';


function App() {
 
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<HomeScreen/>}  />
        <Route path="/products/:id" element={<SingleProduct/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<Register/>}  />
        <Route path="/profile" element={<ProfileScreen/>}  />
        <Route path="/cart/:id?" element={<CartScreen/>}  />
        <Route path="/shipping" element={<ShippingScreen/>}  />
        <Route path="/payment" element={<PaymentScreen/>}  />
        <Route path="/placeorder" element={<PlaceOrderScreen/>}  />
        <Route path="/order" element={<OrderScreen/>}  />
        <Route path="/*" element={<NotFound/>}  />
      </Routes>
    </Router>
  );
}

export default App;
