import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: 'be5b6dcc37ab498e94497c68ab84f7d4',
  clientSecret: '94699fc7f78d4fe6acd6d9310f5facf4'
});

spotifyApi.setAccessToken('BQAs3H-lHGYxRr3SLf5P262mccmGVekxTc_D3lxrF_3nkTz9SCq-ByONSkCrPcE8U_n3cr14tnq_tQznQyrQ6OQC567dfkIcnatiGiaZ8fLUfYXLnaDupvL5LHyH-B278jE5JHgC1Kw8cY1RLIO4wev30rrckjjcE8kIs-bLQJk9bmDE2dD2Kw5jmMoNLs5mZbC5YSnXzXYzAhnGyzj6L7UOMbcZgJCHgk8vikohBhkC412PP6iJq1Z4optPLUfJnKnfmpMFtzsK')

export default spotifyApi;