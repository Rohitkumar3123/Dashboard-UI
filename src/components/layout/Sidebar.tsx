
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  Search,
  Menu
} from 'lucide-react';

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  active = false, 
  onClick 
}: SidebarItemProps) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-md w-full text-sm font-medium transition-colors",
          active 
            ? "bg-sidebar-accent text-sidebar-accent-foreground" 
            : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
        )}
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </button>
    </li>
  );
};

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
};

export function Sidebar({ isOpen, onToggle, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "bg-sidebar h-screen flex flex-col border-r border-sidebar-border transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-16",
        className
      )}
    >
      {/* Sidebar Header */}
      <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            D
          </div>
          {isOpen && <span className="text-lg font-semibold">Albun</span>}
        </div>
        <button 
          onClick={onToggle} 
          className="ml-auto text-sidebar-foreground hover:text-sidebar-primary p-1 rounded-md"
        >
          <Menu size={18} />
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          <ul className="space-y-1">
            <SidebarItem icon={LayoutDashboard} label="Articles" active />
            <SidebarItem icon={Users} label="Users" />
            <SidebarItem icon={FileText} label="Documents" />
            <SidebarItem icon={Search} label="Search" />
            <SidebarItem icon={Settings} label="Settings" />
          </ul>
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="mt-auto p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-purple-600 text-xs font-medium">JS</span>
          </div>
          {isOpen && (
            <div className="text-sm">
              <p className="font-medium">Jane Smith</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
