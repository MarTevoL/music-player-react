import "./App.css";
import { Grid } from "@mui/material";
import TrackList from "./component/TrackList";
import Controller from "./component/Controller";
import Header from "./component/Header";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Header/>
          <TrackList />
          <Controller />
        </Grid>
      </Grid>
    </MusicPlayerProvider>
  );
}

export default App;
