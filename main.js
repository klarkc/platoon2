(async function() {
    const canvas = document.querySelector('canvas')
    const requestFrame = window.requestAnimationFrame
    const game = await createGame({assets, canvas, requestFrame})
    game.resume()
})();