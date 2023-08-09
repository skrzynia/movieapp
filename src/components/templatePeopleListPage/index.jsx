import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import PeopleList from "../peopleList";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function PeopleListPageTemplate({ people, title, action }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ratingFilter, setRatingFilter] = useState("");
  
  const genreId = Number(genreFilter);
  // let displayedMovies = people
  //   .filter((m) => {
  //     return m.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
  //   })
  //   .filter((m) => {
  //     return genreId > 0 ? m.genre_ids.includes(genreId) : true;
  //   });

  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    else if (type == "genre") setGenreFilter(value);
    else setRatingFilter(value.split(" ")[1]);
  };
  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <PeopleList
            movies={people}
            action={action}
          />
        </Grid>
      </Grid>
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          ratingFilter={ratingFilter}
        />
    </>  
  );
}
export default PeopleListPageTemplate;