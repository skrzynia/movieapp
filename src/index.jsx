import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import SeriesPage from "./pages/seriesDetailsPage";
import PeoplePage from "./pages/peopleDetailsPage"
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import BestMovies from "./pages/bestMovies";
import BestSeries from "./pages/bestSeries";
import BestPeople from "./pages/bestPeople";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />      {/* New Header  */}
         <MoviesContextProvider>
            <Routes>
              <Route path="/bestpeople/:id" element={<PeoplePage />} />
              <Route path="/bestpeople" element={<BestPeople />} />
              <Route path="/bestseries/:id" element={<SeriesPage />} />
              <Route path="/bestseries" element={<BestSeries />} />
              <Route path="/bestmovies" element={<BestMovies/>} />
              <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
              <Route path="/reviews/:id" element={<MovieReviewPage/>} />
              <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);