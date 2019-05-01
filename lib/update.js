import soldier from './soldier/index.js'

function buildEntityUpdator(updators, inputHelper) {
    return (entity) => {
        const updator = updators[entity.id]
        const eventQueue = updator(entity, inputHelper)

        // return if no transformations
        if (eventQueue.length < 1) return entity;

        // execute events serialy then return
        return eventQueue.reduce(
            (entity, execute) => execute(entity),
            entity
        )
    }
}

export default function update(entities, inputHelper) {
    const updators = {
        [soldier.id]: soldier.update,
    }
    // TODO: We should run update in two rounds:
    //   first round only tells what should be done
    //   second round do all calculations (and mutations) at once, in batch
    return entities.map(buildEntityUpdator(updators, inputHelper))
}
