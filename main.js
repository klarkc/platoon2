import buildGame from './lib/game.js'
import buildEngine from './lib/engine.js';

(async function(window) {
    const engine = buildEngine({ type: 'web', window })
    const game = await buildGame({ engine })
    game.resume()
})(window);