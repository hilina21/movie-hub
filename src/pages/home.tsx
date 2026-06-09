import { useState } from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/layout/Hero';
import MovieSection from '../components/movie/MovieSection';
import Footer from '../components/layout/Footer';
import MovieModal from '../components/movie/MovieModal';

interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year?: number;
}

const mockMovies: Movie[] = [
  { id: 1, title: "Menfesawit Film Samsom Part 2", poster: "/images/media__1780990926929.jpg", rating: 9.8, year: 2024 },
  { id: 2, title: "Kidus Aba Fre Senbet", poster: "/images/media__1780990933163.jpg", rating: 9.5, year: 2023 },
  { id: 3, title: "Kidus Aba Matewos", poster: "/images/media__1780990940798.jpg", rating: 9.7, year: 2024 },
  { id: 4, title: "Like Nebiyat Muse Part 35", poster: "/images/media__1780990947786.jpg", rating: 9.6, year: 2024 },
  { id: 5, title: "Kdist Herani", poster: "/images/media__1780990956110.jpg", rating: 9.4, year: 2023 },
  { id: 6, title: "Menfesawit Film Samsom Part 2", poster: "/images/media__1780990926929.jpg", rating: 9.8, year: 2024 },

];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const filteredMovies = mockMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <main>
        <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <MovieSection
          title="Trending Movies"
          icon="🔥"
          movies={filteredMovies}
          onMovieClick={setSelectedMovie}
        />

        <MovieSection
          title="Top Rated"
          icon="⭐"
          movies={mockMovies}
          onMovieClick={setSelectedMovie}
          variant="top-rated"
        />

        <MovieSection
          title="Recommended For You"
          icon="🎯"
          movies={mockMovies}
          onMovieClick={setSelectedMovie}
        />
      </main>

      <Footer />

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </div>
  );
}