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
  return (
    <section className={`max-w-7xl mx-auto px-6 py-12 ${variant === 'top-rated' ? 'bg-zinc-900/50' : ''}`}>
      <div className="flex items-end justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>
        <a href="#" className="text-red-500 hover:underline text-sm font-medium flex items-center gap-1">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onClick={() => onMovieClick(movie)} 
            variant={variant} 
          />
        ))}
      </div>
    </section>
  );
}