import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: 'be5b6dcc37ab498e94497c68ab84f7d4',
  clientSecret: '94699fc7f78d4fe6acd6d9310f5facf4'
});

spotifyApi.setAccessToken('BQDOCdIu7DF_q-Ka5N3liDU2Npaxv-G7j3ZWtZdh0hG7XulyDd15cvtaipKXYOAyG35YpIa2-p4-9M73IME0GctOe-JrRdNcn2bdJ6AB1OgOVMkiq3xBErg55ArvXkc_pYYoLhV_SVE8guz_mYz7Z34fYSs29iK0aM7ixT0hX0ac-hTpsmjSMA7JHKToRv0pnPIofokkJKBNZa_SfDKmKncLFyp-sG7wiILqlAlCAL8WHufx1aTe21hubrlxcuAurbpLh5eV2UcL')

export default spotifyApi;