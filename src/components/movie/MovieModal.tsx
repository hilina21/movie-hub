interface MovieModalProps {
  movie: any;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4" onClick={onClose}>
      <div className="bg-zinc-900 rounded-3xl max-w-lg w-full overflow-hidden" onClick={e => e.stopPropagation()}>
        <img src={movie.poster} alt={movie.title} className="w-full h-96 object-cover" />
        <div className="p-8">
          <h3 className="text-3xl font-bold mb-2">{movie.title}</h3>
          <div className="text-purple-500 mb-6">★ {movie.rating} • {movie.year} • 2h 34m</div>
          <p className="text-zinc-400 leading-relaxed">
            A breathtaking cinematic experience that pushes the boundaries of storytelling and visual effects.
          </p>
          <div className="flex gap-4 mt-8">
            {/* <button className="flex-1 bg-purple-600 py-4 rounded-2xl font-semibold text-lg">▶ Watch Now</button> */}
            <button className="flex-1 border border-zinc-700 py-4 rounded-2xl font-semibold text-lg">+ Add to List</button>
          </div>
        </div>
      </div>
    </div>
  );
}