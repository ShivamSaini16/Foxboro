import React, { useEffect } from "react";
import AdminSidebar from "../Components/AdminSidebar";
import Header from "../AdminDasboard/AdminHeader";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Main Page Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
