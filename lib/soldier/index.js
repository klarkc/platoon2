import loader from "../loader.js";

const SOLDIER_ID = 'soldier'

export default {
    id: SOLDIER_ID,
    load() {
        return [
            loader.loadImage('Soldier/Poses/soldier_idle.png'),
        ]
    },
    create() {
        return {
            id: SOLDIER_ID,
            x: 0,
            y: 0,
            vx: 10,
            vy: 1
        }
    },
    is({id}) {
        return id === SOLDIER_ID
    },
    buildRenderer(assets, draw) {
        return ({id, x, y}) => draw(
            assets.for(id).source, x, y
        )
    }
}