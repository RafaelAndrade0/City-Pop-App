import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './components/Player';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Grid container spacing={40}>

          <Grid item xs={3}></Grid>

          <Grid item xs={3}>
            <Paper>
              Coluna numero 1
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper>
              COLUNA NUMERO 2
              <Player />
            </Paper>
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default App;
