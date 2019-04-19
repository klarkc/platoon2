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
        const entries = await Promise.all(entities.flatMap(({id, load}) => {
            return Promise.all(load()).then(
                scs => scs.flatMap(source => ({id, source}))
            );
        }))
        return {
            entries,
            for(id) {
                return entries.find(e => e.id === id)
            }
        }
    }
}