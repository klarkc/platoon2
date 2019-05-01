import update from './update.js'
import render from './render.js'
import createLoader from './loader.js'
import soldier from './soldier/index.js'

function createWorld() {
    const state = {
        entities: [],
        input: {},
    };

    return {
        get state() { return state },
        setEntities(entities) {
            state.entities = entities
        },
        setInput(input) {
            state.input = input
            // console.log(state.input)
        }
    }
}

export default async function buildGame({engine}) {
    const loader = createLoader(engine)
    const assets = await loader.loadAll([soldier])
    
    // All game state is below
    const world = createWorld()
    world.setEntities([
        soldier.create(),
    ])

    const inputHelper = engine.createInputHelper({
        getState: () => world.state.input,
        setState: (input) => world.setInput(input)
    })

    function resume() {
        // process one frame, update world
        const entities = update(world.state.entities, inputHelper)
        world.setEntities(entities)

        // draw everything on the screen
        render({ entities, assets, engine })

        // wait until a frame's worth of time has elapsed
        engine.requestFrame(resume)
    }

    return { resume }
}
