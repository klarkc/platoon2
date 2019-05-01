import update from './update.js'
import render from './render.js'
import createLoader from './loader.js'
import soldier from './soldier/index.js'

export default async function buildGame({engine}) {
    const loader = createLoader(engine)
    const assets = await loader.loadAll([soldier])
    
    // All game state is below
    let entities = [
        soldier.create(),
    ]

    let inputs = engine.createInputs()
    engine.onInputDown(input => inputs[input] = true)
    engine.onInputUp(input => inputs[input] = false)

    function resume() {
        // process one frame, creates a new world
        entities = update(entities, inputs)

        // draw everything on the screen
        render({ entities, assets, engine })

        // wait until a frame's worth of time has elapsed
        engine.requestFrame(resume)
    }

    return { resume }
}
