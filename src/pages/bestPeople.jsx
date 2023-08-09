import React from "react";
import PageTemplate from "../components/templatePeopleListPage";
import { getPeople, getPopularSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const BestPeople = () => {
  const { data, error, isLoading, isError } = useQuery("bestpeople", getPeople);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const people = data ? data.results : [];
  return (
    <PageTemplate
      title="Best People"
      people={people}
      action={(movie) => {
        return true
      }}
    />
  );
};
export default BestPeople;