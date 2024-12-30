import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <h2 className="text-2xl font-bold text-center py-4 border-b border-gray-700">
        Admin Dashboard
      </h2>
      <nav className="flex flex-col p-4">
        <Link to="/admin/home" className="py-2 px-4 hover:bg-gray-700 rounded">
          Home
        </Link>
        <Link to="/admin/customers" className="py-2 px-4 hover:bg-gray-700 rounded">
          Customers
        </Link>
        <Link to="/admin/enquiries" className="py-2 px-4 hover:bg-gray-700 rounded">
          Enquiries
        </Link>
        <Link to="/admin/orders" className="py-2 px-4 hover:bg-gray-700 rounded">
          Orders
        </Link>
        <Link to="/admin/payments" className="py-2 px-4 hover:bg-gray-700 rounded">
          Payments
        </Link>
        <Link to="/admin/products" className="py-2 px-4 hover:bg-gray-700 rounded">
          Products
        </Link>
        <Link to="/admin/settings" className="py-2 px-4 hover:bg-gray-700 rounded">
          Settings
        </Link>
        <Link to="/admin/suppliers" className="py-2 px-4 hover:bg-gray-700 rounded">
          Suppliers
        </Link>
        <Link to="/admin/user-roles" className="py-2 px-4 hover:bg-gray-700 rounded">
          User Roles
        </Link>
      </nav>
    </div>
  );
}

export default AdminSidebar;
