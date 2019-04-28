import {flattenDeep} from './utils.js'

export default function createLoader(engine) {
    return {
        loadImage: engine.loadImage,
        async loadAll(entities) {
            // Ugly, wait for all patched sources from all entities
            const entries = flattenDeep(await Promise.all(entities.map(({ id, load }) => {
                return Promise.all(load()).then(
                    scs => scs.map(source => ({ id, source }))
                );
            })))
            return {
                for(id) {
                    return entries.find(e => e.id === id)
                }
            }
        }
    }
}