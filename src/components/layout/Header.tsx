import { Search } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
              🎬
            </div>
            <h1 className="text-3xl font-bold tracking-tighter">Movie<span className="text-red-500">Hub</span></h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-red-400 transition-colors">Home</a>
            <a href="#" className="hover:text-red-400 transition-colors">Movies</a>
            <a href="#" className="hover:text-red-400 transition-colors">My List</a>
          </nav>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-full py-3 px-6 pl-12 text-sm focus:outline-none focus:border-red-500 transition-colors"
            />
            <Search className="w-5 h-5 text-zinc-400 absolute left-5 top-3.5" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2.5 text-sm font-semibold border border-zinc-700 rounded-full hover:bg-white hover:text-black transition-all">
            Login
          </button>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-full text-sm font-semibold transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}