import './assets/libs/boxicons-2.1.4/css/boxicons.min.css'
import Layout from "./layout/Layout";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Customers from "./pages/customers/Customers";
import Auth from './pages/auth/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="posts" element={<Customers />} />
            <Route path="orders" element={<Customers />} />
            <Route path="products" element={<Customers />} />
            <Route path="settings" element={<Customers />} />
            <Route path="stats" element={<Customers />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
