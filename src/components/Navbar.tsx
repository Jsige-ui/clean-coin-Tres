
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { currentUser } from '@/lib/mockData';
import { Menu, Plus, Search } from "lucide-react";
import TokenDisplay from './TokenDisplay';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ReportIssueModal from './ReportIssueModal';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Helper function to determine active route
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-eco-green-400 to-clean-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">CC</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">CleanCoin</span>
          </Link>
        </div>

        <nav className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-background md:bg-transparent border-b md:border-b-0 border-border/40 md:flex ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 px-4 py-2 md:py-0`}>
          <Link 
            to="/" 
            className={`w-full md:w-auto py-2 md:py-0 transition-colors ${isActive('/') ? 'text-primary font-medium' : 'hover:text-primary'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link 
            to="/issues" 
            className={`w-full md:w-auto py-2 md:py-0 transition-colors ${isActive('/issues') ? 'text-primary font-medium' : 'hover:text-primary'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Issues
          </Link>
          <Link 
            to="/leaderboard" 
            className={`w-full md:w-auto py-2 md:py-0 transition-colors ${isActive('/leaderboard') ? 'text-primary font-medium' : 'hover:text-primary'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Leaderboard
          </Link>
          <Link 
            to="/marketplace" 
            className={`w-full md:w-auto py-2 md:py-0 transition-colors ${isActive('/marketplace') ? 'text-primary font-medium' : 'hover:text-primary'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Marketplace
          </Link>
          <Link 
            to="/about" 
            className={`w-full md:w-auto py-2 md:py-0 transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'hover:text-primary'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input 
              type="search" 
              placeholder="Search issues..." 
              className="rounded-full bg-background pl-8 pr-4 py-2 text-sm ring-1 ring-border focus:outline-none focus:ring-primary" 
            />
          </div>
          
          <TokenDisplay tokens={currentUser.tokens} />
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full" size="sm">
                <Plus className="mr-1 h-4 w-4" />
                <span>Report</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <ReportIssueModal />
            </DialogContent>
          </Dialog>
          
          <div className="h-8 w-8 overflow-hidden rounded-full bg-muted">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
