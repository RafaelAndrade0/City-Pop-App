import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Player from './Player';
import CardInfo from './CardInfo';
import ArtistInfo from './ArtistInfo';
import '../styles/home.css';

const videos = [
  {link: 'bM823OzZSKk', name: 'Mariya Takeuchi - もう一度 Once Again', image: '0'},
  {link: 'f3sU6DMzG1I', name: 'Tatsuro Yamashita - Love talkin', image:'1'},
  {link: 'I0JVRcJLea8', name: 'Junko Ohashi - Telephone Number', image: '2'},
  {link: 'dVDRmo5sn3Y', name: 'Mariya Takeuchi - 夢の続き  Yume No Tsuzuki (Original)', image: '3'},
  {link:'fRw_R4Iro08', name: ' Taeko Ohnuki - 大貫妙子 Labyrinth (1982)', image: '4'}
];

class Home extends React.Component {

  state = {
    choosenVideo: 0
  };

  handleChangeVideo = () => {
    let randomNum = Math.floor(Math.random() * videos.length);
    console.log(randomNum);
    if (randomNum === this.state.choosenVideo) {
      console.log('Igual');
    } else {
      this.setState(() => ({ choosenVideo: randomNum }));
    }
  };

  handlePauseVideo = () => {
    console.log('Pause Video');
    this.setState((prevState) => ({ pauseVideo: !prevState.pauseVideo }));
    console.log(this.state.pauseVideo);
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * videos.length);
    console.log(randomNum);
  };

  render() {
    return (
      <div className="homeStyle">
      <Grid container spacing={6}>

      <Grid item xs={3}>
        <Paper elevation={9}>
          <p>Ａｓｔｈｅｔｈｉｃ　ゥゖゅ</p>
          <Player 
            videos={videos[this.state.choosenVideo]}
            handleChangeVideo={this.handleChangeVideo}
            handlePauseVideo={this.handlePauseVideo}
            pauseVideo={this.state.pauseVideo}
          />
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper>
          <CardInfo 
              info={videos[this.state.choosenVideo]}
          />
        </Paper>
      </Grid>

      <Grid item xs={3}>
        Ａｒｔｉｓｔ　でンヒ
        <ArtistInfo />
      </Grid>

    </Grid>
      </div>
    );
  }
}

export default Home;
