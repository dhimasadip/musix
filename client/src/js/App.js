import React, { Component } from 'react';
import FindSong from '../components/findSong'
import NewRelease from '../components/NewRelease'
import Recommendations from '../components/Recommendations'
import spotifyApi from '../config/spotify'

class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      tracks: [],
      newReleases: [],
      recommended: []
    }
  }

  getKeyword = (event) => {
    this.setState({
      artist: event.target.value
    })
  }

  search = () => {
    spotifyApi.searchTracks(this.state.artist)
    .then(({ body }) => {
      this.setState({
        tracks: body.tracks.items
      })
    })
    .catch(console.log)
  }

  componentDidMount = () => {
    fetch('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json',
        Authorization: 'Bearer BQDeIAFhjl98QAsvLkM5YCXS3PUaf4dzv5EvA3v3aqAkrm7qqlq30HNBTdYStkuO61BP0h6R6EqGCt-iXfGZu6Sehta_INrP_HsOBG2cFtrhDNwY3UyposLu4QBoALnjoozSGVXeWlWdf9wjXokWBZNOFFkP2eF1x-UXCGbUFOHX8_sflqZ72YgewxDFfkImLXj73hhAXO7uixswLm1q_U2HX2PrRV0x00hN4wR1HhVF9536DTeL9Aw5soRqRcqErVMvCjVS_mPi'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(({ albums }) => {
      this.setState({
        newReleases: albums.items
      })
      return fetch('https://api.spotify.com/v1/recommendations?limit=10&seed_genres=blues', {
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json',
          Authorization: 'Bearer BQDfIKVrPgJCKWmzcc1K2HSQlSX48z1dHk-2SpG7GNngwEyqAFHJYsjRDXjs-rvfKyVVvPGsozez3RqtjGbSWIt4qT22iuC-FG4qFM9TKBcjgB80I4hanvq82NrRUb6J-smUg9wSwz94JOAKyMlRHyYqlY3NJmYnVz45OBp6FKj2zibSSPAzySxQ92wHxQR0l_M22BU-w08l3VshoB4FoX-YlJbb8jvlCZqF9ud3hReaymaox2lDWc7rNiOIi1L07kZ8OZNIbmG9'
        }
      })
    })
    .then(response => {
      return response.json()
    }).then(({ tracks}) => {
      this.setState({
        recommended: tracks
      })
    })
    .catch(console.log)
  }

  render() {
    return (

      <div className="mt-5 container-fluid">
        <h1 className=" text-center">Musix</h1>
        <div className="row mt-5">
          <div className="col-3 ">
            <Recommendations
              recommended={this.state.recommended}
            ></Recommendations>
          </div>
          <div className="col-6 ">
            <div className="d-flex flex-column align-items-center">
              <h6>search artist</h6>
              <input className="form-control w-50" type="text" onChange={ this.getKeyword } />
              <button className="btn btn-success mt-3" onClick= { this.search }>Search artists</button>
            </div>
            <FindSong
              keyword={this.state.artist}
              tracks={this.state.tracks}
            />
          </div>
          <div className="col-3">
            <NewRelease
              newRelease={this.state.newReleases}
            ></NewRelease>
          </div>
        </div>
      </div>
    )
  };
};

export default App;
