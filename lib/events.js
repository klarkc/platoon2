const events = {
    newPosition(oldPos) {
        return (entity) => {
            const {x, y, vx, vy} = oldPos
            const position = { x: x + vx, y: y + vy, vx, vy }
            return { ...entity, position }
        }
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