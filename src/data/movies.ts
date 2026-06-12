export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}


export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year?: number;
  description?: string;
  reviews?: Review[];
}

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Menfesawit Film Samsom Part 2",
    poster: "/images/media__1780990926929.jpg",
    rating: 9.8,
    year: 2024,
    description: "A deeply moving spiritual film exploring the life and trials of Samsom. A continuation of the breathtaking story that touched the hearts of many, filled with ancient history and powerful lessons.",
    reviews: [
      { id: 1, user: "Samrawit", rating: 5, comment: "Amazing movie, the visuals and the spiritual message are out of this world!" },
      { id: 2, user: "John", rating: 4, comment: "Great visuals and deeply inspiring." }
    ]
  },
  { id: 2, title: "Kidus Aba Fre Senbet", poster: "/images/media__1780990933163.jpg", rating: 9.5, year: 2023 },
  { id: 3, title: "Kidus Aba Matewos", poster: "/images/media__1780990940798.jpg", rating: 9.7, year: 2024 },
  { id: 4, title: "Like Nebiyat Muse Part 35", poster: "/images/media__1780990947786.jpg", rating: 9.6, year: 2024 },
  { id: 5, title: "Kdist Herani", poster: "/images/media__1780990956110.jpg", rating: 9.4, year: 2023 },
  { id: 6, title: "Menfesawit Film Samsom Part 2", poster: "/images/media__1780990926929.jpg", rating: 9.8, year: 2024 },
];
