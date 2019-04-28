import events from '../events.js'

export const id = 'soldier'

export function is(soldier) {
    return soldier.id === id
}

export function load(loader) {
    return [
        loader.loadImage('Soldier/Poses/soldier_idle.png'),
    ]
}

export function create() {
    return {
        id,
        position: {x: 0, y: 0, vx: 10, vy: 1},
        state: {}
    }
}

export function update(soldier) {
    const {x, y, vx, vy} = soldier.position
    if (vx != 0 || vy != 0) {
        const newPos = {x: x+vx, y: y+vy, vx, vy}
        return events.newPosition(newPos)
    }
    return soldier
}

export function buildRenderer(assets, engine) {
    return ({ id, x, y }) => engine.draw(
        assets.for(id).source, x, y
    )
}

export default {
    id, is, load,
    create, buildRenderer
}