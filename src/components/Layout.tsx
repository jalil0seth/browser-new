import { AppShell } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { Youtube, BookMarked, FolderHeart } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 240, breakpoint: 'sm' }}
      className="bg-white"
    >
      <AppShell.Header className="flex items-center px-4 bg-white border-b border-gray-200">
        <Youtube className="w-8 h-8 text-red-600 mr-2" />
        <span className="text-xl font-bold text-gray-900">YouTube Tracker</span>
      </AppShell.Header>

      <AppShell.Navbar className="bg-white border-r border-gray-200 p-3">
        <Link
          to="/"
          className={`flex items-center p-2 rounded-md mb-2 transition-colors ${
            location.pathname === '/'
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <FolderHeart className="w-5 h-5 mr-2" />
          Niches
        </Link>
        <Link
          to="/favorites"
          className={`flex items-center p-2 rounded-md transition-colors ${
            location.pathname === '/favorites'
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <BookMarked className="w-5 h-5 mr-2" />
          Favorites
        </Link>
      </AppShell.Navbar>

      <AppShell.Main className="bg-white">{children}</AppShell.Main>
    </AppShell>
  );
}