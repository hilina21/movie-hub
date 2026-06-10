import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

interface MovieSectionProps {
  title: string;
  icon: string;
  movies: any[];
  onMovieClick: (movie: any) => void;
  variant?: 'default' | 'top-rated';
}

export default function MovieSection({ 
  title, 
  icon, 
  movies, 
  onMovieClick, 
  variant = 'default' 
}: MovieSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={`max-w-7xl mx-auto px-6 py-12 ${variant === 'top-rated' ? 'bg-zinc-900/50' : ''}`}>
      <div className="flex items-end justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>
      </div>

      <div className="flex items-center group/section -mx-4 md:-mx-16">
        {/* Left Navigation Button */}
        <div className="hidden md:flex w-16 items-center justify-center flex-shrink-0 z-10">
          <button 
            onClick={() => scroll('left')}
            className="bg-zinc-900/90 text-white p-3 rounded-full border border-zinc-700 hover:bg-purple-600 hover:border-purple-600 transition-all opacity-0 group-hover/section:opacity-100 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 pt-4 px-4 md:px-0 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="min-w-[160px] md:min-w-[200px] lg:min-w-[240px] flex-shrink-0 snap-start">
              <MovieCard 
                movie={movie} 
                onClick={() => onMovieClick(movie)} 
                variant={variant} 
              />
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <div className="hidden md:flex w-16 items-center justify-center flex-shrink-0 z-10">
          <button 
            onClick={() => scroll('right')}
            className="bg-zinc-900/90 text-white p-3 rounded-full border border-zinc-700 hover:bg-purple-600 hover:border-purple-600 transition-all opacity-0 group-hover/section:opacity-100 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}