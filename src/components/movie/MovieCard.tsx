import { Play } from 'lucide-react';

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster: string;
    rating: number;
    year?: number;
  };
  onClick: () => void;
  variant?: 'default' | 'top-rated';
}

export default function MovieCard({ movie, onClick, variant = 'default' }: MovieCardProps) {
  return (
    <div onClick={onClick} className="group cursor-pointer flex flex-col gap-3">
      <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[2/3] bg-zinc-900 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1 z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-black/90">
          <span className="text-yellow-500">★</span> {movie.rating}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 shadow-lg shadow-purple-600/40">
            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent ${variant === 'default' ? 'opacity-0 group-hover:opacity-100 transition-opacity duration-300' : ''}`} />
      </div>

      <div className="px-1 transform transition-all duration-300 group-hover:translate-x-1">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-purple-400 transition-colors duration-300">
          {movie.title}
        </h3>
        <p className="text-sm text-zinc-400 mt-1 font-medium">{movie.year}</p>
      </div>
    </div>
  );
}