import render from './render.js'
import createLoader from './loader.js'
import soldier from './soldier/index.js'

export default async function createGame({engine}) {
    const loader = createLoader(engine)
    const assets = await loader.loadAll([soldier])

    function resume() {
        const entities = [
            soldier.create(),
        ]
        
        // get user input
        // const inputs = getUserInput(engine)

        // process one frame
        // entities = updateGame(entities, inputs)

        // draw everything on the screen
        render({ entitites, assets, engine })

        // wait until a frame's worth of time has elapsed
        engine.requestFrame(resume)
    }

    return { resume }
}