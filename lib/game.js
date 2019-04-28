import update from './update.js'
import render from './render.js'
import createLoader from './loader.js'
import soldier from './soldier/index.js'

export default async function buildGame({engine}) {
    const loader = createLoader(engine)
    const assets = await loader.loadAll([soldier])
    
    let entities = [
        soldier.create(),
    ]

    function resume() {
        
        // get user input
        // const inputs = getUserInput(engine)

        // process one frame
        entities = update(entities)

        // draw everything on the screen
        render({ entities, assets, engine })

        // wait until a frame's worth of time has elapsed
        engine.requestFrame(resume)
    }

    return { resume }
}