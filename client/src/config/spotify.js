import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: 'be5b6dcc37ab498e94497c68ab84f7d4',
  clientSecret: '94699fc7f78d4fe6acd6d9310f5facf4'
});

spotifyApi.setAccessToken('BQBNrp-ivblAxPA1HjNeVx0LRkQqOLxxnik7G7ULzzSn50RDJVtFmIhBRu4qNOAZ2xm1Xw9slRIGAs7XmGOQCA7HAvrw5o2qUaKM0ufaAw5w1alpahCftO68L6JMyvG5Etu31xDyatY_BhZtI7S7IxW1G2ItFJDTNL2NW7_N0aCXJAnb3cpla8JXv6XVgONqxMcCCWGfhuT1yoRz94VkCFFeCD2_2hUeJ4LtHguP044RSiJ6wBYujA2ZetuPcT6syUpLhzoyW0a4')

export default spotifyApi;