import SpotifyWebApi from 'spotify-web-api-node';
import token from './token'

const spotifyApi = new SpotifyWebApi({
  clientId: 'be5b6dcc37ab498e94497c68ab84f7d4',
  clientSecret: '94699fc7f78d4fe6acd6d9310f5facf4'
});

spotifyApi.setAccessToken(token.replace('Bearer ', ''))

export default spotifyApi;