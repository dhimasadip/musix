import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: 'be5b6dcc37ab498e94497c68ab84f7d4',
  clientSecret: '94699fc7f78d4fe6acd6d9310f5facf4'
});

spotifyApi.setAccessToken('BQBGBikFNlHIYxXopIOY_eblwU2UyKKLTRTT398waz-RSgxjsyVBlR4NNxUIUe0dxLfaVcQuvt1mxWszD4ZSVVQ5gl3T0L1oAjemVVJ0NQlMdEYfcsm-2ou2rLULEZUlzQHX5H3H1mXlkmylykfi0AzPEEHq0sR6dn3qo2SDBfOTwlZ25zGBVERXyv2LOn4xz-nd7sGxBjZITix0ECVbufsmDKYjiKGKzZZRwWcgsg2jWdLoKGM-SsWrLS_jvoYJso9yrejancQQ')

export default spotifyApi;