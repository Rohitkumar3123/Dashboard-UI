
import React from 'react';
import { Search } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 border-b border-gray-200 flex items-center px-6">
      <h1 className="text-xl font-semibold">Articles</h1>
      
      <div className="flex items-center ml-auto">
        <div className="relative mr-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>
        
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          New Article
        </button>
      </div>
    </header>
  );
}
