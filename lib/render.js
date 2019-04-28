import soldier from './soldier/index.js'

export default function render({entities, assets, engine}) {
    // clear screen
    engine.clear(640, 480)

    // render soldier
    entities
        .filter(soldier.is)
        .map(soldier.buildRenderer(assets, engine))
}