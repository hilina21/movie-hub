import { useParams, useNavigate } from 'react-router-dom';
import { mockMovies } from '../data/movies';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Star, Plus, Heart, ArrowLeft, Play } from 'lucide-react';

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = mockMovies.find(m => m.id === Number(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Movie Not Found</h2>
        <button onClick={() => navigate('/')} className="text-purple-500 hover:text-purple-400 flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </button>
      </div>
    );
  }

  const description = movie.description || "An amazing cinematic experience that will leave you on the edge of your seat. Explore the incredible journey filled with emotions, action, and suspense.";
  const reviews = movie.reviews || [
    { id: 1, user: "Anonymous", rating: 5, comment: "Absolutely fantastic!" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Header />

      <main className="pb-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[70vh] w-full">
          <div className="absolute inset-0">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />
          </div>

          <div className="absolute sm:bottom-0 bottom-10 w-full p-6 md:p-12 lg:px-24 mt-14">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
              <img
                src={movie.poster}
                alt={`${movie.title} Poster`}
                className="w-48 md:w-64 rounded-2xl shadow-2xl border border-zinc-800/50 hidden md:block transform hover:scale-105 transition-transform duration-500"
              />

              <div className="flex-1 max-w-4xl pb-24">
                <h1 className="text-5xl gap-2 md:text-7xl font-bold tracking-tight leading-tight">
                  {movie.title}
                </h1>

                <div className="flex items-center gap-6 text-lg mb-4">
                  <div className="flex items-center gap-2 text-yellow-500 font-bold bg-yellow-500/10 px-3 py-1 rounded-lg">
                    <Star className="w-6 h-6 fill-current" />
                    <span>{movie.rating}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)]">
                    <Play className="w-5 h-5 fill-current" />
                    Watch Trailer
                  </button>
                  <button className="flex items-center gap-2 bg-zinc-800/80 hover:bg-zinc-700 backdrop-blur-md text-white px-6 py-4 rounded-xl font-semibold transition-all border border-zinc-700">
                    <Plus className="w-5 h-5" />
                    Add to Watchlist
                  </button>
                  <button className="flex items-center justify-center bg-zinc-800/80 hover:bg-zinc-700 hover:text-red-400 backdrop-blur-md text-white w-14 h-14 rounded-xl transition-all border border-zinc-700">
                    <Heart className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-purple-600 rounded-full"></span>
                Synopsis
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed font-light">
                {description}
              </p>
            </section>
          </div>

          {/* Sidebar / Reviews */}
          <div className="space-y-8">
            <section className="bg-zinc-900/30 rounded-3xl p-8 border border-zinc-800/50 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Reviews</h2>
                <button className="text-purple-500 text-sm font-semibold hover:text-purple-400 flex items-center gap-1">
                  <Star className="w-4 h-4" /> Rate Movie
                </button>
              </div>

              <div className="space-y-6">
                {reviews.map(review => (
                  <div key={review.id} className="border-b border-zinc-800/50 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-lg">{review.user}</h4>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-zinc-700'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
