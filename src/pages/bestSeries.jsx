import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateSeriesListPage";
import { getPopularSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const BestSeries = () => {
  const { data, error, isLoading, isError } = useQuery("bestseries", getPopularSeries);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data ? data.results : [];
  
  return (
    <PageTemplate
      title="Best Series"
      movie={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default BestSeries;