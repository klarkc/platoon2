import createGame from './lib/game.js'
import createEngine from './lib/engine.js';

(async function() {
    const engine = createEngine()
    const game = await createGame({engine})
    game.resume()
})();