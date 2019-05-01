const events = {
    newVelocityX(vx) {
        return e => ({...e, position: {
            ...e.position,
            vx,
        }})
    },
    newPosition() {
        return (entity) => {
            const {x, y, vx, vy} = entity.position
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