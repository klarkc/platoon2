import createGame from './lib/game.js'

(async function() {
    const canvas = document.querySelector('canvas')
    const requestFrame = window.requestAnimationFrame
    const game = await createGame({canvas, requestFrame})
    game.resume()
})();