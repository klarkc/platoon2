const events = {
    newPosition(newPos) {
        return (entity) => ({
            ...entity,
            position: newPos,
        })
    }
}

export default {
    ...events,
    isEvent(obj) {
        return (
            // TODO: turn this type check more resilient
            typeof obj === 'function'
        )
    }
}