export const id = 'soldier'

export function is({ id }) {
    return id === SOLDIER_ID
}

export function load(loader) {
    return [
        loader.loadImage('Soldier/Poses/soldier_idle.png'),
    ]
}

export function create() {
    return {
        id,
        x: 0,
        y: 0,
        vx: 10,
        vy: 1
    }
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