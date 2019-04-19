export default {
    is({id}) {
        return id === 'soldier'
    },
    buildRenderer(assets, draw) {
        return ({id, x, y}) => draw(assets.for(id), x, y)
    }
}