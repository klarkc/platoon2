import soldier from './soldier/index.js'

function buildEntityUpdator(updators, inputManager) {
    return (entity) => {
        const updator = updators[entity.id]
        const eventQueue = updator(entity, inputManager)

        // return if no transformations
        if (eventQueue.length < 1) return entity;

        // execute events serialy then return
        return eventQueue.reduce(
            (entity, execute) => execute(entity),
            entity
        )
    }
}

export default function update(entities, inputManager) {
    const updators = {
        [soldier.id]: soldier.update,
    }
    // TODO: We should run update in two rounds:
    //   first round only tells what should be done
    //   second round do all calculations (and mutations) at once, in batch
    return entities.map(buildEntityUpdator(updators, inputManager))
}
