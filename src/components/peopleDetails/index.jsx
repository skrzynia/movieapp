import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import SeriesReviews from "../seriesReviews";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const SeriesDetails = ( {movie}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.biography}
      </Typography>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.popularity.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.homepage === null ? "No data" : movie.homepage}`}
        />
        <Chip label={`Birthday: ${movie.birthday}`} />
        <Chip label={`Place of Birth: ${movie.place_of_birth}`} />
      </Paper>
    </>
  );
};
export default  SeriesDetails;