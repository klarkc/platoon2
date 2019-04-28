import soldier from './soldier/index.js'
import events from './events.js';

export default function update(entities) {
    const updators = {
        [soldier.id]: soldier.update,
    }

    function updateEntity(entity) {
        const updator = updators[entity.id]
        const result = updator(entity)
        if (events.isEvent(result)) {
            return result(entity)
        }
        return result
    }
    
    return entities.map(updateEntity)
}