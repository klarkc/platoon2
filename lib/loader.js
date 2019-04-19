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
            e => e.load().map(s => ({id: e.id, source: s}))
        )
        return {
            entries,
            for(id) {
                return entries.find(e => e.id === id)
            }
        }
    }
}