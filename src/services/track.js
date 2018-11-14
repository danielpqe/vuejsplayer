import platziMusicService from './platzi-music.js'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  platziMusicService.get('/search', {
    params: { q: q, type: type }
  })
    .then ( res => res.data)

}

export default trackService
