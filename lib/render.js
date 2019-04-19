import soldier from './soldier/index.js'

export default function render({entities, assets, draw}) {
    // render soldier
    entities
        .filter(soldier.is)
        .map(soldier.buildRenderer(assets, draw))
}