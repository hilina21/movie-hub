import { Search } from 'lucide-react';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function Hero({ searchTerm, setSearchTerm }: HeroProps) {
  return (
    <div
      className="relative h-[500px] md:h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url('/images/hero_bg.png')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40" />

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 max-w-5xl">
        <div className="text-purple-500 text-sm md:text-base font-bold mb-3 tracking-wider uppercase">Welcome to MovieHub</div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          Inspiring <br className="hidden md:block" /> Orthodox Spiritual Films.
        </h2>
        <p className="text-zinc-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
          Explore a rich collection of spiritual movies, ancient histories, and the deeply moving lives of the saints.
        </p>

        {/* Big Search Bar */}
        <div className="relative mt-4 w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search for movies, TV shows..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-900/60 backdrop-blur-xl border border-zinc-700/50 rounded-full py-4 md:py-5 px-6 md:px-8 pl-12 md:pl-16 text-base md:text-lg focus:outline-none focus:border-purple-500 focus:bg-zinc-900/90 focus:shadow-purple-500/30 transition-all shadow-2xl placeholder:text-zinc-400"
          />
          <Search className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 absolute left-4 md:left-6 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}