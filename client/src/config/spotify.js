import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: 'be5b6dcc37ab498e94497c68ab84f7d4',
  clientSecret: '94699fc7f78d4fe6acd6d9310f5facf4'
});

spotifyApi.setAccessToken('BQB5xPQniThGrEBPehauo2FdMfBXM1Du-nqUSd7UOyxY5jDWGIUAPwcMsZLquxj6Nh6jxWaO0g5Vi_luaBJcBX2qKLUsl-kBfHqoBYkWrx92cDbuJ5fD6MQAnlQsXnZlAlFAsROLBAmtt53IxSDjo4noNJBt3yepo5-eLjA1fyPnb_OeHeh5O1xRI0BjEGReixcDHt-K1H4cEK7BApUGyHOcKQXafYuu5XCa7Urx1c-CAU08GmXN2eMoKGRmG-y9T9tpGTLcDmCn')

export default spotifyApi;