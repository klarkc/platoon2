import soldier from './soldier'

export default function render({entities, assets, draw}) {
    entities
        .filter(soldier.is)
        .map(soldier.buildRenderer(assets, draw))
}