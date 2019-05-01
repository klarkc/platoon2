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
        position: {x: 0, y: 0, vx: 0, vy: 0},
        state: {}
    }
}

export function update(soldier, inputManager) {
    const {vx, vy} = soldier.position
    const events = []
    if (inputManager.isPressed('left')) {
        events.push(events.newVelocityX(-1))
    }
    if (inputManager.isPressed('right')) {
        events.push(events.newVelocityX(1))
    }
    if (vx != 0 || vy != 0) {
        events.push(events.newPosition(soldier.position))
    }
    return events
}

export function buildRenderer(assets, engine) {
    return ({ id, position: {x, y} }) => engine.draw(
        assets.for(id).source, x, y
    )
}

export default {
    id, is, load, update,
    create, buildRenderer
}
