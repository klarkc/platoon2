import {flattenDeep} from './utils.js'

export default {
    loadImage(path) {
        return new Promise((resolve) => {
            const img = new Image()
            img.src = `assets/${path}`
            img.addEventListener('load', () => resolve(img))
        })
    },
    async loadAll(entities) {
        // Ugly, wait for all patched sources from all entities
        const entries = flattenDeep(await Promise.all(entities.map(({id, load}) => {
            return Promise.all(load()).then(
                scs => scs.map(source => ({id, source}))
            );
        })))
        debugger
        return {
            for(id) {
                return entries.find(e => e.id === id)
            }
        }
    }
}