import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";

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

function MovieListPageTemplate({ movies, title, action }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ratingFilter, setRatingFilter] = useState("");
  
  const genreId = Number(genreFilter);
  const asc = ratingFilter === "asc" ? true : false;

  const sorted = () => {
    let arr = [...movies];
    for(let i = 0; i < movies.length - 1; i++){
        for(let j = i + 1; j < movies.length; j++){
          if (arr[i].vote_average > arr[j].vote_average) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          } 
        }
    }
    return arr;
  }

  let temp = [...movies]
  if(ratingFilter === ""){
    movies = temp;
  }else if (asc){
    movies = sorted();
  }else {
    movies = sorted().reverse();
  }


  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
        return m;
    });


  const handleChange = (type, value) => {
    if (type === "title") {setTitleFilter(value);}
    else if (type === "genre") {setGenreFilter(value);}
    else {setRatingFilter(value);};
  };

  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <MovieList
            movies={displayedMovies}
            action={action}
          />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          ratingFilter={ratingFilter}
        />
      </Drawer>
    </>  
  );
}
export default MovieListPageTemplate;