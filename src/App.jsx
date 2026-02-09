import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "./pages/Customer";
import Provider from "./pages/Provider";
import Navbar from "./components/Navbar";
import ProviderMain from "./components/ProviderMain";
import ProviderServiceList from "./components/ProviderServiceList";
import ProviderPoints from "./components/ProviderPoints";
import ProviderCategoryManagement from "./components/ProviderCategoryManagement";
import ProviderBookingManagement from "./components/ProviderBookingManagement";
import ProvidersManagement from "./components/ProvidersManagement";
import Login from "./auth/Login";
import Payout from "./components/Payout";
import CustomerManagement from "./components/CustomerManagement";
import SystemUsers from "./components/SystemUsers";
import CashbackManagement from "./components/CashbackManagement";
import Home from "./pages/Home";
import AddNewService from "./components/AddNewService";
import MainLayout from "./layouts/MainLayout";
import Booking from "./components/CustomerComponents/Booking"
import Category from "./components/CustomerComponents/Category";
import Points from "./components/CustomerComponents/Points";
import Service from "./components/CustomerComponents/Service";
import ProviderManagement from "./components/CustomerComponents/ProviderManagement";
import PayoutC from "./components/CustomerComponents/Payout";
import CustomerManagementC from "./components/CustomerComponents/CustomerManagement";
import System from "./components/CustomerComponents/System";
import Cashback from "./components/CustomerComponents/Cashback";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />}>
              <Route path="main" element={<ProviderMain />} />
              <Route path="booking" element={<Booking />} />
              <Route path="category" element={<Category />} />
              <Route path="points" element={<Points />} />
              <Route path="service" element={<Service />} />
              <Route path="provider" element={<ProviderManagement />} />
              <Route path="payout" element={<PayoutC />} />
              <Route path="customersm" element={<CustomerManagementC />} />
              <Route path="system" element={<System />} />
              <Route path="cashback" element={<Cashback />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/provider" element={<Provider />}>
          <Route index element={<ProviderPoints />} />
          <Route path="points" element={<ProviderPoints />} />
          <Route path="main" element={<ProviderMain />} />
          <Route path="serviceList" element={<ProviderServiceList />} />
          <Route path="providersManagement" element={<ProvidersManagement />} />
          <Route path="categoryManagement" element={<ProviderCategoryManagement />} />
          <Route path="bookingManagement" element={<ProviderBookingManagement />} />
          <Route path="payout" element={<Payout />} />
          <Route path="customerManagement" element={<CustomerManagement />} />
          <Route path="systemUsers" element={<SystemUsers />} />
          <Route path="cashbackManagement" element={<CashbackManagement />} />
          <Route path="addService" element={<AddNewService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}