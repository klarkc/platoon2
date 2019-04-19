export default {
    loadImage(path) {
        return new Promise((resolve) => {
            const img = new Image()
            img.src = `assets/${path}`
            img.addEventListener('load', () => resolve(img))
        })
    },
    loadAll(entities) {
        const entries = entities.flatMap(
            e => ({id: e.id, source: e.load()})
        )
        return {
            entries,
            for(id) {
                return entries.find(e => e.id === id)
            }
        }
    }
}