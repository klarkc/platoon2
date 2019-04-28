const events = {
    newPosition(newPos) {
        return entity => ({
            ...entity,
            [position]: newPos,
        })
    }
}

export default {
    isEvent(obj) {
        return (
            typeof obj === 'function' &&
            Object.keys(events).includes(obj.name)
        )
    },
    ...events,
}