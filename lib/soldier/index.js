const SOLDIER_ID = 'soldier'

export default {
    create() {
        return {
            id: SOLDIER_ID,
            x: 0,
            vx: 10,
            vy: 1
        }
    },
    is({id}) {
        return id === SOLDIER_ID
    },
    buildRenderer(assets, draw) {
        return ({id, x, y}) => draw(assets.for(id), x, y)
    }
}