export default function Hero() {
  return (
    <div 
      className="relative h-[520px] bg-cover bg-center"
      style={{ backgroundImage: `url('https://picsum.photos/id/1015/1920/1080')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
      
      <div className="absolute bottom-20 left-8 max-w-lg">
        <div className="text-red-500 text-sm font-semibold mb-3">TRENDING #1 🔥</div>
        <h2 className="text-6xl font-bold mb-4 leading-tight">Dune: Part Two</h2>
        <p className="text-zinc-300 text-lg mb-8">
          Paul Atreides unites with Chani and the Fremen while seeking revenge against his enemies.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
            ▶ Watch Trailer
          </button>
          <button className="border border-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition">
            + My List
          </button>
        </div>
      </div>
    </div>
  );
}