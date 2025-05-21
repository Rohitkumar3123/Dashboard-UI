
import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { DataTable } from '@/components/dashboard/DataTable';
import { articlesData } from '@/lib/data';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Articles</h2>
            <p className="text-sm text-gray-500">
              Manage your articles, check their status, and update content.
            </p>
          </div>
          
          <DataTable data={articlesData} />
          
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <div>
              Showing 8 items | Page 1 of 1
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded border border-gray-200 bg-white">Previous</button>
              <button className="px-3 py-1 rounded border border-gray-200 bg-white">Next</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
