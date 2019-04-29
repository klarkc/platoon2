import events from './events.js';
import soldier from './soldier/index.js'

function buildEntityUpdator(updators) {
    return (entity) => {
        const updator = updators[entity.id]
        const result = updator(entity)
        if (events.isEvent(result)) {
            return result(entity)
        }
        return result
    }
}

export default function update(entities) {
    const updators = {
        [soldier.id]: soldier.update,
    }
    // TODO: We should run update in two rounds:
    //   first round only tells what should be done
    //   second round do all calculations (and mutations) at once, in batch
    return entities.map(buildEntityUpdator(updators))
}
