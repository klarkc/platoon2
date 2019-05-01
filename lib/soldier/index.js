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

export function update(soldier, inputHelper) {
    const {vx, vy} = soldier.position
    const queue = []
    if (inputHelper.isPressed('left')) {
        queue.push(events.newVelocityX(-2))
    }
    if (inputHelper.isPressed('right')) {
        queue.push(events.newVelocityX(2))
    }
    if (!inputHelper.isPressed('left', 'right') && vx !== 0) {
        queue.push(events.newVelocityX(0))
    }
    if (vx != 0 || vy != 0) {
        queue.push(events.newPosition())
    }
    return queue
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
