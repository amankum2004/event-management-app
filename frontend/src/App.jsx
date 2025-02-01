import {BrowserRouter,Routes,Route} from "react-router-dom";
import { LoginProvider } from "./components/LoginContext";

import Home from "./pages/home";
import CreateEvent from "./pages/CreateEvent";
import OptionsPage from "./pages/FeatureSelection";
import DetailsPage from "./pages/FeatureDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App()  {
  
  return (
    <>
    <BrowserRouter>
      <LoginProvider>
      <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element = {<Home />}/>
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/feature-selection" element={<OptionsPage />} />
          <Route path="/feature-details" element={<DetailsPage />} />
          <Route path="/about" element = {<About />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/register" element = {<Register />}/>
          <Route path="/services" element = {<Services />}/>
          <Route path="/privacy-policy" element = {<PrivacyPolicy/>}/>
          {/* 
          <Route path="/getOTP" element = {<GetOTP />}/>
          <Route path="/forget" element = {<Forget />}/>
          <Route path="/update" element = {<UpdatePassword />}/>
          <Route path="/nearbyShops" element = {<Shops/>}/>
          <Route path="/registershop" element = {<RegisterShop/>}/>
          <Route path="/customerprofile" element = {<CustomerProfile/>}/>
          <Route path="/barberprofile" element = {<BarberProfile/>}/>
          <Route path="/barber-profile-update" element = {<BarberProfileUpdate/>}/>
          <Route path="/payment" element = {<Payment/>}/>
          <Route path="/nearbyShops/:shopId/shopinfo" element = {<DateTimeSelection/>}/>
          <Route path="*" element={<Error />}/>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers/>}/>
            <Route path="contacts" element={<AdminContacts/>}/>
            <Route path="services" element={<AdminServices/>}/>
            <Route path="shops" element={<AdminShops/>}/>
            <Route path="users/:id/edit" element={<AdminUserUpdate/>}/>
            <Route path="shops/:id/edit" element={<AdminShopUpdate/>}/>
          </Route> 
          */}
        </Routes>
      </LoginProvider>
      <Footer/>
      
    </BrowserRouter>
    </>
  )
}

export default App;