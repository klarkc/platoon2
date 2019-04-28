import buildGame from './lib/game.js'
import buildEngine from './lib/engine.js';

(async function() {
    const engine = buildEngine()
    const game = await buildGame({engine})
    game.resume()
})();