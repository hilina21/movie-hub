import { useState } from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/20">
              {/* 🎬 */}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">Movie<span className="text-purple-500">Hub</span></h1>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:border-purple-500 hover:bg-zinc-800 transition-all"
            >
              <User className="w-5 h-5 text-zinc-300" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-48 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl py-2 z-50 transform origin-top-right transition-all">
                <Link to="/login" className="block w-full text-left px-5 py-2.5 text-sm text-purple-400 hover:bg-zinc-800 transition-colors">login</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}