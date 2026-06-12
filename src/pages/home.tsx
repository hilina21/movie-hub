import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Hero from '../components/layout/Hero';
import MovieSection from '../components/movie/MovieSection';
import Footer from '../components/layout/Footer';
import { mockMovies, type Movie } from '../data/movies';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredMovies = mockMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Header />

      <main>
        <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <MovieSection
          title="Trending Movies"
          icon="🔥"
          movies={filteredMovies}
          onMovieClick={handleMovieClick}
        />

        <MovieSection
          title="Top Rated"
          icon="⭐"
          movies={mockMovies}
          onMovieClick={handleMovieClick}
          variant="top-rated"
        />

        <MovieSection
          title="Recommended For You"
          icon=""
          movies={mockMovies}
          onMovieClick={handleMovieClick}
        />
      </main>

      <Footer />
    </div>
  );
}